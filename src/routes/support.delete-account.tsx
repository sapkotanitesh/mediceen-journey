import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalList, LegalSection } from "@/components/layout/LegalPage";
import { PLACEHOLDERS } from "@/lib/constants";

const title = "Delete Account & Data - Mediceen";
const description = "How to request deletion of your Mediceen account and personal data.";

export const Route = createFileRoute("/support/delete-account")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Delete Account - Mediceen" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mediceen-journey.lovable.app/support/delete-account" },
    ],
    links: [{ rel: "canonical", href: "https://mediceen-journey.lovable.app/support/delete-account" }],
  }),
  component: DeleteAccountPage,
});

function DeleteAccountPage() {
  return (
    <main>
      <LegalPage
        eyebrow="Support"
        title="Delete account & data"
        intro="To delete your Mediceen account and associated personal data, follow the steps below."
      >
        <LegalSection heading="Request deletion">
          <ol className="space-y-2">
            {[
              `Email ${PLACEHOLDERS.privacyEmail} from the same email address registered on your account.`,
              "Subject line: Account deletion request",
              "Include your display name (if known), the phone number on your account (if any), and a statement that you want your account permanently deleted.",
            ].map((item, i) => (
              <li key={item} className="flex gap-3">
                <span className="font-display text-sm tabular-nums text-brand">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p>
            If you signed up with Google only and cannot email from that address, contact{" "}
            {PLACEHOLDERS.supportEmail} with proof of account ownership (we will verify manually).
          </p>
          <p>
            When in-app account deletion is added to the app, this page will be updated to describe
            that flow first.
          </p>
        </LegalSection>

        <LegalSection heading="What we delete">
          <p>After verifying your identity, we delete or anonymize:</p>
          <LegalList
            items={[
              "Account credentials and profile (email, phone number, display name, avatar URL)",
              "Quiz history, answers, scores, bookmarks, streaks, and spaced-repetition data",
              "Leaderboard entries tied to your account",
            ]}
          />
        </LegalSection>

        <LegalSection heading="What we may retain">
          <LegalList
            items={[
              "Aggregated, anonymized statistics that cannot identify you",
              "Security and audit logs for a limited period where required by law or legitimate security needs",
              "Backup copies until overwritten on our normal backup cycle (typically up to 30 days)",
            ]}
          />
        </LegalSection>

        <LegalSection heading="Timeline">
          <p>We process verified requests within 30 days and confirm by email when complete.</p>
        </LegalSection>

        <LegalSection heading="Questions">
          <p>{PLACEHOLDERS.privacyEmail}</p>
        </LegalSection>
      </LegalPage>
    </main>
  );
}
