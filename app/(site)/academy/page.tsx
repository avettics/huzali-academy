import type { Metadata } from "next";

import { ExploreCourses } from "@/components/academy/explore-courses";
import { LearningExperience } from "@/components/academy/learning-experience";
import { OurApproach } from "@/components/academy/our-approach";
import { StoryIntroduction } from "@/components/academy/story-introduction";
import { WhoWeAre } from "@/components/academy/who-we-are";
import { PageHeader } from "@/components/layout/page-header";

/*
 * The Academy overview: the shared PageHeader, Who We Are, Our Approach,
 * The Learning Experience, a short introduction linking to the full Our
 * Story page (/academy/our-story), then Explore Our Courses. The Learning
 * Experience and the Our Story introduction render only while published.
 */

const description =
  "Discover Huzali Beauty Academy, where practical learning, creativity and confidence come together to help girls and young women build brighter futures.";

export const metadata: Metadata = {
  title: "The Academy",
  description,
};

export default function AcademyPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Academy"
        title="Where beauty meets opportunity."
        description={description}
      />

      <WhoWeAre />
      <OurApproach />
      <LearningExperience />
      <StoryIntroduction />
      <ExploreCourses />
    </>
  );
}
