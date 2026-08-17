import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/layout/LegalPage";
import { PLACEHOLDERS } from "@/lib/constants";

const title = "Cookie Notice - Mediceen";
const description = "Cookie and tracking practices on mediceen.app.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <main>
      <LegalPage eyebrow="Legal" title="Cookie notice" draft>
        <LegalSection heading="Cookies on our website">
          <p>
            Our initial public website is a static site with no advertising cookies and no
            third-party analytics unless we enable them later.
          </p>
          <p>
            Essential cookies (if any) are used only for basic site delivery or security. If we add
            analytics (e.g. privacy-friendly visit counts), we will update this page and, where
            required, ask for consent.
          </p>
          <p>
            The Mediceen mobile app does not use browser cookies. It stores your login session in
            secure device storage (SecureStore on native platforms).
          </p>
          <p>Contact: {PLACEHOLDERS.privacyEmail}</p>
        </LegalSection>
      </LegalPage>
    </main>
  );
}
