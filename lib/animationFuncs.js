import { stagger } from "motion/react";

/**
 * @typedef SectionAnimFuncPropType
 * @property {import("motion/react").AnimationScope<HTMLDivElement>} scope
 * @property {ReturnType<import("motion/react").useAnimate>[1]} animate
 */

const anim = {
  blurOut: { opacity: 0, filter: "blur(8px)", y: 10 },
  dur0: { duration: 0 },
  blurIn: { opacity: 1, filter: "blur(0px)", y: 0 },
};

const animFns = {
  /**
   *
   * @param {SectionAnimFuncPropType} param0
   */
  async homeServicesSection({ animate }) {
    await Promise.all([
      animate("#service-section-heading", anim.blurOut, anim.dur0),
      animate("#service-section-description", anim.blurOut, anim.dur0),
      animate(".expandable-card", anim.blurOut, anim.dur0),
    ]);
    await Promise.all([
      animate("#service-section-heading", anim.blurIn, { duration: 0.3 }),
      animate("#service-section-description", anim.blurIn, {
        duration: 0.3,
        delay: 0.1,
      }),
    ]);
    animate(".expandable-card", anim.blurIn, {
      duration: 0.3,
      delay: stagger(0.1),
    });
  },

  /**
   *
   * @param {SectionAnimFuncPropType} param0
   */
  async homeProcessSection({ animate }) {
    await Promise.all([
      animate("#process-section-heading", anim.blurOut, anim.dur0),
      animate("#process-section-description", anim.blurOut, anim.dur0),
      animate(".process-step", anim.blurOut, anim.dur0),
    ]);
    await Promise.all([
      animate("#process-section-heading", anim.blurIn, { duration: 0.3 }),
      animate("#process-section-description", anim.blurIn, {
        duration: 0.3,
        delay: 0.1,
      }),
    ]);
    animate(".process-step", anim.blurIn, {
      duration: 0.3,
      delay: stagger(0.2),
    });
  },

  async homeConcernSection({ animate }) {
    await Promise.all([
      animate("h2", { y: 40, opacity: 0 }, { duration: 0 }),
      animate("#process-section-description", { y: 24, opacity: 0, filter: "blur(4px)" }, { duration: 0 }),
      animate(".concern", { y: 24, opacity: 0 }, { duration: 0 }),
    ]);

    // Heading slides up
    await animate("h2", { y: 0, opacity: 1 }, {
      duration: 0.65,
      ease: [0.33, 1, 0.68, 1],
    });

    // Description fades up immediately as heading lands
    animate("#process-section-description", { y: 0, opacity: 1, filter: "blur(0px)" }, {
      duration: 0.55,
      ease: "easeOut",
    });

    // Concern rows (desktop) + cards (mobile) stagger in
    animate(".concern", { y: 0, opacity: 1 }, {
      duration: 0.55,
      delay: stagger(0.12),
      ease: [0.33, 1, 0.68, 1],
    });
  },

  /**
   *
   * @param {SectionAnimFuncPropType} param0
   */
  async homeToAboutSection({ animate }) {
    await animate("#founder-message", { marginTop: 0 }, {duration: 0.6})
  }
};

export default animFns;
