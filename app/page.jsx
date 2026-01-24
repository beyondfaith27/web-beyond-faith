import ContactFormSheet from "@/components/ContactFormSheet";
import { ExpandableCard } from "@/components/ExpandableCard";
import Honeycomb from "@/components/Honeycomb";
import InViewAnimateSection from "@/components/InViewAnimateSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import CONTENTS from "@/contents";
import HOME_CONTENT from "@/contents/home";
import CONSTANTS from "@/lib/constants";
import FAQS from "@/lib/faqs";
import PROCESS_STEPS from "@/lib/process-step";
import SERVICES from "@/lib/services";
import { cj } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HoverHighlightProvider } from "./home/HoverHighlightProvider";
import ConcernsHoverText from "@/components/ConcernsHoverText";

// const solutions = [
//   {
//     image: "/images/maze.svg",
//     heading: "Struggling with anxiety, stress, or depression?",
//   },
//   {
//     image: "/images/chat.svg",
//     heading: "Struggling with anxiety, stress, or depression?",
//   },
//   {
//     image: "/images/puzzle.svg",
//     heading: "Struggling with anxiety, stress, or depression?",
//   },
// ];

const features = [
  {
    image: "/images/hands.svg",
    heading: "Qualified Team",
    description: "Therapists who prioritize your mental health.",
  },
  {
    image: "/images/checklist.svg",
    heading: "Tailored Therapy",
    description: "We tailor sessions to your unique needs.",
  },
  {
    image: "/images/circled-hands.svg",
    heading: "Culturally Inclusive",
    description: "Assisting you in English, Hindi, Marathi, and Malayalam.",
  },
  {
    image: "/images/certificate.svg",
    heading: "Faith-Focused Growth",
    description: "Spiritual guidance with proven therapeutic techniques.",
  },
];

export default function Home() {
  return (
    <>
      <InViewAnimateSection
        id="home"
        sectionAnimFuncName="homeHeroSection"
        className="!h-full flex py-24 justify-center bg-colored-background relative min-h-screen"
      >
        {/* <div className="w-[calc(100%-2*var(--gutter-width))] absolute bottom-0 left-[var(--gutter-width)] h-px bg-border" /> */}
        {/* <div className="absolute inset-0 -z-10">
          <Image
            alt="background-image-1"
            src={"/images/HeroImg.png"}
            fill
            className="h-full object-cover"
          />
        </div> */}
        <div className="flex flex-col items-center my-auto gap-y-6 text-accent max-w-178">
          <h1 className={`${CONSTANTS.style.animInitVal}`}>
            BeyondFaith, Your Journey to Inner Strength
          </h1>
          <p
            className={`font-inter text-xl tablet:text-2xl text-center font-light ${CONSTANTS.style.animInitVal}`}
          >
            Rediscover your potential with therapists who guide you toward a
            more peaceful you - grounded in faith.
          </p>
          <ContactFormSheet>
            <Button
              variant="accent"
              className={`w-fit ${CONSTANTS.style.animInitVal}`}
            >
              Start Your Journey
            </Button>
          </ContactFormSheet>
        </div>
      </InViewAnimateSection>
      <InViewAnimateSection
        sectionAnimFuncName="homeConcernSection"
        className="!h-full w-full flex py-24 justify-center items-center bg-muted relative min-h-screen"
      >
        <HoverHighlightProvider>
          <div className="w-full flex flex-col items-center md:flex-row md:items-center my-auto md:justify-between gap-y-12">
            <div className="max-w-150 flex flex-col pt-0">
              <h3
                id="process-section-heading"
                className="text-3xl md:text-5xl font-bold text-center md:text-left"
              >
                {HOME_CONTENT.CONCERNS.title}
              </h3>
              <p
                id="process-section-description"
                className="text-foreground/60 text-base md:text-lg font-semibold text-balance mt-8 text-center md:text-left"
              >
                {HOME_CONTENT.CONCERNS.generic_desc}
                <span className="hidden md:inline"><ConcernsHoverText concerns={HOME_CONTENT.CONCERNS.concern_list} /></span>
                <span className="hidden md:inline">and many more</span>
              </p>
            </div>
            <div className="hidden md:block w-fit">
              <Honeycomb
                imageObjs={HOME_CONTENT.CONCERNS.concern_list}
              />
            </div>
            <div className="w-full max-w-250 mx-auto grid md:hidden grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-14">
              {HOME_CONTENT.CONCERNS.concern_list.map((each) => {
                return (
                  <div
                    key={each.image}
                    className={
                      "concern flex flex-col gap-y-1 transition ease-in-out" +
                      CONSTANTS.style.animInitVal
                    }
                  >
                    <div className="w-30 md:w-40 h-20 md:h-30 relative object-contain mx-auto">
                      <Image
                        src={each.image}
                        alt={each.text}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-center text-sm md:text-base font-bold uppercase">
                      {each.text}
                    </p>
                  </div>
                );
              })}
              <div
                className={`${CONSTANTS.style.animInitVal} concern flex items-center justify-center text-center min-h-30 text-sm md:text-base font-bold uppercase`}
              >
                ... And Many More
              </div>
            </div>
          </div>
        </HoverHighlightProvider>
      </InViewAnimateSection>
      <InViewAnimateSection
        id="services"
        sectionAnimFuncName="homeServicesSection"
        className="relative w-full min-h-screen pt-40 md:pt-24 pb-10 flex items-center"
      >
        {/* <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
          <Image src={"/images/balance.jpg"} alt="balance-bg-image" fill />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(
                  to right,
                  oklch(from var(--colored-background) l c h / 1) 0%,
                  oklch(from var(--colored-background) l c h / 0.7) 20%,
                  oklch(from var(--colored-background) l c h / 0.7) 80%,
                  oklch(from var(--colored-background) l c h / 1) 100%
                ),
                linear-gradient(
                  to bottom,
                  oklch(from var(--colored-background) l c h / 1) 0%,
                  oklch(from var(--colored-background) l c h / 0.7) 20%,
                  oklch(from var(--colored-background) l c h / 0.7) 80%,
                  oklch(from var(--colored-background) l c h / 1) 100%
                )
              `,
            }}
          ></div>
        </div> */}
        <ParallaxBackground src={"/images/balance.jpg"} />
        <div className="w-full h-full relative top-0 left-0 z-10 text-primary-foreground mb-10">
          <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 my-auto">
            <div className="w-full h-full flex flex-col justify-center md:col-span-2">
              <p
                id="service-section-heading"
                className="text-2xl opacity-60 font-bold mb-8"
              >
                Our Services
              </p>

              <p
                id="service-section-description"
                className="text-sm md:text-xl max-w-200 group text-primary-foreground/80"
              >
                At{" "}
                <span className="font-bold text-primary-foreground">
                  BeyondFaith
                </span>
                , we empower individuals and organizations through a
                comprehensive range of mental health services. From personal
                therapy and assessments to organizational consultancy and
                capacity building, our offerings are thoughtfully designed to
                meet diverse needs - ensuring everyone has access to the{" "}
                <span className="font-bold text-primary-foreground">
                  support
                </span>
                ,{" "}
                <span className="font-bold text-primary-foreground">
                  guidance
                </span>
                , and{" "}
                <span className="font-bold text-primary-foreground">care</span>{" "}
                they deserve.
              </p>
            </div>
            {SERVICES.map(({ explanation, ...props }) => {
              return (
                <ExpandableCard key={props.title} {...props}>
                  {explanation}
                </ExpandableCard>
              );
            })}
          </div>
        </div>
      </InViewAnimateSection>
      <InViewAnimateSection
        id="process-section"
        sectionAnimFuncName="homeProcessSection"
        className="md:pt-20 pb-20 md:pb-10 bg-muted flex items-center"
      >
        <div className="w-full flex flex-col-reverse md:flex-row md:items-center my-auto md:justify-between gap-y-12">
          <div className="flex flex-col gap-y-12">
            {PROCESS_STEPS.map((step, idx) => {
              return (
                <div
                  key={step.heading}
                  className="process-step flex items-center group hover:scale-[1.01] transition ease-in-out"
                >
                  <p className="font-bold text-3xl pr-5 border-r border-foreground/10 text-foreground/20 group-hover:text-primary/50 group-hover:border-primary/20 self-stretch flex items-center">
                    0{idx + 1}
                  </p>
                  <div className="pl-5 max-w-150">
                    <h4 className="font-bold text-xl group-hover:text-primary transition ease-in-out">
                      {step.heading}
                    </h4>
                    <p className="text-foreground/40 text-balance text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="max-w-150 flex flex-col md:items-end pt-32 md:pt-0">
            <h3
              id="process-section-heading"
              className="text-3xl md:text-5xl font-bold"
            >
              Our Process
            </h3>
            <p
              id="process-section-description"
              className="text-foreground/60 text-base md:text-lg font-semibold text-balance md:text-right"
            >
              A simple, supportive journey toward better mental well-being.
            </p>
          </div>
        </div>
      </InViewAnimateSection>
      <InViewAnimateSection
        id="features"
        className="!h-full flex justify-center py-24"
      >
        <div className="my-auto flex flex-col gap-y-15 w-full">
          <div className="flex flex-col gap-y-4 text-center">
            <h2>Why Choose BeyondFaith?</h2>
            <p>
              Life can feel overwhelming at times, but you don’t have to face it
              alone. Let us guide you
              <br />
              to clarity and strength.
            </p>
          </div>
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-4 w-full">
            {features.map((feature, id) => {
              return (
                <div
                  key={feature.heading}
                  className={cj("w-full rounded-lg p-8", {
                    "bg-primary": id === 0,
                    "bg-secondary": id === 1,
                    "bg-tertiary": id === 2,
                    "bg-quaternary": id === 3,
                  })}
                >
                  <Image
                    src={feature.image}
                    alt={feature.heading}
                    width={96}
                    height={96}
                  />
                  <div className="mt-15 text-accent">
                    <h4 className="font-bold">{feature.heading}</h4>
                    <p className="text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </InViewAnimateSection>
      <InViewAnimateSection
        id="founder"
        className="!h-full flex justify-between py-24 bg-muted overflow-clip"
      >
        <div className="w-full my-auto grid grid-cols-1 tablet:grid-cols-[1fr_minmax(360,1fr)] laptop:grid-cols-[1fr_minmax(560,_1fr)] items-center gap-x-10 laptop:gap-x-55">
          <div className="relative">
            <div className="w-full min-[500px]:w-[30%] mx-auto tablet:w-auto tablet:max-h-[calc(100vh-350px)] aspect-[41/56] relative">
              <Image src="/images/founder.png" alt="founder-image" fill />
              <div className="absolute -top-8 -left-8">
                <Image
                  src="/images/Stars.svg"
                  width={48}
                  height={48}
                  alt="stars-decoration"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col h-fit gap-y-6 relative text-center mt-14 tablet:mt-0">
            <div className="w-fit relative mx-auto">
              <div className="absolute -top-8 -right-8 -rotate-120">
                <Image
                  src="/images/Stars.svg"
                  width={48}
                  height={48}
                  alt="stars-decoration"
                />
              </div>
              <h3 className="text-4xl font-dm w-fit">
                A Message from Our Founder
              </h3>
            </div>
            <p className="text-lg">
              Your journey is yours alone. But it’s not a game of luck, it’s a
              testament to the strength that already exists within you.
            </p>
            <p className="text-lg">
              Faith isn’t just about belief; it’s about trust—trusting yourself,
              your story, and the process of growth.
            </p>
            <p className="text-lg">
              At BeyondFaith, we help you embrace this journey. Our team
              supports you, helping you uncover your strength and face
              challenges with confidence.
            </p>
          </div>
        </div>
      </InViewAnimateSection>
      <InViewAnimateSection
        id="faq"
        className="!h-full flex justify-between py-24 overflow-clip"
      >
        <div className="w-full grid grid-cols-1 gap-y-6 tablet:grid-cols-2 my-auto">
          <h3 className="text-4xl font-dm text-center tablet:text-left">
            Frequently Asked Questions
          </h3>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq) => {
                const selected = faq.questionare[0];
                return (
                  <AccordionItem
                    key={selected.question}
                    value={selected.question}
                  >
                    <AccordionTrigger>{selected.question}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <div>{selected.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
            <Link href={"/faq"}>
              <Button variant="link" className="!px-0 py-5">
                View More FAQ <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      </InViewAnimateSection>
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
}
