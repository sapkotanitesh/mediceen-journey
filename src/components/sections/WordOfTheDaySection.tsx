import { PageContainer } from "@/components/layout/PageContainer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { revealFrom } from "@/animations/gsap";
import { wordOfTheDay } from "@/data/product";

export function WordOfTheDaySection() {
  const ref = useScrollAnimation<HTMLElement>(({ root, reducedMotion }) =>
    revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion),
  );

  return (
    <section ref={ref} className="py-20" aria-labelledby="wotd-heading">
      <PageContainer>
        <div className="mx-auto max-w-xl rounded-3xl border border-teal/40 bg-teal-soft px-8 py-10 text-center">
          <p
            id="wotd-heading"
            className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brand"
            data-reveal
          >
            Word of the Day
          </p>
          <p className="mt-4 font-display text-3xl font-semibold text-brand-ink" data-reveal>
            {wordOfTheDay.term}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground" data-reveal>
            {wordOfTheDay.definition}
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
