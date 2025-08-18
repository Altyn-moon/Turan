/*import { useEffect, useRef } from "react";
import type { MotionValue } from "framer-motion";

export function useAutoScrollDown(
  scrollYProgress: MotionValue<number>,
  from: number,
  to: number,
  _speed: number = 10 // параметр оставлен для совместимости, но не используется
) {
  const isSnapping = useRef(false);
  const lastTarget = useRef<number | null>(null);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      if (isSnapping.current) return;

      // внутри окна — делаем ОДИН снап к его правому краю
      if (v > from && v < to) {
        // целимся в правую границу окна, с маленьким минусом, чтобы не перетриггериться
        const targetProgress = Math.max(0, Math.min(1, to - 0.0006));

        if (lastTarget.current !== targetProgress) {
          lastTarget.current = targetProgress;
          isSnapping.current = true;

          const doc = document.documentElement;
          const total = doc.scrollHeight - window.innerHeight;
          const y = targetProgress * total;

          // ЖЁСТКИЙ фикс-скролл (без инерции), чтобы не «плыло»
          window.scrollTo({ top: y, behavior: "auto" });

          // небольшой лаймаут — отпускаем флаг
          window.setTimeout(() => {
            isSnapping.current = false;
          }, 250);
        }
      }
    });

    return () => unsub();
  }, [scrollYProgress, from, to]);
}*/


import { MotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Плавно докручивает scrollYProgress из from -> to.
 * speed – необязательный множитель скорости (чем больше, тем быстрее).
 */
export function useAutoScrollDown(
  scrollYProgress: MotionValue<number>,
  from: number,
  to: number,
  speed: number = 6 // <-- по умолчанию, чтобы можно было вызывать с 3 аргументами
) {
  const ticking = useRef(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // если попали в коридор – запускаем автодосролл
    if (!ticking.current && v >= from && v < to) {
      ticking.current = true;
      const id = requestAnimationFrame(function tick() {
        const cur = scrollYProgress.get();
        if (cur < to) {
          // шаг прокрутки зависит от speed
          scrollYProgress.set(Math.min(cur + (0.001 * speed), to));
          requestAnimationFrame(tick);
        } else {
          ticking.current = false;
        }
      });
      return () => cancelAnimationFrame(id);
    }
  });

  // сброс флага при выходе из коридора
  useEffect(() => {
    return () => {
      ticking.current = false;
    };
  }, []);
}

export default useAutoScrollDown;



/*
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
}*/
