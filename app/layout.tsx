import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://huzali.academy"),
  applicationName: "Huzali Academy",
  title: {
    default: "Huzali Academy",
    template: "%s | Huzali Academy",
  },
  description:
    "Huzali Academy is a vocational beauty academy offering professional beauty courses through scheduled intakes. Learn. Create. Earn.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        manrope.variable,
        playfairDisplay.variable,
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
