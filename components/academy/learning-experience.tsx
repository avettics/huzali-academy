import Image, { type StaticImageData } from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionIntro } from "@/components/layout/section-intro";
import { ImageReveal } from "@/components/motion/image-reveal";
import { imageZoom, imageZoomGroup } from "@/components/motion/image-zoom";
import { learningExperiencePublished } from "@/lib/publication";
import { cn } from "@/lib/utils";
import brushDemonstrationPhoto from "@/public/academy/huzali-academy-instructor-brush-demonstration.jpeg";
import groupDemonstrationPhoto from "@/public/academy/huzali-academy-hand-swatch-demonstration.jpeg";
import guidedApplicationPhoto from "@/public/academy/huzali-academy-brow-shaping-lesson.jpeg";
import palettePracticePhoto from "@/public/academy/huzali-academy-eyeshadow-palette-practice.jpeg";
import handsOnPhoto from "@/public/academy/huzali-academy-hands-on-makeup-application.jpeg";
import mentorshipPhoto from "@/public/academy/huzali-academy-instructor-student-mentorship.jpeg";
import studentGroupPhoto from "@/public/academy/huzali-academy-student-group.jpeg";
import studentPortraitPhoto from "@/public/academy/huzali-academy-student-portrait-01.jpeg";
import studentPairPhoto from "@/public/academy/huzali-academy-student-duo-01.jpeg";
import studentPhoto from "@/public/academy/huzali-academy-student-smiling-portrait.jpeg";

type Photo = {
  src: StaticImageData;
  alt: string;
  /** Tailwind `object-*` position class for the crop. */
  position: string;
  sizes: string;
  /** Frame size and grid placement. */
  className: string;
};

/* `sizes` for each frame width (24-column grid from `md`, see `photos`). */
const leadSizes = "(min-width: 1440px) 557px, (min-width: 768px) 42vw, 100vw";
const wideSizes = "(min-width: 1440px) 787px, (min-width: 768px) 58vw, 100vw";
const pairSizes = "(min-width: 1440px) 385px, (min-width: 768px) 29vw, 50vw";
const halfSizes = "(min-width: 1440px) 672px, (min-width: 768px) 50vw, 50vw";
const quarterSizes = "(min-width: 1440px) 332px, (min-width: 768px) 25vw, 50vw";

/*
 * Published: see `learningPhotosApprovedForPublication` in
 * lib/publication.ts. All of these photographs are approved.
 *
 * In display order. From `md`, on a 24-column grid, three rows:
 *   1. The leading student group photograph (5/12 wide, spanning two grid
 *      rows) beside a 3:2 group demonstration above two squares; its
 *      height is set by the stack beside it, giving a tall frame (about
 *      3:5) that suits the 9:16 original and keeps every face in view.
 *   2. Two balanced 3:2 photographs.
 *   3. Four smaller squares.
 * Below `md`, on two columns: the group photograph (3:4) and the group
 * demonstration full width, then the other eight as squares, two by two.
 */
const photos: Photo[] = [
  {
    src: studentGroupPhoto,
    alt: "A group of students, several in Huzali T-shirts, gather together for a photograph outdoors.",
    position: "object-[50%_20%]",
    sizes: leadSizes,
    className:
      "col-span-2 aspect-3/4 md:col-span-10 md:row-span-2 md:aspect-auto",
  },
  {
    src: groupDemonstrationPhoto,
    alt: "An instructor demonstrates a technique on the back of her hand while two students watch.",
    position: "object-center",
    sizes: wideSizes,
    className: "col-span-2 aspect-3/2 md:col-span-14",
  },
  {
    src: studentPhoto,
    alt: "A smiling student in a Huzali T-shirt and headscarf, wearing eye makeup, outdoors.",
    position: "object-[50%_30%]",
    sizes: pairSizes,
    className: "aspect-square md:col-span-7",
  },
  {
    src: mentorshipPhoto,
    alt: "An instructor and a student share a smile as they work together during a lesson.",
    position: "object-[40%_50%]",
    sizes: pairSizes,
    className: "aspect-square md:col-span-7",
  },
  {
    src: palettePracticePhoto,
    alt: "A student sits for an eyeshadow application as an instructor works from a palette, with a mirror and makeup tools on the table.",
    position: "object-[35%_50%]",
    sizes: halfSizes,
    className: "aspect-square md:col-span-12 md:aspect-3/2",
  },
  {
    src: brushDemonstrationPhoto,
    alt: "An instructor holds up a makeup brush as she demonstrates to the students around her.",
    position: "object-[75%_50%]",
    sizes: halfSizes,
    className: "aspect-square md:col-span-12 md:aspect-3/2",
  },
  {
    src: studentPairPhoto,
    alt: "Two smiling students, one in a Huzali T-shirt, pose together outdoors wearing eye makeup.",
    position: "object-[50%_30%]",
    sizes: quarterSizes,
    className: "aspect-square md:col-span-6",
  },
  {
    src: handsOnPhoto,
    alt: "A Huzali Academy instructor applies makeup to a student, who sits with her eyes closed.",
    position: "object-[45%_50%]",
    sizes: quarterSizes,
    className: "aspect-square md:col-span-6",
  },
  {
    src: studentPortraitPhoto,
    alt: "A smiling student in a Huzali T-shirt and headscarf, wearing eye makeup.",
    position: "object-[50%_20%]",
    sizes: quarterSizes,
    className: "aspect-square md:col-span-6",
  },
  {
    src: guidedApplicationPhoto,
    alt: "A student looks up as an instructor works on her brows, while another student watches closely.",
    position: "object-[40%_50%]",
    sizes: quarterSizes,
    className: "aspect-square md:col-span-6",
  },
];

/*
 * The Learning Experience: a photography-led section on white, after the
 * lilac Our Approach. The centred shared intro above a ten-photograph
 * editorial gallery (see `photos`), 12px / 16px gaps, 8px corners, each
 * photograph with the shared ImageReveal and hover zoom. All load lazily
 * (well below the fold). Rendered only once its photographs are approved,
 * or in development.
 */
export function LearningExperience() {
  if (!learningExperiencePublished) {
    return null;
  }

  return (
    <Section
      spacing="compact"
      aria-labelledby="learning-experience-title"
      className="bg-background"
    >
      <Container>
        <SectionIntro
          align="center"
          eyebrow="The Learning Experience"
          title="Learning by doing."
          titleId="learning-experience-title"
          description="At Huzali Beauty Academy, students develop their skills through practical lessons, guided demonstrations and opportunities to put what they learn into practice."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-24 md:gap-4 lg:mt-12">
          {photos.map((photo) => (
            <ImageReveal
              key={photo.alt}
              className={cn(
                imageZoomGroup,
                "relative w-full rounded-xl",
                photo.className,
              )}
            >
              <div className="absolute inset-0">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={photo.sizes}
                  className={cn("object-cover", photo.position, imageZoom)}
                />
              </div>
            </ImageReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
