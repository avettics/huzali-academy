import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import {
  displayedPartners,
  partnershipsHref,
  type Partner,
} from "@/lib/partners";

/*
 * Our Partners: a quiet credibility strip on a light neutral surface. One
 * restrained centred line (the section heading, in Manrope), a link to the
 * partnerships page, then one row of muted partner logos at a shared height
 * (wrapping into balanced rows on smaller screens). Until partners are
 * confirmed, the row shows temporary placeholder logos (see
 * lib/partners.ts).
 */
export function HomePartners() {
  return (
    <Section
      aria-labelledby="home-partners-title"
      className="bg-muted py-10 sm:py-12 lg:py-14"
    >
      <Container>
        <Reveal className="text-center">
          <h2
            id="home-partners-title"
            className="text-base font-medium text-pretty text-muted-foreground sm:text-lg"
          >
            Creating opportunities through meaningful partnerships.
          </h2>
          <Link
            href={partnershipsHref}
            className="relative mt-3 inline-flex items-center gap-1.5 rounded-(--radius-control) text-sm font-semibold text-primary underline-offset-4 transition-colors after:absolute after:-inset-x-2 after:-inset-y-3 hover:text-primary-hover hover:underline"
          >
            Explore partnerships
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        {displayedPartners.length > 0 ? (
          <Reveal
            as="ul"
            delay={1}
            className="mt-8 flex flex-wrap items-center justify-center gap-y-8 sm:mt-10"
          >
            {/*
             * Fixed columns, each logo centred in its cell: 2 per row on
             * phones, 3 from `md`, 6 from `lg`. Flex (not grid) keeps an
             * incomplete last row centred whatever the partner count.
             */}
            {displayedPartners.map((partner) => (
              <li
                key={partner.name}
                className="flex basis-1/2 justify-center px-3 md:basis-1/3 lg:basis-1/6"
              >
                <PartnerLogo partner={partner} />
              </li>
            ))}
          </Reveal>
        ) : null}
      </Container>
    </Section>
  );
}

/* Shared height, natural width: logos keep their aspect ratio. */
function PartnerLogo({ partner }: { partner: Partner }) {
  const { logo, alt, href, name } = partner;

  const image = (
    <Image
      src={logo.src}
      width={logo.width}
      height={logo.height}
      alt={alt}
      sizes="160px"
      className="h-8 w-auto max-w-full object-contain opacity-70 grayscale sm:h-9 lg:h-10"
    />
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-(--radius-control)"
      title={name}
    >
      {image}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    image
  );
}
