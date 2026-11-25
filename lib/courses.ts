import type { StaticImageData } from "next/image";

import heroPhoto from "@/public/hero/hero.jpg";

/*
 * Local course content for the public site. This is the only place course
 * data lives until a CMS/backend source replaces it; components and routes
 * consume the `Course` shape, not this file's details.
 */

export type CourseImage = {
  src: StaticImageData;
  /**
   * Describes what the photograph actually shows. Empty when the image is
   * decorative (e.g. temporary photography that doesn't depict the course);
   * the course title carries the meaning.
   */
  alt: string;
  /** Optional Tailwind `object-*` position class for the crop. */
  position?: string;
};

export type Course = {
  slug: string;
  title: string;
  /**
   * Course-specific introduction, shown on the course page and used as its
   * meta description. Describes the skill only: no modules, durations,
   * qualifications or outcomes until they are confirmed.
   */
  summary: string;
  /** Course page. Omit to render the card without a link. */
  href?: string;
  /** Authentic Huzali photograph. */
  image?: CourseImage;
};

/** The all-courses page. */
export const coursesIndexHref = "/courses";

/** Approved heading for the Courses section and courses index. */
export const coursesTitle = "Learn a skill. Shape your future.";

/** Approved short introduction for the Courses section and courses index. */
export const coursesIntro =
  "Discover hands-on beauty training designed to build practical skills, creativity and professional confidence.";

/*
 * TEMPORARY PHOTOGRAPHY: every course reuses the authentic hero training
 * photograph, with a different crop, until individual course photographs
 * are supplied. Replace each `image` (src, alt and position) individually.
 */
const temporaryImage = (position: string): CourseImage => ({
  src: heroPhoto,
  alt: "",
  position,
});

const course = (
  slug: string,
  title: string,
  summary: string,
  position: string,
): Course => ({
  slug,
  title,
  summary,
  href: `${coursesIndexHref}/${slug}`,
  image: temporaryImage(position),
});

/* Courses, in display order. */
export const courses: Course[] = [
  course(
    "makeup-artistry",
    "Makeup Artistry",
    "Develop practical makeup artistry skills, explore creative techniques and build confidence in professional beauty application.",
    "object-[62%_50%]",
  ),
  course(
    "hair-styling",
    "Hair Styling",
    "Explore practical hair styling techniques and develop the creativity, precision and confidence needed to build your craft.",
    "object-[30%_50%]",
  ),
  course(
    "nail-technology",
    "Nail Technology & Nail Art",
    "Learn essential nail care and nail art techniques while developing practical skills, attention to detail and creativity.",
    "object-[50%_50%]",
  ),
  course(
    "lash-artistry",
    "Lash Artistry",
    "Build practical lash artistry skills through focused training in application techniques, precision and professional practice.",
    "object-[80%_50%]",
  ),
  course(
    "skincare",
    "Skincare",
    "Develop foundational skincare knowledge and practical techniques for delivering thoughtful, professional beauty services.",
    "object-[95%_50%]",
  ),
  course(
    "massage-therapy",
    "Massage Therapy",
    "Explore foundational massage techniques, professional practice and client care through practical, skills-focused training.",
    "object-[42%_50%]",
  ),
];

export function getCourse(slug: string) {
  return courses.find((item) => item.slug === slug);
}
