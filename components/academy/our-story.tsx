import Image, { type StaticImageData } from "next/image";
import { ImageIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ImageReveal } from "@/components/motion/image-reveal";
import { imageZoom, imageZoomGroup } from "@/components/motion/image-zoom";
import { Reveal } from "@/components/motion/reveal";
import { storyPublished } from "@/lib/publication";
import { cn } from "@/lib/utils";
import academyTrainingDemonstration from "@/public/academy/huzali-academy-eye-makeup-demonstration.jpeg";
import euniceKakuviMuthama from "@/public/academy/huzali-academy-director-eunice-kakuvi-muthama.jpeg";
import husnaZaid from "@/public/academy/huzali-academy-founder-husna-zaid.jpeg";
import huzaliBeautyWorldTeam from "@/public/academy/huzali-beauty-world-team.jpeg";

/*
 * Our Story & Journey chapters, for the dedicated `/academy/our-story`
 * page (whose PageHeader carries the story's introduction). PUBLICATION
 * HOLD: see `storyApprovedForPublication` in `lib/publication.ts`.
 */

type Photo = {
  src: StaticImageData;
  alt: string;
  /** Tailwind `object-*` position class for the crop. */
  position?: string;
  /**
   * Optional tighter crop (a `scale-*` and `origin-*` class), for studio
   * portraits whose subject is small in the frame. Applied to the image's
   * wrapper so the shared hover zoom (on the image) works on top of it.
   * Crops only; never alters the photograph's colours or proportions.
   */
  crop?: string;
};

type Chapter = {
  title: string;
  /** Who the chapter introduces, shown beneath the title. */
  person?: { name: string; role: string };
  paragraphs: string[];
  /**
   * Authentic photograph (under `public/academy/`). Leave undefined when
   * none is available: a quiet pending area is shown instead.
   */
  photo?: Photo;
  /** What the photograph will show, for the pending area. */
  pendingLabel: string;
};

const husna: Chapter = {
  title: "A Woman Who Chose to Rise",
  person: { name: "Husna Zaid", role: "Founder & Chief Executive Officer" },
  photo: {
    src: husnaZaid,
    alt: "Portrait of Husna Zaid, Founder and Chief Executive Officer of Huzali Beauty World.",
    position: "object-[50%_20%]",
    crop: "scale-125 origin-[50%_28%]",
  },
  pendingLabel: "Portrait of Husna Zaid",
  paragraphs: [
    "Behind Huzali Beauty World is a woman whose journey reflects strength, determination and the courage to begin again.",
    "As a survivor of gender-based violence, Husna Zaid faced challenges that could have overshadowed her hopes for the future. Rather than letting those experiences set the direction of her life, she chose to rebuild and rediscover her sense of purpose.",
    "Her experiences gave her a firm belief: women and girls in difficult circumstances deserve access to practical skills, mentorship and real opportunities to build independent lives.",
    "Husna saw in the beauty industry a route to self-expression, entrepreneurship, dignity and economic independence.",
    "That belief became the foundation of Huzali Beauty World, an organization that creates opportunities for women and girls through beauty and education.",
  ],
};

/*
 * A photograph of Husna and Eunice together is preferred here once one is
 * supplied; until then, Eunice's portrait.
 */
const eunice: Chapter = {
  title: "A Friendship That Became a Shared Purpose",
  person: {
    name: "Eunice Kakuvi Muthama",
    role: "Director, Huzali Beauty World",
  },
  photo: {
    src: euniceKakuviMuthama,
    alt: "Portrait of Eunice Kakuvi Muthama, Director of Huzali Beauty World.",
    position: "object-[50%_20%]",
    crop: "scale-125 origin-[50%_28%]",
  },
  pendingLabel: "Photograph of Husna Zaid and Eunice Kakuvi Muthama",
  paragraphs: [
    "Husna did not build Huzali alone.",
    "Alongside her is Eunice Kakuvi Muthama, her longtime best friend and the Director of Huzali Beauty World.",
    "Their friendship rests on loyalty, encouragement and a shared understanding of the challenges many women face.",
    "Like Husna, Eunice is a survivor of gender-based violence. Their experiences led them to the same conviction: women deserve the chance to rebuild their confidence, become independent and earn a sustainable living.",
    "From the earliest days of Huzali Beauty World, Eunice has worked beside Husna, contributing her professional experience, leadership and steady encouragement.",
    "Together, they built an organization focused on education, entrepreneurship and economic opportunity.",
    "Today, Eunice contributes to the company's strategy, operations, partnerships and growth.",
  ],
};

/*
 * The Huzali Beauty World team photograph. Its date is not established, so
 * it is not described as an early or historical image.
 */
const birth: Chapter = {
  title: "The Birth of Huzali Beauty World",
  photo: {
    src: huzaliBeautyWorldTeam,
    alt: "Members of the Huzali Beauty World team, wearing Huzali Beauty World T-shirts.",
    position: "object-[50%_20%]",
  },
  pendingLabel: "Photograph of the Huzali Beauty World team",
  paragraphs: [
    "Huzali Beauty World grew out of those experiences and aspirations.",
    "It was founded on a simple belief: beauty is about more than appearance. It can be a source of confidence, creativity, dignity and a livelihood.",
    "Husna and Eunice wanted an organization where women and young people could discover what they are capable of, and see beauty as a profession that can support an independent life, not only as a passion.",
    "They saw how professional skills could open doors to employment, entrepreneurship and personal growth.",
    "They also knew that talent alone is often not enough. Aspiring beauty professionals need practical training, guidance, equipment, exposure and encouragement before they can enter the industry with confidence.",
    "That understanding shaped Huzali's wider mission and led to the creation of Huzali Beauty Academy.",
  ],
};

/*
 * Chapter 4 photograph: a practical training session. Its edition is not
 * confirmed, so it is not described as a particular Academy edition.
 */
const trainingDemonstration: Photo = {
  src: academyTrainingDemonstration,
  alt: "An instructor applies eye makeup to a seated student while other participants watch around a table of makeup kits and mirrors.",
  position: "object-[50%_40%]",
};

const opportunity: Chapter = {
  title: "From Beauty to Opportunity",
  photo: trainingDemonstration,
  pendingLabel: "Photograph of practical training",
  paragraphs: [
    "Huzali Beauty Academy puts the organization's purpose into practice.",
    "It was created to give vulnerable girls and young women practical beauty skills, and it aims to offer more than technical training.",
    "The Academy is built on the idea that learning a skill can be the start of a larger change in someone's life.",
    "Through hands-on training, students are encouraged to develop their creativity and confidence, strengthen their skills and explore employment and entrepreneurship.",
    "For Husna and Eunice, the Academy continues the reason they started Huzali Beauty World: to help women move forward with dignity, confidence and greater independence.",
  ],
};

const chapterTitleClassName =
  "font-heading text-2xl leading-tight font-semibold tracking-tight text-balance text-foreground sm:text-3xl";

const paragraphsClassName =
  "space-y-4 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg";

/*
 * Our Story & Journey: the founding story's chapters as an editorial
 * feature on white, below the page's PageHeader. Four chapters on one
 * editorial grid, alternating sides from `lg`: two portrait chapters (the
 * founders; portrait in 5 of 12 columns), then two chapters with one
 * top-aligned landscape photograph each (the Huzali team; practical
 * training) on a 50/50 grid, with a quiet rule between chapters. Rendered
 * while `storyApprovedForPublication` is `true` (or in development).
 */
export function OurStory() {
  if (!storyPublished) {
    return null;
  }

  return (
    <Section spacing="compact">
      <Container>
        {/*
         * Chapters with a separator between each pair: half the chapter gap
         * on either side of the rule (32px / 48px), so chapters stay 64px /
         * 96px apart.
         */}
        <div className="space-y-8 lg:space-y-12">
          <PortraitChapter chapter={husna} photoSide="left" eager />
          <ChapterSeparator />
          <PortraitChapter chapter={eunice} photoSide="right" />
          <ChapterSeparator />

          <PhotoChapter chapter={birth} photoSide="left" />
          <ChapterSeparator />
          <PhotoChapter chapter={opportunity} photoSide="right" />
        </div>
      </Container>
    </Section>
  );
}

/*
 * A chapter introducing a person: a 4:5 portrait (5 of 12 columns) beside
 * the narrative (7 of 12) from `lg`, on the given side, so the portrait
 * stays prominent without towering over the text; photograph first when
 * stacked.
 */
function PortraitChapter({
  chapter,
  photoSide,
  eager = false,
}: {
  chapter: Chapter;
  photoSide: "left" | "right";
  /** In the first viewport (the page's first chapter): load it eagerly. */
  eager?: boolean;
}) {
  return (
    <article className="grid gap-y-8 lg:grid-cols-12 lg:items-center lg:gap-x-16">
      <StoryPhoto
        chapter={chapter}
        eager={eager}
        sizes="(min-width: 1440px) 540px, (min-width: 1024px) 38vw, (min-width: 640px) 448px, 100vw"
        className={cn(
          "mx-auto aspect-4/5 w-full max-w-md lg:col-span-5 lg:max-w-none",
          photoSide === "right" && "lg:order-2",
        )}
      />

      <ChapterText chapter={chapter} className="lg:col-span-7" />
    </article>
  );
}

/*
 * A chapter told through one landscape photograph (natural 3:2, never
 * stretched or cropped). From `lg`: a 50/50 grid with the photograph on the
 * given side, top-aligned with the heading, and the complete narrative in
 * the other column. Stacked: heading, photograph, narrative.
 */
function PhotoChapter({
  chapter,
  photoSide,
}: {
  chapter: Chapter;
  photoSide: "left" | "right";
}) {
  const left = photoSide === "left";
  const textColumn = left ? "lg:col-start-2" : "lg:col-start-1";

  return (
    <article className="grid gap-y-8 lg:grid-cols-2 lg:items-start lg:gap-x-16 lg:gap-y-6">
      <Reveal className={cn("lg:row-start-1", textColumn)}>
        <h2 className={chapterTitleClassName}>{chapter.title}</h2>
      </Reveal>

      <StoryPhoto
        chapter={chapter}
        sizes="(min-width: 1440px) 648px, (min-width: 1024px) 46vw, 100vw"
        className={cn(
          "aspect-3/2 w-full lg:row-span-2 lg:row-start-1",
          left ? "lg:col-start-1" : "lg:col-start-2",
        )}
      />

      <Reveal className={cn("lg:row-start-2", textColumn)}>
        <div className={cn(paragraphsClassName, "max-w-xl")}>
          {chapter.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </Reveal>
    </article>
  );
}

/* A quiet 1px rule between chapters, on the shared border token. */
function ChapterSeparator() {
  return <hr className="border-border" />;
}

/* A chapter's heading, optional person line and narrative. */
function ChapterText({
  chapter,
  className,
}: {
  chapter: Chapter;
  className: string;
}) {
  return (
    <Reveal className={className}>
      <h2 className={chapterTitleClassName}>{chapter.title}</h2>
      {chapter.person ? (
        <p className="mt-3 text-sm">
          <span className="font-semibold text-foreground">
            {chapter.person.name}
          </span>
          <span className="text-muted-foreground">
            {" "}
            · {chapter.person.role}
          </span>
        </p>
      ) : null}
      <div className={cn(paragraphsClassName, "mt-6 max-w-xl")}>
        {chapter.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </Reveal>
  );
}

/*
 * The chapter's photograph, or, until it is supplied, a quiet pending area
 * on the neutral surface. The pending area is not a photograph, so it is
 * hidden from assistive technology.
 */
function StoryPhoto({
  chapter,
  sizes,
  className,
  eager = false,
}: {
  chapter: Chapter;
  sizes: string;
  className: string;
  eager?: boolean;
}) {
  const { photo } = chapter;

  if (!photo) {
    return (
      <Reveal
        className={cn(
          "flex flex-col items-center justify-center gap-3 rounded-xl bg-muted p-6 text-center",
          className,
        )}
      >
        <ImageIcon
          className="size-6 text-muted-foreground"
          aria-hidden="true"
        />
        <p className="text-sm text-muted-foreground" aria-hidden="true">
          {chapter.pendingLabel}
          <br />
          to be added
        </p>
      </Reveal>
    );
  }

  return (
    <PhotoFrame
      photo={photo}
      sizes={sizes}
      className={className}
      eager={eager}
    />
  );
}

/*
 * An authentic photograph in the shared 8px frame: revealed on scroll
 * (ImageReveal) with the site's shared hover zoom (`imageZoom`), as on the
 * homepage, course pages and Who We Are.
 */
function PhotoFrame({
  photo,
  sizes,
  className,
  eager = false,
}: {
  photo: Photo;
  sizes: string;
  className: string;
  eager?: boolean;
}) {
  return (
    <ImageReveal
      className={cn(imageZoomGroup, "relative rounded-xl", className)}
    >
      <div className={cn("absolute inset-0", photo.crop)}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : undefined}
          className={cn("object-cover", photo.position, imageZoom)}
        />
      </div>
    </ImageReveal>
  );
}
