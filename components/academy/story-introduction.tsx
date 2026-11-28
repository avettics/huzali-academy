import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { arrowLinkClassName } from "@/components/layout/page-body";
import { Section } from "@/components/layout/section";
import { SectionIntro } from "@/components/layout/section-intro";
import { Reveal } from "@/components/motion/reveal";
import { ourStoryHref } from "@/components/layout/navigation";
import { storyPublished } from "@/lib/publication";

/*
 * A short introduction to Our Story on the Academy overview, linking to the
 * full story page: the shared centred intro and one text link on the
 * alternate lilac surface (it follows the white Learning Experience).
 * Shown only while the story page itself is published, so it never links
 * to an unavailable page.
 */
export function StoryIntroduction() {
  if (!storyPublished) {
    return null;
  }

  return (
    <Section
      spacing="compact"
      aria-labelledby="story-introduction-title"
      className="bg-surface-alt"
    >
      <Container>
        <SectionIntro
          align="center"
          eyebrow="Our Story"
          title="A story rooted in purpose."
          titleId="story-introduction-title"
          description="Huzali Beauty Academy grew from a shared commitment to helping girls and young women develop practical skills, build confidence and work towards greater independence."
        />

        <Reveal delay={2} className="mt-6 text-center">
          <Link href={ourStoryHref} className={arrowLinkClassName}>
            Read Our Story
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
