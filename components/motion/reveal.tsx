"use client";

import {
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

import { useRevealOnce, type MotionDelay } from "./use-reveal-once";

import "./motion.css";

export type RevealElement =
  | "div"
  | "section"
  | "header"
  | "footer"
  | "article"
  | "aside"
  | "figure"
  | "p"
  | "ul"
  | "ol"
  | "li";

export type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Sequence position in motion steps (80ms each). */
  delay?: MotionDelay;
  /** Rendered element; defaults to `div`. */
  as?: RevealElement;
};

/**
 * Gently introduces content, once: a fade with a small rise, on first paint
 * when in view or as it scrolls into view. Server-rendered children stay
 * server-rendered; content is visible without JavaScript or with reduced
 * motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useRevealOnce(ref);

  // Typed as `div` so the ref type-checks for any allowed tag; only
  // generic element APIs (dataset, getBoundingClientRect) are used on it.
  const Component = as as "div";

  return (
    <Component
      ref={ref}
      data-motion="reveal"
      className={className}
      style={{ "--motion-delay-steps": delay } as CSSProperties}
    >
      {children}
    </Component>
  );
}
