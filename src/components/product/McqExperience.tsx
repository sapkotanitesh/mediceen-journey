import { PhoneStatusBar } from "@/components/ui/PhoneMockup";
import { demoQuestions } from "@/data/product";

/** Marketing depiction of a filtered MCQ practice session (subject + difficulty). */
export function McqExperience() {
  return (
    <div className="flex h-full flex-col">
      <PhoneStatusBar label="Practice" />

      <div className="flex gap-2 px-5 pb-3">
        <Chip label="Anatomy" active />
        <Chip label="Medium" />
        <Chip label="20 Q" />
      </div>

      <div className="relative flex-1 px-4">
        {demoQuestions.slice(0, 2).map((q, i) => (
          <article
            key={q.stem}
            data-mcq-card={i}
            className="absolute inset-x-4 top-0 rounded-2xl border border-border bg-card p-4 shadow-soft"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brand">
              Question {i + 1} of 20
            </p>
            <h3 className="mt-2 font-display text-[0.9rem] font-semibold leading-snug text-brand-ink">
              {q.stem}
            </h3>
            <ul className="mt-4 space-y-2">
              {q.options.map((opt, oi) => (
                <li
                  key={opt}
                  data-mcq-option={i === 0 ? oi : undefined}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3 py-2 text-[0.78rem] text-brand-ink"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border text-[0.62rem] text-muted-foreground">
                    {String.fromCharCode(65 + oi)}
                  </span>
                  <span className="leading-snug">{opt}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="px-5 pb-5 pt-3">
        <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
          <div data-mcq-progress className="h-full w-[15%] rounded-full bg-brand" />
        </div>
        <p className="mt-2 text-center text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
          Continue
        </p>
      </div>
    </div>
  );
}

function Chip({ label, active }: { label: string; active?: boolean }) {
  return (
    <span
      className={
        active
          ? "rounded-full bg-brand px-3 py-1 text-[0.62rem] font-medium text-primary-foreground"
          : "rounded-full border border-border px-3 py-1 text-[0.62rem] text-muted-foreground"
      }
    >
      {label}
    </span>
  );
}
