import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { MockTestExperience } from "@/components/product/MockTestExperience";
import { ResultsExperience } from "@/components/product/ResultsExperience";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { mockTimeline } from "@/animations/mockTimeline";

const facts = [
  "One serious scored attempt each week",
  "Countdown timer with auto-submit",
  "Resume if the app is interrupted",
  "Answer review once the attempt is finished",
  "Cohort leaderboard for that week",
];

export function MockSection() {
  const ref = useScrollAnimation<HTMLElement>(mockTimeline);

  return (
    <section
      ref={ref}
      className="brand-wash py-28 sm:py-36"
      aria-labelledby="mock-heading"
    >
      <PageContainer width="wide">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Test"
              title={<span id="mock-heading">Test yourself.</span>}
              description="When preparation meets pressure. The weekly test is Mediceen's MECEE-style mock — an admin-assembled paper shared with the whole cohort, paced toward a full 200-question, 3-hour format."
            />

            <ul className="mt-10 space-y-3" data-reveal>
              {facts.map((fact) => (
                <li
                  key={fact}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex min-h-[34rem] items-center justify-center lg:justify-end">
            <div data-mock-phone className="absolute">
              <PhoneMockup
                tilt="right"
                className="w-[min(58vw,14rem)] lg:w-[min(22vw,15rem)]"
              >
                <MockTestExperience />
              </PhoneMockup>
            </div>
            <div data-result-phone className="absolute" style={{ opacity: 0 }}>
              <PhoneMockup
                tilt="right"
                label="Mediceen mock results preview"
                className="w-[min(58vw,14rem)] lg:w-[min(22vw,15rem)]"
              >
                <ResultsExperience />
              </PhoneMockup>
            </div>
          </div>
        </div>

        <p className="mt-16 text-center text-xs text-muted-foreground">
          Illustrative animation of the in-app experience — not a functioning exam.
        </p>
      </PageContainer>
    </section>
  );
}
