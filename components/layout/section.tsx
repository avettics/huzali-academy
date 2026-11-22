import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const spacingClassName = {
  compact: "py-12 sm:py-16 lg:py-20",
  default: "py-16 sm:py-20 lg:py-28",
  spacious: "py-20 sm:py-28 lg:py-36",
} as const;

type SectionProps = ComponentProps<"section"> & {
  /** Opt-in vertical rhythm. When omitted, no padding is applied. */
  spacing?: keyof typeof spacingClassName;
};

/**
 * Lightweight section wrapper for pages. Applies nothing by default. For a
 * dark section, add the `dark` class: it re-maps the semantic tokens for the
 * subtree (see `.dark` in globals.css).
 */
export function Section({ spacing, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(spacing && spacingClassName[spacing], className)}
      {...props}
    />
  );
}
