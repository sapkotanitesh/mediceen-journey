import { gsap, revealFrom } from "./gsap";
import type { SceneBuilder } from "@/hooks/useScrollAnimation";

/** An indicator travels the loop: Prepare -> Measure -> Improve -> Repeat. */
export const journeyTimeline: SceneBuilder = ({ root, reducedMotion }) => {
  revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion);

  const track = root.querySelector<SVGPathElement>("[data-journey-progress]");
  const dot = root.querySelector<SVGCircleElement>("[data-journey-dot]");
  const nodes = root.querySelectorAll<SVGCircleElement>("[data-journey-node]");

  const readSteps = () =>
    Array.from(root.querySelectorAll<HTMLElement>("[data-journey-step]")).map((el, i, arr) => ({
      el,
      t: Number(el.dataset["t"] ?? (arr.length > 1 ? i / (arr.length - 1) : 0)),
    }));

  if (reducedMotion || !track) {
    gsap.set(root.querySelectorAll("[data-journey-step]"), { opacity: 1 });
    return;
  }

  // Labels are positioned after the path is measured on the client, so wait a frame.
  requestAnimationFrame(() => {
    const steps = readSteps();
    const length = track.getTotalLength();

    gsap.set(track, { strokeDasharray: length, strokeDashoffset: length });
    gsap.set(
      steps.map((s) => s.el),
      { opacity: 0.3 },
    );
    gsap.set(nodes, { opacity: 0.5 });

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
        steps.forEach(({ el, t }, i) => {
          const active = state.progress >= t - 0.02;
          gsap.set(el, { opacity: active ? 1 : 0.3 });
          const node = nodes[i];
          if (node) gsap.set(node, { opacity: active ? 1 : 0.5, fill: active ? "var(--brand)" : "var(--background)" });
        });
      },
    });

    // Recalculate once labels/layout settle.
    gsap.set(state, {});
  });
};
