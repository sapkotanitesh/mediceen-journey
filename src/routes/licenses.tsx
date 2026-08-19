import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalList, LegalSection } from "@/components/layout/LegalPage";
import { PLACEHOLDERS } from "@/lib/constants";

const title = "Open Source Licenses - Mediceen";
const description = "Open-source acknowledgments for the Mediceen app.";

export const Route = createFileRoute("/licenses")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mediceen-journey.lovable.app/licenses" },
    ],
    links: [{ rel: "canonical", href: "https://mediceen-journey.lovable.app/licenses" }],
  }),
  component: LicensesPage,
});

function LicensesPage() {
  return (
    <main>
      <LegalPage
        eyebrow="Legal"
        title="Open-source licenses"
        intro="Mediceen is built with open-source software. We are grateful to the communities behind projects including, among others:"
      >
        <LegalSection heading="Acknowledgements">
          <LegalList
            items={[
              "React Native and Expo — mobile application framework",
              "Supabase — client libraries for auth and data",
              "React — user interface (admin dashboard)",
            ]}
          />
          <p>
            A full license notice file (NOTICE) may be shipped with app builds. For third-party
            license texts, refer to the “Open source licenses” or “Acknowledgements” section in the
            app settings when available, or contact {PLACEHOLDERS.supportEmail}.
          </p>
        </LegalSection>
      </LegalPage>
    </main>
  );
}
