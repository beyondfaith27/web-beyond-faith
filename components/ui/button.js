import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cj, cn } from "@/lib/utils";

const buttonVariants = cva(
  cj(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0",
    "font-medium rounded-md",
    "cursor-pointer hover:scale-95 transition transition-all ease-out",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40"
  ),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-accent text-accent bg-transparent",
        accent: "border border-accent bg-accent text-accent-foreground",
        link: "text-primary bg-transparent",
        ghost: "text-primary-foreground bg-red-400",
      },
      size: {
        default: "px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "lg-icon": "size-12",
      },
      shape: {
        "curved-box": "rounded-md",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "rounded",
    },
  }
);

/**
 *
 * @param {React.ComponentProps<"button"> & import("class-variance-authority").VariantProps<typeof buttonVariants> & { asChild?: boolean }} param0
 * @returns
 */
function Button({
  className,
  variant,
  size,
  shape,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, shape, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
