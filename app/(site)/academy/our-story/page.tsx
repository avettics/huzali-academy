import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { OurStory } from "@/components/academy/our-story";
import { PageHeader } from "@/components/layout/page-header";
import { storyPublished } from "@/lib/publication";

/*
 * Our Story: the founding story, on its own page. Published under
 * `storyApprovedForPublication` (lib/publication.ts); setting it to `false`
 * returns this route to 404 in production.
 */

const description =
  "A story of courage, friendship and a shared belief that every woman deserves the opportunity to rebuild, grow and thrive.";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Huzali Beauty Academy began: the founders and journey behind the Academy.",
};

export default function OurStoryPage() {
  if (!storyPublished) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow="Our Story & Journey"
        title="Born from resilience. Built to empower."
        description={description}
      />

      <OurStory />
    </>
  );
}
