import type { Metadata } from "next";

import { PageBody, textLinkClassName } from "@/components/layout/page-body";
import { PageHeader } from "@/components/layout/page-header";
import { contactPhone } from "@/lib/contact";

/*
 * Partnerships: page foundation. Shared PageHeader plus a short, verified
 * introduction; the full page is still to be designed and written.
 */

const description =
  "Partner with Huzali Beauty Academy to expand access to practical beauty education and support the next generation of beauty professionals.";

export const metadata: Metadata = {
  title: "Partnerships",
  description,
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partnerships"
        title="Together, we can create more opportunities."
        description={description}
        artwork="minimal"
      />

      <PageBody>
        <p>
          As we launch our second edition, we are seeking support for training
          materials, equipment and scholarships for deserving students.
        </p>

        <p>
          Every contribution helps strengthen the resources available for
          practical beauty training and creates opportunities for more young
          women to develop valuable skills.
        </p>

        <p>
          To discuss partnering with us, call{" "}
          <a href={contactPhone.href} className={textLinkClassName}>
            {contactPhone.display}
          </a>
          .
        </p>
      </PageBody>
    </>
  );
}
