import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { arrowLinkClassName } from "@/components/layout/page-body";
import { Section } from "@/components/layout/section";
import { SectionIntro } from "@/components/layout/section-intro";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { courses, coursesIndexHref } from "@/lib/courses";

/*
 * Explore Our Courses: a compact invitation to the courses index on the
 * Academy overview, just before the shared Support & Apply CTA. On white,
 * a split editorial layout from `lg`: the left-aligned shared intro and an
 * "Explore All Courses" text link (5 of 12 columns) beside the course names
 * (7 of 12) as soft-lilac tiles in a two-column grid. Introduction first
 * when stacked; the tiles stay two columns on phones.
 *
 * Course names come from the homepage's own data (`courses` in
 * lib/courses.ts), so they always match it in wording and order. Tiles
 * carry the name only and are informational, not links.
 *
 * The CTA that follows is also a white section, so this one has no bottom
 * padding: the gap before the CTA panel is the CTA's own top padding, not
 * both sections' padding added together.
 */
export function ExploreCourses() {
  return (
    <Section
      spacing="compact"
      aria-labelledby="explore-courses-title"
      className="bg-background pb-0 sm:pb-0 lg:pb-0"
    >
      <Container>
        <div className="grid gap-y-10 lg:grid-cols-12 lg:items-center lg:gap-x-16">
          <div className="lg:col-span-5">
            <SectionIntro
              eyebrow="Explore Our Courses"
              title="Find your next creative skill."
              titleId="explore-courses-title"
              description="Discover practical beauty courses and explore the skills you can develop at Huzali Beauty Academy."
            />

            <Reveal delay={2} className="mt-6">
              <Link href={coursesIndexHref} className={arrowLinkClassName}>
                Explore All Courses
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <Stagger
            as="ul"
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7"
          >
            {courses.map((course) => (
              <StaggerItem
                as="li"
                key={course.slug}
                className="flex min-h-20 items-center rounded-xl bg-surface-alt px-4 py-4 font-heading text-base leading-snug font-semibold tracking-tight text-balance text-foreground sm:min-h-24 sm:px-6 sm:text-xl"
              >
                {course.title}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
