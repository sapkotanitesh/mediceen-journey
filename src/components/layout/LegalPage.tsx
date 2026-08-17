import type { ReactNode } from "react";
import { PageContainer } from "./PageContainer";
import { DRAFT_NOTICE, LEGAL_LAST_UPDATED, PLACEHOLDERS } from "@/lib/constants";

/** Simple, quiet layout for the public / legal pages. No scroll choreography. */
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
    <article className="pb-28 pt-32 sm:pt-40">
      <PageContainer width="prose">
        {eyebrow ? (
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 text-balance-tight font-display text-[clamp(2.1rem,4.4vw,3.1rem)] font-semibold text-brand-ink">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}

        {showEffectiveDate ? (
          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Effective date: {PLACEHOLDERS.publishDate} · Last updated:{" "}
            {LEGAL_LAST_UPDATED}
          </p>
        ) : null}

        {draft ? (
          <p className="mt-8 rounded-2xl border border-teal/40 bg-teal-soft px-5 py-4 text-sm leading-relaxed text-brand-ink">
            {DRAFT_NOTICE}
          </p>
        ) : null}

        <div className="prose-mediceen mt-12 space-y-8">{children}</div>
      </PageContainer>
    </article>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
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
