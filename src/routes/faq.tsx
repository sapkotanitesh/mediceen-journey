import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/layout/LegalPage";
import { faqItems } from "@/data/faq";

const title = "FAQ - Mediceen";
const description =
  "Answers about signup, phone verification, weekly mocks, leaderboards, password reset, and account deletion.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: "Mediceen FAQ" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mediceen-journey.lovable.app/faq" },
    ],
    links: [{ rel: "canonical", href: "https://mediceen-journey.lovable.app/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main>
      <LegalPage
        eyebrow="FAQ"
        title="Frequently asked questions"
        intro="Signup, weekly mocks, leaderboards, privacy, and account questions."
      >
        <div className="space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-border bg-surface/70 px-5 py-4 transition-colors open:border-brand/30 open:bg-surface hover:border-brand/30 sm:px-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[0.98rem] font-semibold text-brand-ink [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brand/25 bg-brand-soft text-brand transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </LegalPage>
    </main>
  );
}
