import { cn } from "@/lib/utils";
import React from "react";

const AnimatedUnderline = ({ withDelay = false, className = "" } = {}) => {
  return (
    <span
      className={cn(
        "absolute -bottom-0.5 right-0 w-full h-0.25 origin-bottom-left",
        "bg-white rounded-full",
        "scale-0 lg:group-hover:scale-100",
        "transition ease-in-out",
        withDelay && "delay-150",
        className
      )}
    ></span>
  );
};

export default AnimatedUnderline;
