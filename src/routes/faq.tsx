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
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
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
        <dl className="divide-y divide-border border-y border-border">
          {faqItems.map((item) => (
            <div key={item.question} className="py-6">
              <dt className="font-display text-base font-semibold text-brand-ink">
                {item.question}
              </dt>
              <dd className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </LegalPage>
    </main>
  );
}
