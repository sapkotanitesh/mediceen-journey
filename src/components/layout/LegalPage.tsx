import type { ReactNode } from "react";
import { PageContainer } from "./PageContainer";
import { DRAFT_NOTICE, LEGAL_LAST_UPDATED, PLACEHOLDERS } from "@/lib/constants";

/** Quiet, premium layout for the public / legal pages. No scroll choreography. */
export function LegalPage({
  eyebrow,
  title,
  intro,
  draft = false,
  showEffectiveDate = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  draft?: boolean;
  showEffectiveDate?: boolean;
  children: ReactNode;
}) {
  return (
    <article className="pb-28">
      <header className="brand-wash relative overflow-hidden border-b border-border pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-40" />
        <PageContainer width="prose" className="relative">
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full border border-brand/25 bg-brand-soft px-3.5 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-brand">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-6 text-balance-tight font-display text-[clamp(2.3rem,5vw,3.5rem)] font-semibold text-brand-ink">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground">{intro}</p>
          ) : null}

          {showEffectiveDate ? (
            <p className="mt-8 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Effective date: {PLACEHOLDERS.publishDate} · Last updated: {LEGAL_LAST_UPDATED}
            </p>
          ) : null}
        </PageContainer>
      </header>

      <PageContainer width="prose">
        {draft ? (
          <p className="mt-10 rounded-2xl border border-teal/40 bg-teal-soft px-5 py-4 text-sm leading-relaxed text-brand-ink shadow-soft">
            {DRAFT_NOTICE}
          </p>
        ) : null}

        <div className="mt-12 space-y-4">{children}</div>
      </PageContainer>
    </article>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="rounded-3xl border border-border bg-surface/70 p-6 transition-colors hover:border-brand/30 sm:p-8">
      <h2 className="font-display text-lg font-semibold text-brand-ink">{heading}</h2>
      <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
