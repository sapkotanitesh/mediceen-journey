import { gsap, revealFrom } from "./gsap";
import type { SceneBuilder } from "@/hooks/useScrollAnimation";

const clockFrames = ["02:59:42", "02:41:08", "02:12:55", "01:38:20", "00:44:07"];

/** Mock interface -> timer -> questions advance -> completion -> results. */
export const mockTimeline: SceneBuilder = ({ root, reducedMotion }) => {
  revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion);
  if (reducedMotion) return;

  const timer = root.querySelector("[data-mock-timer]");
  const counter = root.querySelector("[data-mock-counter]");
  const progress = root.querySelector("[data-mock-progress]");
  const mockPhone = root.querySelector("[data-mock-phone]");
  const resultPhone = root.querySelector("[data-result-phone]");
  if (!timer) return;

  const state = { q: 12 };

  const tl = gsap.timeline({
    scrollTrigger: { trigger: root, start: "top 85%", end: "center 55%", scrub: 0.9 },
  });


  tl.from(mockPhone, { opacity: 0, y: 40, duration: 0.8 });

  clockFrames.forEach((frame, i) => {
    tl.call(
      () => {
        timer.textContent = frame;
      },
      undefined,
      `>${i === 0 ? 0.2 : 0.35}`,
    );
  });

  tl.to(
    state,
    {
      q: 200,
      duration: 2,
      ease: "none",
      onUpdate: () => {
        if (counter) counter.textContent = `Question ${Math.round(state.q)} / 200`;
      },
    },
    1,
  )
    .to(progress, { width: "100%", duration: 2, ease: "none" }, 1)
    .to(mockPhone, { opacity: 0, scale: 0.96, duration: 0.5 }, ">0.2")
    .fromTo(
      resultPhone,
      { opacity: 0, scale: 0.96, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7 },
      "<0.15",
    );
};
