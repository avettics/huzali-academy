import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageBody } from "@/components/layout/page-body";
import { PageHeader } from "@/components/layout/page-header";
import { teamPublished } from "@/lib/publication";

/*
 * Our Team: page foundation for Huzali Beauty Academy personnel only
 * (leadership, trainers and instructors, administration and support).
 * No verified team details exist yet, so until `teamApprovedForPublication`
 * (lib/publication.ts) is `true` this route renders only in development and
 * returns 404 in production.
 */

const description =
  "Meet the people who guide, teach and support learning at Huzali Beauty Academy.";

export const metadata: Metadata = {
  title: "Our Team",
  description,
};

export default function OurTeamPage() {
  if (!teamPublished) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="Meet Our Academy Team."
        description={description}
      />

      <PageBody>
        <p>
          Profiles of our Academy leadership, trainers and support team will be
          published here once confirmed.
        </p>
      </PageBody>
    </>
  );
}
