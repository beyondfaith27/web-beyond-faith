"use client";

import { useEffect, useRef, useState } from "react";

const rand = (min, max) => Math.random() * (max - min) + min;

function newStar(id) {
  return {
    id,
    top: `${rand(3, 55)}%`,
    left: `${rand(35, 92)}%`,
    angle: rand(-18, -42),
    size: Math.round(rand(10, 16)),
    dur: rand(3.2, 5.2),
  };
}

export default function ShootingStars({ initialDelay = 0 }) {
  // null on server → no HTML rendered → no hydration mismatch
  const [star, setStar] = useState(null);
  const timer = useRef(null);

  // Set the first star only on the client, after mount (with optional stagger)
  useEffect(() => {
    timer.current = setTimeout(() => setStar(newStar(0)), initialDelay);
    return () => clearTimeout(timer.current);
  }, [initialDelay]);

  // After each star's animation + a short pause, fire the next one
  useEffect(() => {
    if (star === null) return;
    const pause = rand(400, 1000);
    timer.current = setTimeout(() => {
      setStar((prev) => newStar((prev?.id ?? 0) + 1));
    }, star.dur * 1000 + pause);
    return () => clearTimeout(timer.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [star?.id]);

  if (!star) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      <div
        key={star.id}
        className="absolute"
        style={{ top: star.top, left: star.left }}
      >
        {/* Counter-clockwise rotation → translateX(-) travels down-left */}
        <div style={{ transform: `rotate(${star.angle}deg)` }}>
          <div style={{ animation: `shootStar ${star.dur.toFixed(1)}s linear both` }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* Inline SVG with white stroke — avoids img filter / square artefact */}
              <svg
                viewBox="0 0 24 24"
                width={star.size}
                height={star.size}
                fill="none"
                aria-hidden="true"
                style={{ flexShrink: 0, overflow: "visible" }}
              >
                <path
                  d="M6.03954 7.77203C3.57986 8.32856 2.35002 8.60682 2.05742 9.54773C1.76482 10.4886 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19043 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62118 22.3417 7.77268 21.8115 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0248 12 20.0248C12.3469 20.0248 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8115 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544M19.7199 13.4299C21.3968 11.4691 22.2352 10.4886 21.9426 9.54773C21.65 8.60682 20.4201 8.32856 17.9605 7.77203L17.3241 7.62805C16.6251 7.4699 16.2757 7.39083 15.9951 7.17781C15.7144 6.96479 15.5345 6.64193 15.1745 5.99623L14.8468 5.40837C13.5802 3.13612 12.9469 2 12 2C11.0531 2 10.4198 3.13613 9.15316 5.40838"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              {/* Comet tail */}
              <div
                style={{
                  width: `${star.size * 7}px`,
                  height: "1px",
                  background:
                    "linear-gradient(to right, rgba(255,255,255,0.3), transparent)",
                  flexShrink: 0,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
