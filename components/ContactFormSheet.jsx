"use client";

import React, { useState, useEffect, useId } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import validationSchema from "@/lib/validationSchema";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { insertContactToSheet } from "@/app/actions/contact/action";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import SERVICES from "@/lib/services";
import helpers from "@/lib/helpers";
import { Loader2 } from "lucide-react";
import { useContactForm } from "@/lib/ContactFormContext";

const ContactFormSheet = ({ children }) => {
  const instanceId = useId();
  const { activeInstanceId, openInstance, closeInstance, searchParams } = useContactForm();
  const [isFirstInstance, setIsFirstInstance] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
    resolver: zodResolver(validationSchema.contact),
  });

  // Register as first instance if needed
  useEffect(() => {
    if (!window.__firstContactFormInstance) {
      window.__firstContactFormInstance = instanceId;
      setIsFirstInstance(true);
    }

    return () => {
      if (window.__firstContactFormInstance === instanceId) {
        delete window.__firstContactFormInstance;
      }
    };
  }, [instanceId]);

  // Auto-open first instance from URL on mount ONLY
  useEffect(() => {
    if (isFirstInstance) {
      const contactFormParam = searchParams.get("contact-form");
      const shouldBeOpen = contactFormParam === "true" || contactFormParam === "open";

      if (shouldBeOpen && activeInstanceId === null) {
        openInstance(instanceId);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFirstInstance]);

  const isOpen = activeInstanceId === instanceId;

  function handleOpenChange(shouldOpen) {
    if (shouldOpen) {
      openInstance(instanceId);
    } else {
      form.reset();
      closeInstance();
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      console.log("this is running .... ");
      const values = form.getValues();
      const response = await insertContactToSheet(values);
      await helpers.sleep(2000);
      if (!response.success) {
        throw response.error;
      }
      form.reset();
      toast.success(
        "We have recieved your request. Will call you back as soon as possible."
      );
      handleOpenChange(false);
    } catch (e) {
      console.error(e);
      toast.error(
        typeof e === "string" ? e : e?.message || "Something went wrong"
      );
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full border-none rounded-none tablet:rounded-l-3xl">
        <SheetTitle className="sr-only">Contact Form</SheetTitle>
        <div className="py-24 px-[var(--gutter-width)] flex flex-col gap-y-8">
          <h3 className="text-2xl font-bold">Send Us a Message</h3>
          <Form {...form}>
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col md:flex-row gap-y-8 gap-x-4">
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" {...field} type="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-y-8 gap-x-4">
                <FormField
                  name="phone"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Mobile"
                          type="tel"
                          onChange={(e) => {
                            const value = e.target.value;
                            const phoneNumberRegex = /^[0-9+\s()-]+$/;
                            if (phoneNumberRegex.test(value) || value === "") {
                              field.onChange(value);
                            }
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="service"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        onOpenChange={(opx) => !opx && field.onBlur()}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {SERVICES.map((service) => {
                            return (
                              <SelectItem
                                key={service.title}
                                value={service.title}
                              >
                                {service.title}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                name="message"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        rows={"20"}
                        className="h-36"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                className="w-32 h-10"
                disabled={form.formState.isSubmitting}
                onClick={form.handleSubmit(onSubmit)}
              >
                {form.formState.isSubmitting ? <Loader2
                  className="!h-5 !w-5 animate-spin"
                  strokeWidth={4}
                /> : "Submit"}
              </Button>
            </div>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ContactFormSheet;