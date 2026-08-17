import { PhoneStatusBar } from "@/components/ui/PhoneMockup";
import { demoFlashcards } from "@/data/product";

/** Flashcard flip + Easy / Hard / Missed ratings that feed spaced repetition. */
export function FlashcardExperience() {
  const card = demoFlashcards[0]!;

  return (
    <div className="flex h-full flex-col">
      <PhoneStatusBar label="Flashcards" />

      <div className="flex flex-1 items-center px-5">
        <div className="relative w-full" style={{ perspective: "1200px" }} data-card-scene>
          <div
            data-card-inner
            className="relative h-52 w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Face className="border-border bg-card">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-brand">
                {card.subject}
              </p>
              <p className="mt-4 font-display text-base font-semibold leading-snug text-brand-ink">
                {card.front}
              </p>
              <p className="mt-auto text-[0.66rem] text-muted-foreground">Tap to flip</p>
            </Face>
            <Face className="border-teal bg-teal-soft" style={{ transform: "rotateY(180deg)" }}>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-brand">
                Answer
              </p>
              <p className="mt-4 text-[0.85rem] leading-relaxed text-brand-ink">{card.back}</p>
            </Face>
          </div>
        </div>
      </div>

      <div
        data-card-ratings
        className="grid grid-cols-3 gap-2 px-5 pb-6 pt-4"
        style={{ opacity: 0 }}
      >
        <Rating label="Easy" tone="success" />
        <Rating label="Hard" tone="teal" />
        <Rating label="Missed" tone="muted" />
      </div>
    </div>
  );
}

function Face({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`absolute inset-0 flex flex-col rounded-2xl border p-5 shadow-soft ${className ?? ""}`}
      style={{ backfaceVisibility: "hidden", ...style }}
    >
      {children}
    </div>
  );
}

function Rating({ label, tone }: { label: string; tone: "success" | "teal" | "muted" }) {
  const tones = {
    success: "border-success/40 bg-success-soft text-success",
    teal: "border-teal/50 bg-teal-soft text-brand-ink",
    muted: "border-border bg-surface text-muted-foreground",
  } as const;
  return (
    <span
      className={`rounded-xl border py-2 text-center text-[0.72rem] font-medium ${tones[tone]}`}
    >
      {label}
    </span>
  );
}
