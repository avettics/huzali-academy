import Image from "next/image";
import { notFound } from "next/navigation";

import {
  CourseGrid,
  courseGridClassName,
} from "@/components/courses/course-grid";
import {
  PageHeader,
  type PageHeaderArtwork,
} from "@/components/layout/page-header";
import { ImageReveal } from "@/components/motion/image-reveal";
import { imageZoom, imageZoomGroup } from "@/components/motion/image-zoom";
import { courses, getCourse } from "@/lib/courses";
import { cn } from "@/lib/utils";

/*
 * URL-specific parts of the course page. Each awaits `params` inside the
 * page's <Suspense> boundaries, so the route's shared App Shell stays
 * independent of the URL and navigations remain instant.
 */

type CourseParams = Pick<PageProps<"/courses/[slug]">, "params">;

/* Wide, height-capped frame for the course photograph below the header. */
const photoFrame =
  "relative aspect-4/3 w-full rounded-xl sm:aspect-video lg:aspect-16/7 lg:max-h-128";

/*
 * Beauty line-art per course, keyed by canonical slug. A course without an
 * entry (e.g. one added later) falls back to the mixed "beauty" set.
 */
const courseArtwork: Record<string, PageHeaderArtwork> = {
  "makeup-artistry": "makeup",
  "hair-styling": "hair",
  "nail-technology": "nails",
  "lash-artistry": "lashes",
  skincare: "skincare",
  "massage-therapy": "massage",
};

/* The shared Page Header, filled from the course's canonical data. */
export async function CourseHeader({ params }: CourseParams) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <PageHeader
      eyebrow="Our Courses"
      title={course.title}
      description={course.summary}
      artwork={courseArtwork[course.slug] ?? "beauty"}
    />
  );
}

export async function CoursePhoto({ params }: CourseParams) {
  const { slug } = await params;
  const image = getCourse(slug)?.image;
  if (!image) return null;

  return (
    <ImageReveal className={cn(imageZoomGroup, "mt-6", photoFrame)}>
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 1440px) 1360px, 100vw"
          className={cn("object-cover", image.position, imageZoom)}
        />
      </div>
    </ImageReveal>
  );
}

export function CoursePhotoFallback() {
  return (
    <div className={cn("mt-6 bg-primary/8", photoFrame)} aria-hidden="true" />
  );
}

export async function MoreCourses({ params }: CourseParams) {
  const { slug } = await params;
  const otherCourses = courses.filter((item) => item.slug !== slug);

  return <CourseGrid courses={otherCourses} className="mt-8" />;
}

export function MoreCoursesFallback() {
  return (
    <ul className={cn(courseGridClassName, "mt-8")} aria-hidden="true">
      {Array.from({ length: courses.length - 1 }, (_, index) => (
        <li key={index} className="aspect-4/3 rounded-xl bg-primary/8" />
      ))}
    </ul>
  );
}
