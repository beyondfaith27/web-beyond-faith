"use client";

import { Button } from "@/components/ui/button";
import ContactFormSheet from "@/components/ContactFormSheet";
import { ChevronDown, Sprout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HEADING = "BeyondFaith, Your Journey to Inner Strength";
const words = HEADING.split(" ");
const EASE_WORD = "cubic-bezier(0.33, 1, 0.68, 1)";
const EASE_CTA  = "cubic-bezier(0.34, 1.56, 0.64, 1)";

const FEATURES = [
  "Qualified Team",
  "Tailored Therapy",
  "Culturally Inclusive",
  "Faith-Focused Growth",
];

export default function HeroContent() {
  return (
    <>
      {/* Left panel — text content */}
      <div className="relative z-10 flex flex-col justify-center gap-y-7 text-accent px-[var(--gutter-width)] py-32 min-h-screen tablet:w-[55%]">
        {/* Eyebrow badge */}
        <div
          className="flex items-center gap-x-2 w-fit border border-accent/25 rounded-full px-3 py-1.5 text-xs font-inter tracking-widest uppercase text-accent/60"
          style={{ animation: "heroFadeIn 0.5s ease-out 0.1s both" }}
        >
          <Sprout size={11} />
          Faith-Centered Wellness
        </div>

        {/* H1 — left-aligned word stagger */}
        <h1 className="!text-left">
          {words.map((word, i, arr) => (
            <span
              key={i}
              className="inline-block"
              style={{
                animation: `heroWordIn 0.6s ${EASE_WORD} ${0.2 + i * 0.09}s both`,
                marginRight: i < arr.length - 1 ? "0.28em" : 0,
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          className="font-inter text-lg tablet:text-xl font-light text-accent/75 max-w-md"
          style={{ animation: "heroSubtitleIn 0.6s ease-out 0.75s both" }}
        >
          Rediscover your potential with therapists who guide you toward a more
          peaceful you — grounded in faith.
        </p>

        {/* CTA row */}
        <div
          className="flex items-center gap-x-5"
          style={{ animation: `heroCtaIn 0.45s ${EASE_CTA} 1s both` }}
        >
          <ContactFormSheet>
            <Button variant="accent" shape="curved-box">
              Start Your Journey
            </Button>
          </ContactFormSheet>
          <Link
            href="/about"
            className="font-inter text-sm text-accent/65 hover:text-accent transition-colors"
          >
            Learn About Us →
          </Link>
        </div>

        {/* Trust indicators */}
        <div
          className="flex flex-wrap gap-x-6 gap-y-2 pt-1"
          style={{ animation: "heroFadeIn 0.6s ease-out 1.25s both" }}
        >
          {FEATURES.map((f) => (
            <span
              key={f}
              className="font-inter text-xs text-accent/50 flex items-center gap-x-1.5"
            >
              <span className="w-1 h-1 rounded-full bg-accent/35 inline-block shrink-0" />
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Right panel — full-bleed landscape illustration (tablet+) */}
      <div className="hidden tablet:block absolute right-0 top-0 h-full w-[50%] pointer-events-none select-none">
        <Image
          src="/images/HeroImg.png"
          alt="BeyondFaith — path to inner strength"
          fill
          className="object-cover object-center"
          priority
          sizes="50vw"
        />
        {/* Gradient blend: purple bg fades into image */}
        <div
          className="absolute inset-y-0 left-0 w-48 z-10"
          style={{
            background:
              "linear-gradient(to right, var(--colored-background), transparent)",
          }}
        />
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-[var(--gutter-width)] flex items-center gap-x-2 text-accent/35"
        style={{ animation: "heroFadeIn 0.6s ease-out 1.5s both" }}
      >
        <ChevronDown size={15} className="animate-bounce" />
        <p className="text-xs tracking-widest uppercase font-inter">Scroll</p>
      </div>
    </>
  );
}
