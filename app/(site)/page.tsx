import { HomeCourses } from "@/components/home/courses/home-courses";
import { HomeExperience } from "@/components/home/experience/home-experience";
import { HomeHero } from "@/components/home/hero/home-hero";
import { HomeImpact } from "@/components/home/impact/home-impact";
import { HomePartners } from "@/components/home/partners/home-partners";
import { WhyHuzali } from "@/components/home/why-huzali/why-huzali";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeCourses />
      <WhyHuzali />
      <HomeExperience />
      <HomePartners />
      <HomeImpact />
    </>
  );
}
