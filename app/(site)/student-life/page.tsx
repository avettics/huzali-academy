import type { Metadata } from "next";
import Link from "next/link";

import { PageBody, textLinkClassName } from "@/components/layout/page-body";
import { PageHeader } from "@/components/layout/page-header";

/*
 * Student Life: page foundation. Shared PageHeader plus a short, verified
 * introduction; the full page is still to be designed and written.
 */

const description =
  "Discover the people, experiences and hands-on learning that shape life at Huzali Beauty Academy.";

export const metadata: Metadata = {
  title: "Student Life",
  description,
};

export default function StudentLifePage() {
  return (
    <>
      <PageHeader
        eyebrow="Student Life"
        title="A place to learn, create and belong."
        description={description}
      />

      <PageBody>
        <p>
          This page is being prepared. In the meantime,{" "}
          <Link href="/courses" className={textLinkClassName}>
            explore our courses
          </Link>{" "}
          to see the practical skills our students learn.
        </p>
      </PageBody>
    </>
  );
}
