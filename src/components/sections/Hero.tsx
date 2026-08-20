import { Link } from "@tanstack/react-router";
import { PhoneMockup, PhoneStatusBar } from "@/components/ui/PhoneMockup";
import { StoreBadges } from "@/components/ui/StoreBadge";
import { Button } from "@/components/ui/brand-button";
import { PageContainer } from "@/components/layout/PageContainer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { heroTimeline } from "@/animations/heroTimeline";
import { wordOfTheDay } from "@/data/product";

export function Hero() {
  const ref = useScrollAnimation<HTMLElement>(heroTimeline);

  return (
    <section ref={ref} className="brand-wash relative overflow-hidden pt-32 sm:pt-40">
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-50" />

      <PageContainer width="wide" className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-xl">
            <p
              className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-brand"
              data-reveal
            >
              Mediceen
            </p>
            <h1
              className="mt-6 text-balance-tight font-display text-[clamp(2.8rem,6.5vw,4.8rem)] font-semibold text-brand-ink"
              data-reveal
            >
              Prepare smarter for MECEE-BL
            </h1>
            <p
              className="mt-6 max-w-lg text-[clamp(1.02rem,1.4vw,1.2rem)] leading-relaxed text-muted-foreground"
              data-reveal
            >
              Practice. Review. Improve. Mediceen helps Nepal medical aspirants build recall with
              MCQs, spaced repetition, flashcards, and weekly MECEE-style mocks.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3" data-reveal>
              <Button asChild variant="outline" size="lg">
                <Link to="/" hash="product">
                  See how it works
                </Link>
              </Button>
            </div>

            <div className="mt-8" data-reveal>
              <StoreBadges />
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div data-hero-phone className="will-change-transform">
              <PhoneMockup className="w-[min(56vw,14rem)] lg:w-[min(22vw,15.5rem)]">
                <HeroScreen />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </PageContainer>

      <div className="h-24 sm:h-32" />
    </section>
  );
}

function HeroScreen() {
  return (
    <div className="flex h-full flex-col">
      <PhoneStatusBar label="Home" />
      <div className="px-5">
        <p className="font-display text-lg font-semibold text-brand-ink">Good evening</p>
        <p className="text-[0.68rem] text-muted-foreground">Ready for today&apos;s set?</p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 px-4">
        <Tile label="Study streak" value="12 days" tone="success" />
        <Tile label="Due reviews" value="24" tone="brand" />
      </div>

      <div className="mt-3 px-4">
        <div className="rounded-2xl border border-teal/40 bg-teal-soft p-3">
          <p className="text-[0.58rem] uppercase tracking-[0.2em] text-brand">Word of the Day</p>
          <p className="mt-1 font-display text-sm font-semibold text-brand-ink">
            {wordOfTheDay.term}
          </p>
          <p className="mt-1 text-[0.68rem] leading-snug text-muted-foreground">
            {wordOfTheDay.definition}
          </p>
        </div>
      </div>

      <div className="mt-3 space-y-2 px-4 pb-6">
        <Row label="Practice MCQs" meta="Anatomy · 20 Q" />
        <Row label="Flashcards" meta="Biochemistry" />
        <Row label="Weekly MECEE mock" meta="Live now" />
      </div>
    </div>
  );
}

function Tile({ label, value, tone }: { label: string; value: string; tone: "success" | "brand" }) {
  return (
    <div
      className={`rounded-2xl border p-3 ${
        tone === "success" ? "border-success/30 bg-success-soft" : "border-brand/20 bg-brand-soft"
      }`}
    >
      <p className="text-[0.55rem] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-base font-semibold text-brand-ink">{value}</p>
    </div>
  );
}

function Row({ label, meta }: { label: string; meta: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-3 py-2.5">
      <span className="text-[0.75rem] font-medium text-brand-ink">{label}</span>
      <span className="text-[0.62rem] text-muted-foreground">{meta}</span>
    </div>
  );
}
