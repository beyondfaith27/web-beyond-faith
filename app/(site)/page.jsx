import ContactFormSheet from "@/components/ContactFormSheet";
import { ExpandableCard } from "@/components/ExpandableCard";
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
import CONSTANTS from "@/lib/constants";
import FAQS from "@/lib/faqs";
import PROCESS_STEPS from "@/lib/process-step";
import SERVICES from "@/lib/services";
import { cj } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedUnderline from "@/components/AnimatedUnderline";
import HeroContent from "@/components/HeroContent";
import ShootingStars from "@/components/ShootingStars";

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

export const metadata = {
  description: "BeyondFaith provides compassionate support for Depression, PTSD, Anxiety, Stress, Trauma, ADHD, Autism, and Relationships. Start your therapeutic journey today.",
  keywords: [
    "Depression therapy", "PTSD support", "Anxiety counseling", "Stress management",
    "Trauma-informed care", "ADHD coaching", "Autism support for adults",
    "Relationship therapy", "Employee Assistance Program", "Mental health consultancy"
  ],
};

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="!h-full !px-0 relative min-h-screen bg-colored-background overflow-hidden"
      >
        <HeroContent />
      </section>
      <InViewAnimateSection
        sectionAnimFuncName="homeConcernSection"
        className="!h-full w-full flex flex-col py-28 bg-muted relative min-h-screen justify-center gap-y-16 overflow-hidden"
      >
        {/* Heading */}
        <div className="flex flex-col gap-y-5 max-w-3xl">
          <h2 id="process-section-heading" className="!text-left !text-5xl tablet:!text-6xl">
            {CONTENTS.HOME_CONTENT.CONCERNS.title}
          </h2>
          <p
            id="process-section-description"
            className="text-foreground/60 text-xl font-light"
          >
            {CONTENTS.HOME_CONTENT.CONCERNS.generic_desc} and many more.
          </p>
        </div>

        {/* Marquee rows — negative margin bleeds to viewport edges */}
        <div
          id="concern-marquee"
          className="-mx-[var(--gutter-width)] flex flex-col gap-y-5"
        >
          {/* Row 1 — scrolls left */}
          <div
            className="flex gap-x-5 w-max"
            style={{ animation: "marqueeLeft 32s linear infinite" }}
          >
            {[
              ...CONTENTS.HOME_CONTENT.CONCERNS.concern_list,
              ...CONTENTS.HOME_CONTENT.CONCERNS.concern_list,
              ...CONTENTS.HOME_CONTENT.CONCERNS.concern_list,
            ].map((concern, i) => (
              <div
                key={i}
                className="flex items-center gap-x-4 bg-white border border-border rounded-2xl px-6 py-4 shadow-sm shrink-0"
              >
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src={concern.image}
                    alt={concern.text}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <span className="font-inter text-base font-semibold text-foreground/75 whitespace-nowrap">
                  {concern.text}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 — scrolls right, reversed order */}
          <div
            className="flex gap-x-5 w-max"
            style={{ animation: "marqueeRight 26s linear infinite" }}
          >
            {[
              ...[...CONTENTS.HOME_CONTENT.CONCERNS.concern_list].reverse(),
              ...[...CONTENTS.HOME_CONTENT.CONCERNS.concern_list].reverse(),
              ...[...CONTENTS.HOME_CONTENT.CONCERNS.concern_list].reverse(),
            ].map((concern, i) => (
              <div
                key={i}
                className="flex items-center gap-x-4 bg-white border border-border rounded-2xl px-6 py-4 shadow-sm shrink-0"
              >
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src={concern.image}
                    alt={concern.text}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <span className="font-inter text-base font-semibold text-foreground/75 whitespace-nowrap">
                  {concern.text}
                </span>
              </div>
            ))}
          </div>

          {/* Row 3 — scrolls left, original order */}
          <div
            className="flex gap-x-5 w-max"
            style={{ animation: "marqueeLeft 38s linear infinite" }}
          >
            {[
              ...CONTENTS.HOME_CONTENT.CONCERNS.concern_list,
              ...CONTENTS.HOME_CONTENT.CONCERNS.concern_list,
              ...CONTENTS.HOME_CONTENT.CONCERNS.concern_list,
            ].map((concern, i) => (
              <div
                key={i}
                className="flex items-center gap-x-4 bg-white border border-border rounded-2xl px-6 py-4 shadow-sm shrink-0"
              >
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src={concern.image}
                    alt={concern.text}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <span className="font-inter text-base font-semibold text-foreground/75 whitespace-nowrap">
                  {concern.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </InViewAnimateSection>
      <InViewAnimateSection
        id="services"
        sectionAnimFuncName="homeServicesSection"
        className="relative w-full min-h-screen pt-40 md:pt-24 pb-10 flex items-center overflow-hidden"
      >
        <ParallaxBackground src={"/images/balance.jpg"} />

        {/* Four independent shooting stars, staggered so they feel organic */}
        <ShootingStars initialDelay={0} />
        <ShootingStars initialDelay={1400} />
        <ShootingStars initialDelay={2900} />
        <ShootingStars initialDelay={4500} />

        <div className="w-full h-full relative top-0 left-0 z-10 text-primary-foreground mb-10">
          <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 my-auto">
            <div className="w-full h-full flex flex-col justify-center md:col-span-2">
              <h2
                id="service-section-heading"
                className="font-dm text-4xl tablet:text-5xl mb-6 !text-left text-primary-foreground"
              >
                Our Services
              </h2>

              <p
                id="service-section-description"
                className="text-base tablet:text-xl text-primary-foreground/80"
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
        className="!h-full py-28 bg-muted flex items-center"
      >
        <div className="w-full flex flex-col-reverse tablet:flex-row tablet:items-start tablet:justify-between gap-y-16 gap-x-16">

          {/* Left — vertical timeline */}
          <div className="relative flex flex-col">
            {/* Connecting line — grows top-to-bottom on animation */}
            <div className="process-line absolute left-5 top-5 bottom-5 w-px bg-primary/25 origin-top" />

            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.heading}
                className="process-step group flex items-start gap-x-6 pb-10 last:pb-0"
              >
                {/* Numbered circle */}
                <div className="process-circle relative z-10 shrink-0 w-10 h-10 rounded-full border-2 border-primary/35 bg-muted flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                  <span className="font-inter text-xs font-bold text-primary transition-colors duration-300 group-hover:text-white">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-dm text-2xl tablet:text-3xl text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                    {step.heading}
                  </h3>
                  <p className="font-inter text-foreground/50 text-base max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — heading block, sticky on tablet+ */}
          <div className="tablet:sticky tablet:top-40 tablet:self-start flex flex-col tablet:items-end tablet:text-right">
            <h2
              id="process-section-heading"
              className="!text-5xl tablet:!text-6xl tablet:!text-right"
            >
              Our Process
            </h2>
            <p
              id="process-section-description"
              className="font-inter text-foreground/55 text-lg mt-4 max-w-xs"
            >
              A simple, supportive journey toward better mental well-being.
            </p>
          </div>
        </div>
      </InViewAnimateSection>
      {/* <InViewAnimateSection
        id="features"
        className="!h-full flex md:hidden justify-center py-24"
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
      </InViewAnimateSection> */}
      <InViewAnimateSection
        id="founder"
        sectionAnimFuncName="homeFounderSection"
        className="!h-full flex justify-between py-24 bg-muted overflow-clip"
      >
        <div className="h-px w-[calc(100%-(2*var(--gutter-width)))] absolute top-0 left-[var(--gutter-width)] bg-colored-background/30" />
        <div className="w-full my-auto grid grid-cols-1 tablet:grid-cols-[1fr_minmax(360,1fr)] laptop:grid-cols-[1fr_minmax(560,_1fr)] items-center gap-x-10 laptop:gap-x-55">
          <div id="founder-photo" className="relative">
            <div className="w-full min-[500px]:w-[30%] mx-auto tablet:w-auto tablet:max-h-[calc(100vh-350px)] aspect-[41/56] relative rounded-xl">
              <div className="w-full min-[500px]:w-[30%] mx-auto tablet:w-auto tablet:max-h-[calc(100vh-350px)] aspect-[41/56] rounded-xl overflow-clip">
                <Image src="/images/founder-image.png" alt="founder-image" fill sizes="(min-width: 1300px) 50vw, (min-width: 800px) 40vw, (min-width: 500px) 30vw, 100vw" className="object-cover rounded-2xl shadow-2xl" />
              </div>
              <div className="founder-star absolute -top-8 -left-8">
                <Image
                  src="/images/Stars.svg"
                  width={48}
                  height={48}
                  alt="stars-decoration"
                />
              </div>
            </div>
          </div>
          <div id="founder-content" className="w-full flex tablet:pr-20 text-pretty  flex-col h-fit gap-y-6 relative text-center mt-14 tablet:mt-0">
            <div className="w-fit relative mx-auto">
              <div className="founder-star absolute -top-8 -right-8 -rotate-120">
                <Image
                  src="/images/Stars.svg"
                  width={48}
                  height={48}
                  alt="stars-decoration"
                />
              </div>
              <h2 className="text-4xl font-dm w-fit">
                A Message from Our Founder
              </h2>
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
            <Link href="/about" className="w-fit text-primary underline underline-offset-4 hover:opacity-80 transition-opacity text-base">
              Learn more about BeyondFaith →
            </Link>
          </div>
        </div>
      </InViewAnimateSection>
      {/* <InViewAnimateSection
        id="to-about"
        sectionAnimFuncName="homeToAboutSection"
        amount={0.6}
        className="!h-full hidden md:flex items-center py-24 relative"
      >
        <div className="h-px w-[calc(100%-(2*var(--gutter-width)))] absolute bottom-0 left-[var(--gutter-width)] bg-border/30" />
        <div className="w-1/2 h-fit flex items-center justify-center">
          <div id="founder-card" className="p-2 rounded-3xl bg-colored-background text-primary-foreground relative lg:-left-12 max-w-94 h-fit flex flex-col items-center z-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <div className="relative z-10">
              <div id="founder-image" className="w-80 h-90 mt-4 z-10 relative overflow-clip rounded-3xl border-primary-foreground/20 border-8">
                <Image fill src={"/images/founder.png"} alt={"founders-image"} className="object-cover object-top relative" />
              </div>
              <div className="absolute -z-10 w-88 h-90 -left-4 top-4 bg-colored-background"></div>
            </div>
            <div id="founder-message" className="mb-6 relative flex flex-col -mt-70 -z-10 px-4 text-balance text-center">
              <h3 className="text-2xl font-bold text-center pt-4">
                A Message from Our Founder
              </h3>
              <p className="pb-3 pt-6">
                We believe your journey is a reflection of your innate strength. BeyondFaith offers the professional guidance and heartfelt support you need to trust your growth and overcome obstacles. Together, we help you embrace your story and move forward with confidence.
              </p>
              <div className="absolute top-10 -left-0 rotate-24 scale-60">
                <Image
                  src="/images/Stars.svg"
                  width={48}
                  height={48}
                  alt="stars-decoration"
                />
              </div>
              <div className="absolute -bottom-2 right-4 rotate-24 scale-60">
                <Image
                  src="/images/Stars.svg"
                  width={48}
                  height={48}
                  alt="stars-decoration"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 px-10 max-w-200 mx-auto text-lg group">
          <h3 className="text-4xl font-bold mb-6">Why Choose Us</h3>
          <div className="text-balance">
            <p>
              Life can feel overwhelming at times, but you don’t have to face it
              alone. Let us guide you
              to clarity and strength.
            </p>
            <ul className="my-4 ml-8 list-disc [&>li]:mt-2">
              <li>Our team includes <span className="group-hover:text-primary transition ease-in-out duration-300">qualified therapists, counselors, and
                mental health experts</span> who specialize in various therapeutic modalities.</li>
              <li>We understand that every individual and organization is unique,
                and we <span className="group-hover:text-primary transition ease-in-out duration-300">tailor our services</span> to meet those specific needs.</li>
              <li>From therapy sessions to workshops and capacity-building
                programs, we provide <span className="group-hover:text-primary transition ease-in-out duration-300">comprehensive solutions for mental wellness.</span></li>
              <li><span className="group-hover:text-primary transition ease-in-out duration-300">Compassion and understanding</span> are at the heart of everything we do.</li>
            </ul>
            <Link href="/about" className="mt-3 w-fit mb-6 whitespace-nowrap flex gap-x-2 items-center group relative text-primary hover:text-primary">
              know more about us <ChevronRight size={16} />
              <AnimatedUnderline className="bg-primary" />
            </Link>
          </div>
        </div>
      </InViewAnimateSection> */}
      <InViewAnimateSection
        id="faq"
        sectionAnimFuncName="homeFaqSection"
        className="!h-full flex justify-between py-24 overflow-clip"
      >
        <div className="w-full grid grid-cols-1 gap-y-6 tablet:grid-cols-2 my-auto">
          <h2 className="text-4xl font-dm text-center tablet:text-left">
            Frequently Asked Questions
          </h2>
          <div className="faq-content">
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
          sizes="100vw"
          className="-z-10 inset-0"
        />
        <div className="flex flex-col items-center text-accent gap-y-6 max-w-200">
          <div className="flex flex-col gap-y-3 text-center">
            <h2 className="text-4xl font-dm">Ready to Begin Your Journey?</h2>
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
