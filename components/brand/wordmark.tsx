import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type WordmarkProps = Omit<ComponentProps<typeof Link>, "href" | "children">;

/**
 * The established Huzali wordmark (Playfair Display "Huzali"), linking home.
 * Used until a real logo asset exists. Always Huzali charcoal (a brand
 * primitive), independent of the semantic foreground. Used by the header at
 * 25px; the footer uses its own smaller "Huzali" signature.
 */
export function Wordmark({ className, ...props }: WordmarkProps) {
  return (
    <Link
      href="/"
      aria-label="Huzali Academy home"
      className={cn(
        "font-heading text-[25px] font-medium leading-none tracking-[-0.02em] text-charcoal",
        className,
      )}
      {...props}
    >
      Huzali
    </Link>
  );
}
