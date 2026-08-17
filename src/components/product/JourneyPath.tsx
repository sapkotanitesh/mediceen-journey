import { journeySteps } from "@/data/product";

/**
 * Curved loop of the Mediceen learning system with a scroll-driven indicator.
 * The path element is animated by journeyTimeline.
 */
export function JourneyPath() {
  const total = journeySteps.length;

  return (
    <div className="relative mx-auto w-full max-w-3xl" data-journey-path>
      <svg
        viewBox="0 0 400 620"
        className="w-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          id="journey-track"
          data-journey-track
          d="M200 20 C 340 90, 340 200, 200 250 C 60 300, 60 410, 200 460 C 320 500, 330 570, 200 600"
          fill="none"
          stroke="var(--border)"
          strokeWidth="2"
          strokeDasharray="4 8"
        />
        <path
          data-journey-progress
          d="M200 20 C 340 90, 340 200, 200 250 C 60 300, 60 410, 200 460 C 320 500, 330 570, 200 600"
          fill="none"
          stroke="var(--brand)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle data-journey-dot r="7" fill="var(--success)" cx="200" cy="20" />
      </svg>

      <ol className="pointer-events-none absolute inset-0">
        {journeySteps.map((step, i) => {
          const t = i / (total - 1);
          const left = i % 2 === 0 ? "8%" : "58%";
          return (
            <li
              key={step.label}
              data-journey-step
              className="absolute w-[34%] min-w-[8rem]"
              style={{ top: `${6 + t * 84}%`, left }}
            >
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                {step.label}
              </p>
              <p className="mt-1 text-[0.78rem] leading-snug text-muted-foreground">
                {step.detail}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
