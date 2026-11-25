import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { imageZoom, imageZoomGroup } from "@/components/motion/image-zoom";
import type { Course } from "@/lib/courses";
import { cn } from "@/lib/utils";

type CourseCardProps = {
  course: Course;
  /** `sizes` for the photograph, matching the grid it sits in. */
  sizes: string;
  /** Load the photograph eagerly (cards visible on first paint). */
  eager?: boolean;
  /** Title level: 3 (default) under a section h2; 2 directly under a page h1. */
  headingLevel?: 2 | 3;
};

/*
 * A course as one image with its title overlaid at the bottom-left. A soft
 * gradient over the lower part of the photograph keeps the white title
 * readable; only the photograph zooms on hover/focus, never the text.
 *
 * With `href` the whole card is one link and an arrow sits at the
 * bottom-right (revealed on hover/focus where hover exists, always shown on
 * touch); without it the card is static and shows no arrow. Without an
 * `image`, the card is a quiet lilac tile with the title in dark text.
 */
export function CourseCard({
  course,
  sizes,
  eager,
  headingLevel = 3,
}: CourseCardProps) {
  const { title, href, image } = course;
  const Title = headingLevel === 2 ? "h2" : "h3";

  const content = (
    <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-primary/8">
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            loading={eager ? "eager" : undefined}
            className={cn("object-cover", image.position, imageZoom)}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-linear-to-t from-black/75 via-black/35 to-transparent"
          />
        </>
      ) : (
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center font-heading text-[7rem] leading-none text-primary/15 italic select-none"
        >
          {title.charAt(0)}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
        <Title
          className={cn(
            "min-w-0 font-heading text-xl leading-tight font-semibold tracking-tight text-balance sm:text-2xl lg:text-xl xl:text-2xl",
            image ? "text-white" : "text-foreground",
          )}
        >
          {title}
        </Title>
        {href ? (
          <ArrowRight
            aria-hidden="true"
            className={cn(
              // Always visible on touch devices. Where hover exists, hidden
              // until the card is hovered or keyboard-focused; visibility
              // never depends on motion, only the slide-in does.
              "mb-1 size-5 shrink-0 motion-safe:transition-[opacity,translate] motion-safe:duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover/zoom:opacity-100 [@media(hover:hover)]:group-focus-visible/zoom:opacity-100 [@media(hover:hover)]:motion-safe:-translate-x-1.5 [@media(hover:hover)]:motion-safe:group-hover/zoom:translate-x-0 [@media(hover:hover)]:motion-safe:group-focus-visible/zoom:translate-x-0",
              image ? "text-white" : "text-primary",
            )}
          />
        ) : null}
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className={cn(imageZoomGroup, "block rounded-xl")}>
      {content}
    </Link>
  ) : (
    <div className={imageZoomGroup}>{content}</div>
  );
}
