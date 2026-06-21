import ContactFormSheet from "@/components/ContactFormSheet";
import InViewAnimateSection from "@/components/InViewAnimateSection";
import { Button } from "@/components/ui/button";
import { Sparkles, Sprout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTABanner() {
  return (
    <InViewAnimateSection
      sectionAnimFuncName="homeCTASection"
      className="!min-h-0 !h-auto py-36 flex justify-center items-center relative overflow-hidden"
    >
      {/* Galaxy background */}
      <Image
        src="/images/galaxy.png"
        alt="galaxy background"
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />

      {/* Gradient overlays — darken edges so text is legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-colored-background/30 via-transparent to-colored-background/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-colored-background/20 via-transparent to-colored-background/20 pointer-events-none" />

      {/* Decorative sparkles */}
      <Sparkles
        className="cta-sparkle absolute top-[18%] left-[10%] text-accent/50 w-7 h-7 pointer-events-none"
        style={{ animation: "twinkle 2.8s ease-in-out infinite" }}
      />
      <Sparkles
        className="cta-sparkle absolute top-[25%] right-[9%] text-accent/35 w-5 h-5 pointer-events-none"
        style={{ animation: "twinkle 3.6s ease-in-out 0.6s infinite" }}
      />
      <Sparkles
        className="cta-sparkle absolute bottom-[20%] left-[20%] text-accent/30 w-4 h-4 pointer-events-none"
        style={{ animation: "twinkle 4.1s ease-in-out 1.2s infinite" }}
      />
      <Sparkles
        className="cta-sparkle absolute bottom-[25%] right-[16%] text-accent/40 w-6 h-6 pointer-events-none"
        style={{ animation: "twinkle 3.3s ease-in-out 0.3s infinite" }}
      />
      <Sparkles
        className="cta-sparkle absolute top-[50%] left-[5%] text-accent/20 w-4 h-4 pointer-events-none"
        style={{ animation: "twinkle 4.8s ease-in-out 1.8s infinite" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-accent gap-y-8 text-center w-full px-[var(--gutter-width)]">

        {/* Eyebrow badge */}
        <div
          id="cta-badge"
          className="flex items-center gap-x-2 border border-accent/25 rounded-full px-4 py-1.5 text-xs font-inter tracking-widest uppercase text-accent/60 backdrop-blur-sm"
        >
          <Sprout size={12} />
          Your journey begins here
        </div>

        {/* Heading */}
        <h2
          id="cta-heading"
          className="!text-6xl tablet:!text-7xl laptop:!text-8xl !text-center font-dm leading-[1.05] max-w-4xl mx-auto"
        >
          Ready to Begin<br className="hidden tablet:block" /> Your Journey?
        </h2>

        {/* Subtitle */}
        <p
          id="cta-sub"
          className="font-inter text-lg tablet:text-xl text-accent/70 max-w-xl"
        >
          Take the first step toward healing and growth with BeyondFaith.
          We&apos;re here to support you every step of the way.
        </p>

        {/* CTAs */}
        <div
          id="cta-buttons"
          className="flex flex-col items-center gap-4 sm:flex-row sm:gap-x-6 pt-2"
        >
          <ContactFormSheet>
            <Button variant="accent" size="lg" shape="curved-box" className="font-inter text-base px-8">
              Book Your Appointment
            </Button>
          </ContactFormSheet>
          <Link
            href="/about"
            className="font-inter text-sm text-accent/60 hover:text-accent transition-colors"
          >
            Learn About Us →
          </Link>
        </div>
      </div>
    </InViewAnimateSection>
  );
}
