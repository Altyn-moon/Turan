import { MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

export function useAutoScrollDown(
  scrollYProgress: MotionValue<number>,
  sectionStart = 0.62,
  sectionEnd = 0.66,
  sectionIndex = 1
) {
  const lastValue = useRef(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const unsubscribe = scrollYProgress.on("change", (v: number) => {
      const isScrollingDown = v > lastValue.current;
      lastValue.current = v;

      if (isScrollingDown && v > sectionStart && v < sectionEnd) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * sectionIndex,
            behavior: "smooth",
          });
        }, 100);
      } else if (timeout) {
        clearTimeout(timeout);
      }
    });

    return () => {
      if (timeout) clearTimeout(timeout);
      unsubscribe();
    };
  }, [scrollYProgress, sectionStart, sectionEnd, sectionIndex]);
}
