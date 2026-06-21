"use client";

import PROCESS_STEPS from "@/lib/process-step";
import { useEffect, useState } from "react";

const STEP_HOLD_MS = 2600;

function CurvedConnector({ done, active }) {
  // Cubic bezier: starts at circle centre, sweeps right, returns to centre
  const d = "M 1,0 C 1,18 42,42 1,60";

  return (
    <div style={{ marginLeft: "21px" }}>
      <svg
        width="46"
        height="60"
        viewBox="0 0 46 60"
        fill="none"
        aria-hidden="true"
      >
        {/* Grey track */}
        <path
          d={d}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-border/50"
        />
        {/* Animated fill — uses pathLength="1" so dashoffset is 0-1 */}
        <path
          d={d}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-primary transition-all duration-700"
          pathLength="1"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: done ? 0 : active ? 0.42 : 1,
          }}
        />
        {/* Mid-point dot */}
        <circle
          cx="15"
          cy="30"
          r="3.5"
          className={`transition-all duration-500 ${
            done
              ? "fill-primary"
              : active
              ? "fill-primary/50"
              : "fill-border/40"
          }`}
        />
      </svg>
    </div>
  );
}

export default function ProcessTimeline() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((p) => (p + 1) % PROCESS_STEPS.length),
      STEP_HOLD_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col">
      {PROCESS_STEPS.map((step, idx) => {
        const isActive = idx === active;
        const isDone = idx < active;

        return (
          <div key={step.heading}>
            {/* Step row */}
            <div className="process-step flex items-start gap-x-5">
              {/* Circle */}
              <div className="relative shrink-0">
                {/* Ping ring on active step */}
                {isActive && (
                  <span className="absolute -inset-1.5 rounded-full border border-primary/40 animate-ping" />
                )}
                <div
                  className={`relative z-10 w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                    isActive
                      ? "border-primary bg-primary scale-110 shadow-lg shadow-primary/30"
                      : isDone
                      ? "border-primary/50 bg-primary/10"
                      : "border-border bg-muted"
                  }`}
                >
                  <span
                    className={`font-inter text-xs font-bold transition-colors duration-500 ${
                      isActive
                        ? "text-white"
                        : isDone
                        ? "text-primary"
                        : "text-foreground/35"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div
                className={`pt-1.5 transition-all duration-500 ${
                  isActive ? "opacity-100" : isDone ? "opacity-55" : "opacity-30"
                }`}
              >
                <h3
                  className={`font-dm text-2xl tablet:text-3xl mb-1.5 transition-colors duration-500 ${
                    isActive ? "text-primary" : "text-foreground"
                  }`}
                >
                  {step.heading}
                </h3>
                <p className="font-inter text-foreground/55 text-base max-w-xs tablet:max-w-sm">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Curved connector to next step */}
            {idx < PROCESS_STEPS.length - 1 && (
              <CurvedConnector done={isDone} active={isActive} />
            )}
          </div>
        );
      })}
    </div>
  );
}
