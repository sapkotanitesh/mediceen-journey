import { gsap } from "./gsap";
import type { SceneBuilder } from "@/hooks/useScrollAnimation";

export const heroTimeline: SceneBuilder = ({ root, reducedMotion }) => {
  const phone = root.querySelector("[data-hero-phone]");
  const copy = root.querySelectorAll("[data-reveal]");

  if (reducedMotion) {
    gsap.set([copy, phone], { opacity: 1, y: 0, scale: 1 });
    return;
  }

  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .from(copy, { opacity: 0, y: 28, duration: 1, stagger: 0.09 })
    .from(phone, { opacity: 0, y: 60, scale: 0.94, duration: 1.3 }, 0.2);

  if (phone) {
    gsap.to(phone, {
      y: -10,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // The phone gently approaches as the visitor enters the product story.
    gsap.to(phone, {
      scale: 1.08,
      yPercent: 4,
      ease: "none",
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });
  }
};
