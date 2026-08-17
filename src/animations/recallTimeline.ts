import { gsap, revealFrom } from "./gsap";
import type { SceneBuilder } from "@/hooks/useScrollAnimation";

/** Card appears -> flips -> answer revealed -> Easy / Hard / Missed. */
export const recallTimeline: SceneBuilder = ({ root, reducedMotion }) => {
  revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion);

  const inner = root.querySelector("[data-card-inner]");
  const ratings = root.querySelector("[data-card-ratings]");

  if (reducedMotion) {
    gsap.set(ratings, { opacity: 1 });
    return;
  }
  if (!inner) return;

  gsap
    .timeline({
      scrollTrigger: { trigger: root, start: "top 85%", end: "center 55%", scrub: 0.9 },
    })

    .from(inner, { opacity: 0, y: 30, duration: 0.6 })
    .to(inner, { rotateY: 180, duration: 1, ease: "power2.inOut" }, ">0.4")
    .to(ratings, { opacity: 1, y: 0, duration: 0.5 }, ">0.1")
    .from(
      root.querySelectorAll("[data-card-ratings] > *"),
      { opacity: 0, y: 12, stagger: 0.1, duration: 0.4 },
      "<",
    );
};
