import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { SectorsGrid } from "@/components/sections/SectorsGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { NewsGrid } from "@/components/sections/NewsGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { PartnersStrip } from "@/components/sections/PartnersStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SectorsGrid />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <NewsGrid />
      <PartnersStrip />
      <CTABanner />
    </>
  );
}
