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
 * Плавный авто-скролл из доли страницы `from` в `to` (0..1).
 * - speedPxPerSec — скорость, px/сек (default: 1500)
 * - scroller — по умолчанию window; можно передать прокручиваемый контейнер (ref.current)
 * - триггерится только при движении вниз и когда попадаем внутрь коридора [from..to)
 */
export function useAutoScrollDown(
  scrollYProgress: MotionValue<number>,
  from: number,
  to: number,
  speedPxPerSec: number = 1500,
  scroller?: Window | HTMLElement | null
) {
  const runningRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const prevV = useRef(0);
  const cooldownRef = useRef<number>(0); // чтобы не триггериться постоянно на границах

  const getScroller = (): Window | HTMLElement | null =>
    (typeof window !== "undefined" ? scroller ?? window : null);

  const nowMs = () => (typeof performance !== "undefined" ? performance.now() : Date.now());

  const stop = () => {
    runningRef.current = false;
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  // отменяем автопрокрутку при любых действиях пользователя
  useEffect(() => {
    const s = getScroller();
    if (!s) return;

    const cancel = () => stop();
    const keyCancel = (e: KeyboardEvent) => {
      const keys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "];
      if (keys.includes(e.key)) stop();
    };

    s.addEventListener("wheel", cancel, { passive: true });
    s.addEventListener("touchstart", cancel, { passive: true });
    s.addEventListener("keydown", keyCancel as EventListener);

    return () => {
      s.removeEventListener("wheel", cancel as EventListener);
      s.removeEventListener("touchstart", cancel as EventListener);
      s.removeEventListener("keydown", keyCancel as EventListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroller]);

  // главная логика
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const EPS = 0.0005;
    const s = getScroller();
    if (!s) return;

    // защищаемся от частых перезапусков у границы
    if (cooldownRef.current && nowMs() < cooldownRef.current) {
      prevV.current = v;
      return;
    }

    // триггерим только при движении вниз
    const goingDown = v > prevV.current + EPS;
    prevV.current = v;
    if (!goingDown) return;

    if (runningRef.current) return;
    if (!(v >= from - EPS && v < to - EPS)) return;

    // вычисляем метрики
    const getViewportH = (): number =>
      "innerHeight" in s ? (s as Window).innerHeight : (s as HTMLElement).clientHeight;

    const getScrollTop = (): number =>
      "scrollY" in s ? (s as Window).scrollY : (s as HTMLElement).scrollTop;

    const getScrollHeight = (): number => {
      if ("document" in window) {
        const b = document.body;
        const e = document.documentElement;
        return Math.max(b.scrollHeight, e.scrollHeight);
      }
      // для контейнера
      return (s as HTMLElement).scrollHeight ?? 0;
    };

    const viewport = getViewportH();
    const maxScroll = Math.max(0, getScrollHeight() - viewport);
    const startY = getScrollTop();
    const targetY = Math.min(maxScroll, Math.max(0, to * maxScroll));
    const distance = targetY - startY;

    if (Math.abs(distance) < 1) return;

    // длительность из скорости
    const duration = Math.max(200, (Math.abs(distance) / speedPxPerSec) * 1000);
    const start = nowMs();
    runningRef.current = true;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = () => {
      if (!runningRef.current) return;

      const t = Math.min(1, (nowMs() - start) / duration);
      const y = startY + distance * easeOutCubic(t);

      // Window и HTMLElement поддерживают scrollTo
      (s as Window | HTMLElement).scrollTo({ left: 0, top: y, behavior: "auto" });

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        stop();
        // короткий «кулдаун», чтобы хук не перезапустился на той же границе
        cooldownRef.current = nowMs() + 250;
      }
    };

    rafRef.current = requestAnimationFrame(step);
  });

  // очистка
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
