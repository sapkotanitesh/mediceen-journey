import { PhoneStatusBar } from "@/components/ui/PhoneMockup";

const queue = [
  { subject: "Anatomy", when: "Today", count: "12 cards", due: true },
  { subject: "Physiology", when: "Today", count: "8 cards", due: true },
  { subject: "Pharmacology", when: "Tomorrow", count: "6 cards", due: false },
  { subject: "Biochemistry", when: "In 3 days", count: "9 cards", due: false },
];

/** Marketing depiction of the SM-2 due queue on the Home screen. */
export function ReviewQueueExperience() {
  return (
    <div className="flex h-full flex-col">
      <PhoneStatusBar label="Review" />

      <div className="px-4">
        <div className="rounded-2xl border border-success/40 bg-success-soft p-4">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-success">
            Due today
          </p>
          <p className="mt-1 font-display text-3xl font-semibold tabular-nums text-brand-ink">20</p>
          <p className="mt-1 text-[0.68rem] text-muted-foreground">questions scheduled by SM-2</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2 px-4">
        {queue.map((row) => (
          <li
            key={row.subject}
            className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2.5"
          >
            <span>
              <span className="block text-[0.78rem] font-medium text-brand-ink">{row.subject}</span>
              <span className="block text-[0.62rem] text-muted-foreground">{row.count}</span>
            </span>
            <span
              className={
                row.due
                  ? "rounded-full bg-success/15 px-2 py-0.5 text-[0.6rem] font-medium text-success"
                  : "text-[0.62rem] text-muted-foreground"
              }
            >
              {row.when}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
