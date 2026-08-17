import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JourneyPath } from "@/components/product/JourneyPath";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { journeyTimeline } from "@/animations/journeyTimeline";

export function JourneySection() {
  const ref = useScrollAnimation<HTMLElement>(journeyTimeline);

  return (
    <section ref={ref} className="py-28 sm:py-36" aria-labelledby="journey-heading">
      <PageContainer>
        <SectionHeading
          align="center"
          eyebrow="The loop"
          title={<span id="journey-heading">The complete Mediceen journey.</span>}
          description="Prepare, measure, improve, repeat. Each part of the app feeds the next."
        />

        <div className="mt-20">
          <JourneyPath />
        </div>
      </PageContainer>
    </section>
  );
}
