import Image from "next/image";
import { notFound } from "next/navigation";

import {
  CourseGrid,
  courseGridClassName,
} from "@/components/courses/course-grid";
import { ImageReveal } from "@/components/motion/image-reveal";
import { imageZoom, imageZoomGroup } from "@/components/motion/image-zoom";
import { Reveal } from "@/components/motion/reveal";
import { courses, getCourse } from "@/lib/courses";
import { cn } from "@/lib/utils";

/*
 * URL-specific parts of the course page. Each awaits `params` inside the
 * page's <Suspense> boundaries, so the route's shared App Shell stays
 * independent of the URL and navigations remain instant.
 */

type CourseParams = Pick<PageProps<"/courses/[slug]">, "params">;

const introGrid =
  "mt-8 grid gap-y-10 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-x-16";

export async function CourseIntro({ params }: CourseParams) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <div className={introGrid}>
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          Course
        </p>
        <h1
          id="course-title"
          className="mt-4 font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl"
        >
          {course.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          {course.summary}
        </p>
      </Reveal>

      {course.image ? (
        <ImageReveal
          className={cn(imageZoomGroup, "relative aspect-4/3 rounded-xl")}
        >
          <div className="absolute inset-0">
            <Image
              src={course.image.src}
              alt={course.image.alt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1440px) 648px, (min-width: 1024px) 46vw, 100vw"
              className={cn("object-cover", course.image.position, imageZoom)}
            />
          </div>
        </ImageReveal>
      ) : null}
    </div>
  );
}

/* Placeholder with the same structure while the course content streams in. */
export function CourseIntroFallback() {
  return (
    <div className={introGrid} aria-hidden="true">
      <div>
        <div className="h-3 w-16 rounded-full bg-primary/10" />
        <div className="mt-5 h-11 w-3/4 rounded-lg bg-primary/8" />
        <div className="mt-6 h-4 w-full max-w-2xl rounded-full bg-primary/6" />
        <div className="mt-3 h-4 w-5/6 max-w-md rounded-full bg-primary/6" />
      </div>
      <div className="aspect-4/3 rounded-xl bg-primary/8" />
    </div>
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
