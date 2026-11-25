import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight } from "lucide-react";

import {
  DesktopNavigationItems,
  PathnameAwareDesktopNavigationItems,
} from "@/components/layout/navigation-links";
import { navigationAction } from "@/components/layout/navigation";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function DesktopNavigation() {
  return (
    <>
      <NavigationMenu
        className="hidden w-max max-w-none flex-none justify-self-center lg:flex"
        aria-label="Main navigation"
      >
        <NavigationMenuList className="items-center gap-1">
          {/*
           * Reading the pathname can suspend on routes whose params are only
           * known at request time; the fallback keeps the header prerendered.
           */}
          <Suspense fallback={<DesktopNavigationItems />}>
            <PathnameAwareDesktopNavigationItems />
          </Suspense>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden shrink-0 items-center justify-self-end lg:flex">
        {/* A navigation action, so a real link styled as the primary button. */}
        <Link
          href={navigationAction.href}
          className={cn(
            buttonVariants({
              size: "sm",
              className: "h-9 gap-1.5 px-5 text-[13px] font-semibold shadow-sm",
            }),
          )}
        >
          {navigationAction.label}
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
