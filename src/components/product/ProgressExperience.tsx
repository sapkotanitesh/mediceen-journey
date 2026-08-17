import { PhoneStatusBar } from "@/components/ui/PhoneMockup";
import { subjectAccuracy } from "@/data/product";

const trend7 = [38, 44, 41, 52, 58, 63, 71];
const trend30 = [30, 34, 33, 40, 46, 44, 52, 57, 55, 62, 66, 74];

function toPath(values: number[], width = 220, height = 56) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const span = max - min || 1;
  return values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * width;
      const y = height - ((v - min) / span) * height;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

/** Insights: subject accuracy and 7- / 30-day trend charts. */
export function ProgressExperience() {
  return (
    <div className="flex h-full flex-col">
      <PhoneStatusBar label="Insights" />

      <div className="px-5">
        <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
          Overall accuracy
        </p>
        <p
          data-insight-accuracy
          className="font-display text-4xl font-semibold tabular-nums text-brand-ink"
        >
          78%
        </p>
      </div>

      <div className="mt-4 space-y-2 px-5">
        {subjectAccuracy.map((s) => (
          <div key={s.subject} data-insight-subject>
            <div className="flex justify-between text-[0.66rem] text-muted-foreground">
              <span>{s.subject}</span>
              <span className="tabular-nums">{s.value}%</span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface-2">
              <div
                data-insight-bar
                className="h-full rounded-full bg-brand"
                style={{ width: `${s.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-3 px-5 pb-6">
        <Chart title="7-day trend" values={trend7} color="var(--success)" />
        <Chart title="30-day trend" values={trend30} color="var(--teal)" />
      </div>
    </div>
  );
}

function Chart({
  title,
  values,
  color,
}: {
  title: string;
  values: number[];
  color: string;
}) {
  return (
    <div
      data-insight-chart
      className="rounded-2xl border border-border bg-card p-3 shadow-soft"
    >
      <p className="text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </p>
      <svg
        viewBox="0 0 220 56"
        className="mt-2 h-14 w-full overflow-visible"
        aria-hidden="true"
      >
        <path
          data-insight-line
          d={toPath(values)}
          fill="none"
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
