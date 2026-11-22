"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";

import { useRevealOnce, type MotionDelay } from "./use-reveal-once";

import "./motion.css";

export type ImageRevealProps = {
  /** The photograph, e.g. a Next.js `Image`. It is never altered. */
  children: ReactNode;
  /**
   * Sizing for the frame (aspect ratio, radius, `relative` for a `fill`
   * image). The frame clips its content so the settling scale never
   * overflows.
   */
  className?: string;
  /** Sequence position in motion steps (80ms each). */
  delay?: MotionDelay;
};

/**
 * Reveals photography once, on first paint or as it scrolls into view: a
 * fade while the image settles from 1.01 to its natural scale. Works with
 * any child image implementation (a single child element).
 */
export function ImageReveal({
  children,
  className,
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useRevealOnce(ref);

  return (
    <div
      ref={ref}
      data-motion="image"
      className={className}
      style={{ "--motion-delay-steps": delay } as CSSProperties}
    >
      {children}
    </div>
  );
}
