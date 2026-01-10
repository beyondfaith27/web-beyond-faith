"use client";

import FAQS from "@/lib/faqs";
import React, { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cj } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqContext = createContext(null);

export function FaqProvider({ children }) {
  const [selectedSection, setSelectedSection] = useState(0);

  return (
    <FaqContext.Provider value={{ selectedSection, setSelectedSection }}>
      {children}
    </FaqContext.Provider>
  );
}

export const FaqTypeSelection = () => {
  const { selectedSection, setSelectedSection } = useContext(FaqContext);

  return (
    <div className="flex gap-4 justify-center w-fit mx-auto">
      {FAQS.map((faq, idx) => {
        return (
          <div key={faq.sectionName} className="px-3 py-1 relative z-10">
            <button
              type="button"
              onClick={() => setSelectedSection(idx)}
              className={cj(
                "relative z-10 transition-colors duration-200 font-semibold",
                idx === selectedSection ? "text-white" : "text-black"
              )}
            >
              {faq.sectionName}
            </button>

            {idx === selectedSection && (
              <motion.div
                layoutId="selectedSection"
                className="absolute z-0 w-full h-full rounded-lg top-0 left-0 bg-colored-background"
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export const SectionFaqList = () => {
  const { selectedSection } = useContext(FaqContext);
  const { questionare } = FAQS[selectedSection];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        key={selectedSection}
        className="w-full h-fit flex justify-start text-left mt-16 mb-20"
      >
        <Accordion type="single" collapsible className="w-full">
          {questionare.map((nare) => {
            return (
              <AccordionItem
                key={nare.question}
                value={nare.question}
                className="px-4"
              >
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 text-muted-foreground">
                      {nare.icon}
                    </span>

                    <span className="text-left">{nare.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-lg pl-7">
                  <div className="flex flex-col gap-y-4 max-w-180">
                    {nare.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </motion.div>
    </AnimatePresence>
  );
};
