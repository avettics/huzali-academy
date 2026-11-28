import { developmentPreview } from "@/lib/publication";

/*
 * Huzali Beauty Academy's partners. Local content until a CMS source
 * replaces it; components consume the `Partner` shape only.
 *
 * Add an organisation only once the partnership and the use of its logo are
 * confirmed. While the list is empty, the homepage shows the partnerships
 * message without a logo row.
 */

export type PartnerLogo = {
  /**
   * A static import (e.g. `import logo from "@/public/partners/acme.svg"`)
   * or an absolute URL from a CMS. Static imports already carry width and
   * height.
   */
  src: string;
  /** Intrinsic size, used for the aspect ratio; display height is fixed. */
  width: number;
  height: number;
};

export type Partner = {
  name: string;
  logo: PartnerLogo;
  /** Describes the logo, e.g. "Acme Foundation logo". */
  alt: string;
  /** Verified partner website. Omit until confirmed: the logo is then not a link. */
  href?: string;
};

/** The partnerships page. */
export const partnershipsHref = "/partnerships";

/* Confirmed partners, in display order. */
export const partners: Partner[] = [];

/*
 * TEMPORARY — DEVELOPMENT ONLY. Not partners: six copies of one neutral
 * placeholder mark, used to review the logo strip during development. They
 * are never shown in production and stop showing in development as soon as
 * `partners` has an entry. Remove this block and
 * `public/partners/placeholder-logo.svg` once real partners are added.
 */
const placeholderPartners: Partner[] = Array.from({ length: 6 }, (_, index) => ({
  name: `Placeholder ${index + 1}`,
  logo: { src: "/partners/placeholder-logo.svg", width: 128, height: 40 },
  alt: "Placeholder logo (development only)",
}));

/** The partners the homepage shows: confirmed ones, or the dev-only placeholders. */
export const displayedPartners: Partner[] =
  partners.length > 0
    ? partners
    : developmentPreview
      ? placeholderPartners
      : [];
