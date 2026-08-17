import { useLayoutEffect, useRef, type RefObject } from "react";
import { gsap, prefersReducedMotion, registerGsap } from "@/animations/gsap";

export type SceneBuilder = (context: { root: HTMLElement; reducedMotion: boolean }) => void;

/**
 * Runs a GSAP scene scoped to a container element.
 * Each section owns its own scene; nothing is registered globally.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  build: SceneBuilder,
): RefObject<T | null> {
  const ref = useRef<T | null>(null);
  const buildRef = useRef(build);
  buildRef.current = build;

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    registerGsap();
    const reducedMotion = prefersReducedMotion();

    const ctx = gsap.context(() => {
      buildRef.current({ root, reducedMotion });
    }, root);

    return () => ctx.revert();
  }, []);

  return ref;
}
