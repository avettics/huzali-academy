import { Wordmark } from "@/components/brand/wordmark";
import { Container } from "@/components/layout/container";
import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md">
      {/*
       * Desktop: three-column grid (1fr / auto / 1fr) keeps the navigation
       * mathematically centred regardless of wordmark and CTA widths.
       */}
      <Container className="flex h-16 items-center gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <Wordmark className="shrink-0 justify-self-start" />

        <DesktopNavigation />
        <MobileNavigation />
      </Container>
    </header>
  );
}
