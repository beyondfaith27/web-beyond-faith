"use client";

import { Button } from "@/components/ui/button";
import ContactFormSheet from "@/components/ContactFormSheet";
import { ChevronDown } from "lucide-react";

const HEADING = "BeyondFaith, Your Journey to Inner Strength";
const words = HEADING.split(" ");

const EASE_WORD = "cubic-bezier(0.33, 1, 0.68, 1)";
const EASE_CTA  = "cubic-bezier(0.34, 1.56, 0.64, 1)";

export default function HeroContent() {
  return (
    <>
      <div className="flex flex-col items-center my-auto gap-y-6 text-accent max-w-178">
        <h1>
          {words.map((word, i, arr) => (
            <span
              key={i}
              className="inline-block"
              style={{
                animation: `heroWordIn 0.6s ${EASE_WORD} ${0.15 + i * 0.09}s both`,
                marginRight: i < arr.length - 1 ? "0.28em" : 0,
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p
          className="font-inter text-xl tablet:text-2xl text-center font-light"
          style={{ animation: "heroSubtitleIn 0.6s ease-out 0.65s both" }}
        >
          Rediscover your potential with therapists who guide you toward a more
          peaceful you - grounded in faith.
        </p>

        <div style={{ animation: `heroCtaIn 0.45s ${EASE_CTA} 0.9s both` }}>
          <ContactFormSheet>
            <Button variant="accent" className="w-fit">
              Start Your Journey
            </Button>
          </ContactFormSheet>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-y-1 text-accent/50"
        style={{ animation: "heroFadeIn 0.6s ease-out 1.3s both" }}
      >
        <p className="text-xs tracking-widest uppercase font-inter">Scroll</p>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </>
  );
}
