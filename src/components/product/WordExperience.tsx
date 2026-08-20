import { PhoneStatusBar } from "@/components/ui/PhoneMockup";
import { wordOfTheDay } from "@/data/product";

const learned = ["Bradycardia", "Dyspnea", "Haemostasis"];

/** Marketing depiction of the Word of the Day card on the Home screen. */
export function WordExperience() {
  return (
    <div className="flex h-full flex-col">
      <PhoneStatusBar label="Home" />

      <div className="px-4">
        <div className="rounded-2xl border border-teal/40 bg-teal-soft p-4">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-brand">
            Word of the Day
          </p>
          <p className="mt-2 font-display text-xl font-semibold text-brand-ink">
            {wordOfTheDay.term}
          </p>
          <p className="mt-2 text-[0.7rem] leading-relaxed text-muted-foreground">
            {wordOfTheDay.definition}
          </p>
          <span className="mt-4 inline-flex rounded-full bg-brand px-3 py-1 text-[0.62rem] font-medium text-primary-foreground">
            Learned
          </span>
        </div>
      </div>

      <p className="mt-5 px-5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Earlier this week
      </p>
      <ul className="mt-2 space-y-2 px-4">
        {learned.map((term) => (
          <li
            key={term}
            className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2.5 text-[0.75rem] text-brand-ink"
          >
            {term}
            <span className="text-[0.6rem] text-success">Learned</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
