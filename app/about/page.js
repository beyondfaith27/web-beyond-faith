import AnimatedUnderline from "@/components/AnimatedUnderline";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className="!h-full flex items-center relative py-24 bg-colored-background text-white">
        <div className="flex relative z-10 flex-col gap-y-4 h-fit group">
          <p className="text-2xl opacity-60 font-bold mb-8">About Us</p>
          <h2 className="font-sans font-bold text-left">
            Mental well-being is the{" "}
            <span className="relative">
              foundation of a full life
              <AnimatedUnderline />
            </span>
            .
          </h2>
          <p className="text-xl max-w-200 group">
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
          <p className="text-xl max-w-200 group">
            Our name represents the bridge between where you are and who you can
            become. We believe that when you combine{" "}
            <span className="font-bold relative">
              self-belief
              <AnimatedUnderline />
            </span>{" "}
            with the right support, transformation isn't just possible —{" "}
            <span className="font-bold relative">
              it’s inevitable
              <AnimatedUnderline withDelay />
            </span>
            .
          </p>
        </div>
        <div className="absolute top-0 right-0 h-full w-full md:w-2/6  overflow-hidden">
          <video src="/videos/yoga1.mp4" autoPlay muted loop controls={false} />
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
          ></div>
        </div>
      </section>
    </>
  );
};

export default page;
