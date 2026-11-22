"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, XIcon } from "lucide-react";

import { MobileNavigationLinks } from "@/components/layout/navigation-links";
import { navigationAction } from "@/components/layout/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

/*
 * Extends a control's touch area to at least 44px with an invisible
 * pseudo-element, without changing its established visual size.
 */
const touchTargetClassName = "relative after:absolute after:-inset-1.5";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="ml-auto lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button
              variant="outline"
              size="sm"
              className={`h-9 ${touchTargetClassName}`}
              aria-label="Open navigation menu"
            >
              <Menu aria-hidden="true" />
              <span>Menu</span>
            </Button>
          }
        />

        {/*
         * Full width (no edge border) on phones, a max-w-sm panel from `sm`
         * up. The overrides use the primitive's own `data-[side=right]`
         * variant so they replace its 75% default width.
         */}
        <SheetContent
          side="right"
          showCloseButton={false}
          className="data-[side=right]:w-full data-[side=right]:max-sm:border-l-0 data-[side=right]:sm:max-w-sm"
        >
          <SheetTitle className="sr-only">Mobile navigation</SheetTitle>

          {/* Same position and 32px look as the primitive's close button. */}
          <SheetClose
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                className="absolute top-4 right-4 after:absolute after:-inset-1.5"
              />
            }
          >
            <XIcon aria-hidden="true" />
            <span className="sr-only">Close</span>
          </SheetClose>

          <nav
            className="flex flex-1 flex-col overflow-y-auto px-4 pt-14 pb-6"
            aria-label="Mobile navigation"
          >
            <MobileNavigationLinks onNavigate={close} />

            <div className="mt-6 border-t border-border pt-6">
              {/* A navigation action, so a real link styled as the primary button. */}
              <Link
                href={navigationAction.href}
                onNavigate={close}
                className={cn(
                  buttonVariants({
                    className: `w-full font-semibold ${touchTargetClassName}`,
                  }),
                )}
              >
                {navigationAction.label}
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
