import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CourseGrid } from "@/components/courses/course-grid";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionIntro } from "@/components/layout/section-intro";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import {
  courses,
  coursesIntro,
  coursesTitle,
  coursesIndexHref,
} from "@/lib/courses";
import { cn } from "@/lib/utils";

/*
 * Courses: compact course discovery on the alternate section surface.
 * Centered intro, a 3/2/1-column grid of landscape course cards (each a
 * link to its course page), then "Explore All Courses".
 */
export function HomeCourses() {
  return (
    <Section
      spacing="compact"
      aria-labelledby="home-courses-title"
      className="bg-surface-alt"
    >
      <Container>
        <SectionIntro
          align="center"
          eyebrow="Courses"
          title={coursesTitle}
          titleId="home-courses-title"
          description={coursesIntro}
        />

        <CourseGrid courses={courses} className="mt-10 lg:mt-12" />

        <Reveal className="mt-10 flex justify-center lg:mt-12">
          <Link
            href={coursesIndexHref}
            className={cn(
              buttonVariants({ variant: "outline", size: "cta" }),
            )}
          >
            Explore All Courses
            <ArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
