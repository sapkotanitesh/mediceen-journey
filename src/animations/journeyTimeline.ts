import { gsap, revealFrom } from "./gsap";
import type { SceneBuilder } from "@/hooks/useScrollAnimation";

/** An indicator travels the loop: Prepare -> Measure -> Improve -> Repeat. */
export const journeyTimeline: SceneBuilder = ({ root, reducedMotion }) => {
  revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion);

  const track = root.querySelector<SVGPathElement>("[data-journey-progress]");
  const dot = root.querySelector<SVGCircleElement>("[data-journey-dot]");
  const steps = root.querySelectorAll("[data-journey-step]");

  if (reducedMotion || !track) {
    gsap.set(steps, { opacity: 1 });
    return;
  }

  const length = track.getTotalLength();
  gsap.set(track, { strokeDasharray: length, strokeDashoffset: length });
  gsap.set(steps, { opacity: 0.25 });

  const state = { progress: 0 };

  gsap.to(state, {
    progress: 1,
    ease: "none",
    scrollTrigger: { trigger: root, start: "top 70%", end: "bottom 85%", scrub: 0.7 },
    onUpdate: () => {
      gsap.set(track, { strokeDashoffset: length * (1 - state.progress) });
      if (dot) {
        const point = track.getPointAtLength(length * state.progress);
        gsap.set(dot, { attr: { cx: point.x, cy: point.y } });
      }
      steps.forEach((step, i) => {
        const threshold = i / steps.length;
        gsap.set(step, { opacity: state.progress >= threshold ? 1 : 0.25 });
      });
    },
  });
};
