import type { Metadata } from "next";
import Link from "next/link";

import { PageBody, textLinkClassName } from "@/components/layout/page-body";
import { PageHeader } from "@/components/layout/page-header";
import { contactPhone } from "@/lib/contact";

/*
 * Apply: page foundation. Shared PageHeader plus a short, verified
 * introduction; the full page is still to be designed and written.
 */

const description =
  "Begin your journey toward practical beauty skills, confidence and new opportunities.";

export const metadata: Metadata = {
  title: "Apply",
  description,
};

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Apply Now"
        title="Take the first step."
        description={description}
      />

      <PageBody>
        <p>
          Online applications are not open yet. Details on how to apply will be
          shared here once confirmed.
        </p>

        <p>
          To ask about joining our second edition, call{" "}
          <a href={contactPhone.href} className={textLinkClassName}>
            {contactPhone.display}
          </a>
          , or{" "}
          <Link href="/courses" className={textLinkClassName}>
            explore our courses
          </Link>{" "}
          in the meantime.
        </p>
      </PageBody>
    </>
  );
}
