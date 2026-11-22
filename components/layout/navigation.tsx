export type NavigationItem = {
  label: string;
  href: string;
};

export type NavigationGroup = {
  title: string;
  items: NavigationItem[];
};

/*
 * Single source of truth for Huzali Academy's public destinations. Only "/"
 * is implemented today; the others are planned pages. Home has no navigation
 * item: the Huzali wordmark is the route back to "/".
 */
const routes = {
  academy: { label: "Academy", href: "/academy" },
  courses: { label: "Courses", href: "/courses" },
  admissions: { label: "Admissions", href: "/admissions" },
  studentLife: { label: "Student Life", href: "/student-life" },
  gallery: { label: "Gallery", href: "/gallery" },
  partnerships: { label: "Partnerships", href: "/partnerships" },
  contact: { label: "Contact", href: "/contact" },
  apply: { label: "Apply Now", href: "/apply" },
} satisfies Record<string, NavigationItem>;

/* Header navigation (desktop and mobile), in display order. */
export const mainNavigation: NavigationItem[] = [
  routes.academy,
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
