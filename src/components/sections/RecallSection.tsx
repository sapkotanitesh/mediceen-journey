import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { FlashcardExperience } from "@/components/product/FlashcardExperience";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { recallTimeline } from "@/animations/recallTimeline";

export function RecallSection() {
  const ref = useScrollAnimation<HTMLElement>(recallTimeline);

  return (
    <section ref={ref} className="bg-surface py-28 sm:py-36" aria-labelledby="recall-heading">
      <PageContainer width="wide">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <PhoneMockup tilt="left" className="w-[min(58vw,14rem)] lg:w-[min(22vw,15rem)]">
              <FlashcardExperience />
            </PhoneMockup>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Recall"
              title={<span id="recall-heading">Master recall.</span>}
              description="Practice is only half the journey. Remembering is where it sticks."
            />

            <dl className="mt-10 space-y-6" data-reveal>
              <Item
                term="Flip and rate"
                detail="Rate every card Easy, Hard, or Missed as you go."
              />
              <Item
                term="Ratings feed review"
                detail="Your ratings adjust the spaced-repetition schedule automatically."
              />
              <Item
                term="Session summary"
                detail="Each flashcard run ends with a clear summary of what you covered."
              />
            </dl>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function Item({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="border-l-2 border-teal pl-5">
      <dt className="font-display text-base font-semibold text-brand-ink">{term}</dt>
      <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</dd>
    </div>
  );
}
