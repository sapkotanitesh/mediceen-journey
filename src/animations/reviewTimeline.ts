import { gsap, revealFrom } from "./gsap";
import type { SceneBuilder } from "@/hooks/useScrollAnimation";

/** Quiet breathing point: questions become due and return for review (SM-2). */
export const reviewTimeline: SceneBuilder = ({ root, reducedMotion }) => {
  revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion);
  if (reducedMotion) return;

  const items = root.querySelectorAll("[data-review-item]");
  if (!items.length) return;

  gsap
    .timeline({
      scrollTrigger: { trigger: root, start: "top 65%", end: "bottom 80%", scrub: 1 },
    })
    .from(items, { opacity: 0, y: 18, stagger: 0.18, duration: 0.6 })
    .to(
      root.querySelectorAll("[data-review-due]"),
      { borderColor: "var(--success)", color: "var(--success)", duration: 0.5 },
      ">0.2",
    );
};
