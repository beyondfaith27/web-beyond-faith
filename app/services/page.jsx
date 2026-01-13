import { ExpandableCard } from "@/components/ExpandableCard";
import PROCESS_STEPS from "@/lib/process-step";
import SERVICES from "@/lib/services";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      <section className="relative w-full min-h-screen pt-40 md:pt-24 pb-10 flex items-center">
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
        <div className="w-full h-full relative top-0 left-0 z-10 text-primary-foreground mb-10">
          <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 my-auto">
            <div className="w-full h-full flex flex-col justify-center md:col-span-2">
              <p className="text-2xl opacity-60 font-bold mb-8">Our Services</p>

              <p className="text-xl max-w-200 group text-primary-foreground/80">
                At{" "}
                <span className="font-bold text-primary-foreground">
                  BeyondFaith
                </span>
                , we empower individuals and organizations through a
                comprehensive range of mental health services. From personal
                therapy and assessments to organizational consultancy and
                capacity building, our offerings are thoughtfully designed to
                meet diverse needs — ensuring everyone has access to the{" "}
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
      </section>
      <section className="md:pt-20 pb-20 md:pb-10 bg-muted flex items-center">
        <div className="w-full flex flex-col-reverse md:flex-row md:items-center my-auto md:justify-between gap-y-12">
          <div className="flex flex-col gap-y-12">
            {PROCESS_STEPS.map((step, idx) => {
              return (
                <div
                  key={step.heading}
                  className="flex items-center group hover:scale-[1.01] transition ease-in-out"
                >
                  <p className="font-bold text-3xl pr-5 border-r border-foreground/10 text-foreground/20 group-hover:text-primary/50 group-hover:border-primary/20 self-stretch flex items-center">
                    0{idx + 1}
                  </p>
                  <div className="pl-5 max-w-150">
                    <h4 className="font-bold text-xl group-hover:text-primary transition ease-in-out">
                      {step.heading}
                    </h4>
                    <p className="text-foreground/40 text-balance">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="max-w-150 flex flex-col md:items-end pt-32 md:pt-0">
            <h3 className="text-4xl md:text-5xl font-bold">Our Process</h3>
            <p className="text-foreground/60 text-lg font-semibold text-balance md:text-right">
              A simple, supportive journey toward better mental well-being.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
