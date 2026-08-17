import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, LegalList, LegalSection } from "@/components/layout/LegalPage";
import { PLACEHOLDERS } from "@/lib/constants";

const title = "Support - Mediceen";
const description =
  "Contact Mediceen support for help with your account, app issues, and data requests.";

export const Route = createFileRoute("/support/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/support" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <main>
      <LegalPage
        eyebrow="Support"
        title="Get help"
        intro={`Email us at ${PLACEHOLDERS.supportEmail}. We aim to respond within 2-5 business days. Complex issues (account recovery, data deletion) may take longer.`}
      >
        <LegalSection heading="Before you write">
          <ol className="space-y-2">
            {[
              "The email address on your Mediceen account (if any)",
              "Device model and OS version (e.g. Android 14, iPhone 15, iOS 17)",
              "App version (from Profile or store listing)",
              "A short description of what happened and steps to reproduce",
              "Screenshots if helpful (no passwords in screenshots)",
            ].map((item, i) => (
              <li key={item} className="flex gap-3">
                <span className="font-display text-sm tabular-nums text-brand">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </LegalSection>

        <LegalSection heading="Common topics">
          <LegalList
            items={[
              "Password reset — Use Forgot password on the login screen.",
              <>
                Account deletion — See{" "}
                <Link to="/support/delete-account" className="text-brand underline">
                  Delete account &amp; data
                </Link>{" "}
                or email {PLACEHOLDERS.privacyEmail}.
              </>,
              <>
                FAQ —{" "}
                <Link to="/faq" className="text-brand underline">
                  Frequently asked questions
                </Link>
                .
              </>,
              <>
                Privacy —{" "}
                <Link to="/privacy" className="text-brand underline">
                  Privacy Policy
                </Link>
                .
              </>,
            ]}
          />
        </LegalSection>

        <LegalSection heading="Postal address">
          <p>
            {PLACEHOLDERS.legalEntityName}
            <br />
            {PLACEHOLDERS.registeredAddress}
          </p>
        </LegalSection>
      </LegalPage>
    </main>
  );
}
