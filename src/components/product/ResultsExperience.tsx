import { PhoneStatusBar } from "@/components/ui/PhoneMockup";

/** End-of-attempt summary: score, answer review, practice-again path. */
export function ResultsExperience() {
  return (
    <div className="flex h-full flex-col">
      <PhoneStatusBar label="Results" />

      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-brand">
          Attempt submitted
        </p>
        <p
          data-result-score
          className="mt-3 font-display text-5xl font-semibold tabular-nums text-brand-ink"
        >
          78%
        </p>
        <p className="mt-2 text-[0.72rem] text-muted-foreground">
          156 of 200 correct · Weekly MECEE mock
        </p>

        <div className="mt-7 grid w-full grid-cols-2 gap-2">
          <Metric label="Accuracy" value="78%" tone="success" />
          <Metric label="Rank" value="#5" tone="brand" />
        </div>

        <div className="mt-3 w-full space-y-2">
          <span className="block rounded-xl bg-brand py-2 text-[0.74rem] font-medium text-primary-foreground">
            Review answers
          </span>
          <span className="block rounded-xl border border-border py-2 text-[0.74rem] text-muted-foreground">
            Practice again (unscored)
          </span>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "success" | "brand";
}) {
  return (
    <div
      data-result-metric
      className={`rounded-xl border p-3 text-left ${
        tone === "success"
          ? "border-success/30 bg-success-soft"
          : "border-brand/25 bg-brand-soft"
      }`}
    >
      <p className="text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 font-display text-lg font-semibold text-brand-ink">{value}</p>
    </div>
  );
}
