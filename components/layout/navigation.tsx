import { storyPublished, teamPublished } from "@/lib/publication";

export type NavigationItem = {
  label: string;
  href: string;
  /** One-line summary, shown in the desktop Academy dropdown. */
  description?: string;
  /**
   * Sub-pages, shown as a dropdown (desktop) or an expandable group
   * (mobile). The first is the section's own overview page.
   */
  children?: NavigationItem[];
};

export type NavigationGroup = {
  title: string;
  items: NavigationItem[];
};

/*
 * Single source of truth for Huzali Academy's public destinations. Only "/"
 * and "/courses" are implemented today; the others are planned pages. Home
 * has no navigation item: the Huzali wordmark is the route back to "/".
 */
const routes = {
  academy: { label: "The Academy", href: "/academy" },
  courses: { label: "Courses", href: "/courses" },
  admissions: { label: "Admissions", href: "/admissions" },
  studentLife: { label: "Student Life", href: "/student-life" },
  gallery: { label: "Gallery", href: "/gallery" },
  partnerships: { label: "Partnerships", href: "/partnerships" },
  contact: { label: "Contact", href: "/contact" },
  apply: { label: "Apply Now", href: "/apply" },
} satisfies Record<string, NavigationItem>;

export const ourStoryHref = "/academy/our-story";

/*
 * The Academy's pages. Our Story and Our Team are listed only while their
 * pages are published (see lib/publication.ts); with only the overview
 * left, The Academy is a plain link rather than a one-item dropdown.
 */
const academyPages: NavigationItem[] = [
  {
    label: "Overview",
    href: routes.academy.href,
    description: "Discover Huzali Beauty Academy.",
  },
  ...(storyPublished
    ? [
        {
          label: "Our Story",
          href: ourStoryHref,
          description: "Our beginnings, founders and journey.",
        },
      ]
    : []),
  ...(teamPublished
    ? [
        {
          label: "Our Team",
          href: "/academy/our-team",
          description: "Meet our Academy leadership and instructors.",
        },
      ]
    : []),
];

/* Header navigation (desktop and mobile), in display order. */
export const mainNavigation: NavigationItem[] = [
  academyPages.length > 1
    ? { ...routes.academy, children: academyPages }
    : routes.academy,
  routes.courses,
  routes.admissions,
  routes.studentLife,
  routes.gallery,
  routes.partnerships,
  routes.contact,
];

export const navigationAction = routes.apply;

export const footerNavigation: NavigationGroup[] = [
  {
    title: "Academy",
    items: [routes.courses, routes.admissions, routes.studentLife],
  },
  {
    title: "Huzali",
    items: [routes.academy, routes.partnerships, routes.contact],
  },
];

export type SocialLink = {
  label: string;
  /**
   * Verified profile URL. Leave undefined until the owner confirms it; the
   * footer then lists the platform without a link (never a `#` placeholder).
   */
  href?: string;
};

/*
 * Huzali's social platforms. No verified profile URLs exist yet: add each
 * confirmed URL as `href`.
 */
export const socialNavigation: SocialLink[] = [
  { label: "Instagram" },
  { label: "TikTok" },
  { label: "Facebook" },
];

/** Whether `href` is the current page or one of its sub-pages. */
export function isCurrentHref(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/*
 * Whether a section's sub-page is the current page. A section's overview
 * shares the section's own href, so it matches that page exactly (it is
 * not current on its sibling sub-pages).
 */
export function isCurrentChildHref(
  pathname: string,
  parent: NavigationItem,
  href: string,
) {
  return href === parent.href
    ? pathname === href
    : isCurrentHref(pathname, href);
}
