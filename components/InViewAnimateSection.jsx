"use client";

import { useAnimate, useInView } from "motion/react";
import React, { useEffect } from "react";
import animFns from "@/lib/animationFuncs";

/** @typedef {React.HTMLAttributes<HTMLDivElement> & {sectionAnimFuncName: keyof animFns, children: React.ReactNode, amount: number }} InViewAnimateSectionPropType */

/**
 *
 * @param {InViewAnimateSectionPropType} param0
 * @returns
 */
const InViewAnimateSection = ({
  sectionAnimFuncName = "",
  children,
  amount = 0.2,
  ...props
}) => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true, amount });

  useEffect(() => {
    if (inView && !!sectionAnimFuncName) {
      animFns[sectionAnimFuncName]({ scope, animate });
    }
  }, [inView]);

  return (
    <section ref={scope} {...props}>
      {children}
    </section>
  );
};

export default InViewAnimateSection;
