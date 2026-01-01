import { cj } from "@/lib/utils";
import React from "react";

const AnimatedUnderline = ({ withDelay = false } = {}) => {
  return (
    <span
      className={cj(
        "absolute -bottom-0.5 right-0 w-full h-0.25 origin-bottom-left",
        "bg-white rounded-full",
        "scale-0 group-hover:scale-100",
        "transition ease-in-out",
        withDelay && "delay-150"
      )}
    ></span>
  );
};

export default AnimatedUnderline;
