import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Target, type LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { arrowLinkClassName } from "@/components/layout/page-body";
import { Section } from "@/components/layout/section";
import { SectionIntro } from "@/components/layout/section-intro";
import { ImageReveal } from "@/components/motion/image-reveal";
import { imageZoom, imageZoomGroup } from "@/components/motion/image-zoom";
import { Reveal } from "@/components/motion/reveal";
import { coursesIndexHref } from "@/lib/courses";
import { cn } from "@/lib/utils";
import trainingSessionPhoto from "@/public/academy/huzali-academy-eyeliner-application-lesson.jpeg";
import heroPhoto from "@/public/hero/hero.jpg";

/*
 * PHOTOGRAPH APPROVAL. The preferred Who We Are photograph is a practical
 * training session (`public/academy/huzali-academy-eyeliner-application-lesson.jpeg`). Its publication
 * permission is not yet confirmed, so until this is set to `true` it is
 * shown only in development (`next dev`); production keeps the already
 * published hero training photograph.
 */
const trainingPhotoApproved = false;

const trainingPhoto = {
  src: trainingSessionPhoto,
  alt: "A Huzali Academy instructor applies eyeliner to a seated student while another student watches during practical training.",
  position: "object-[60%_40%]",
};

const publishedPhoto = {
  src: heroPhoto,
  alt: "A Huzali Academy instructor applies lipstick to a seated student during practical training.",
  position: "object-[55%_35%]",
};

const photo =
  trainingPhotoApproved || process.env.NODE_ENV === "development"
    ? trainingPhoto
    : publishedPhoto;

type Statement = {
  title: string;
  text: string;
  icon: LucideIcon;
};

/* Approved Mission and Vision. */
const statements: Statement[] = [
  {
    title: "Our Mission",
    text: "To empower girls and young women through practical beauty education, creativity and entrepreneurship, helping them develop skills for sustainable livelihoods.",
    icon: Target,
  },
  {
    title: "Our Vision",
    text: "A future where every girl and young woman has the opportunity to develop her potential, pursue economic independence and thrive.",
    icon: Eye,
  },
];

/*
 * Who We Are: the opening of the Academy page, on white. The left-aligned
 * shared intro and a text link beside the photograph (stacked below `lg`,
 * text first), then Mission and Vision as two editorial columns in one
 * quiet neutral panel, divided by a hairline (stacked on phones).
 */
export function WhoWeAre() {
  return (
    <Section
      spacing="compact"
      aria-labelledby="who-we-are-title"
      className="bg-background"
    >
      <Container>
        <div className="grid gap-y-10 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div>
            <SectionIntro
              eyebrow="Who We Are"
              title="Empowering women through beauty education."
              titleId="who-we-are-title"
              description="Huzali Beauty Academy equips girls and young women with practical beauty skills, confidence and opportunities to build independent, sustainable livelihoods."
            />

            <Reveal delay={2} className="mt-6">
              <Link href={coursesIndexHref} className={arrowLinkClassName}>
                Explore our courses
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <ImageReveal
            className={cn(
              imageZoomGroup,
              "relative aspect-4/3 rounded-xl sm:aspect-video lg:aspect-4/3",
            )}
          >
            <div className="absolute inset-0">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                // In the first viewport on tablet and desktop: load it with
                // the page rather than lazily.
                loading="eager"
                sizes="(min-width: 1440px) 648px, (min-width: 1024px) 46vw, 100vw"
                className={cn("object-cover", photo.position, imageZoom)}
              />
            </div>
          </ImageReveal>
        </div>

        <Reveal className="mt-10 grid rounded-xl bg-muted md:grid-cols-2 lg:mt-12">
          {statements.map(({ title, text, icon: Icon }, index) => (
            <div
              key={title}
              className={cn(
                "p-6 sm:p-8 lg:p-10",
                index > 0 && "border-t border-border md:border-t-0 md:border-l",
              )}
            >
              <Icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                {text}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
