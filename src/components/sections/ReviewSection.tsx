import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { reviewTimeline } from "@/animations/reviewTimeline";

const queue = [
  { id: "01", subject: "Anatomy", state: "Due today", due: true },
  { id: "02", subject: "Physiology", state: "Due today", due: true },
  { id: "03", subject: "Pharmacology", state: "In 3 days", due: false },
];

export function ReviewSection() {
  const ref = useScrollAnimation<HTMLElement>(reviewTimeline);

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="scroll-mt-24 py-24 sm:py-28"
      aria-labelledby="review-heading"
    >
      <PageContainer>
        <SectionHeading
          align="center"
          eyebrow="Review"
          title={<span id="review-heading">Review when it matters.</span>}
          description="Questions return when they are due. Mediceen uses SM-2 scheduling, so the queue follows your memory rather than a fixed calendar."
        />

        <ol className="mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-3">
          {queue.map((item) => (
            <li
              key={item.id}
              data-review-item
              {...(item.due ? { "data-review-due": "" } : {})}
              className="rounded-2xl border border-border bg-card p-5 text-left shadow-soft"
            >
              <p className="font-display text-sm font-semibold tabular-nums text-muted-foreground">
                Question {item.id}
              </p>
              <p className="mt-2 text-base font-medium text-brand-ink">{item.subject}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {item.state}
              </p>
            </li>
          ))}
        </ol>
      </PageContainer>
    </section>
  );
}
