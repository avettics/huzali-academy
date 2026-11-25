import type { Metadata } from "next";

import { CourseGrid } from "@/components/courses/course-grid";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionIntro } from "@/components/layout/section-intro";
import { courses, coursesIntro, coursesTitle } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses",
  description: coursesIntro,
};

export default function CoursesPage() {
  return (
    <Section spacing="compact" aria-labelledby="courses-title">
      <Container>
        <SectionIntro
          headingLevel={1}
          eyebrow="Courses"
          title={coursesTitle}
          titleId="courses-title"
          description={coursesIntro}
        />

        {/* Cards sit directly under the page h1, so their titles are h2s. */}
        <CourseGrid
          courses={courses}
          headingLevel={2}
          eagerCount={3}
          className="mt-10 lg:mt-12"
        />
      </Container>
    </Section>
  );
}
