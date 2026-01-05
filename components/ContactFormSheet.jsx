"use client";

import React, { useState } from "react";
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

const ContactFormSheet = ({ children }) => {
  const [open, setOpen] = useState(false);
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    resolver: zodResolver(validationSchema.contact),
  });

  function handleOpenChange(opx) {
    if (opx) {
      setOpen(true);
    } else {
      form.reset();
      setOpen(false);
    }
  }

  async function onSubmit() {
    try {
      console.log("this is running .... ");
      const values = form.getValues();
      // const response = await insertContactToSheet(values);
      // await helpers.sleep(2000)
      const response = { success: false };
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
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full border-none rounded-none tablet:rounded-l-3xl">
        <SheetTitle className="sr-only">Contact Form</SheetTitle>
        <div className="py-24 px-[var(--gutter-width)] flex flex-col gap-y-8">
          <h3 className="text-2xl font-bold">Send Us a Message</h3>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-y-8"
            >
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
                  name="subject"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Subject" {...field} />
                      </FormControl>
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
              <Button type="submit" className="w-fit px-10">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ContactFormSheet;
