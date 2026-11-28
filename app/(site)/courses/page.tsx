import type { Metadata } from "next";

import { CourseGrid } from "@/components/courses/course-grid";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { courses } from "@/lib/courses";

const description =
  "Explore practical, hands-on beauty courses designed to help you develop skills, build confidence and discover new opportunities.";

export const metadata: Metadata = {
  title: "Courses",
  description,
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Courses"
        title="Find your path in beauty."
        description={description}
        artwork="beauty"
      />

      <Section spacing="compact">
        <Container>
          {/* Cards sit directly under the page h1, so their titles are h2s. */}
          <CourseGrid courses={courses} headingLevel={2} eagerCount={3} />
        </Container>
      </Section>
    </>
  );
}
