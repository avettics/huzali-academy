import { CourseCard } from "@/components/courses/course-card";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import type { Course } from "@/lib/courses";
import { cn } from "@/lib/utils";

/** The standard course grid: 1 column, 2 from `md`, 3 from `lg`. */
export const courseGridClassName =
  "grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8";

/* Photograph `sizes` matching `courseGridClassName` inside the Container. */
const courseGridSizes =
  "(min-width: 1440px) 432px, (min-width: 1024px) 31vw, (min-width: 768px) 46vw, 100vw";

type CourseGridProps = {
  courses: Course[];
  /** Spacing from the content above. */
  className?: string;
  /** Card title level: 3 (default) under a section h2; 2 directly under the page h1. */
  headingLevel?: 2 | 3;
  /** How many leading cards load their photograph eagerly (visible on first paint). */
  eagerCount?: number;
};

/*
 * The one course grid used on the homepage, the courses index and course
 * pages: a staggered list of course cards.
 */
export function CourseGrid({
  courses,
  className,
  headingLevel,
  eagerCount = 0,
}: CourseGridProps) {
  return (
    <Stagger as="ul" className={cn(courseGridClassName, className)}>
      {courses.map((course, index) => (
        <StaggerItem as="li" key={course.slug}>
          <CourseCard
            course={course}
            sizes={courseGridSizes}
            headingLevel={headingLevel}
            eager={index < eagerCount}
          />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
