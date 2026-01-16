"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import {
  AnimatedExpandableDialog,
  AnimatedDialogContent,
  AnimatedDialogHeader,
  AnimatedDialogTitle,
  AnimatedDialogDescription,
  AnimatedImageContainer,
  AnimatedExpandableContent,
} from "./ui/animated-expandable-dialog";
import AnimatedUnderline from "./AnimatedUnderline";

/**
 * Transition configuration - spring for smooth, natural movement
 */
const transition = {
  type: "spring",
  duration: 0.5,
  bounce: 0.1,
};

/**
 * @typedef {Object} ExpandableCardProps
 * @property {string} imageSrc - Image source URL
 * @property {string} imageAlt - Image alt text
 * @property {number} [imageWidth=160] - Image width
 * @property {number} [imageHeight=90] - Image height
 * @property {string} title - Card title
 * @property {string} description - Card description
 * @property {React.ReactNode} children - Expanded content
 * @property {string} [className] - Additional CSS classes
 */

/**
 * Expandable card with smooth layoutId animations
 * @param {ExpandableCardProps} props
 */
export function ExpandableCard({
  imageSrc,
  imageAlt,
  imageWidth = 160,
  imageHeight = 90,
  title,
  description,
  children,
  className,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Collapsed Card */}
      <motion.div
        layoutId={imageSrc + "expandable-card"}
        onClick={() => setOpen(true)}
        transition={transition}
        className={`expandable-card bg-background/5 rounded-xl backdrop-blur-md p-6 group cursor-pointer 
          hover:bg-background/10 transition-colors will-change-transform ${
            className || ""
          }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Image Container */}
        <motion.div
          layoutId={imageSrc + "card-image"}
          transition={transition}
          className="flex justify-center will-change-transform w-40 h-[90px] mx-auto"
        >
          <Image
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            alt={imageAlt}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h4
          layoutId={imageSrc + "card-title"}
          transition={transition}
          layout="preserve-aspect"
          className="font-bold text-xl mt-8 mb-2 will-change-transform"
        >
          {title}
        </motion.h4>

        {/* Description */}
        <motion.p
          layoutId={imageSrc + "card-description"}
          layout="preserve-aspect"
          transition={transition}
          className="text-primary-foreground/60 will-change-transform"
        >
          {description}{" "}
          <span className="relative inline-block group-hover:text-primary-foreground">
            know more
            <AnimatedUnderline />
          </span>
        </motion.p>
      </motion.div>

      {/* Expanded Dialog */}
      <AnimatedExpandableDialog open={open} onOpenChange={setOpen}>
        <AnimatedDialogContent
          layoutId={imageSrc + "expandable-card"}
          className="text-primary-foreground"
        >
          <AnimatedDialogHeader>
            {/* Image - Same Element */}
            <AnimatedImageContainer
              layoutId={imageSrc + "card-image"}
              className="w-40 h-[90px] mx-auto"
            >
              <Image
                src={imageSrc}
                width={imageWidth}
                height={imageHeight}
                alt={imageAlt}
                className="object-contain"
                priority
              />
            </AnimatedImageContainer>

            {/* Title - Same Element */}
            <AnimatedDialogTitle layoutId={imageSrc + "card-title"}>
              {title}
            </AnimatedDialogTitle>

            {/* Description - Same Element */}
            <AnimatedDialogDescription layoutId={imageSrc + "card-description"}>
              {description}
            </AnimatedDialogDescription>
          </AnimatedDialogHeader>

          {/* Additional Content - Fades In */}
          <AnimatedExpandableContent className="text-left text-primary-foreground">
            {children}
          </AnimatedExpandableContent>
        </AnimatedDialogContent>
      </AnimatedExpandableDialog>
    </>
  );
}
