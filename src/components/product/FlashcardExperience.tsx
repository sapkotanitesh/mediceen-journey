import { useState } from "react";
import { Star, X, Atom } from "lucide-react";
import { demoFlashcards } from "@/data/product";

const TOTAL_QUESTIONS = 20;
const CURRENT_QUESTION = 1;
const TIME_REMAINING = "1:12";
const STREAK = 5;

/** Flashcard flip + Easy / Hard / Missed ratings that feed spaced repetition. */
export function FlashcardExperience() {
  const card = demoFlashcards[0]!;
  const progress = (CURRENT_QUESTION / TOTAL_QUESTIONS) * 100;
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex h-full flex-col bg-card">
      {/* Header */}
      <div className="px-5 pb-3 pt-5">
        <div className="flex items-center justify-between">
          <span className="w-8 shrink-0" aria-hidden="true" />
          <div className="flex-1 text-center">
            <p className="font-display text-sm font-semibold text-brand-ink">
              Practice Flash card
            </p>
            <p className="text-[0.65rem] text-muted-foreground">
              Question {CURRENT_QUESTION} of {TOTAL_QUESTIONS}
            </p>
          </div>
          <button
            type="button"
            className="w-8 shrink-0 text-right text-brand-ink"
            aria-label="Close"
          >
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

      {/* Streak badge */}
      <div className="flex justify-center pb-3">
        <span className="flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-sm font-extrabold text-brand-ink shadow-soft">
          <span aria-hidden="true">🔥</span>
          {STREAK}
        </span>
      </div>

      {/* Card stack */}
      <div
        className="relative flex flex-1 items-center justify-center px-8"
        style={{ perspective: "1200px" }}
        data-card-scene
      >
        <div className="relative aspect-[4/5] w-[72%]">
          {/* thin peeking edges behind the main card */}
          <div
            className="absolute inset-0 translate-x-1.5 translate-y-1 rotate-2 rounded-[1.75rem] bg-brand/30"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -translate-x-1 translate-y-0.5 -rotate-2 rounded-[1.75rem] bg-surface-2 shadow-soft"
            aria-hidden="true"
          />

          <button
            type="button"
            data-card-inner
            onClick={() => setFlipped((f) => !f)}
            aria-pressed={flipped}
            aria-label={flipped ? "Show question" : "Reveal answer"}
            className="relative h-full w-full cursor-pointer pointer-events-auto transition-transform duration-500 ease-out"
            style={{
              transformStyle: "preserve-3d",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front: question */}
            <Face className="border-none bg-success shadow-soft outline outline-2 -outline-offset-2 outline-success">
              <div className="flex items-start justify-between">
                <span className="rounded-3xl bg-white/40 px-3 py-1 text-[0.6rem] font-extrabold text-success">
                  {card.subject}
                </span>
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              </div>
              <p className="mt-6 flex-1 text-center font-display text-[0.8rem] font-extrabold leading-relaxed text-white">
                {card.front}
              </p>
              <p className="text-center text-[0.55rem] font-extrabold uppercase tracking-wide text-white/75">
                Tap to reveal answer
              </p>
            </Face>

            {/* Back: answer */}
            <Face
              className="border-none bg-success shadow-soft outline outline-2 -outline-offset-2 outline-success"
              style={{ transform: "rotateY(180deg)" }}
            >
              <Atom
                className="absolute left-3 top-3 h-8 w-8 text-white/25"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <Atom
                className="absolute bottom-3 right-3 h-8 w-8 rotate-45 text-white/25"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div className="flex flex-1 items-center justify-center">
                <p className="text-center font-display text-base font-extrabold text-white">
                  {card.back}
                </p>
              </div>
            </Face>
          </button>
        </div>
      </div>

      {/* Ratings */}
      <div className="px-5 pb-6 pt-2">
        <p className="mb-3 text-center text-xs text-muted-foreground">How well did you know it?</p>
        <div data-card-ratings className="grid grid-cols-3 gap-3">
          <Rating label="Missed" emoji="🙁" tone="danger" />
          <Rating label="Hard" emoji="😐" tone="warning" />
          <Rating label="Easy" emoji="😊" tone="success" />
        </div>
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
      className={`absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[1.75rem] p-5 ${className ?? ""}`}
      style={{ backfaceVisibility: "hidden", ...style }}
    >
      {children}
    </div>
  );
}

function Rating({
  label,
  emoji,
  tone,
}: {
  label: string;
  emoji: string;
  tone: "success" | "warning" | "danger";
}) {
  const tones = {
    success: "border-success/40 bg-success-soft text-success",
    warning: "border-warning/40 bg-warning-soft text-warning",
    danger: "border-destructive/40 bg-destructive-soft text-destructive",
  } as const;
  return (
    <span
      className={`flex flex-col items-center gap-1 rounded-xl border py-3 text-center text-xs ${tones[tone]}`}
    >
      <span className="text-lg" aria-hidden="true">
        {emoji}
      </span>
      {label}
    </span>
  );
}