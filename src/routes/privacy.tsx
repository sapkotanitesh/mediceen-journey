import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalList, LegalSection } from "@/components/layout/LegalPage";
import { PLACEHOLDERS } from "@/lib/constants";

const title = "Privacy Policy - Mediceen";
const description =
  "How Mediceen collects and uses account, learning, phone verification, and diagnostic data.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function Table({
  head,
  rows,
}: {
  head: [string, string];
  rows: [string, string][];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-surface-2 text-brand-ink">
          <tr>
            <th className="px-4 py-3 font-medium">{head[0]}</th>
            <th className="px-4 py-3 font-medium">{head[1]}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={row[0]}>
              <td className="px-4 py-3 text-brand-ink">{row[0]}</td>
              <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PrivacyPage() {
  return (
    <main>
      <LegalPage
        eyebrow="Legal"
        title="Privacy Policy"
        draft
        showEffectiveDate
        intro={`This Privacy Policy describes how ${PLACEHOLDERS.legalEntityName} (“Mediceen”, “we”, “us”) collects, uses, and protects personal data when you use the Mediceen mobile application (iOS and Android) and our public website at https://mediceen.app (when published).`}
      >
        <LegalSection heading="1. Contact">
          <p>
            Contact: {PLACEHOLDERS.privacyEmail}
            <br />
            Address: {PLACEHOLDERS.registeredAddress}
          </p>
        </LegalSection>

        <LegalSection heading="2. Scope">
          <p>
            This policy applies to students using the mobile app. Staff use a separate
            admin dashboard governed by internal policies. This policy does not cover
            third-party websites linked from our app or site.
          </p>
        </LegalSection>

        <LegalSection heading="3. Data we collect">
          <h3 className="font-display text-base font-semibold text-brand-ink">
            3.1 Account and profile
          </h3>
          <p>When you register or sign in, we collect:</p>
          <LegalList
            items={[
              "Email address and password (password stored in hashed form by our auth provider)",
              "Display name",
              "Avatar image URL (including from Google Sign-In if you use it)",
              "Email verification codes sent during signup (processed in transit; not stored as message content)",
              "Mobile phone number (required verification at signup — see §3.5)",
            ]}
          />
          <p>
            If you sign in with Google, we receive profile information Google shares with
            us (typically name, email, and profile picture URL). You still complete phone
            verification before full access to the app.
          </p>

          <h3 className="font-display text-base font-semibold text-brand-ink">
            3.2 Learning and usage data
          </h3>
          <p>To provide the app, we store:</p>
          <LegalList
            items={[
              "Quiz and practice sessions, your answers, scores, and timing",
              "Spaced-repetition schedules and study streaks",
              "Bookmarks",
              "Flashcard ratings and session summaries",
            ]}
          />

          <h3 className="font-display text-base font-semibold text-brand-ink">
            3.3 Technical and diagnostic data
          </h3>
          <LegalList
            items={[
              "Authentication session tokens",
              "Server and security logs (may include IP address and device type)",
              "Crash and error reports (if enabled): we use Sentry with sendDefaultPii disabled by default; we may attach your internal user id and email to diagnose issues you report",
            ]}
          />

          <h3 className="font-display text-base font-semibold text-brand-ink">
            3.4 Leaderboards
          </h3>
          <p>
            If you participate in leaderboards, your display name and score may be visible
            to other users for weekly, monthly, or all-time rankings.
          </p>

          <h3 className="font-display text-base font-semibold text-brand-ink">
            3.5 Phone number
          </h3>
          <p>
            We require a verified mobile phone number during signup (after you create your
            account with email or Google). We send a one-time SMS code to confirm you
            control the number. The verified number is stored on your account in our auth
            system (Supabase).
          </p>
          <LegalList
            items={[
              "When: Once at signup (and again if you change your number in Profile, when that feature is available).",
              "Login: Ongoing sign-in uses email/password or Google — we do not send an SMS code every time you log in.",
              "Purpose: Reduce fake accounts, abuse, and duplicate registrations; support account recovery where applicable.",
              "SMS providers: Messages are delivered through third-party SMS gateways (regional providers such as for Nepal and India). Providers process your number and message content only to deliver the OTP.",
              "Marketing: We do not send promotional or marketing SMS.",
              "OTP codes: Verification codes are processed in transit and are not stored as readable message content after verification.",
            ]}
          />
          <p>
            If you do not complete phone verification, you may not be able to use the app
            beyond the signup flow.
          </p>

          <h3 className="font-display text-base font-semibold text-brand-ink">
            3.6 What we do not collect
          </h3>
          <p>
            We do not collect payment card data, precise GPS location, contact lists, or
            use your data for cross-app advertising or sale to data brokers.
          </p>
        </LegalSection>

        <LegalSection heading="4. How we use data">
          <Table
            head={["Purpose", "Legal basis (summary)"]}
            rows={[
              ["Create and secure your account", "Contract / legitimate interest"],
              ["Deliver practice, mocks, review, insights", "Contract"],
              ["Operate leaderboards", "Contract / your participation"],
              ["Send transactional email (OTP, password reset)", "Contract"],
              ["Verify phone at signup (SMS OTP)", "Contract / legitimate interest"],
              ["Monitor reliability and fix bugs", "Legitimate interest"],
              ["Prevent fraud and abuse", "Legitimate interest"],
            ]}
          />
          <p>
            We do not use student data to train public AI models. AI tools on our platform
            are used by administrators only to assist with content ingestion (e.g.
            extracting questions from past papers) — not by students in the mobile app.
          </p>
        </LegalSection>

        <LegalSection heading="5. Third-party service providers">
          <p>We use trusted processors, including:</p>
          <Table
            head={["Provider", "Purpose"]}
            rows={[
              ["Supabase", "Authentication, database, and API hosting"],
              ["Google", "Optional Sign-In"],
              ["Resend (via Supabase Auth)", "Transactional email"],
              ["SMS delivery providers", "One-time phone verification at signup"],
              ["Sentry (optional)", "Error monitoring"],
              ["Expo / EAS", "App build and update delivery"],
            ]}
          />
          <p>
            These providers process data on our behalf under their own terms and security
            measures. Data may be stored in {PLACEHOLDERS.supabaseRegion} and other
            regions where these providers operate.
          </p>
        </LegalSection>

        <LegalSection heading="6. Retention">
          <p>
            We retain account and learning data while your account is active. If you
            request deletion, we delete or anonymize personal data within a reasonable
            period, except where law requires longer retention (e.g. security logs).
          </p>
        </LegalSection>

        <LegalSection heading="7. Security">
          <p>
            We use industry-standard measures including encryption in transit (HTTPS/TLS),
            access controls, and row-level security on our database so users can only
            access their own data where applicable. No method of transmission over the
            Internet is 100% secure.
          </p>
        </LegalSection>

        <LegalSection heading="8. Your rights">
          <p>Depending on applicable law, you may have the right to:</p>
          <LegalList
            items={[
              "Access a copy of your personal data",
              "Correct inaccurate data (e.g. display name in Profile)",
              "Request deletion of your account and associated data",
              "Object to or restrict certain processing",
              "Lodge a complaint with a supervisory authority",
            ]}
          />
          <p>
            To exercise these rights, contact {PLACEHOLDERS.privacyEmail} or follow the
            delete-account process.
          </p>
        </LegalSection>

        <LegalSection heading="9. Children">
          <p>
            Mediceen is not directed at children under {PLACEHOLDERS.minimumAge}. We do
            not knowingly collect data from anyone below that age. Contact us if you
            believe we have collected a child&apos;s data in error.
          </p>
        </LegalSection>

        <LegalSection heading="10. International transfers">
          <p>
            If you use Mediceen from outside Nepal, your data may be processed in Nepal
            and in countries where our providers host infrastructure. We take steps to
            protect data in line with this policy.
          </p>
        </LegalSection>

        <LegalSection heading="11. Changes">
          <p>
            We may update this policy. We will post the new version at
            https://mediceen.app/privacy and update the “Last updated” date. Continued use
            after changes means you accept the updated policy where permitted by law.
          </p>
        </LegalSection>

        <LegalSection heading="12. Contact">
          <p>
            Privacy questions: {PLACEHOLDERS.privacyEmail}
            <br />
            General support: {PLACEHOLDERS.supportEmail}
            <br />
            {PLACEHOLDERS.legalEntityName}, {PLACEHOLDERS.registeredAddress}
          </p>
        </LegalSection>
      </LegalPage>
    </main>
  );
}
