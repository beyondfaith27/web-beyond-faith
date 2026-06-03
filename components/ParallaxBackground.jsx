"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ParallaxBackground({
  src,
  alt = "parallax background",
  direction = "down", // "up" | "down" | "left" | "right"
  intensity = 25,
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Direction config ONLY for image
  const directions = {
    down: { x: "0%", y: [`-${intensity}%`, `${intensity}%`] },
    up: { x: "0%", y: [`${intensity}%`, `-${intensity}%`] },
    left: { x: [`${intensity}%`, `-${intensity}%`], y: "0%" },
    right: { x: [`-${intensity}%`, `${intensity}%`], y: "0%" },
  };

  const { x, y } = directions[direction];

  const motionX = Array.isArray(x)
    ? useTransform(scrollYProgress, [0, 1], x)
    : x;

  const motionY = Array.isArray(y)
    ? useTransform(scrollYProgress, [0, 1], y)
    : y;

  // Subtle zoom for realism
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 h-full w-full overflow-hidden"
    >
      {/* IMAGE LAYER — parallax ONLY */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ x: motionX, y: motionY, scale }}
      >
        <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
      </motion.div>

      {/* COLOR BASE — solid, non-moving */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "var(--colored-background)",
          opacity: 0.9,
        }}
      />

      {/* EDGE MASK + BLEND — static */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to right,
              var(--colored-background) 0%,
              transparent 18%,
              transparent 82%,
              var(--colored-background) 100%
            ),
            linear-gradient(
              to bottom,
              var(--colored-background) 0%,
              transparent 18%,
              transparent 82%,
              var(--colored-background) 100%
            )
          `,
        }}
      />

      {/* OPTIONAL: subtle richness (opacity pulse only) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0.96 }}
        animate={{ opacity: [0.96, 1, 0.96] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={
          {
            //   background: "var(--colored-background)",
            //   mixBlendMode: "soft-light",
          }
        }
      />
    </div>
  );
}
