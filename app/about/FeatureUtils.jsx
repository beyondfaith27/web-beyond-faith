"use client";

import { useInView, motion } from "motion/react";
import Image from "next/image";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const features = [
  {
    id: 1,
    title: "The Alliance",
    desc: "We believe healing happens in partnership. We focus on building a strong, trusted therapeutic alliance where you feel truly heard.",
    graphic: "/images/business-deal.svg",
  },
  {
    id: 2,
    title: "The Science",
    desc: "Your well-being deserves more than guesswork. We utilize evidence-based techniques and data-driven strategies.",
    graphic: "/images/medical-research.svg",
  },
  {
    id: 3,
    title: "The Space",
    desc: "Vulnerability requires safety. We cultivate an inclusive environment where meaningful conversations can unfold.",
    graphic: "/images/relaxing.svg",
  },
];

function FeatureText({ feature, onInViewChange }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.6, // Trigger when 60% of the element is visible
    once: false, // Keep checking as user scrolls
    margin: "-20% 0px -20% 0px", // Add margins to trigger earlier/later
  });

  useEffect(() => {
    if (isInView) {
      onInViewChange(feature.id);
    }
  }, [isInView, feature.id, onInViewChange]);

  return (
    <div
      ref={ref}
      className="min-h-[40vh] lg:min-h-[60vh] flex flex-col justify-center"
    >
      <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
      <p className="text-xl text-gray-600 leading-relaxed">{feature.desc}</p>
      {/* Mobile illustration - larger size at bottom */}
      <div className="lg:hidden mt-8 mb-4 flex justify-center">
        <div className="relative w-64 h-48">
          <Image
            src={feature.graphic}
            alt={feature.title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureGraphic({ feature, isActive }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ pointerEvents: isActive ? "auto" : "none" }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={feature.graphic}
          alt={feature.title}
          fill
          className="object-contain"
          priority={isActive}
        />
      </div>
    </motion.div>
  );
}

const FeatureContext = createContext(null);

function FeatureContextProvider({ children }) {
  const [activeFeatureId, setActiveFeatureId] = useState(features[0]?.id || 1);

  return (
    <FeatureContext.Provider value={[activeFeatureId, setActiveFeatureId]}>
      {children}
    </FeatureContext.Provider>
  );
}

function FeatureTextListing() {
  const [_, setActiveFeatureId] = useContext(FeatureContext);

  const handleInViewChange = (featureId) => {
    setActiveFeatureId(featureId);
  };

  return (
    <>
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={
            index === 0
              ? "-mt-[calc(100vh-204px)]"
              : index === features.length - 1
              ? "pb-8 lg:pb-[calc(50vh-288px)]"
              : ""
          }
        >
          <FeatureText feature={feature} onInViewChange={handleInViewChange} />
        </div>
      ))}
    </>
  );
}

function FeatureGraphicListing() {
  const [activeFeatureId] = useContext(FeatureContext);
  return (
    <>
      {features.map((feature) => (
        <FeatureGraphic
          key={feature.id}
          feature={feature}
          isActive={activeFeatureId === feature.id}
        />
      ))}
    </>
  );
}

export { FeatureTextListing, FeatureGraphicListing, FeatureContextProvider };
