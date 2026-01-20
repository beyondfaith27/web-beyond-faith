"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Transition configuration for smooth animations
 */
const transition = {
  type: "spring",
  duration: 0.5,
  bounce: 0.1,
};

/**
 * Root dialog component with motion support
 * @param {React.ComponentProps<typeof DialogPrimitive.Root>} props
 */
function AnimatedExpandableDialog(props) {
  return <DialogPrimitive.Root {...props} />;
}

/**
 * Portal wrapper
 * @param {React.ComponentProps<typeof DialogPrimitive.Portal>} props
 */
function AnimatedDialogPortal(props) {
  return <DialogPrimitive.Portal {...props} />;
}

/**
 * Animated overlay with blur backdrop
 * @param {React.ComponentProps<typeof DialogPrimitive.Overlay>} props
 */
function AnimatedDialogOverlay({ className, ...props }) {
  return (
    <DialogPrimitive.Overlay asChild>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-md",
          className
        )}
        {...props}
      />
    </DialogPrimitive.Overlay>
  );
}

/**
 * Main dialog content with card-like styling
 * @typedef {Object} AnimatedDialogContentProps
 * @property {boolean} [showCloseButton=true] - Show close button
 * @property {string} [layoutId] - Motion layoutId for shared layout animation
 *
 * @param {React.ComponentProps<typeof DialogPrimitive.Content> & AnimatedDialogContentProps} props
 */
function AnimatedDialogContent({
  className,
  children,
  showCloseButton = true,
  layoutId = "expandable-card",
  ...props
}) {
  return (
    <AnimatedDialogPortal>
      <AnimatedDialogOverlay />
      <DialogPrimitive.Content asChild {...props}>
        <motion.div
          layoutId={layoutId}
          transition={transition}
          className={cn(
            "bg-colored-background/60 rounded-xl backdrop-blur-md",
            "fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50",
            "w-[calc(100%-40px)] max-w-2xl max-h-[85vh] mx-auto",
            "shadow-2xl",
            "p-2",
            "outline-none will-change-transform",
            className
          )}
        >
          <div className="overflow-y-auto p-2 md:p-6 max-h-[calc(85vh-3rem)]">
            {children}
          </div>

          {showCloseButton && (
            <DialogPrimitive.Close
              className={cn(
                "absolute top-4 right-4 z-10",
                "rounded-sm opacity-70 transition-opacity hover:opacity-100",
                "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                "disabled:pointer-events-none"
              )}
            >
              <XIcon className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          )}
        </motion.div>
      </DialogPrimitive.Content>
    </AnimatedDialogPortal>
  );
}

/**
 * Dialog header
 * @param {React.ComponentProps<"div">} props
 */
function AnimatedDialogHeader({ className, ...props }) {
  return <div className={cn("flex flex-col", className)} {...props} />;
}

/**
 * Animated dialog title
 * @typedef {Object} AnimatedDialogTitleProps
 * @property {string} [layoutId] - Motion layoutId for title animation
 *
 * @param {React.ComponentProps<typeof DialogPrimitive.Title> & AnimatedDialogTitleProps} props
 */
function AnimatedDialogTitle({ className, layoutId, children, ...props }) {
  return (
    <DialogPrimitive.Title asChild {...props}>
      <motion.h4
        layoutId={layoutId}
        transition={transition}
        layout="preserve-aspect"
        className={cn(
          "font-bold text-base md:text-xl mt-8 mb-2 will-change-transform",
          className
        )}
      >
        {children}
      </motion.h4>
    </DialogPrimitive.Title>
  );
}

/**
 * Animated dialog description
 * @typedef {Object} AnimatedDialogDescriptionProps
 * @property {string} [layoutId] - Motion layoutId for description animation
 *
 * @param {React.ComponentProps<typeof DialogPrimitive.Description> & AnimatedDialogDescriptionProps} props
 */
function AnimatedDialogDescription({
  className,
  layoutId,
  children,
  ...props
}) {
  return (
    <DialogPrimitive.Description asChild {...props}>
      <motion.p
        layoutId={layoutId}
        layout="preserve-aspect"
        transition={transition}
        className={cn(
          "text-primary-foreground/60 will-change-transform text-sm md:text-base",
          className
        )}
      >
        {children}
      </motion.p>
    </DialogPrimitive.Description>
  );
}

/**
 * Animated image container
 * @typedef {Object} AnimatedImageContainerProps
 * @property {string} [layoutId] - Motion layoutId for image animation
 *
 * @param {React.ComponentProps<typeof motion.div> & AnimatedImageContainerProps} props
 */
function AnimatedImageContainer({ className, layoutId, children, ...props }) {
  return (
    <motion.div
      layoutId={layoutId}
      transition={transition}
      className={cn("flex justify-center will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Expandable content with fade-in animation
 * @param {React.ComponentProps<typeof motion.div>} props
 */
function AnimatedExpandableContent({ className, children, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
      className={cn("space-y-4 mt-6", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export {
  AnimatedExpandableDialog,
  AnimatedDialogPortal,
  AnimatedDialogOverlay,
  AnimatedDialogContent,
  AnimatedDialogHeader,
  AnimatedDialogTitle,
  AnimatedDialogDescription,
  AnimatedImageContainer,
  AnimatedExpandableContent,
};
