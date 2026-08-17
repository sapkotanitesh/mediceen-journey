import { gsap, revealFrom } from "./gsap";
import type { SceneBuilder } from "@/hooks/useScrollAnimation";

/** Accuracy counts up, charts draw themselves, subject bars fill. */
export const progressTimeline: SceneBuilder = ({ root, reducedMotion }) => {
  revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion);
  if (reducedMotion) return;

  const accuracy = root.querySelector("[data-insight-accuracy]");
  const bars = root.querySelectorAll("[data-insight-bar]");
  const lines = root.querySelectorAll<SVGPathElement>("[data-insight-line]");
  const rows = root.querySelectorAll("[data-leaderboard-row]");

  const tl = gsap.timeline({
    scrollTrigger: { trigger: root, start: "top 85%", end: "center 60%", scrub: 0.8 },
  });


  if (accuracy) {
    const value = { n: 0 };
    tl.to(value, {
      n: 78,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => {
        accuracy.textContent = `${Math.round(value.n)}%`;
      },
    });
  }

  tl.from(bars, { scaleX: 0, transformOrigin: "left center", stagger: 0.1, duration: 0.6 }, "<0.2");

  lines.forEach((line, i) => {
    const length = line.getTotalLength();
    gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
    tl.to(line, { strokeDashoffset: 0, duration: 1, ease: "power2.out" }, `>${i ? 0.1 : 0.2}`);
  });

  if (rows.length) {
    tl.from(rows, { opacity: 0, x: 24, stagger: 0.1, duration: 0.5 }, ">0.1");
  }
};
