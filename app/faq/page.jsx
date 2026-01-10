import ContactFormSheet from "@/components/ContactFormSheet";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaqProvider, FaqTypeSelection, SectionFaqList } from "./FaqUtils";

const FAQ = () => {
  return (
    <section className="bg-muted pt-20">
      <div className="max-w-240 md:mx-auto min-h-[calc(100vh-164px)] py-16 text-center">
        <h3 className="text-4xl font-bold">Frequently Asked Questions</h3>
        <p className="text-sm text-foreground/60 mt-4">
          These are the most common asked questions about BeyondFaith
        </p>
        <p className="text-sm text-foreground/60 mb-6">
          Can't find what you are looking for?
          <ContactFormSheet>
            <Button variant="link" className="!py-0 underline px-1">
              Chat with our friendly team
            </Button>
          </ContactFormSheet>
        </p>
        <FaqProvider>
          <FaqTypeSelection />
          <SectionFaqList />
        </FaqProvider>
      </div>
    </section>
  );
};

export default FAQ;
