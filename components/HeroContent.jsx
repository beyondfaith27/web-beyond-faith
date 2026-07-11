"use client";

import { Button } from "@/components/ui/button";
import ContactFormSheet from "@/components/ContactFormSheet";
import { ChevronDown, Sprout, Sparkles } from "lucide-react";
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

      {/* Right panel — animated illustration (faint background on mobile, full presence tablet+) */}
      <div className="z-0 absolute inset-0 tablet:inset-auto tablet:right-0 tablet:top-0 h-full w-full tablet:w-[50%] opacity-[0.08] tablet:opacity-100 pointer-events-none select-none flex items-center justify-center px-8">
        {/* Ambient glow orb */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        </div>

        {/* Decorative sparkles (tablet+ only) */}
        <Sparkles
          className="hidden tablet:block absolute top-[22%] right-[12%] text-accent/50 w-5 h-5"
          style={{ animation: "twinkle 2.6s ease-in-out infinite" }}
        />
        <Sparkles
          className="hidden tablet:block absolute top-[40%] right-[6%] text-accent/30 w-3.5 h-3.5"
          style={{ animation: "twinkle 3.8s ease-in-out 0.9s infinite" }}
        />
        <Sparkles
          className="hidden tablet:block absolute bottom-[28%] right-[18%] text-accent/40 w-4 h-4"
          style={{ animation: "twinkle 3.1s ease-in-out 1.6s infinite" }}
        />
        <Sparkles
          className="hidden tablet:block absolute top-[30%] left-[8%] text-accent/25 w-3 h-3"
          style={{ animation: "twinkle 4.2s ease-in-out 0.4s infinite" }}
        />

        {/* Slow-rotating decorative ring (tablet+ only) */}
        <div
          className="hidden tablet:block absolute top-[18%] right-[10%] w-20 h-20 rounded-full border border-accent/12"
          style={{ animation: "slowRotate 22s linear infinite" }}
        >
          <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-accent/25 -translate-x-1/2" />
        </div>

        {/* Main illustration — floating */}
        <div
          className="relative w-full h-[60%] tablet:h-[82%]"
          style={{ animation: "svgFloat 5.5s ease-in-out infinite" }}
        >
          <Image
            src="/images/Mental health-cuate.svg"
            alt="Mental health and wellness illustration"
            fill
            className="object-contain object-center"
            priority
            sizes="(max-width: 1080px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Floating card — bottom-right (laptop+) */}
      <div
        className="hidden laptop:block absolute bottom-20 right-[calc(var(--gutter-width)+2rem)] z-20"
        style={{ animation: "heroFadeIn 0.9s ease-out 1.6s both" }}
      >
        <div
          className="relative w-52"
          style={{ animation: "cardSway 6s ease-in-out 2.2s infinite" }}
        >
          {/* Illustration */}
          <div className="relative w-52 h-52 rounded-2xl overflow-hidden shadow-2xl bg-white">
            <Image
              src="/images/Mental health-rafiki.svg"
              alt="Therapy and mental wellness support"
              fill
              className="object-contain p-2"
              sizes="208px"
            />
          </div>

          {/* Text overlay card */}
          <div className="absolute -bottom-5 left-3 bg-white/96 backdrop-blur-sm px-4 py-3 w-40 shadow-xl rounded-sm">
            <p className="text-[9px] tracking-[0.15em] uppercase text-foreground/40 mb-1.5 font-inter">
              A space to →
            </p>
            <p className="font-dm text-sm leading-snug text-foreground/85">
              slow down, understand, and begin <em>again</em>.
            </p>
          </div>
        </div>
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
