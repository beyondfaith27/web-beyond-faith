import ContactFormSheet from "@/components/ContactFormSheet";
import InViewAnimateSection from "@/components/InViewAnimateSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cj } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const solutions = [
  {
    image: "/images/maze.svg",
    heading: "Struggling with anxiety, stress, or depression?",
  },
  {
    image: "/images/chat.svg",
    heading: "Struggling with anxiety, stress, or depression?",
  },
  {
    image: "/images/puzzle.svg",
    heading: "Struggling with anxiety, stress, or depression?",
  },
];

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

const faqs = [
  {
    question: "How to Schedule a Session?",
    content:
      "You can schedule a session by visiting our booking page, selecting your preferred date and time, and confirming your appointment. If you need assistance, feel free to contact us.",
  },
  {
    question: "Is there any Free Trial Session?",
    content:
      "You can schedule a session by visiting our booking page, selecting your preferred date and time, and confirming your appointment. If you need assistance, feel free to contact us.",
  },
  {
    question: "Do you do In-Person Therapy?",
    content:
      "You can schedule a session by visiting our booking page, selecting your preferred date and time, and confirming your appointment. If you need assistance, feel free to contact us.",
  },
  {
    question: "Counseling vs. Clinical Psychologist",
    content:
      "You can schedule a session by visiting our booking page, selecting your preferred date and time, and confirming your appointment. If you need assistance, feel free to contact us.",
  },
  {
    question: "Is there a Free Trial Sessions?",
    content:
      "You can schedule a session by visiting our booking page, selecting your preferred date and time, and confirming your appointment. If you need assistance, feel free to contact us.",
  },
];

export default function Home() {
  return (
    <>
      <InViewAnimateSection
        id="home"
        className="!h-full flex py-24 justify-center"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            alt="background-image-1"
            src={"/images/HeroImg.png"}
            width={1512}
            height={720}
            className="h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center my-auto gap-y-6 text-accent max-w-178">
          <h1>BeyondFaith, Your Journey to Inner Strength</h1>
          <p className="font-inter text-xl tablet:text-2xl text-center font-light">
            Rediscover your potential with therapists who guide you toward a
            more peaceful you—grounded in faith.
          </p>
          <ContactFormSheet>
            <Button variant="accent" className="w-fit">
              Start Your Journey
            </Button>
          </ContactFormSheet>
        </div>
      </InViewAnimateSection>
      <InViewAnimateSection
        id="services"
        className="!h-full flex justify-center py-24 border-b border-foreground/5"
      >
        <div className="my-auto flex flex-col items-center gap-y-12">
          <div className="flex flex-col gap-y-4 text-center">
            <h2>Feeling Stuck? We’re Here to Help.</h2>
            <p className="text-center max-w-134">
              Life can feel overwhelming at times, but you don’t have to face it
              alone. Let us guide you to clarity and strength.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 tablet:grid-cols-3 gap-6">
            {solutions.map((solution) => {
              return (
                <div
                  key={solution.image}
                  className="flex flex-col items-center gap-y-4 p-10 rounded-lg bg-muted text-muted-foreground"
                >
                  <Image
                    src={solution.image}
                    alt="maze-icon"
                    width={96}
                    height={96}
                  />
                  <p>{solution.heading}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Button>Talk to Us</Button>
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
            <div className="w-full min-[500px]:w-[30%] mx-auto tablet:w-auto tablet:max-h-[calc(100vh-200px)] aspect-[41/56] relative">
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
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>{faq.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Button variant="link" className="!px-0 py-5">
              View More FAQ <ChevronRight />
            </Button>
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
          <Button variant="accent" className="w-fit">
            Book Your Appointment
          </Button>
        </div>
      </section>
    </>
  );
}
