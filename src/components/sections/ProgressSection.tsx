import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { ProgressExperience } from "@/components/product/ProgressExperience";
import { LeaderboardExperience } from "@/components/product/LeaderboardExperience";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { progressTimeline } from "@/animations/progressTimeline";

export function ProgressSection() {
  const ref = useScrollAnimation<HTMLElement>(progressTimeline);

  return (
    <section ref={ref} className="bg-surface py-28 sm:py-36" aria-labelledby="progress-heading">
      <PageContainer width="wide">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start">
            <PhoneMockup tilt="left" className="w-[min(58vw,14rem)] lg:w-[min(22vw,15rem)]">
              <ProgressExperience />
            </PhoneMockup>
          </div>

          <div>
            <SectionHeading
              eyebrow="Progress"
              title={<span id="progress-heading">Understand your progress.</span>}
              description="See what is improving. See where to focus next. Insights track subject accuracy alongside 7- and 30-day trends, with bookmarks and streaks keeping the habit intact."
            />
          </div>
        </div>

        <div className="mt-28 grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Leaderboard"
              title="Keep climbing."
              description="Weekly, monthly, and all-time cohort rankings. Your display name sits alongside the students preparing for the same paper."
            />
          </div>
          <div className="flex justify-center lg:justify-end">
            <LeaderboardExperience />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
