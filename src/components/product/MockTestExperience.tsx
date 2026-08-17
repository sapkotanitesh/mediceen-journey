import { PhoneStatusBar } from "@/components/ui/PhoneMockup";
import { demoQuestions } from "@/data/product";

/**
 * Weekly MECEE-style mock: countdown, shared paper, auto-submit.
 * Choreographed artwork — the timer is not a functioning exam clock.
 */
export function MockTestExperience() {
  const q = demoQuestions[1]!;

  return (
    <div className="flex h-full flex-col">
      <PhoneStatusBar label="Weekly Mock" />

      <div className="mx-4 rounded-2xl bg-brand px-4 py-3 text-primary-foreground">
        <p className="text-[0.6rem] uppercase tracking-[0.22em] opacity-80">Time remaining</p>
        <p
          data-mock-timer
          className="font-display text-2xl font-semibold tabular-nums tracking-tight"
        >
          02:59:42
        </p>
      </div>

      <div className="flex items-center justify-between px-5 pt-4 text-[0.62rem] text-muted-foreground">
        <span data-mock-counter>Question 12 / 200</span>
        <span>Auto-submit on</span>
      </div>

      <div className="mt-2 px-5">
        <div className="h-1 overflow-hidden rounded-full bg-surface-2">
          <div data-mock-progress className="h-full w-[6%] rounded-full bg-success" />
        </div>
      </div>

      <div className="flex-1 px-4 pt-4">
        <article className="rounded-2xl border border-border bg-card p-4 shadow-soft">
          <h3
            data-mock-stem
            className="font-display text-[0.88rem] font-semibold leading-snug text-brand-ink"
          >
            {q.stem}
          </h3>
          <ul className="mt-4 space-y-2">
            {q.options.map((opt, i) => (
              <li
                key={opt}
                className="flex items-center gap-3 rounded-xl border border-border px-3 py-2 text-[0.76rem] text-brand-ink"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border text-[0.6rem] text-muted-foreground">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <p className="px-5 pb-5 pt-3 text-center text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
        One scored attempt · Resume if interrupted
      </p>
    </div>
  );
}
