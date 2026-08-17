import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoreBadges } from "@/components/ui/StoreBadge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { revealFrom } from "@/animations/gsap";
import { DISCLAIMER } from "@/lib/constants";

export function DownloadSection() {
  const ref = useScrollAnimation<HTMLElement>(({ root, reducedMotion }) =>
    revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion),
  );

  return (
    <section
      id="download"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden py-28 sm:py-36"
      aria-labelledby="download-heading"
    >
      <div className="brand-watermark pointer-events-none absolute inset-0" aria-hidden="true" />

      <PageContainer className="relative flex flex-col items-center text-center">

        <SectionHeading
          align="center"
          eyebrow="Download"
          title={<span id="download-heading">Ready to prepare?</span>}
          description="Your MECEE-BL journey starts here."
        />

        <div className="mt-10" data-reveal>
          <StoreBadges className="justify-center" />
        </div>

        <p className="mt-4 text-xs text-muted-foreground" data-reveal>
          App Store and Google Play links will be published when the listings go live.
        </p>

        <p
          className="mt-14 max-w-2xl text-xs leading-relaxed text-muted-foreground"
          data-reveal
        >
          {DISCLAIMER}
        </p>
      </PageContainer>
    </section>
  );
}
