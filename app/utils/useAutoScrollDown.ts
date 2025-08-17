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


import { useEffect, useRef } from "react";
import type { MotionValue } from "framer-motion";

/**
 * Одноразовый «снап»: как только v попал в [from..to) — ровно один раз
 * докручиваем ЧУТОЧКУ дальше правой границы окна (или прям в самый низ,
 * если to >= 0.965). Без инерции, чтобы не «плавало».
 */
export function useAutoScrollDown(
  scrollYProgress: MotionValue<number>,
  from: number,
  to: number,
 // _speed: number = 10
) {
  const isSnapping = useRef(false);
  const lastTo = useRef<number | null>(null);

  useEffect(() => {
    if (to <= from) return;

    const unsub = scrollYProgress.on("change", (v) => {
      if (isSnapping.current) return;
      if (v >= from && v < to) {
        // если это почти последний экран — едем в самый низ страницы
        const doc = document.documentElement;
        const total = doc.scrollHeight - window.innerHeight;

        const snapToBottom = to >= 0.965;
        const targetProgress = snapToBottom ? 1 : Math.min(0.995, to + 0.002); // небольшой «перелёт»

        if (lastTo.current !== to) {
          lastTo.current = to;
          isSnapping.current = true;

          const y = snapToBottom ? Math.max(0, total - 2) : targetProgress * total;
          window.scrollTo({ top: y, behavior: "auto" });

          window.setTimeout(() => {
            isSnapping.current = false;
          }, 160);
        }
      }
    });

    return () => unsub();
  }, [scrollYProgress, from, to]);
}



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
