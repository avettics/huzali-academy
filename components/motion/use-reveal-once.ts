import { useEffect, type RefObject } from "react";

/**
 * Delay in motion steps (`--motion-step`, 80ms). Used to sequence a few
 * related elements, e.g. headline → copy → actions in a hero.
 */
export type MotionDelay = 0 | 1 | 2 | 3 | 4;

/*
 * One IntersectionObserver shared by every motion primitive on the page.
 * Content starts revealing once its top edge is 10% inside the viewport.
 * Each element is revealed once, then unobserved.
 */
const pendingReveals = new Map<Element, () => void>();
let sharedObserver: IntersectionObserver | undefined;

function getObserver() {
  sharedObserver ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const reveal = pendingReveals.get(entry.target);
        pendingReveals.delete(entry.target);
        sharedObserver?.unobserve(entry.target);
        reveal?.();
      }
    },
    { rootMargin: "0px 0px -10% 0px" },
  );

  return sharedObserver;
}

function isInViewport(element: HTMLElement) {
  const { top, bottom } = element.getBoundingClientRect();
  return top < window.innerHeight && bottom > 0;
}

/**
 * Scroll reveal for content that is outside the viewport after hydration.
 *
 * Content in view at that point has already played its CSS entrance (see
 * motion.css) and is left untouched. Content outside it is marked
 * `data-reveal-state="pending"` (hidden) and switched to "visible" once, when
 * it enters the viewport. Nothing happens when reduced motion is requested.
 */
export function useRevealOnce(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      element.dataset.revealState === "visible" ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    if (!element.dataset.revealState) {
      if (isInViewport(element)) return;
      element.dataset.revealState = "pending";
    }

    const observer = getObserver();
    pendingReveals.set(element, () => {
      element.dataset.revealState = "visible";
    });
    observer.observe(element);

    return () => {
      pendingReveals.delete(element);
      observer.unobserve(element);
    };
  }, [ref]);
}
