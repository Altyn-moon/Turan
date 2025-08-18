import { MotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Плавный авто-скролл из доли страницы `from` в `to` (0..1).
 * speedPxPerSec — скорость (px/сек), по умолчанию быстрее (~2600).
 * Работает только при движении вниз. В конце принудительно фиксируемся на целевой высоте.
 */
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

export default useAutoScrollDown;