"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

/**
 * Wrapper component that adds scroll-based show/hide behavior to the header
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The Header component to wrap
 * @returns {JSX.Element} Animated header wrapper
 */
const Retractable = ({ children }) => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // If scrolling down and past 100px, hide header
    if (latest > previous && latest > 100) {
      setHidden(true);
    }
    // If scrolling up, show header
    else if (latest < previous) {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full fixed top-0 z-50"
    >
      {children}
    </motion.div>
  );
};

export default Retractable;
