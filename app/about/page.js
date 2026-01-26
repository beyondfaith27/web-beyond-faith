import AnimatedUnderline from "@/components/AnimatedUnderline";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import ContactFormSheet from "@/components/ContactFormSheet";
import CONTENTS from "@/contents";
import { cj } from "@/lib/utils";

export const metadata = {
  title: "About Us",
  description: "BeyondFaith was born to turn emotional resilience into inner strength. Learn about our mission to normalize mental health conversations and make wellness accessible to all.",
  keywords: ["mental health mission", "emotional resilience", "inner strength", "destigmatizing mental health", "mental wellness vision"],
};

const About = () => {
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
            with the right support, transformation isn't just possible -{" "}
            <span className="font-bold relative">
              it’s inevitable
              <AnimatedUnderline withDelay />
            </span>
            .
          </p>
        </div>
        <div className="absolute top-0 right-0 h-full w-full md:w-2/6  overflow-hidden">
          {/* <video src="/videos/yoga1.mp4" autoPlay muted loop controls={false} /> */}
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
      <section className="!h-full flex flex-col gap-y-16 justify-center relative py-24">
        {[
          CONTENTS.ABOUT_CONTENT.OUR_MISSION,
          CONTENTS.ABOUT_CONTENT.OUR_VISION,
        ].map((content) => {
          const isRight = content.align === "right";

          return (
            <div
              key={content.heading}
              className={cj(
                "w-full max-w-7xl mx-auto",
                isRight && "md:pl-60",
                !isRight && "md:pr-60"
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 items-center">
                {/* Text */}
                <div
                  className={cj(
                    "flex flex-col md:text-left justify-center items-center text-balance max-w-104 mx-auto",
                    isRight &&
                      "md:order-2 text-center md:text-left md:items-start",
                    !isRight && "text-center md:text-right md:items-end"
                  )}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {content.heading}
                  </h3>

                  <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                    {content.description}
                  </p>
                </div>

                {/* Illustration */}
                <div
                  className={cj(
                    "flex justify-center",
                    isRight && "md:order-1 md:justify-end",
                    !isRight && "md:justify-start"
                  )}
                >
                  <div className="relative w-full max-w-xs md:max-w-sm h-40 md:h-56">
                    <Image
                      src={content.illustration}
                      alt={content.heading}
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 260px, 70vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="absolute bottom-0 left-[var(--gutter-width)] w-[calc(100%-2*var(--gutter-width))] h-px bg-border"></div>
      </section>
      <section className="!h-fit min-h-fit flex flex-col gap-y-16 justify-center relative py-36">
        <div className="max-w-200 mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold mb-8">Our Approach</h3>
          <p className="text-base md:text-lg">
            At BeyondFaith, we combine scientific methods with empathetic care
            to create tailored mental well-being strategies. Our therapists and
            professionals are dedicated to:
          </p>
          <ul className="ml-10 list-disc my-6 text-base md:text-lg">
            <li>Building strong therapeutic alliances.</li>
            <li>
              Providing personalized care through evidence-based techniques.
            </li>
            <li>
              Creating safe and inclusive spaces for meaningful conversations.
            </li>
          </ul>
          <p className="text-base md:text-lg">
            Whether you're seeking individual therapy, support for your team, or
            insights for driving mental health awareness, BeyondFaith is your
            trusted partner in well-being.
          </p>
        </div>
      </section>
      <section className="w-full min-h-fit py-24 flex gap-y-6 justify-center relative">
        <Image
          src="/images/galaxy.png"
          alt="galaxy-background"
          fill
          className="-z-10 inset-0"
        />
        <div className="flex flex-col items-center text-accent gap-y-6 max-w-200">
          <div className="flex flex-col gap-y-3 text-center">
            <h3 className="text-4xl font-dm">Ready to Begin Your Journey?</h3>
            <p className="text-center text-lg opacity-60">
              Take the first step toward healing and growth with BeyondFaith.
              We’re here to support you every step of the way.
            </p>
          </div>
          <ContactFormSheet>
            <Button variant="accent" className="w-fit">
              Book Your Appointment
            </Button>
          </ContactFormSheet>
        </div>
      </section>
    </>
  );
};

export default About;
