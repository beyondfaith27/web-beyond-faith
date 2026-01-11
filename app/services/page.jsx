import AnimatedUnderline from "@/components/AnimatedUnderline";
import { ExpandableCard } from "@/components/ExpandableCard";
import SERVICES from "@/lib/services";
import { cj } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="relative w-full min-h-screen pt-24 pb-10">
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
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
      </div>
      <div className="w-full h-full relative top-0 left-0 z-10 text-primary-foreground mt-6">
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 my-auto">
          <div className="w-full h-full flex flex-col justify-center md:col-span-2">
            <p className="text-2xl opacity-60 font-bold mb-8">Our Services</p>

            <p className="text-xl max-w-200 group text-primary-foreground/80">
              At{" "}
              <span className="font-bold text-primary-foreground">
                BeyondFaith
              </span>
              , we empower individuals and organizations through a comprehensive
              range of mental health services. From personal therapy and
              assessments to organizational consultancy and capacity building,
              our offerings are thoughtfully designed to meet diverse needs —
              ensuring everyone has access to the{" "}
              <span className="font-bold text-primary-foreground">support</span>
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
    </section>
  );
};

export default Services;
