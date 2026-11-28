import type { Metadata } from "next";
import Link from "next/link";

import { PageBody, textLinkClassName } from "@/components/layout/page-body";
import { PageHeader } from "@/components/layout/page-header";
import { contactPhone } from "@/lib/contact";

/*
 * Admissions: page foundation. Shared PageHeader plus a short, verified
 * introduction; the full page is still to be designed and written.
 */

const description =
  "Take the first step toward developing practical beauty skills, building confidence and exploring new opportunities.";

export const metadata: Metadata = {
  title: "Admissions",
  description,
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Your journey starts with a skill."
        description={description}
      />

      <PageBody>
        <p>
          Admissions information for our second edition, including requirements
          and key dates, will be published here once confirmed.
        </p>

        <p>
          In the meantime, you can{" "}
          <Link href="/courses" className={textLinkClassName}>
            explore our courses
          </Link>{" "}
          or call us on{" "}
          <a href={contactPhone.href} className={textLinkClassName}>
            {contactPhone.display}
          </a>
          .
        </p>
      </PageBody>
    </>
  );
}
