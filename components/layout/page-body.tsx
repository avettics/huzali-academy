import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

/** Inline text links inside page body copy. */
export const textLinkClassName =
  "rounded-sm font-semibold text-primary underline-offset-4 transition-colors hover:text-primary-hover hover:underline";

/*
 * Standalone text links with a trailing arrow ("Explore our courses",
 * "Read Our Story"): the inline text link plus the shared icon spacing.
 * Internal destinations take `ArrowRight` (size-4); external ones
 * `ArrowUpRight`.
 */
export const arrowLinkClassName = `${textLinkClassName} inline-flex items-center gap-1.5`;

/*
 * Page body: the simple introductory content section that follows a
 * PageHeader on pages still being completed. One centred, readable column
 * (max-w-2xl) of left-aligned Manrope paragraphs on white.
 */
export function PageBody({ children }: { children: ReactNode }) {
  return (
    <Section spacing="compact">
      <Container>
        <Reveal className="mx-auto max-w-2xl space-y-5 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          {children}
        </Reveal>
      </Container>
    </Section>
  );
}
