"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";

import {
  isCurrentChildHref,
  isCurrentHref,
  mainNavigation,
  type NavigationItem,
} from "@/components/layout/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

/*
 * The only pathname-aware parts of the header; everything else in the header
 * stays a Server Component.
 *
 * The current page is exposed to assistive technology through
 * `aria-current="page"` and shown in Huzali purple. It is set directly (not
 * via NavigationMenuLink's `active` prop) so the primitive's `data-active`
 * styles can never apply. A section with sub-pages (The Academy) stays
 * purple on all of them through `data-current` on its trigger, which is a
 * button and so never carries `aria-current`.
 *
 * Desktop links are otherwise Huzali charcoal, independent of the semantic
 * foreground. Hover and keyboard focus use the neutral accent surface with
 * the shared interactive radius.
 */

const currentClassName =
  "aria-[current=page]:text-primary data-current:text-primary";

const desktopLinkClassName = cn(
  "inline-flex h-9 items-center justify-center rounded-(--radius-control) bg-transparent px-3 py-0 text-[13px] font-medium tracking-[0.01em] text-charcoal transition-colors hover:bg-accent focus-visible:bg-accent",
  currentClassName,
);

/* The dropdown trigger: a desktop link, also accented while its menu is open. */
const desktopTriggerClassName = cn(
  desktopLinkClassName,
  "focus:bg-transparent focus-visible:bg-accent data-open:bg-accent data-open:hover:bg-accent data-open:focus:bg-accent data-popup-open:bg-accent data-popup-open:hover:bg-accent",
);

const desktopDropdownLinkClassName = cn(
  "flex flex-col items-start gap-0.5 rounded-(--radius-control) px-3 py-2.5 text-charcoal hover:bg-accent focus-visible:bg-accent",
  currentClassName,
);

const mobileLinkClassName = cn(
  "flex min-h-11 items-center rounded-(--radius-control) px-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground",
  currentClassName,
);

function currentPage(pathname: string | undefined, href: string) {
  return pathname && isCurrentHref(pathname, href) ? "page" : undefined;
}

function currentChildPage(
  pathname: string | undefined,
  parent: NavigationItem,
  href: string,
) {
  return pathname && isCurrentChildHref(pathname, parent, href)
    ? "page"
    : undefined;
}

function isCurrentSection(pathname: string | undefined, item: NavigationItem) {
  return Boolean(pathname && isCurrentHref(pathname, item.href));
}

type DesktopNavigationItemsProps = {
  pathname?: string;
};

export function DesktopNavigationItems({
  pathname,
}: DesktopNavigationItemsProps) {
  return mainNavigation.map((item) =>
    item.children ? (
      <NavigationMenuItem key={item.href}>
        <NavigationMenuTrigger
          data-current={isCurrentSection(pathname, item) || undefined}
          className={desktopTriggerClassName}
        >
          {item.label}
        </NavigationMenuTrigger>

        {/*
         * A compact list of the section's pages, never a mega menu, inside
         * the shared popup card (white, hairline border, 8px radius).
         */}
        <NavigationMenuContent className="p-2">
          <ul className="flex w-80 flex-col gap-0.5">
            {item.children.map((child) => (
              <li key={child.href}>
                <NavigationMenuLink
                  aria-current={currentChildPage(pathname, item, child.href)}
                  closeOnClick
                  render={<Link href={child.href} />}
                  className={desktopDropdownLinkClassName}
                >
                  <span className="text-sm font-medium">{child.label}</span>
                  {child.description ? (
                    <span className="text-[13px] leading-snug text-muted-foreground">
                      {child.description}
                    </span>
                  ) : null}
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    ) : (
      <NavigationMenuItem key={item.href}>
        <NavigationMenuLink
          aria-current={currentPage(pathname, item.href)}
          render={<Link href={item.href} />}
          className={desktopLinkClassName}
        >
          {item.label}
        </NavigationMenuLink>
      </NavigationMenuItem>
    ),
  );
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
          {item.children ? (
            <MobileNavigationGroup
              item={item}
              pathname={pathname}
              onNavigate={onNavigate}
            />
          ) : (
            <Link
              href={item.href}
              aria-current={currentPage(pathname, item.href)}
              onNavigate={onNavigate}
              className={mobileLinkClassName}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

/*
 * A section with sub-pages in the mobile menu: a full-width toggle (open
 * from the start when one of its pages is current) revealing the pages,
 * indented under a hairline. Choosing a page closes the Sheet.
 */
function MobileNavigationGroup({
  item,
  pathname,
  onNavigate,
}: {
  item: NavigationItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const current = isCurrentSection(pathname, item);

  return (
    <Collapsible defaultOpen={current}>
      <CollapsibleTrigger
        data-current={current || undefined}
        className={cn(mobileLinkClassName, "group w-full justify-between")}
      >
        {item.label}
        <ChevronDownIcon
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-data-panel-open:rotate-180 motion-reduce:transition-none"
        />
      </CollapsibleTrigger>

      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0 motion-reduce:transition-none">
        <ul className="mt-1 ml-3 flex flex-col gap-1 border-l border-border pl-2">
          {item.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                aria-current={currentChildPage(pathname, item, child.href)}
                onNavigate={onNavigate}
                className={mobileLinkClassName}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
