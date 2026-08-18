import { useLayoutEffect, useRef, useState } from "react";
import { journeySteps } from "@/data/product";

const VIEW_W = 400;
const VIEW_H = 620;
const PATH_D =
  "M200 20 C 340 90, 340 200, 200 250 C 60 300, 60 410, 200 460 C 320 500, 330 570, 200 600";

type Node = { x: number; y: number; t: number };

/**
 * Curved loop of the Mediceen learning system with a scroll-driven indicator.
 * Step labels are anchored to the exact points on the path, so the travelling
 * dot lands precisely on each topic as the page is scrolled.
 */
export function JourneyPath() {
  const total = journeySteps.length;
  const trackRef = useRef<SVGPathElement | null>(null);
  const [nodes, setNodes] = useState<Node[]>([]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const length = track.getTotalLength();
    setNodes(
      journeySteps.map((_, i) => {
        const t = total > 1 ? i / (total - 1) : 0;
        const p = track.getPointAtLength(length * t);
        return { x: p.x, y: p.y, t };
      }),
    );
  }, [total]);

  return (
    <div className="relative mx-auto w-full max-w-3xl" data-journey-path>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="w-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          ref={trackRef}
          id="journey-track"
          data-journey-track
          d={PATH_D}
          fill="none"
          stroke="var(--border)"
          strokeWidth="2"
          strokeDasharray="4 8"
        />
        <path
          data-journey-progress
          d={PATH_D}
          fill="none"
          stroke="var(--brand)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {nodes.map((node, i) => (
          <circle
            key={`node-${i}`}
            data-journey-node
            cx={node.x}
            cy={node.y}
            r="4"
            fill="var(--background)"
            stroke="var(--border)"
            strokeWidth="2"
          />
        ))}
        <circle data-journey-dot r="7" fill="var(--success)" cx="200" cy="20" />
      </svg>

      <ol className="pointer-events-none absolute inset-0">
        {journeySteps.map((step, i) => {
          const node = nodes[i];
          if (!node) return null;
          const onLeft = node.x < VIEW_W / 2;
          return (
            <li
              key={step.label}
              data-journey-step
              data-t={node.t}
              className="absolute w-[38%] min-w-[9rem] max-w-[13rem] rounded-xl border border-border bg-card/85 px-3 py-2 shadow-soft backdrop-blur-sm"
              style={{
                top: `${(node.y / VIEW_H) * 100}%`,
                left: `${(node.x / VIEW_W) * 100}%`,
                transform: onLeft
                  ? "translate(calc(-100% - 0.9rem), -50%)"
                  : "translate(0.9rem, -50%)",
                textAlign: onLeft ? "right" : "left",
              }}
            >
              <p className="font-display text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-brand">
                {step.label}
              </p>
              <p className="mt-1 text-[0.75rem] leading-snug text-muted-foreground">
                {step.detail}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
