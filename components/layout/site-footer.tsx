import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import {
  footerNavigation,
  socialNavigation,
} from "@/components/layout/navigation";

/*
 * Footer links are quiet editorial text links: muted text that turns to the
 * foreground colour on hover or keyboard focus, never a background surface
 * (the accent surface + shared control radius belong to header/controls).
 * Keyboard focus also gets the global charcoal focus ring.
 */
const footerLinkClassName =
  "text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground";

/* Small, decorative "external" arrow that follows a label. */
function ExternalArrow() {
  return <ArrowUpRight className="size-3 shrink-0" aria-hidden="true" />;
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <Container className="py-5 sm:py-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[1.8fr_repeat(3,1fr)] lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            {/*
             * Understated footer signature naming the Academy domain. Smaller
             * and quieter than the header "Huzali" wordmark (25px).
             */}
            <Link
              href="/"
              className="inline-block font-heading text-lg font-medium leading-none tracking-[-0.01em] whitespace-nowrap text-charcoal"
            >
              Huzali
            </Link>

            <p className="mt-2.5 text-sm text-muted-foreground">
              Beauty. Skills. Opportunity. Growth.
            </p>
          </div>

          {footerNavigation.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold text-foreground">
                {group.title}
              </h2>

              <ul className="mt-2.5 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-[13px] font-medium ${footerLinkClassName}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Social media">
            <h2 className="text-sm font-semibold text-foreground">Follow us</h2>

            <ul className="mt-2.5 space-y-1.5">
              {socialNavigation.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-[13px] font-medium ${footerLinkClassName}`}
                    >
                      <span>{item.label}</span>
                      <span className="sr-only">(opens in a new tab)</span>
                      <ExternalArrow />
                    </Link>
                  ) : (
                    /*
                     * Destination awaiting owner confirmation: same
                     * presentation, but plain text (not a link, not focusable).
                     */
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground">
                      <span>{item.label}</span>
                      <ExternalArrow />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-5 border-t border-border/60 pt-3">
          <div className="flex flex-col items-center gap-1.5 text-center text-[12px] text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
            <p>© 2026 Huzali Academy. All rights reserved.</p>

            <p>
              Built by{" "}
              <Link
                href="https://avettics.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 font-medium ${footerLinkClassName}`}
              >
                <span>Avettics Limited</span>
                <span className="sr-only">(opens in a new tab)</span>
                <ExternalArrow />
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
