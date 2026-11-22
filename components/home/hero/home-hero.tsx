import { getImageProps } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandAtmosphere } from "@/components/brand/brand-atmosphere";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ImageReveal } from "@/components/motion/image-reveal";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroPhoto from "@/public/hero/hero.jpg";
import heroSubjects from "@/public/hero/hero-subjects.webp";

/*
 * Huzali Academy hero, sized by its content (no viewport-filling height).
 *
 * Stacked layouts (below `lg`): eyebrow, headline, copy, actions, then the
 * original training photograph (`hero.jpg`) in an honest rectangular frame.
 * From `lg`: one editorial canvas. The text cluster sits left; the real
 * instructor and student (`hero-subjects.webp`, a background-only removal
 * derived from `hero.jpg`, which stays the untouched master) stand directly
 * on the canvas at the right, on the hero's bottom edge, in front of the
 * hero atmosphere sweep.
 *
 * Both representations are one <picture>/<img>: the browser downloads only
 * the source matching the viewport, and assistive technology hears a single
 * description. Layers (local stacking context): atmosphere, text, subjects.
 */
const alt =
  "A Huzali Academy instructor applies lipstick to a seated student during a practical makeup training session.";

/* Must match the `lg` breakpoint used by the layout classes below. */
const desktopMedia = "(min-width: 64rem)";

const subjectsSizes = "(min-width: 80rem) min(48vw, 640px), min(50vw, 640px)";

const {
  props: { srcSet: subjectsSrcSet },
} = getImageProps({
  src: heroSubjects,
  alt,
  sizes: subjectsSizes,
});

const {
  props: { srcSet: photoSrcSet, sizes: photoSizes, ...photoProps },
} = getImageProps({
  src: heroPhoto,
  alt,
  sizes: "100vw",
  loading: "eager",
  fetchPriority: "high",
});

export function HomeHero() {
  return (
    <Section
      aria-labelledby="home-hero-title"
      className="relative isolate pt-10 pb-10 sm:pt-12 sm:pb-12 lg:pt-8 lg:pb-0"
    >
      <BrandAtmosphere variant="hero" />

      <Container className="lg:flex lg:items-end lg:gap-x-10">
        <div className="max-w-xl lg:min-w-0 lg:flex-1 lg:self-center lg:pb-10 xl:flex-none xl:basis-[46%]">
          <Reveal
            as="p"
            className="text-xs font-semibold tracking-[0.2em] text-primary uppercase"
          >
            Huzali Academy
          </Reveal>

          <Reveal delay={1} className="mt-4">
            <h1
              id="home-hero-title"
              className="font-heading text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl xl:text-[3.375rem]"
            >
              Beauty skills that create{" "}
              <span className="text-primary italic">opportunity.</span>
            </h1>
          </Reveal>

          <Reveal
            as="p"
            delay={2}
            className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Practical beauty training for young women, building skills,
            confidence and pathways to sustainable livelihoods.
          </Reveal>

          <Reveal
            delay={3}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href="/apply"
              className={cn(
                buttonVariants({
                  size: "lg",
                  className: "h-11 w-full px-6 font-semibold sm:w-auto",
                }),
              )}
            >
              Apply Now
              <ArrowRight aria-hidden="true" />
            </Link>

            <Link
              href="/courses"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "h-11 w-full px-6 font-semibold sm:w-auto",
                }),
              )}
            >
              Explore Courses
            </Link>
          </Reveal>
        </div>

        {/*
         * Desktop frame: the subjects' full width, cropped at the bottom just
         * above where a table cloth in front of the student was removed with
         * the background (aspect 1412/1085 of the 1412×1203 asset).
         * 1024–1279: right-aligned, bleeding into the container padding.
         * 1280+: follows the 46% text cluster, ending inside the container,
         * so typography and subjects carry equal weight.
         */}
        <ImageReveal className="relative mt-8 aspect-4/3 rounded-xl sm:mt-10 sm:aspect-16/10 lg:mt-0 lg:ml-auto lg:-mr-8 lg:aspect-1412/1085 lg:w-[min(50vw,640px)] lg:shrink-0 lg:rounded-none xl:mr-0 xl:w-[min(48vw,640px)]">
          <picture className="absolute inset-0">
            <source
              media={desktopMedia}
              srcSet={subjectsSrcSet}
              sizes={subjectsSizes}
            />
            <img
              {...photoProps}
              alt={alt}
              srcSet={photoSrcSet}
              sizes={photoSizes}
              className="size-full object-cover object-[65%_40%] lg:object-top"
            />
          </picture>
        </ImageReveal>
      </Container>
    </Section>
  );
}
