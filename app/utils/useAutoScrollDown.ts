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


// app/utils/useAutoScrollDown.ts
import { MotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Автодоскролл из прогресса `from` в `to`.
 * speed — скорость в пикселях/секунду (по умолчанию 1500).
 * Если нужен контейнер, передайте его ref.current вместо window (см. ниже).
 */
export function useAutoScrollDown(
  scrollYProgress: MotionValue<number>,
  from: number,
  to: number,
  speed: number = 1500, // px/sec
  // container?: HTMLElement | null   // <- если скролл не у window, а у контейнера — раскомментируйте параметр
) {
  const running = useRef(false);
  const rafId = useRef<number | null>(null);

  // кто скроллит: window или контейнер
  const getScroller = () =>
    typeof window !== "undefined" ? window : null;
    // return container ?? (typeof window !== "undefined" ? window : null);

  const stop = () => {
    running.current = false;
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  // если пользователь крутит колесо/тач — отменяем автопрокрутку
  useEffect(() => {
    const scroller = getScroller();
    if (!scroller) return;

    const cancel = () => stop();
    // @ts-ignore — у Window тоже есть эти события
    scroller.addEventListener("wheel", cancel, { passive: true });
    // @ts-ignore
    scroller.addEventListener("touchstart", cancel, { passive: true });

    return () => {
      // @ts-ignore
      scroller.removeEventListener("wheel", cancel);
      // @ts-ignore
      scroller.removeEventListener("touchstart", cancel);
    };
  }, []);

  // основная логика
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // небольшой гистерезис, чтобы не вызывалось на границах
    const EPS = 0.0005;

    if (running.current) return;
    if (!(v >= from - EPS && v < to - EPS)) return;

    const scroller = getScroller();
    if (!scroller) return;

    // вычисляем абсолютные координаты прокрутки
    const docHeight =
      typeof document !== "undefined"
        ? Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
          )
        : 0;

    const viewport =
      typeof window !== "undefined" ? window.innerHeight : 0;

    const maxScroll = Math.max(0, docHeight - viewport);
    const targetY = Math.min(maxScroll, Math.max(0, to * maxScroll));

    // текущее положение
    const startY =
      typeof window !== "undefined" ? window.scrollY : 0;

    const distance = targetY - startY;
    if (Math.abs(distance) < 1) return; // уже там

    // длительность по скорости (px/sec)
    const duration = Math.max(200, (Math.abs(distance) / speed) * 1000);

    running.current = true;
    const start = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      if (!running.current) return;

      const t = Math.min(1, (now - start) / duration);
      const eased = easeOutCubic(t);
      const y = startY + distance * eased;

      // @ts-ignore
      getScroller()?.scrollTo?.(0, y);

      if (t < 1) {
        rafId.current = requestAnimationFrame(step);
      } else {
        stop();
      }
    };

    rafId.current = requestAnimationFrame(step);
  });

  // чистка на размонтировании
  useEffect(() => stop, []);
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
