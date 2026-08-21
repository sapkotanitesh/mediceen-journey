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
    <div className="flex h-full flex-col bg-white">
      {/* Header */}
      <div className="px-5 pb-3 pt-5">
        <div className="flex items-center justify-between">
          <span className="w-8 shrink-0" aria-hidden="true" />
          <div className="flex-1 text-center">
            <p className="font-display text-sm font-semibold text-gray-900">
              Practice Flash card
            </p>
            <p className="text-[0.65rem] text-gray-500">
              Question {CURRENT_QUESTION} of {TOTAL_QUESTIONS}
            </p>
          </div>
          <button type="button" className="w-8 shrink-0 text-right text-gray-900" aria-label="Close">
            <X className="ml-auto h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>

        <div className="mt-3 flex items-center gap-2.5">
          <div className="h-1 flex-1 overflow-hidden rounded-xl bg-gray-100">
            <div className="h-full rounded-xl bg-indigo-400" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-xs text-black">{TIME_REMAINING}</span>
        </div>
      </div>

      {/* Streak badge */}
      <div className="flex justify-center pb-3">
        <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-extrabold text-zinc-900 shadow-[0px_8px_24px_-12px_rgba(22,33,29,0.25)]">
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
            className="absolute inset-0 translate-x-1.5 translate-y-1 rotate-2 rounded-[1.75rem] bg-indigo-200"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -translate-x-1 translate-y-0.5 -rotate-2 rounded-[1.75rem] bg-slate-300 shadow-[0px_0px_13px_0px_rgba(31,60,104,0.25)]"
            aria-hidden="true"
          />

          <button
            type="button"
            data-card-inner
            onClick={() => setFlipped((f) => !f)}
            aria-pressed={flipped}
            aria-label={flipped ? "Show question" : "Reveal answer"}
            className="relative h-full w-full cursor-pointer transition-transform duration-500 ease-out"
            style={{
              transformStyle: "preserve-3d",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front: question */}
            <Face className="border-none bg-green-700 shadow-[0px_16px_24px_0px_rgba(31,60,104,0.25)] outline outline-2 -outline-offset-2 outline-emerald-400">
              <div className="flex items-start justify-between">
                <span className="rounded-3xl bg-white/40 px-3 py-1 text-[0.6rem] font-extrabold text-green-800">
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
              className="border-none bg-green-700 shadow-[0px_16px_24px_0px_rgba(31,60,104,0.25)] outline outline-2 -outline-offset-2 outline-emerald-400"
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
        <p className="mb-3 text-center text-xs text-gray-500">How well did you know it?</p>
        <div data-card-ratings className="grid grid-cols-3 gap-3">
          <Rating label="Missed" emoji="🙁" bg="bg-rose-50" ring="outline-rose-200" text="text-rose-500" />
          <Rating label="Hard" emoji="😐" bg="bg-yellow-50" ring="outline-orange-200" text="text-yellow-600" />
          <Rating label="Easy" emoji="😊" bg="bg-emerald-50" ring="outline-green-200" text="text-emerald-600" />
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
  bg,
  ring,
  text,
}: {
  label: string;
  emoji: string;
  bg: string;
  ring: string;
  text: string;
}) {
  return (
    <span
      className={`flex flex-col items-center gap-1 rounded-xl py-3 text-center text-xs outline outline-1 -outline-offset-1 ${bg} ${ring} ${text}`}
    >
      <span className="text-lg" aria-hidden="true">
        {emoji}
      </span>
      {label}
    </span>
  );
}