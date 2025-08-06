import { motion, useTransform, MotionValue } from "framer-motion";
import { ReactNode } from "react";

interface ScrollStepProps {
  progress: MotionValue<number>;
  range: [number, number, number];
  left: ReactNode;
  right: ReactNode;
  leftAlign?: "center" | "bottom";
  rightAlign?: "center" | "bottom";
  width?: "full" | "fit";
  leftClassName?: string;
  rightClassName?: string;
}

export function ScrollStep({
  progress,
  range,
  left,
  right,
  leftAlign = "center",
  rightAlign = "center",
  width = "fit",
  leftClassName = "",
  rightClassName = "",
}: ScrollStepProps) {
  const opacity = useTransform(progress, range, [0, 1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 h-full w-full pointer-events-none z-10"
    >
      <div
        className={`absolute pointer-events-auto ${
          leftAlign === "center"
            ? "left-0 top-1/2 -translate-y-1/2"
            : "left-0 bottom-0"
        } ${width === "full" ? "w-full" : "w-2/3"} ${leftClassName}`}
      >
        {left}
      </div>

      <div
        className={`absolute pointer-events-auto ${
          rightAlign === "center"
            ? "right-0 top-1/2 -translate-y-1/2"
            : "right-0 bottom-0"
        } ${width === "full" ? "w-full" : "w-2/3"} ${rightClassName}`}
      >
        {right}
      </div>
    </motion.div>
  );
}
