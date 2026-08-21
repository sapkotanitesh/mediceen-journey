const trend7 = [38, 44, 41, 52, 58, 63, 71];
const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const stats = [
  { label: "Accuracy", value: "76%", tone: "success" as const },
  { label: "Questions", value: "320", tone: "default" as const },
  { label: "Study time", value: "18h", tone: "default" as const },
  { label: "Day streak", value: "7", suffix: "🔥", tone: "default" as const },
];

function toPath(values: number[], width = 260, height = 64) {
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

function toAreaPath(values: number[], width = 260, height = 64) {
  const line = toPath(values, width, height);
  return `${line} L${width},${height} L0,${height} Z`;
}

/** Insights: weekly stat tiles plus a 7-day accuracy trend chart. */
export function ProgressExperience() {
  const first = trend7[0]!;
  const last = trend7[trend7.length - 1]!;
  const delta = last - first;

  return (
    <div className="flex h-full flex-col">
      <div className="px-5 pt-5">
        <p className="font-display text-2xl font-bold text-brand-ink">Insights</p>
        <p className="mt-0.5 text-[0.7rem] text-muted-foreground">Last 7 days</p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 px-5">
        {stats.map((stat) => (
          <div
            key={stat.label}
            data-insight-stat
            className="rounded-xl bg-card p-3 text-center shadow-soft"
          >
            <p
              className={`font-display text-2xl font-bold tabular-nums ${
                stat.tone === "success" ? "text-success" : "text-brand-ink"
              }`}
            >
              {stat.value}
              {stat.suffix && <span className="ml-0.5">{stat.suffix}</span>}
            </p>
            <p className="mt-0.5 text-[0.66rem] text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 px-5">
        <p className="font-display text-base font-semibold text-brand-ink">Accuracy trend</p>
      </div>

      <div className="mt-3 px-5 pb-6">
        <div data-insight-chart className="rounded-2xl bg-card p-4 shadow-soft">
          <div className="flex items-center gap-2">
            <p className="font-display text-xl font-bold tabular-nums text-brand-ink">{last}%</p>
            <span className="rounded-xl bg-success-soft px-2 py-0.5 text-[0.62rem] font-semibold text-success">
              {delta >= 0 ? "+" : ""}
              {delta} pts this week
            </span>
          </div>

          <div className="mt-3 border-t border-border pt-3">
            <svg viewBox="0 0 260 64" className="h-16 w-full overflow-visible" aria-hidden="true">
              <path d={toAreaPath(trend7)} fill="var(--success)" fillOpacity={0.06} stroke="none" />
              <path
                data-insight-line
                d={toPath(trend7)}
                fill="none"
                stroke="var(--success)"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {trend7.map((v, i) => {
                const max = Math.max(...trend7);
                const min = Math.min(...trend7);
                const span = max - min || 1;
                const x = (i / (trend7.length - 1)) * 260;
                const y = 64 - ((v - min) / span) * 64;
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={3}
                    fill="var(--card)"
                    stroke="var(--success)"
                    strokeWidth={2}
                  />
                );
              })}
            </svg>

            <div className="mt-2 flex justify-between text-[0.62rem] text-muted-foreground">
              {dayLabels.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}