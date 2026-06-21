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
      animate("h2", anim.blurOut, anim.dur0),
      animate("#process-section-description", anim.blurOut, anim.dur0),
      animate(".concern", { opacity: 0 }, anim.dur0),
    ]);
    await animate("h2", anim.blurIn, { duration: 0.3 });
    await animate("#process-section-description", anim.blurIn, { duration: 0.3 });
    await animate(
      ".concern",
      { opacity: 1 },
      {
        duration: 0.3,
        delay: stagger(0.08),
      }
    );
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
