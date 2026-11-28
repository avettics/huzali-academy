import {
  BookOpen,
  BriefcaseBusiness,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionIntro } from "@/components/layout/section-intro";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Card, CardContent } from "@/components/ui/card";

type Principle = {
  title: string;
  text: string;
  icon: LucideIcon;
};

/*
 * The Academy's three principles, in order. The Earn line describes
 * opportunity, never a promise of employment, income or business success.
 */
const principles: Principle[] = [
  {
    title: "Learn",
    text: "Build essential beauty skills through guided lessons and hands-on practice.",
    icon: BookOpen,
  },
  {
    title: "Create",
    text: "Develop creativity, refine techniques and build confidence through practical experience.",
    icon: Sparkles,
  },
  {
    title: "Earn",
    text: "Explore how beauty skills can support employment, entrepreneurship and financial independence.",
    icon: BriefcaseBusiness,
  },
];

/*
 * Our Approach: the Academy's educational philosophy, on the alternate
 * lilac surface after the white Who We Are. The left-aligned shared intro,
 * then the three principles as the homepage's progression cards (Why
 * Huzali's Card, classes, grid and stagger), white with the hairline ring
 * the homepage uses for cards on lilac (The Huzali Experience): 8px radius,
 * equal height per row, stacked below `md`. Informational, not
 * interactive: no hover, cursor or link, as on the homepage.
 */
export function OurApproach() {
  return (
    <Section
      spacing="compact"
      aria-labelledby="our-approach-title"
      className="bg-surface-alt"
    >
      <Container>
        <SectionIntro
          eyebrow="Our Approach"
          title="Learn. Create. Earn."
          titleId="our-approach-title"
          description="Our approach combines practical training, creativity and the confidence to pursue opportunities in the beauty industry."
        />

        <Stagger
          as="ol"
          className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-12 lg:gap-6"
        >
          {principles.map(({ title, text, icon: Icon }) => (
            <StaggerItem as="li" key={title}>
              <Card size="sm" className="h-full rounded-xl ring-border">
                <CardContent className="lg:px-6 lg:py-2">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-foreground lg:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-pretty text-muted-foreground lg:text-[15px]">
                    {text}
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
