import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isMobileViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

/** Standard entrance for section copy. */
export function revealFrom(
  targets: gsap.TweenTarget,
  trigger: Element,
  reducedMotion: boolean,
) {
  if (reducedMotion) {
    gsap.set(targets, { opacity: 1, y: 0 });
    return;
  }
  gsap.from(targets, {
    opacity: 0,
    y: 24,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.08,
    scrollTrigger: { trigger, start: "top 75%" },
  });
}

export { gsap, ScrollTrigger };
