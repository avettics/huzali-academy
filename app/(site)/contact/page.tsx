import type { Metadata } from "next";

import { PageBody, textLinkClassName } from "@/components/layout/page-body";
import { PageHeader } from "@/components/layout/page-header";
import { contactPhone } from "@/lib/contact";

/*
 * Contact: page foundation. Shared PageHeader plus a short, verified
 * introduction; the full page is still to be designed and written.
 */

const description =
  "Have a question about Huzali Beauty Academy, its training programmes or ways to support our mission? We'd love to hear from you.";

export const metadata: Metadata = {
  title: "Contact",
  description,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's connect."
        description={description}
        artwork="minimal"
      />

      <PageBody>
        <p>
          Call us on{" "}
          <a href={contactPhone.href} className={textLinkClassName}>
            {contactPhone.display}
          </a>
          .
        </p>
      </PageBody>
    </>
  );
}
