"use client";

import AnimatedUnderline from "@/components/AnimatedUnderline";

const EASE_SNAP = "cubic-bezier(0.33, 1, 0.68, 1)";

export default function AboutHeroContent() {
  return (
    <section className="!h-full flex items-center relative py-24 bg-colored-background text-white">
      <div className="flex relative z-10 flex-col gap-y-4 h-fit group">
        <p
          className="text-2xl opacity-60 font-bold mb-8"
          style={{ animation: `heroFadeIn 0.5s ease-out 0.1s both` }}
        >
          About Us
        </p>

        <h1
          className="font-sans font-bold text-left"
          style={{ animation: `aboutH1In 0.7s ${EASE_SNAP} 0.25s both` }}
        >
          Mental well-being is the{" "}
          <span className="relative">
            foundation of a full life
            <AnimatedUnderline />
          </span>
          .
        </h1>

        <p
          className="text-xl max-w-200"
          style={{ animation: `heroSubtitleIn 0.6s ease-out 0.5s both` }}
        >
          BeyondFaith was born from a simple mission: to provide the
          compassionate guidance needed to turn{" "}
          <span className="font-bold relative">
            emotional resilience
            <AnimatedUnderline />
          </span>{" "}
          into
          <span className="font-bold ml-1 relative">
            inner strength
            <AnimatedUnderline withDelay />
          </span>
          .
        </p>

        <p
          className="text-xl max-w-200"
          style={{ animation: `heroSubtitleIn 0.6s ease-out 0.65s both` }}
        >
          Our name represents the bridge between where you are and who you can
          become. We believe that when you combine{" "}
          <span className="font-bold relative">
            self-belief
            <AnimatedUnderline />
          </span>{" "}
          with the right support, transformation isn't just possible -{" "}
          <span className="font-bold relative">
            it's inevitable
            <AnimatedUnderline withDelay />
          </span>
          .
        </p>
      </div>

      <div className="absolute top-0 right-0 h-full w-full md:w-2/6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(
                to right,
                oklch(from var(--colored-background) l c h / 1) 0%,
                oklch(from var(--colored-background) l c h / 0.6) 20%,
                oklch(from var(--colored-background) l c h / 0.6) 80%,
                oklch(from var(--colored-background) l c h / 1) 100%
              ),
              linear-gradient(
                to bottom,
                oklch(from var(--colored-background) l c h / 1) 0%,
                oklch(from var(--colored-background) l c h / 0.6) 20%,
                oklch(from var(--colored-background) l c h / 0.6) 80%,
                oklch(from var(--colored-background) l c h / 1) 100%
              )
            `,
          }}
        />
      </div>
    </section>
  );
}
