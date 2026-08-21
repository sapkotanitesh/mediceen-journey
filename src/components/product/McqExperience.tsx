import { X } from "lucide-react";
import { demoQuestions } from "@/data/product";

const TOTAL_QUESTIONS = 20;
const CURRENT_QUESTION = 1;
const TIME_REMAINING = "1:12";
const SELECTED_INDEX = 0;

export function McqExperience() {
  const q = demoQuestions[0]!;
  const progress = (CURRENT_QUESTION / TOTAL_QUESTIONS) * 100;

  return (
    <div className="flex h-full flex-col bg-surface">
      {/* Header */}
      <div className="bg-card px-5 pb-3 pt-5">
        <div className="flex items-center justify-between">
          <span className="w-8 shrink-0" aria-hidden="true" />
          <div className="flex-1 text-center">
            <p className="font-display text-sm font-semibold text-brand-ink">Practice MCQ</p>
            <p className="text-[0.65rem] text-muted-foreground">
              Question {CURRENT_QUESTION} of {TOTAL_QUESTIONS}
            </p>
          </div>
          <button type="button" className="w-8 shrink-0 text-right text-brand-ink" aria-label="Close">
            <X className="ml-auto h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>

        <div className="mt-3 flex items-center gap-2.5">
          <div className="h-1 flex-1 overflow-hidden rounded-xl bg-surface-2">
            <div className="h-full rounded-xl bg-brand" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-xs text-brand-ink">{TIME_REMAINING}</span>
        </div>
      </div>

      {/* Question card — no longer flex-1, sized to content only */}
      <div className="px-4 pt-4">
        <article
          data-mcq-card
          className="rounded-2xl border border-border bg-surface-2 p-4 shadow-soft"
        >
          <span className="inline-block rounded-full bg-success-soft px-3 py-1 text-[0.68rem] font-medium text-success">
            {q.subject}
          </span>
          <h3 className="mt-3 font-display text-[0.85rem] font-semibold leading-snug text-brand-ink">
            {q.stem}
          </h3>

          <ul className="mt-4 space-y-2">
            {q.options.map((opt, oi) => {
              const isSelected = oi === SELECTED_INDEX;
              return (
                <li
                  key={opt}
                  data-mcq-option={oi}
                  className={`flex items-center gap-2.5 rounded-xl border px-3 py-2 text-[0.76rem] font-medium ${
                    isSelected
                      ? "border-success bg-success-soft text-brand-ink"
                      : "border-border bg-card text-brand-ink"
                  }`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-2 text-[0.65rem] font-bold text-muted-foreground">
                    {String.fromCharCode(65 + oi)}
                  </span>
                  <span className="leading-snug">{opt}</span>
                </li>
              );
            })}
          </ul>
        </article>
      </div>

      {/* Spacer fills remaining space instead of the card */}
      <div className="flex-1" />

      {/* Bottom action bar */}
      <div className="border-t border-border bg-card px-4 py-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-2xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-brand-ink"
          >
            Skip
          </button>
          <button
            type="button"
            className="flex-1 rounded-2xl bg-gradient-to-r from-success to-teal py-2.5 text-sm font-semibold text-white"
          >
            Confirm answer
          </button>
        </div>
      </div>
    </div>
  );
}