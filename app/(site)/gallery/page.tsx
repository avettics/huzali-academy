import type { Metadata } from "next";

import { PageBody } from "@/components/layout/page-body";
import { PageHeader } from "@/components/layout/page-header";

/*
 * Gallery: page foundation. Shared PageHeader plus a short, verified
 * introduction; the full page is still to be designed and written.
 */

const description =
  "A look at practical training and student life at Huzali Beauty Academy.";

export const metadata: Metadata = {
  title: "Gallery",
  description,
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Gallery"
        title="Moments that tell our story."
        description={description}
      />

      <PageBody>
        <p>
          Our gallery is being prepared. Photographs from training sessions and
          Academy life will be added here soon.
        </p>
      </PageBody>
    </>
  );
}
