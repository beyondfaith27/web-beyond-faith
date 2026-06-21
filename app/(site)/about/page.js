import AboutHeroContent from "@/components/AboutHeroContent";
import CTABanner from "@/components/CTABanner";
import InViewAnimateSection from "@/components/InViewAnimateSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import ContactFormSheet from "@/components/ContactFormSheet";
import CONTENTS from "@/contents";
import { cj } from "@/lib/utils";

export const metadata = {
  title: "About Us",
  description: "Learn how BeyondFaith turns emotional resilience into inner strength. Our mission: normalize mental health and make wellness accessible to all.",
  keywords: ["mental health mission", "emotional resilience", "inner strength", "destigmatizing mental health", "mental wellness vision"],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About BeyondFaith | Our Mission & Vision",
    description: "Learn how BeyondFaith turns emotional resilience into inner strength. Our mission: normalize mental health and make wellness accessible to all.",
    url: '/about',
  },
  twitter: {
    title: "About BeyondFaith | Our Mission & Vision",
    description: "Learn how BeyondFaith turns emotional resilience into inner strength. Our mission: normalize mental health and make wellness accessible to all.",
  },
};

const About = () => {
  return (
    <>
      {/* Hero */}
      <AboutHeroContent />

      {/* Mission + Vision */}
      <InViewAnimateSection
        sectionAnimFuncName="aboutMissionVisionSection"
        className="!h-full flex flex-col gap-y-16 justify-center relative py-24"
      >
        {[
          CONTENTS.ABOUT_CONTENT.OUR_MISSION,
          CONTENTS.ABOUT_CONTENT.OUR_VISION,
        ].map((content) => {
          const isRight = content.align === "right";

          return (
            <div
              key={content.heading}
              className={cj(
                "about-card w-full max-w-7xl mx-auto",
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {content.heading}
                  </h2>

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
      </InViewAnimateSection>

      {/* Our Approach */}
      <InViewAnimateSection
        sectionAnimFuncName="aboutApproachSection"
        className="!h-fit min-h-fit flex flex-col gap-y-16 justify-center relative py-36"
      >
        <div className="max-w-200 mx-auto">
          <h2 id="approach-heading" className="text-2xl md:text-4xl font-bold mb-8">Our Approach</h2>
          <div id="approach-body">
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
            <Link href="/faq" className="inline-block mt-6 text-primary underline underline-offset-4 hover:opacity-80 transition-opacity text-base md:text-lg">
              Have questions? Browse our FAQ →
            </Link>
          </div>
        </div>
      </InViewAnimateSection>

      <CTABanner />
    </>
  );
};

export default About;
