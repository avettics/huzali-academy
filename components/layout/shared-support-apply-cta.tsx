import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionIntro } from "@/components/layout/section-intro";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/*
 * Destinations. Neither page exists yet: both links lead to the not-found
 * page until `/apply` and `/partnerships` are built.
 */
const applyHref = "/apply";
const supportHref = "/partnerships";

const actionClassName = "w-full sm:w-auto";

/*
 * Shared Support & Apply call to action, rendered once by the public site
 * layout between <main> and the footer (never inside pages). A white
 * section holding one centred soft-lilac panel: the shared centred intro,
 * then Apply Now (primary) and Support the Academy (neutral outline).
 */
export function SharedSupportApplyCta() {
  return (
    <Section
      spacing="compact"
      aria-labelledby="support-apply-title"
      className="bg-background"
    >
      <Container>
        <div className="rounded-xl bg-surface-alt px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <SectionIntro
            align="center"
            eyebrow="Be part of the journey"
            title="Help create opportunities. Or start your own journey."
            titleId="support-apply-title"
            description="Support practical beauty education for girls and young women, or take the first step toward building your own skills and future."
          />

          <Reveal
            delay={2}
            className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
          >
            <Link
              href={applyHref}
              className={cn(
                buttonVariants({ size: "cta", className: actionClassName }),
              )}
            >
              Apply Now
              <ArrowRight aria-hidden="true" />
            </Link>

            <Link
              href={supportHref}
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "cta",
                  className: cn(
                    actionClassName,
                    "border-foreground/20 bg-transparent text-foreground hover:border-foreground/40 hover:bg-background hover:text-foreground",
                  ),
                }),
              )}
            >
              Support the Academy
            </Link>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
