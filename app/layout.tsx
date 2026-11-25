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
  applicationName: "Huzali Beauty Academy",
  title: {
    default: "Huzali Beauty Academy",
    template: "%s | Huzali Beauty Academy",
  },
  description:
    "Huzali Beauty Academy empowers girls and young women through practical beauty education, building skills, confidence and pathways to sustainable livelihoods.",
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
