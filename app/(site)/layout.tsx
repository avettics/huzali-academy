import { Footer } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <a
        href="#main-content"
        className="fixed top-3 left-4 z-60 inline-flex h-11 translate-y-[-200%] items-center rounded-md bg-foreground px-4 text-sm font-semibold text-background shadow-lg transition-transform focus-visible:translate-y-0"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>

      <Footer />
    </>
  );
}
