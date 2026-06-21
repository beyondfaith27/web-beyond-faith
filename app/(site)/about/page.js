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
        className="!h-full flex flex-col gap-y-8 justify-center relative py-28 overflow-hidden"
      >
        {/* Background ambiance */}
        <div className="absolute top-16 right-[10%] w-[420px] h-[420px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-16 left-[6%] w-80 h-80 rounded-full bg-muted blur-2xl pointer-events-none" />

        {/* Section header */}
        <div id="mv-section-title" className="flex flex-col items-center gap-y-4 mb-4">
          <span className="w-fit font-inter text-xs tracking-widest uppercase text-primary/60 border border-primary/20 rounded-full px-3 py-1.5">
            About BeyondFaith
          </span>
          <h2 className="!text-5xl tablet:!text-6xl">Our Mission &amp; Vision</h2>
        </div>

        {/* Cards */}
        {[
          CONTENTS.ABOUT_CONTENT.OUR_MISSION,
          CONTENTS.ABOUT_CONTENT.OUR_VISION,
        ].map((content) => {
          const isRight = content.align === "right";
          // Each card pair gets its own tinted bg so transparent SVGs look intentional
          const bgBack  = isRight ? "bg-indigo-50"  : "bg-amber-50/80";
          const bgFront = isRight ? "bg-violet-50"  : "bg-orange-50/60";

          return (
            <div
              key={content.heading}
              className="about-card grid grid-cols-1 tablet:grid-cols-2 gap-12 tablet:gap-16 items-center py-4"
            >
              {/* Text side */}
              <div
                className={cj(
                  "flex flex-col",
                  isRight && "tablet:order-2"
                )}
              >
                <h3 className="font-dm text-4xl tablet:text-5xl text-foreground mb-5 leading-tight">
                  {content.heading}
                </h3>
                <p className="font-inter text-foreground/60 text-base tablet:text-lg leading-relaxed">
                  {content.description}
                </p>
              </div>

              {/* Photo collage */}
              <div
                className={cj(
                  "relative h-80 tablet:h-96 w-full",
                  isRight && "tablet:order-1"
                )}
              >
                {/* Back image — larger, rotated */}
                <div
                  className="absolute top-4 left-0 w-[65%] h-[68%]"
                  style={{ transform: `rotate(${isRight ? "3deg" : "-3deg"})` }}
                >
                  <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-lg shadow-black/12 ${bgBack}`}>
                    <Image
                      src={content.illustration}
                      alt={content.heading}
                      fill
                      className="object-contain p-3"
                      sizes="(min-width: 1080px) 33vw, 65vw"
                    />
                  </div>
                </div>

                {/* Front image — smaller, opposite rotation, bottom-right */}
                <div
                  className="absolute bottom-0 right-0 w-[58%] h-[60%]"
                  style={{ transform: `rotate(${isRight ? "-2.5deg" : "2.5deg"})` }}
                >
                  <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-xl shadow-black/18 ${bgFront}`}>
                    <Image
                      src={content.illustration2}
                      alt={`${content.heading} secondary`}
                      fill
                      className="object-contain p-3"
                      sizes="(min-width: 1080px) 30vw, 58vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Section divider */}
        <div className="w-full h-px bg-border/40 my-4" />
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
