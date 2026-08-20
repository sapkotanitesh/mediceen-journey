import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { JourneySection } from "@/components/sections/JourneySection";
import { FinalMomentSection } from "@/components/sections/FinalMomentSection";
import { DownloadSection } from "@/components/sections/DownloadSection";

const title = "Mediceen - MECEE-BL Medical Entrance Prep";
const description =
  "Practice MCQs, spaced review, flashcards, and weekly MECEE-style mocks. Built for Nepal medical aspirants. Download free.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content:
          "Practice, review, and mock exams in one app. Verify once at signup; study on your schedule.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mediceen-journey.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://mediceen-journey.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          name: "Mediceen",
          applicationCategory: "EducationalApplication",
          operatingSystem: "iOS, Android",
          description,
          url: "https://mediceen-journey.lovable.app/",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <ProductShowcase />
      <JourneySection />
      <FinalMomentSection />
      <DownloadSection />
    </main>
  );
}
