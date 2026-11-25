import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  /** Small uppercase label above the heading. */
  eyebrow: string;
  /** Section heading (the section's h2, or the page's h1). */
  title: ReactNode;
  /** `id` for the heading, so the section can use `aria-labelledby`. */
  titleId: string;
  /** Short supporting copy, visually secondary to the heading. */
  description?: ReactNode;
  /** `left` (default), aligned to the Container's left edge, or `center`. */
  align?: "left" | "center";
  /** 2 (default) for a section heading; 1 when the intro opens a page. */
  headingLevel?: 1 | 2;
};

/*
 * Section introduction: eyebrow, Playfair heading and a narrower Manrope
 * description. Left-aligned by default; centered when explicitly asked.
 *
 * Left-aligned (default): starts at the Container's content edge, like the
 * photographs and cards below it. The heading may use the full content width
 * (wrapping naturally, balanced, when it doesn't fit); the description is
 * capped at `max-w-2xl` (~75 characters per line on desktop).
 *
 * Centered: one centred block within `max-w-3xl` (room for a one-line
 * heading on desktop) with a narrower `max-w-lg` description.
 */
export function SectionIntro({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  headingLevel = 2,
}: SectionIntroProps) {
  const centered = align === "center";
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <div
      className={cn(
        centered && "mx-auto max-w-3xl text-center",
      )}
    >
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          {eyebrow}
        </p>
        <Heading
          id={titleId}
          className="mt-4 font-heading text-3xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
        >
          {title}
        </Heading>
      </Reveal>

      {description ? (
        <Reveal
          as="p"
          delay={1}
          className={cn(
            "mt-5 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg",
            centered ? "mx-auto max-w-lg" : "max-w-2xl",
          )}
        >
          {description}
        </Reveal>
      ) : null}
    </div>
  );
}
