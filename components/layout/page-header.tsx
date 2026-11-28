import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import {
  PageHeaderArtwork,
  type PageHeaderArtwork as PageHeaderArtworkVariant,
} from "@/components/layout/page-header-artwork";
import { SectionIntro } from "@/components/layout/section-intro";

export type { PageHeaderArtwork } from "@/components/layout/page-header-artwork";

type PageHeaderProps = {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** The page title, rendered as the page's only h1. */
  title: string;
  /** Short supporting copy below the title. */
  description?: string;
  /**
   * Beauty line-art around the text: "beauty" (default, mixed tools), a
   * course set ("makeup", "hair", "nails", "lashes", "skincare",
   * "massage"), or "minimal" (two softer accents).
   */
  artwork?: PageHeaderArtworkVariant;
};

/** `id` of the page title, for any element that needs to reference it. */
export const pageTitleId = "page-title";

/*
 * Page Header: the standard introduction for every internal public page
 * (the homepage keeps its own Hero). A full-width soft-lilac band with the
 * Beauty Signature decoration (Flowing Curves plus beauty line-art at the
 * outer edges) behind a centred eyebrow, h1 and description, all from the
 * shared centred SectionIntro, so the typography and spacing match every
 * other section introduction. Rendered by each page inside <main>, never by
 * the site layout.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  artwork,
}: PageHeaderProps) {
  return (
    <PageHeaderSurface artwork={artwork}>
      <SectionIntro
        align="center"
        headingLevel={1}
        eyebrow={eyebrow}
        title={title}
        titleId={pageTitleId}
        description={description}
      />
    </PageHeaderSurface>
  );
}

/*
 * Placeholder with the same surface and proportions, for pages whose title
 * streams in (e.g. course pages, whose title depends on the URL).
 */
export function PageHeaderFallback() {
  return (
    <PageHeaderSurface>
      <div
        className="mx-auto flex max-w-3xl flex-col items-center"
        aria-hidden="true"
      >
        <div className="h-3 w-24 rounded-full bg-primary/10" />
        <div className="mt-5 h-10 w-2/3 rounded-lg bg-primary/8 sm:h-11" />
        <div className="mt-6 h-4 w-full max-w-lg rounded-full bg-primary/6" />
        <div className="mt-3 h-4 w-4/5 max-w-md rounded-full bg-primary/6" />
      </div>
    </PageHeaderSurface>
  );
}

function PageHeaderSurface({
  artwork,
  children,
}: {
  artwork?: PageHeaderArtworkVariant;
  children: ReactNode;
}) {
  return (
    <header className="relative isolate overflow-hidden bg-surface-alt py-16 sm:py-18 lg:py-20">
      <FlowingCurves />
      <PageHeaderArtwork artwork={artwork} />
      <Container>{children}</Container>
    </header>
  );
}

/*
 * Flowing Curves: thin Huzali-purple lines at 12% opacity, sweeping across
 * the upper and lower parts of the band so they frame the centred text
 * rather than run through it. Purely decorative: no layout, no pointer
 * events, hidden from assistive technology. `slice` scaling covers the band
 * at any width (cropping the sides on narrow screens) and
 * `non-scaling-stroke` keeps every line hairline-thin.
 */
const upperCurves = [0, 1, 2].map((i) => {
  const y = 56 + i * 22;
  return `M -80 ${y} C 260 ${y + 90} 520 ${y - 50} 860 ${y + 40} S 1300 ${y + 20} 1520 ${y + 70}`;
});

const lowerCurves = [0, 1, 2, 3].map((i) => {
  const y = 336 - i * 24;
  return `M -80 ${y} C 220 ${y - 80 + i * 6} 420 ${y + 60 - i * 4} 720 ${y - 30} S 1200 ${y - 30} 1520 ${y - 110}`;
});

function FlowingCurves() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 -z-10 size-full text-primary opacity-12"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.25">
        {[...upperCurves, ...lowerCurves].map((d) => (
          <path key={d} d={d} vectorEffect="non-scaling-stroke" />
        ))}
      </g>
    </svg>
  );
}
