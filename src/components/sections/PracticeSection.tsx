import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { McqExperience } from "@/components/product/McqExperience";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { practiceTimeline } from "@/animations/practiceTimeline";
import { subjects } from "@/data/product";

export function PracticeSection() {
  const ref = useScrollAnimation<HTMLElement>(practiceTimeline);

  return (
    <section
      id="product"
      ref={ref}
      className="scroll-mt-24 py-28 sm:py-36"
      aria-labelledby="practice-heading"
    >
      <PageContainer width="wide">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Practice"
              title={<span id="practice-heading">Practice with purpose.</span>}
              description="Focused practice built around your MECEE-BL preparation. Filter by subject and difficulty, choose a question count, and work through a curated bank."
            />

            <ul className="mt-10 flex flex-wrap gap-2" data-reveal>
              {subjects.map((subject) => (
                <li
                  key={subject}
                  className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted-foreground"
                >
                  {subject}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-muted-foreground" data-reveal>
              Practice is untimed by default. Every question moves you forward — answers
              and review come after the session.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhoneMockup tilt="right" className="w-[min(58vw,14rem)] lg:w-[min(22vw,15rem)]">
              <McqExperience />
            </PhoneMockup>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
