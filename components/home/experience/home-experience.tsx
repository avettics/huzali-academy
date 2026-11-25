import {
  BriefcaseBusiness,
  Brush,
  Handshake,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionIntro } from "@/components/layout/section-intro";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Card, CardContent } from "@/components/ui/card";

type Pillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const pillars: Pillar[] = [
  {
    title: "Practical Skills",
    description:
      "Hands-on beauty training that develops techniques, creativity and confidence through practice.",
    icon: Brush,
  },
  {
    title: "Professional Development",
    description:
      "Building professionalism, communication, customer care and confidence.",
    icon: Handshake,
  },
  {
    title: "Entrepreneurship",
    description:
      "Developing the business mindset needed to turn beauty skills into income-generating opportunities.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Opportunity",
    description:
      "Preparing students to pursue employment, independent work and sustainable livelihoods.",
    icon: TrendingUp,
  },
];

/*
 * Huzali Experience: the four foundations of the learning experience, on the
 * alternate section surface. Centered intro, then four compact white cards
 * (4 / 2 / 1 columns, equal height per row). Informational, not interactive.
 */
export function HomeExperience() {
  return (
    <Section
      spacing="compact"
      aria-labelledby="home-experience-title"
      className="bg-surface-alt"
    >
      <Container>
        <SectionIntro
          align="center"
          eyebrow="The Huzali Experience"
          title="Learn by doing. Grow with confidence."
          titleId="home-experience-title"
          description="Practical training, creative exploration and professional development in a supportive learning environment."
        />

        <Stagger
          as="ul"
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6"
        >
          {pillars.map(({ title, description, icon: Icon }) => (
            <StaggerItem as="li" key={title}>
              <Card className="h-full rounded-xl ring-border">
                <CardContent>
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {description}
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
