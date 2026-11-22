"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  isCurrentHref,
  mainNavigation,
} from "@/components/layout/navigation";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

/*
 * The only pathname-aware parts of the header; everything else in the header
 * stays a Server Component.
 *
 * The current page is exposed to assistive technology through
 * `aria-current="page"` only and has no visual treatment. It is set directly
 * (not via NavigationMenuLink's `active` prop) so the primitive's
 * `data-active` styles can never apply.
 *
 * Desktop links are always Huzali charcoal, independent of the semantic
 * foreground. Hover and keyboard focus use the neutral accent surface with
 * the shared interactive radius.
 */

const desktopLinkClassName =
  "inline-flex h-9 items-center justify-center rounded-(--radius-control) bg-transparent px-3 py-0 text-[13px] font-medium tracking-[0.01em] text-charcoal transition-colors hover:bg-accent focus-visible:bg-accent";

const mobileLinkClassName =
  "flex min-h-11 items-center rounded-(--radius-control) px-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground";

function currentPage(pathname: string | undefined, href: string) {
  return pathname && isCurrentHref(pathname, href) ? "page" : undefined;
}

type DesktopNavigationItemsProps = {
  pathname?: string;
};

export function DesktopNavigationItems({
  pathname,
}: DesktopNavigationItemsProps) {
  return mainNavigation.map((item) => (
    <NavigationMenuItem key={item.href}>
      <NavigationMenuLink
        aria-current={currentPage(pathname, item.href)}
        render={<Link href={item.href} />}
        className={desktopLinkClassName}
      >
        {item.label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  ));
}

export function PathnameAwareDesktopNavigationItems() {
  const pathname = usePathname();

  return <DesktopNavigationItems pathname={pathname} />;
}

type MobileNavigationLinksProps = {
  onNavigate: () => void;
};

export function MobileNavigationLinks({
  onNavigate,
}: MobileNavigationLinksProps) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-1">
      {mainNavigation.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            aria-current={currentPage(pathname, item.href)}
            onNavigate={onNavigate}
            className={mobileLinkClassName}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
