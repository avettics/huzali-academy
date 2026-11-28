import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/*
 * Beauty Signature artwork for the PageHeader: refined line drawings of
 * beauty tools framing the centred text, over the Flowing Curves.
 *
 * Every drawing sits on the same 64×64 grid and is stroked (never filled)
 * in `currentColor` (Huzali purple) with a 1.5px non-scaling stroke, so all
 * tools share one line weight at any size. Purely decorative: no layout,
 * no pointer events, hidden from assistive technology, never focusable.
 */

export type PageHeaderArtwork =
  | "beauty"
  | "makeup"
  | "hair"
  | "nails"
  | "lashes"
  | "skincare"
  | "massage"
  | "minimal";

const drawings = {
  makeupBrush: (
    <>
      <path d="M29 22c-2-8 0-16 3-19 3 3 5 11 3 19Z" />
      <path d="M32 7v13" />
      <rect x="29" y="22" width="6" height="8" rx="1" />
      <path d="M30 30l-1.5 28c1.5 3 5.5 3 7 0L34 30" />
    </>
  ),
  palette: (
    <>
      <rect x="8" y="16" width="48" height="34" rx="5" />
      <circle cx="19" cy="27" r="4.5" />
      <circle cx="32" cy="27" r="4.5" />
      <circle cx="45" cy="27" r="4.5" />
      <circle cx="19" cy="40" r="4.5" />
      <circle cx="32" cy="40" r="4.5" />
      <circle cx="45" cy="40" r="4.5" />
    </>
  ),
  lipstick: (
    <>
      <path d="M27 26V13l10-7v20" />
      <rect x="26" y="26" width="12" height="10" rx="1" />
      <rect x="23" y="36" width="18" height="24" rx="2" />
      <path d="M23 44h18" />
    </>
  ),
  compact: (
    <>
      <circle cx="32" cy="36" r="21" />
      <circle cx="32" cy="36" r="15" />
      <path d="M24 31a10 10 0 0 1 8-5" />
      <rect x="28" y="12" width="8" height="3.5" rx="1" />
    </>
  ),
  scissors: (
    <>
      <path d="M27 44 41 7c1 3 0.5 5-1 8L31 45" />
      <path d="M37 44 23 7c-1 3-0.5 5 1 8l9 30" />
      <circle cx="32" cy="27" r="1.5" />
      <circle cx="22" cy="51" r="7" />
      <circle cx="42" cy="51" r="7" />
    </>
  ),
  comb: (
    <>
      <rect x="8" y="20" width="48" height="9" rx="3" />
      <path d="M12 29v15M16 29v15M20 29v15M24 29v15M28 29v15M32 29v15M36 29v15M40 29v15M44 29v15M48 29v15M52 29v15" />
    </>
  ),
  hairDryer: (
    <>
      <rect x="8" y="12" width="38" height="22" rx="11" />
      <rect x="46" y="17" width="10" height="12" rx="2" />
      <circle cx="19" cy="23" r="5" />
      <path d="M21 34l-2 24h9l2-24" />
    </>
  ),
  roundBrush: (
    <>
      <rect x="26" y="6" width="12" height="30" rx="6" />
      <path d="M22 11h4M38 11h4M22 16h4M38 16h4M22 21h4M38 21h4M22 26h4M38 26h4M22 31h4M38 31h4" />
      <rect x="29" y="36" width="6" height="24" rx="3" />
    </>
  ),
  polish: (
    <>
      <rect x="27" y="4" width="10" height="18" rx="2" />
      <rect x="25" y="22" width="14" height="5" rx="1" />
      <path d="M24 27h16c3.5 0 6 2.5 6 6v21c0 3.5-2.5 6-6 6H24c-3.5 0-6-2.5-6-6V33c0-3.5 2.5-6 6-6Z" />
      <path d="M23 36v14" />
    </>
  ),
  nailFile: (
    <>
      <rect x="28" y="4" width="8" height="56" rx="4" />
      <path d="M32 10v34" strokeDasharray="1.5 3" />
      <path d="M28 48h8" />
    </>
  ),
  manicureBrush: (
    <>
      <rect x="10" y="20" width="44" height="14" rx="7" />
      <circle cx="47" cy="27" r="2" />
      <path d="M15 34v10M20 34v10M25 34v10M30 34v10M35 34v10M40 34v10M45 34v10M50 34v10" />
    </>
  ),
  dottingTool: (
    <>
      <circle cx="32" cy="9" r="3" />
      <rect x="30" y="13" width="4" height="36" rx="2" />
      <circle cx="32" cy="54" r="4.5" />
    </>
  ),
  eyelash: (
    <>
      <path d="M8 30q24 18 48 0" />
      <path d="M14 35l-3 7M20 38.5l-2 7.5M26 40.5l-1 7.5M32 41v8M38 40.5l1 7.5M44 38.5l2 7.5M50 35l3 7" />
    </>
  ),
  tweezers: (
    <>
      <rect x="27" y="3" width="10" height="5" rx="1.5" />
      <path d="M28 8 25 42c-0.5 10 6.5 17 6.5 17l1-1c-4-7-3-16-3-16L31 8Z" />
      <path d="M36 8l3 34c0.5 10-6 17.5-6 17.5l-1-1c4-7 3-16.5 3-16.5L33 8Z" />
      <path d="M26.8 24h2.8M26.6 28h2.8M34.4 24h2.8M34.6 28h2.8" />
    </>
  ),
  spoolie: (
    <>
      <path d="M32 4v26" />
      <path d="M27 7h10M26 10h12M26 13h12M26 16h12M26 19h12M26 22h12M27 25h10" />
      <rect x="30" y="30" width="4" height="30" rx="2" />
    </>
  ),
  lashCurler: (
    <>
      <path d="M14 22q18-12 36 0" />
      <path d="M14 22q18 8 36 0" />
      <path d="M18 24l6 34M46 24l-6 34" />
      <path d="M24 58h-6M40 58h6" />
    </>
  ),
  dropper: (
    <>
      <path d="M28 24V12c0-3.5 1.5-6 4-6s4 2.5 4 6v12" />
      <rect x="26" y="24" width="12" height="6" rx="1" />
      <rect x="20" y="30" width="24" height="30" rx="4" />
      <path d="M52 38c2 3 2 6 0 7.5-2-1.5-2-4.5 0-7.5Z" />
    </>
  ),
  pumpBottle: (
    <>
      <path d="M29 18v-6h15v4" />
      <rect x="27" y="18" width="10" height="8" rx="1" />
      <rect x="20" y="26" width="24" height="34" rx="5" />
      <rect x="25" y="36" width="14" height="12" rx="1" />
    </>
  ),
  creamJar: (
    <>
      <rect x="12" y="18" width="40" height="10" rx="3" />
      <path d="M14 28h36v22c0 3.5-2.5 6-6 6H20c-3.5 0-6-2.5-6-6Z" />
      <path d="M20 40h24" />
    </>
  ),
  leaf: (
    <>
      <path d="M32 60c-2-20 2-40 2-54" />
      <path d="M33 20c9-4 15-10 17-16-8 1-14 6-17 16Z" />
      <path d="M32 34c-9-2-16-8-20-16 9 1 16 6 20 16Z" />
      <path d="M33 46c9-1 16-6 19-14-9 1-15 5-19 14Z" />
    </>
  ),
  oilBottle: (
    <>
      <rect x="27" y="6" width="10" height="8" rx="2" />
      <path d="M26 14h12v6c7 4 10 10 10 20v12c0 5-3 8-8 8H24c-5 0-8-3-8-8V40c0-10 3-16 10-20Z" />
      <path d="M24 40h16" />
    </>
  ),
  stones: (
    <>
      <ellipse cx="32" cy="52" rx="20" ry="7" />
      <ellipse cx="32" cy="38" rx="15" ry="6" />
      <ellipse cx="32" cy="26" rx="10" ry="5" />
      <ellipse cx="32" cy="16.5" rx="6" ry="3.5" />
    </>
  ),
  towel: (
    <>
      <rect x="8" y="22" width="48" height="22" rx="11" />
      <circle cx="19" cy="33" r="6.5" />
      <circle cx="19" cy="33" r="2.5" />
      <path d="M40 22v22" />
    </>
  ),
} satisfies Record<string, ReactNode>;

type Drawing = keyof typeof drawings;

/*
 * Drawings per variant, in slot order: upper left, lower left, upper right,
 * lower right. Phones show the first and last only, so those are the most
 * recognisable tool of each set.
 */
const artworkSets: Record<PageHeaderArtwork, Drawing[]> = {
  beauty: ["makeupBrush", "polish", "scissors", "pumpBottle"],
  makeup: ["makeupBrush", "palette", "lipstick", "compact"],
  hair: ["scissors", "comb", "hairDryer", "roundBrush"],
  nails: ["polish", "nailFile", "manicureBrush", "dottingTool"],
  lashes: ["eyelash", "tweezers", "spoolie", "lashCurler"],
  skincare: ["dropper", "pumpBottle", "creamJar", "leaf"],
  massage: ["oilBottle", "stones", "leaf", "towel"],
  minimal: ["makeupBrush", "leaf"],
};

/*
 * Slot positions, at the outer edges of the band and clear of the centred
 * text (max-w-3xl). Below `md` only the upper-left and lower-right slots
 * show, small and inside the band's vertical padding, cropping at the edge.
 */
const slots = {
  upperLeft:
    "-left-2 top-2 size-11 -rotate-12 md:top-5 md:left-6 md:size-14 lg:top-7 lg:left-[4%] lg:size-18 xl:top-9 xl:left-[7%] xl:size-20",
  lowerLeft:
    "hidden md:block md:bottom-7 md:left-16 md:size-14 md:rotate-12 lg:bottom-9 lg:left-[14%] lg:size-18",
  upperRight:
    "hidden md:block md:top-5 md:right-16 md:size-12 md:rotate-12 lg:top-7 lg:right-[11%] lg:size-16 xl:top-9 xl:right-[14%] xl:size-18",
  lowerRight:
    "-right-2 bottom-2 size-11 -rotate-6 md:right-6 md:bottom-7 md:size-16 lg:right-[7%] lg:bottom-9 lg:size-20",
};

const fourSlots = [
  slots.upperLeft,
  slots.lowerLeft,
  slots.upperRight,
  slots.lowerRight,
];
const twoSlots = [slots.upperLeft, slots.lowerRight];

export function PageHeaderArtwork({
  artwork = "beauty",
}: {
  artwork?: PageHeaderArtwork;
}) {
  const set = artworkSets[artwork];
  const positions = set.length === 4 ? fourSlots : twoSlots;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 text-primary"
    >
      {set.map((name, index) => (
        <svg
          key={name}
          viewBox="0 0 64 64"
          focusable="false"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "absolute **:[vector-effect:non-scaling-stroke]",
            artwork === "minimal" ? "opacity-16" : "opacity-26",
            positions[index],
          )}
        >
          {drawings[name]}
        </svg>
      ))}
    </div>
  );
}
