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
    // Instant reset
    await Promise.all([
      animate("#service-section-heading", { y: 30, opacity: 0 }, { duration: 0 }),
      animate("#service-section-description", { y: 20, opacity: 0, filter: "blur(4px)" }, { duration: 0 }),
      animate(".expandable-card", { y: 44, opacity: 0 }, { duration: 0 }),
    ]);

    // Heading slides up — animate to 0.6 to preserve the opacity-60 design intent
    animate("#service-section-heading", { y: 0, opacity: 0.6 }, {
      duration: 0.55,
      ease: [0.33, 1, 0.68, 1],
    });

    // Description fades up with slight blur
    animate("#service-section-description", { y: 0, opacity: 1, filter: "blur(0px)" }, {
      duration: 0.6,
      delay: 0.15,
      ease: "easeOut",
    });

    // Cards cascade up with stagger — start after heading is mostly in
    animate(".expandable-card", { y: 0, opacity: 1 }, {
      duration: 0.5,
      delay: stagger(0.08, { startDelay: 0.25 }),
      ease: [0.33, 1, 0.68, 1],
    });
  },

  /**
   *
   * @param {SectionAnimFuncPropType} param0
   */
  async homeProcessSection({ animate }) {
    // Heading/subtitle come from the right, steps come from the left
    await Promise.all([
      animate("#process-section-heading", { x: 52, opacity: 0 }, { duration: 0 }),
      animate("#process-section-description", { x: 52, opacity: 0 }, { duration: 0 }),
      animate(".process-step", { x: -44, opacity: 0 }, { duration: 0 }),
    ]);

    // Heading slides in from right
    animate("#process-section-heading", { x: 0, opacity: 1 }, {
      duration: 0.65,
      ease: [0.33, 1, 0.68, 1],
    });

    // Subtitle follows a beat later
    animate("#process-section-description", { x: 0, opacity: 1 }, {
      duration: 0.55,
      delay: 0.1,
      ease: "easeOut",
    });

    // Steps cascade in from the left with stagger
    animate(".process-step", { x: 0, opacity: 1 }, {
      duration: 0.55,
      delay: stagger(0.12, { startDelay: 0.15 }),
      ease: [0.33, 1, 0.68, 1],
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

  async aboutMissionVisionSection({ animate }) {
    await animate(".about-card", { y: 48, opacity: 0 }, { duration: 0 });

    animate(".about-card", { y: 0, opacity: 1 }, {
      duration: 0.65,
      delay: stagger(0.2),
      ease: [0.33, 1, 0.68, 1],
    });
  },

  async aboutApproachSection({ animate }) {
    await Promise.all([
      animate("#approach-heading", { y: 32, opacity: 0 }, { duration: 0 }),
      animate("#approach-body",    { y: 24, opacity: 0 }, { duration: 0 }),
    ]);

    await animate("#approach-heading", { y: 0, opacity: 1 }, {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    });

    animate("#approach-body", { y: 0, opacity: 1 }, {
      duration: 0.6,
      ease: "easeOut",
    });
  },

  async homeFounderSection({ animate }) {
    await Promise.all([
      animate("#founder-photo", { x: -52, opacity: 0 }, { duration: 0 }),
      animate("#founder-content", { x: 52, opacity: 0 }, { duration: 0 }),
      animate(".founder-star", { scale: 0, opacity: 0 }, { duration: 0 }),
    ]);

    // Photo slides in from left, content from right simultaneously
    animate("#founder-photo", { x: 0, opacity: 1 }, {
      duration: 0.7,
      ease: [0.33, 1, 0.68, 1],
    });

    animate("#founder-content", { x: 0, opacity: 1 }, {
      duration: 0.7,
      delay: 0.1,
      ease: [0.33, 1, 0.68, 1],
    });

    // Stars sparkle in after the content has settled
    animate(".founder-star", { scale: 1, opacity: 1 }, {
      duration: 0.5,
      delay: stagger(0.15, { startDelay: 0.7 }),
      ease: [0.34, 1.56, 0.64, 1],
    });
  },

  async homeFaqSection({ animate }) {
    await Promise.all([
      animate("h2", { x: -44, opacity: 0 }, { duration: 0 }),
      animate(".faq-content", { x: 44, opacity: 0 }, { duration: 0 }),
    ]);

    // Heading slides in from left
    animate("h2", { x: 0, opacity: 1 }, {
      duration: 0.65,
      ease: [0.33, 1, 0.68, 1],
    });

    // Accordion column slides in from right
    animate(".faq-content", { x: 0, opacity: 1 }, {
      duration: 0.65,
      delay: 0.1,
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
