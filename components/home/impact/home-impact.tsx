import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionIntro } from "@/components/layout/section-intro";
import { Reveal } from "@/components/motion/reveal";

/*
 * Verified impact content. Only confirmed facts: 30 girls trained in the
 * first edition (not "graduates") and a second edition in preparation.
 */
const achievement = {
  value: "30",
  label: "Girls trained",
  context: "During our first edition",
};

const nextChapter = {
  title: "The journey continues",
  description:
    "Preparing for our second edition and more opportunities to learn and grow.",
};

/*
 * Our Impact: an editorial, left-aligned introduction on the alternate
 * surface, then one white achievement panel: the first-edition figure beside
 * the forward-looking message (stacked, with a horizontal divider, below `md`).
 */
export function HomeImpact() {
  return (
    <Section
      spacing="compact"
      aria-labelledby="home-impact-title"
      className="bg-surface-alt"
    >
      <Container>
        <SectionIntro
          eyebrow="Our Impact"
          title="Every skill is a step forward."
          titleId="home-impact-title"
          description="From our first edition to the next, we're creating opportunities through practical beauty education."
        />

        <Reveal
          delay={1}
          className="mt-10 grid rounded-xl bg-card ring-1 ring-border md:grid-cols-2 lg:mt-12"
        >
          <div className="p-6 sm:p-8 lg:p-10">
            <h3>
              <span className="block font-heading text-6xl leading-none font-semibold tracking-tight text-primary lining-nums sm:text-7xl">
                {achievement.value}
              </span>
              <span className="mt-4 block text-lg font-semibold text-foreground">
                {achievement.label}
              </span>
            </h3>
            <p className="mt-1 text-base text-muted-foreground">
              {achievement.context}
            </p>
          </div>

          <div className="border-t border-border p-6 sm:p-8 md:flex md:flex-col md:justify-center md:border-t-0 md:border-l lg:p-10">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <ArrowUpRight
                className="size-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              {nextChapter.title}
            </h3>
            <p className="mt-2 max-w-md text-base leading-relaxed text-pretty text-muted-foreground">
              {nextChapter.description}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
