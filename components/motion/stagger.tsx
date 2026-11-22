"use client";

import {
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

import { useRevealOnce, type MotionDelay } from "./use-reveal-once";

import "./motion.css";

export type StaggerProps = {
  /** `StaggerItem`s, as direct children. */
  children: ReactNode;
  className?: string;
  /** Sequence position of the whole group in motion steps (80ms each). */
  delay?: MotionDelay;
  /** Rendered element; defaults to `div`. */
  as?: "div" | "section" | "ul" | "ol";
};

/**
 * Reveals a related group as one composition: the group is revealed once and
 * its direct-child `StaggerItem`s follow each other one motion step (80ms)
 * apart, using the same fade-and-rise as `Reveal`. From the seventh item on,
 * items share the last delay so long groups still resolve quickly.
 */
export function Stagger({
  children,
  className,
  delay = 0,
  as = "div",
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  useRevealOnce(ref);

  // Typed as `div` so the ref type-checks for any allowed tag; only
  // generic element APIs (dataset, getBoundingClientRect) are used on it.
  const Component = as as "div";

  return (
    <Component
      ref={ref}
      data-motion="stagger"
      className={className}
      style={{ "--motion-delay-steps": delay } as CSSProperties}
    >
      {children}
    </Component>
  );
}

export type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  /** Rendered element; defaults to `div` (use `li` inside a `ul`/`ol` group). */
  as?: "div" | "li" | "article" | "figure";
};

export function StaggerItem({
  children,
  className,
  as = "div",
}: StaggerItemProps) {
  const Component: ElementType = as;

  return (
    <Component data-motion="stagger-item" className={className}>
      {children}
    </Component>
  );
}
