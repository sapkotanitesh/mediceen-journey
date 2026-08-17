import { PageContainer } from "@/components/layout/PageContainer";
import { PhoneMockup, PhoneStatusBar } from "@/components/ui/PhoneMockup";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap, revealFrom } from "@/animations/gsap";

export function FinalMomentSection() {
  const ref = useScrollAnimation<HTMLElement>(({ root, reducedMotion }) => {
    revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion);
    if (reducedMotion) return;
    const phone = root.querySelector("[data-final-phone]");
    if (!phone) return;
    gsap.from(phone, {
      opacity: 0,
      y: 60,
      scale: 0.95,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: root, start: "top 70%" },
    });
    gsap.to(phone, { y: -12, duration: 5, ease: "sine.inOut", repeat: -1, yoyo: true });
  });

  return (
    <section ref={ref} className="brand-wash py-32" aria-labelledby="final-heading">
      <PageContainer className="flex flex-col items-center text-center">
        <p
          id="final-heading"
          className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-brand"
          data-reveal
        >
          Mediceen
        </p>
        <p
          className="mt-6 text-balance-tight font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-brand-ink"
          data-reveal
        >
          Your preparation.
          <br />
          Your pace.
        </p>

        <div data-final-phone className="mt-16">
          <PhoneMockup className="w-[min(66vw,16rem)]">
            <div className="flex h-full flex-col">
              <PhoneStatusBar label="Today" />
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <p className="font-display text-3xl font-semibold text-brand-ink">
                  12
                </p>
                <p className="text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Day streak
                </p>
                <div className="mt-4 h-1 w-24 rounded-full bg-success" />
              </div>
            </div>
          </PhoneMockup>
        </div>
      </PageContainer>
    </section>
  );
}
