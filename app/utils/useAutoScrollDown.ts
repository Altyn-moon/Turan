/*import { MotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef } from "react";

export function useAutoScrollDown(
  scrollYProgress: MotionValue<number>,
  from: number,
  to: number,
  speedPxPerSec: number = 2600,
  scroller?: Window | HTMLElement | null
) {
  const runningRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const prevV = useRef(0);
  const cooldownUntil = useRef(0);
  const lastTarget = useRef<number | null>(null);

  const getScroller = (): Window | HTMLElement | null =>
    (typeof window !== "undefined" ? scroller ?? window : null);

  const now = () => (typeof performance !== "undefined" ? performance.now() : Date.now());

  const stop = () => {
    runningRef.current = false;
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  // Отменяем автопрокрутку при ручных действиях пользователя
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

  // Главная логика
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const EPS = 0.002; // больше порог — меньше дрожания на границах
    const s = getScroller();
    if (!s) return;

    // cooldown, чтобы не перезапускаться тут же
    if (cooldownUntil.current && now() < cooldownUntil.current) {
      prevV.current = v;
      return;
    }

    // триггерим только при заметном движении вниз
    const goingDown = v > prevV.current + EPS;
    prevV.current = v;
    if (!goingDown) return;

    if (runningRef.current) return;
    if (!(v >= from - EPS && v < to - EPS)) return;

    // Метрики
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
      return (s as HTMLElement).scrollHeight ?? 0;
    };

    const viewport = getViewportH();
    const maxScroll = Math.max(0, getScrollHeight() - viewport);
    const startY = getScrollTop();
    const targetY = Math.min(maxScroll, Math.max(0, to * maxScroll));

    // Если мы уже очень близко — просто защёлкнуться на место и выйти
    if (Math.abs(targetY - startY) < 1) {
      (s as Window | HTMLElement).scrollTo({ left: 0, top: targetY, behavior: "auto" });
      lastTarget.current = targetY;
      cooldownUntil.current = now() + 250;
      return;
    }

    // Не перезапускать на тот же target подряд
    if (lastTarget.current === targetY) return;
    lastTarget.current = targetY;

    const distance = targetY - startY;
    const duration = Math.max(160, (Math.abs(distance) / speedPxPerSec) * 1000); // чуть быстрее
    const t0 = now();
    runningRef.current = true;

    // Профиль ускорения — более «резвый» в начале
    const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

    const step = () => {
      if (!runningRef.current) return;
      const t = Math.min(1, (now() - t0) / duration);
      const y = startY + distance * easeOutQuad(t);
      (s as Window | HTMLElement).scrollTo({ left: 0, top: y, behavior: "auto" });

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // финальная фиксация — защищает от «подпрыгивания» вверх
        (s as Window | HTMLElement).scrollTo({ left: 0, top: targetY, behavior: "auto" });
        stop();
        cooldownUntil.current = now() + 300;
      }
    };

    rafRef.current = requestAnimationFrame(step);
  });

  useEffect(() => stop, []);
}

export default useAutoScrollDown;*/

// app/utils/useAutoScrollDown.ts
import { MotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Плавный автоскролл из доли страницы [from..to) (0..1).
 * - speedPxPerSec — скорость px/сек (по умолчанию 2800).
 * - Работает только при движении ВНИЗ.
 * - Отменяется при любом ручном взаимодействии (колёсико, тач, клавиши, drag скроллбара).
 */
export function useAutoScrollDown(
  scrollYProgress: MotionValue<number>,
  from: number,
  to: number,
  speedPxPerSec: number = 2800,
  scroller?: Window | HTMLElement | null
) {
  const runningRef = useRef(false);        // сейчас анимируем мы
  const animRafRef = useRef<number | null>(null);
  const prevProgress = useRef(0);
  const cooldownUntil = useRef(0);         // пока > now() — автоскролл не стартует
  const lastTargetSnap = useRef<number | null>(null);

  // для отличия «нашего» скролла от пользовательского
  const programmaticScrollRef = useRef(false);
  const programmaticScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const now = () => (typeof performance !== "undefined" ? performance.now() : Date.now());
  const getScroller = (): Window | HTMLElement | null =>
    (typeof window !== "undefined" ? scroller ?? window : null);

  const stop = () => {
    runningRef.current = false;
    if (animRafRef.current != null) {
      cancelAnimationFrame(animRafRef.current);
      animRafRef.current = null;
    }
  };

  const setProgrammaticScroll = (ms = 80) => {
    programmaticScrollRef.current = true;
    if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);
    programmaticScrollTimer.current = setTimeout(() => {
      programmaticScrollRef.current = false;
    }, ms);
  };

  // Отмена при любой ручной активности (включая drag скроллбара и быстрый «рывок»)
  useEffect(() => {
    const s = getScroller();
    if (!s) return;

    const cancel = () => {
      stop();
      cooldownUntil.current = now() + 350; // короткий кулдаун
    };

    const keyCancel = (e: KeyboardEvent) => {
      const keys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "];
      if (keys.includes(e.key)) cancel();
    };

    // wheel/touch/keydown — очевидно ручное
    s.addEventListener("wheel", cancel, { passive: true });
    s.addEventListener("touchstart", cancel, { passive: true });
    s.addEventListener("keydown", keyCancel as EventListener);

    // pointerdown — захват полосы прокрутки / drag
    s.addEventListener("pointerdown", cancel as EventListener, { passive: true });

    // Любой scroll, который не наш – считаем ручным и ставим кулдаун
    const onScroll = () => {
      if (programmaticScrollRef.current) return; // наш scroll — игнорим
      cooldownUntil.current = now() + 300;
      // если в этот момент шла анимация — остановим
      if (runningRef.current) stop();
    };

    // Window и HTMLElement оба имеют событие scroll
    s.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      s.removeEventListener("wheel", cancel as EventListener);
      s.removeEventListener("touchstart", cancel as EventListener);
      s.removeEventListener("keydown", keyCancel as EventListener);
      s.removeEventListener("pointerdown", cancel as EventListener);
      s.removeEventListener("scroll", onScroll as EventListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroller]);

  // Главная логика
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const EPS = 0.0025; // гистерезис на границах
    const s = getScroller();
    if (!s) return;

    // пока действует кулдаун — выходим
    if (cooldownUntil.current > now()) {
      prevProgress.current = v;
      return;
    }

    // запускать только при движении вниз
    const goingDown = v > prevProgress.current + EPS;
    prevProgress.current = v;
    if (!goingDown) return;

    if (runningRef.current) return;
    if (!(v >= from - EPS && v < to - EPS)) return;

    // Метрики
    const getViewportH = (): number =>
      "innerHeight" in s ? (s as Window).innerHeight : (s as HTMLElement).clientHeight;

    const getScrollTop = (): number =>
      "scrollY" in s ? (s as Window).scrollY : (s as HTMLElement).scrollTop;

    const getScrollHeight = (): number => {
      if (typeof document !== "undefined") {
        const b = document.body;
        const e = document.documentElement;
        return Math.max(b.scrollHeight, e.scrollHeight);
      }
      return (s as HTMLElement).scrollHeight ?? 0;
    };

    const viewport = getViewportH();
    const maxScroll = Math.max(0, getScrollHeight() - viewport);
    const startY = getScrollTop();
    const targetY = Math.min(maxScroll, Math.max(0, to * maxScroll));

    // если почти на месте — просто снап и кулдаун, чтобы не «дрожало»
    if (Math.abs(targetY - startY) < 1) {
      programmaticScrollRef.current = true;
      (s as Window | HTMLElement).scrollTo({ left: 0, top: targetY, behavior: "auto" });
      setProgrammaticScroll();
      lastTargetSnap.current = targetY;
      cooldownUntil.current = now() + 250;
      return;
    }

    // не перезапускаем на тот же самый target
    if (lastTargetSnap.current === targetY) return;
    lastTargetSnap.current = targetY;

    const distance = targetY - startY;
    const duration = Math.max(140, (Math.abs(distance) / speedPxPerSec) * 1000); // чуточку быстрее
    const t0 = now();
    runningRef.current = true;

    // более «резвый» старт, мягкая остановка
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = () => {
      if (!runningRef.current) return;

      const t = Math.min(1, (now() - t0) / duration);
      const y = startY + distance * easeOutCubic(t);

      programmaticScrollRef.current = true;
      (s as Window | HTMLElement).scrollTo({ left: 0, top: y, behavior: "auto" });
      setProgrammaticScroll();

      if (t < 1) {
        animRafRef.current = requestAnimationFrame(step);
      } else {
        // финальная фиксация на цели (без подпрыгивания)
        programmaticScrollRef.current = true;
        (s as Window | HTMLElement).scrollTo({ left: 0, top: targetY, behavior: "auto" });
        setProgrammaticScroll();

        stop();
        cooldownUntil.current = now() + 320; // небольшой пост-кулдаун
      }
    };

    animRafRef.current = requestAnimationFrame(step);
  });

  // очистка
  useEffect(() => stop, []);
}

export default useAutoScrollDown;
