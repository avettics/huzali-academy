import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { courses, coursesIndexHref, getCourse } from "@/lib/courses";

import { PageHeaderFallback } from "@/components/layout/page-header";

import {
  CourseHeader,
  CoursePhoto,
  CoursePhotoFallback,
  MoreCourses,
  MoreCoursesFallback,
} from "./course-details";

/*
 * Course page template: the shared Page Header (title and the course's own
 * summary), then the back link and course photograph, then more courses.
 * Shows only approved information until further course details are
 * confirmed.
 *
 * The page itself never reads `params`: it renders the URL-independent shell
 * (sections, back link, "More courses" heading) and the URL-specific parts
 * stream inside <Suspense>, as Partial Prefetching requires for instant
 * navigation. All six courses are still prerendered at build time.
 */

export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);

  return course
    ? { title: course.title, description: course.summary }
    : {};
}

export default function CoursePage({ params }: PageProps<"/courses/[slug]">) {
  return (
    <>
      <Suspense fallback={<PageHeaderFallback />}>
        <CourseHeader params={params} />
      </Suspense>

      <Section spacing="compact">
        <Container>
          <Link
            href={coursesIndexHref}
            className="inline-flex items-center gap-1.5 rounded-(--radius-control) text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All courses
          </Link>

          <Suspense fallback={<CoursePhotoFallback />}>
            <CoursePhoto params={params} />
          </Suspense>
        </Container>
      </Section>

      <Section
        spacing="compact"
        aria-labelledby="more-courses-title"
        className="bg-surface-alt"
      >
        <Container>
          <h2
            id="more-courses-title"
            className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            More courses
          </h2>

          <Suspense fallback={<MoreCoursesFallback />}>
            <MoreCourses params={params} />
          </Suspense>
        </Container>
      </Section>
    </>
  );
}
