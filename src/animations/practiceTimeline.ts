import { gsap, revealFrom } from "./gsap";
import type { SceneBuilder } from "@/hooks/useScrollAnimation";

/**
 * Question enters -> options appear -> a selection is visualised -> next question.
 * No correct/incorrect feedback: delayed feedback is not a shipped capability.
 */
export const practiceTimeline: SceneBuilder = ({ root, reducedMotion }) => {
  revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion);

  const first = root.querySelector('[data-mcq-card="0"]');
  const second = root.querySelector('[data-mcq-card="1"]');
  const options = root.querySelectorAll("[data-mcq-option]");
  const progress = root.querySelector("[data-mcq-progress]");
  const selected = root.querySelector('[data-mcq-option="2"]');

  if (reducedMotion || !first || !second) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: "top 85%",
      end: "center 55%",
      scrub: 0.8,
    },
  });


  tl.from(first, { opacity: 0, y: 20, duration: 0.6 })
    .from(options, { opacity: 0, x: 14, stagger: 0.12, duration: 0.5 }, "<0.2")
    .to(
      selected,
      {
        borderColor: "var(--brand)",
        backgroundColor: "var(--brand-soft)",
        duration: 0.4,
      },
      ">0.3",
    )
    .to(progress, { width: "22%", duration: 0.5 }, "<")
    .to(first, { opacity: 0, y: -24, duration: 0.5 }, ">0.4")
    .fromTo(second, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.6 }, "<0.15")
    .to(progress, { width: "32%", duration: 0.4 }, "<");
};
