import BlogSection from "@/components/blog-section";
import ContentSectionWithImage from "@/components/content-section-with-image";
import HeroBanner from "@/components/hero-banner";
import WorkWithUsSection from "@/components/work-with-us-section";

export default function Home() {
  return (
    <main className="flex flex-col relative items-center justify-between">
      <HeroBanner />
      <ContentSectionWithImage />
      <WorkWithUsSection />
      <BlogSection />
    </main>
  );
}
