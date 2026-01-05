import AnimatedUnderline from "@/components/AnimatedUnderline";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  FeatureContextProvider,
  FeatureGraphicListing,
  FeatureTextListing,
} from "./FeatureUtils";

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
      <section className="!h-full flex items-center relative py-24 mt-10">
        <div className="w-full flex gap-8 items-center flex-col lg:flex-row justify-between">
          <div className="px-5 py-16 md:px-10 md:py-32 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] max-w-120 flex flex-col gap-y-6 relative z-0 overflow-clip">
            <div className="absolute top-0 right-0 -z-10 backdrop-blur-lg bg-white opacity-60 w-full h-full"></div>
            {/* <Image
              width={48}
              height={48}
              src="/images/empathy-icon.svg"
              alt="empathy-icon"
            /> */}
            <h3 className="text-2xl text-primary font-bold">Our Mission</h3>
            <p className="text-xl grow-0">
              To <span className="text-primary">normalize</span> the
              conversation around mental health. We{" "}
              <span className="text-primary">empower</span> individuals to seek
              support with <span className="text-primary">confidence</span>,
              replacing stigma with strength.
            </p>
          </div>
          <div className="px-5 py-16 md:px-10 md:py-32 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] max-w-120 flex flex-col gap-y-6 relative z-0 overflow-clip">
            <div className="absolute top-0 right-0 -z-10 backdrop-blur-lg bg-white opacity-60 w-full h-full"></div>
            {/* <Image
              width={48}
              height={48}
              src="/images/rising-sun-icon.svg"
              alt="rising-sun-icon"
            /> */}
            <h3 className="text-2xl text-primary font-bold">Our Vision</h3>
            <p className="text-xl grow-0">
              A world where mental wellness is a{" "}
              <span className="text-primary">basic right</span>. We see a{" "}
              <span className="text-primary">future</span> where individuals and
              organizations embrace health as the key to{" "}
              <span className="text-primary">fulfillment</span> .
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <Image
            src={"/images/compassion-blob-lady.jpg"}
            alt="compassion-bg"
            fill
            className="object-contain scale-90"
          />
        </div>
      </section>
      <FeatureContextProvider>
        <section className="relative bg-white">
          <div className="h-px w-[calc(100%-(2*var(--gutter-width)))] bg-foreground/5 absolute top-10 z-20"></div>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col">
              <div
                className="md:sticky top-0 z-10 mb-[calc(100vh-284px)] pb-24 pt-[104px]"
                style={{
                  background: `linear-gradient(to bottom, 
                  rgba(255, 255, 255, 1) 0%, 
                  rgba(255, 255, 255, 1) 85%, 
                  rgba(255, 255, 255, 0) 100%
                )`,
                }}
              >
                <h3 className="text-4xl font-bold mb-4 text-left">
                  Our Approach
                </h3>
                <p className="text-foreground/40 text-xl">
                  Where clinical expertise meets compassionate care.
                </p>
              </div>
              <FeatureTextListing />
            </div>

            <div className="hidden lg:flex h-screen sticky top-0 items-center justify-center pt-24 not-last:pb-24">
              <div className="relative w-full max-w-lg aspect-video">
                <FeatureGraphicListing />
              </div>
            </div>
          </div>
        </section>
      </FeatureContextProvider>
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
};

export default About;
