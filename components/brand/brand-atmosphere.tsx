import type { CSSProperties } from "react";

/*
 * Huzali atmosphere. All colour is derived from the primary token; there are
 * no extra colour tokens and pages cannot change colour, strength or shape.
 *
 * section: a faint sweep rising from the lower right, for ordinary sections.
 *          Masked at top and bottom so it never meets a neighbour with a line.
 * hero:    the faint section sweep on stacked layouts; from `lg`, one large,
 *          visible organic curve (the edge of a very large ellipse whose
 *          centre lies beyond the lower right) rising from the lower centre
 *          to the upper right behind the photographic subjects, clear of the
 *          text column. It runs off the right and bottom edges with the
 *          subjects, and fades only at the top.
 */
const sectionSweep =
  "radial-gradient(ellipse 70% 75% at 88% 100%, color-mix(in oklab, var(--color-primary) 14%, transparent) 0%, color-mix(in oklab, var(--color-primary) 7%, transparent) 45%, transparent 75%)";

const heroSweep =
  "radial-gradient(ellipse 111% 184% at 135% 190%, color-mix(in oklab, var(--color-primary) 8%, transparent) 0%, color-mix(in oklab, var(--color-primary) 16%, transparent) 96%, transparent 100%)";

const sectionFade =
  "linear-gradient(to bottom, transparent, black 25%, black 90%, transparent)";

const heroFade = "linear-gradient(to bottom, transparent, black 12%)";

type BrandAtmosphereProps = {
  /** `section` (default) for ordinary sections; `hero` for major hero surfaces. */
  variant?: "section" | "hero";
};

/**
 * Huzali's atmospheric background: a purely decorative, static layer behind
 * a section's content. Render it as the first child of a `relative isolate`
 * element; it fills that element exactly, adds no height and never receives
 * pointer events or focus.
 */
export function BrandAtmosphere({ variant = "section" }: BrandAtmosphereProps) {
  if (variant === "hero") {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background-image:var(--atmosphere-section)] [mask-image:var(--atmosphere-section-fade)] lg:[background-image:var(--atmosphere-hero)] lg:[mask-image:var(--atmosphere-hero-fade)]"
        style={
          {
            "--atmosphere-section": sectionSweep,
            "--atmosphere-section-fade": sectionFade,
            "--atmosphere-hero": heroSweep,
            "--atmosphere-hero-fade": heroFade,
          } as CSSProperties
        }
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        backgroundImage: sectionSweep,
        maskImage: sectionFade,
        WebkitMaskImage: sectionFade,
      }}
    />
  );
}
