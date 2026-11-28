import Image from "next/image";
import { BookOpen, Palette, Wallet, type LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionIntro } from "@/components/layout/section-intro";
import { ImageReveal } from "@/components/motion/image-reveal";
import { imageZoom, imageZoomGroup } from "@/components/motion/image-zoom";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import groupTrainingSession from "@/public/academy/huzali-academy-group-training-table.jpeg";

/*
 * A group training session: an instructor works with a student while
 * others follow around a shared table of makeup kits (approved,
 * 2026-11-28).
 */
const photo = {
  src: groupTrainingSession,
  alt: "A Huzali Academy instructor demonstrates makeup on a seated student while other participants watch around a table of makeup kits.",
  position: "object-[50%_15%]",
};

type ProgressionStep = {
  step: string;
  line: string;
  icon: LucideIcon;
};

/*
 * Huzali's progression, in order: exactly three stages, as approved. The
 * lines describe opportunity, never a promise of employment or income.
 */
const progression: ProgressionStep[] = [
  {
    step: "Learn",
    line: "Build practical beauty skills through hands-on training.",
    icon: BookOpen,
  },
  {
    step: "Create",
    line: "Develop creativity, confidence and professional ability.",
    icon: Palette,
  },
  {
    step: "Earn",
    line: "Pursue income-generating opportunities and greater independence.",
    icon: Wallet,
  },
];

/*
 * Why Huzali: why the Academy exists, on white. Reads top to bottom:
 * left-aligned intro, one wide photograph (16:7 from `lg`, capped at 32rem
 * tall on wide screens), then the Learn → Create → Earn cards in a row
 * (stacked below `md`).
 */
export function WhyHuzali() {
  return (
    <Section spacing="compact" aria-labelledby="why-huzali-title">
      <Container>
        <SectionIntro
          eyebrow="Why Huzali"
          title="More than beauty. A pathway to independence."
          titleId="why-huzali-title"
          description="Equipping girls and young women with the skills and confidence to pursue meaningful opportunities."
        />

        <ImageReveal
          className={cn(
            imageZoomGroup,
            "relative mt-10 aspect-4/3 w-full rounded-xl sm:aspect-video lg:mt-12 lg:aspect-16/7 lg:max-h-128",
          )}
        >
          <div className="absolute inset-0">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1440px) 1360px, 100vw"
              className={cn("object-cover", photo.position, imageZoom)}
            />
          </div>
        </ImageReveal>

        {/* Informational, not interactive: no hover, cursor or link. */}
        <Stagger
          as="ol"
          className="mt-6 grid gap-4 md:grid-cols-3 lg:mt-8 lg:gap-6"
        >
          {progression.map(({ step, line, icon: Icon }) => (
            <StaggerItem as="li" key={step}>
              <Card
                size="sm"
                className="h-full rounded-xl bg-surface-alt ring-0"
              >
                <CardContent className="lg:px-6 lg:py-2">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-foreground lg:text-2xl">
                    {step}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-pretty text-muted-foreground lg:text-[15px]">
                    {line}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
