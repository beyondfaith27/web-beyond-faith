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
import { Handshake, FlaskConical, ShieldCheck, ChevronRight } from "lucide-react";

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
        className="!h-fit flex items-center justify-center relative py-28 overflow-hidden"
      >
        {/* Background tint + orbs */}
        <div className="absolute inset-0 bg-muted/25 pointer-events-none" />
        <div className="absolute top-12 left-[4%] w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-12 right-[6%] w-72 h-72 rounded-full bg-primary/8 blur-2xl pointer-events-none" />

        <div className="relative z-10 w-full grid grid-cols-1 tablet:grid-cols-2 gap-16 items-center">

          {/* Left — heading + intro */}
          <div className="flex flex-col gap-y-6">
            <span className="w-fit font-inter text-xs tracking-widest uppercase text-primary/60 border border-primary/20 rounded-full px-3 py-1.5">
              Our Methodology
            </span>
            <h2 id="approach-heading" className="!text-left !text-5xl tablet:!text-6xl leading-tight">
              Our<br />Approach
            </h2>
            <div id="approach-body" className="flex flex-col gap-y-4">
              <p className="font-inter text-foreground/60 text-base tablet:text-lg leading-relaxed">
                At BeyondFaith, we combine scientific methods with empathetic
                care to create tailored mental well-being strategies.
              </p>
              <p className="font-inter text-foreground/60 text-base tablet:text-lg leading-relaxed">
                Whether you&apos;re seeking individual therapy, team support, or
                insights for driving mental health awareness — we&apos;re your
                trusted partner in well-being.
              </p>
            </div>
            <div className="mt-2">
              <Link href="/faq">
                <Button variant="outline" shape="curved-box" className="gap-x-2">
                  Browse our FAQ <ChevronRight size={15} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — feature cards */}
          <div className="flex flex-col gap-y-4">
            {[
              {
                Icon: Handshake,
                heading: "Therapeutic Alliances",
                body: "We build deep, trusting connections between therapist and client — the foundation of effective and lasting healing.",
              },
              {
                Icon: FlaskConical,
                heading: "Evidence-Based Personalized Care",
                body: "Every strategy is tailored to you, grounded in proven clinical techniques and adapted to your unique needs.",
              },
              {
                Icon: ShieldCheck,
                heading: "Safe & Inclusive Spaces",
                body: "We create environments where meaningful conversations happen freely, without hesitation or judgment.",
              },
            ].map(({ Icon, heading, body }) => (
              <div
                key={heading}
                className="approach-card flex items-start gap-x-5 rounded-2xl border border-primary/10 bg-background/80 backdrop-blur-sm p-6 hover:border-primary/30 hover:bg-primary/[0.03] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-dm text-xl text-foreground mb-1.5">{heading}</h3>
                  <p className="font-inter text-sm text-foreground/55 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </InViewAnimateSection>

      <CTABanner />
    </>
  );
};

export default About;
