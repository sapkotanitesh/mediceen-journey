import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalList, LegalSection } from "@/components/layout/LegalPage";
import { PLACEHOLDERS } from "@/lib/constants";

const title = "Terms of Service - Mediceen";
const description = "Terms of use for the Mediceen mobile app and website.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main>
      <LegalPage eyebrow="Legal" title="Terms of Service" draft showEffectiveDate>
        <LegalSection heading="1. Agreement">
          <p>
            By downloading, accessing, or using Mediceen, you agree to these Terms of Service
            (“Terms”) and our Privacy Policy. If you do not agree, do not use the service.
          </p>
        </LegalSection>

        <LegalSection heading="2. Eligibility">
          <p>
            You must be at least {PLACEHOLDERS.minimumAge} years old and able to form a binding
            contract. You must provide accurate registration information and keep your credentials
            secure.
          </p>
        </LegalSection>

        <LegalSection heading="3. The service">
          <p>
            Mediceen provides educational MCQ practice, spaced repetition, flashcards, scheduled
            mock exams, progress analytics, and related features for medical entrance exam
            preparation. We may add, change, or remove features with reasonable notice where
            practicable.
          </p>
        </LegalSection>

        <LegalSection heading="4. Educational disclaimer">
          <p>
            Mediceen is for exam preparation only. It does not provide medical advice, clinical
            guidance, or professional certification. Content may contain errors despite our review
            process. Always verify critical facts with official curricula and qualified instructors.
            Mediceen is not affiliated with MECEE, NMC, or any official exam body unless we state
            otherwise in writing.
          </p>
        </LegalSection>

        <LegalSection heading="5. Your account">
          <LegalList
            items={[
              "One person per account unless we approve otherwise.",
              "Provide accurate registration information, including a mobile number you control for required signup verification.",
              "Do not share your password or allow others to use your account.",
              `Notify us promptly at ${PLACEHOLDERS.supportEmail} if you suspect unauthorized access.`,
              "We may suspend or terminate accounts that violate these Terms.",
            ]}
          />
        </LegalSection>

        <LegalSection heading="6. Acceptable use">
          <p>You agree not to:</p>
          <LegalList
            items={[
              "Cheat, scrape, reverse engineer, or automate access to the app or API",
              "Upload malware, harass others, or impersonate any person",
              "Share answer keys or content in ways that harm exam integrity or our rights",
              "Use the service for any unlawful purpose",
            ]}
          />
        </LegalSection>

        <LegalSection heading="7. Content and intellectual property">
          <p>
            Questions, explanations, branding, and software are owned by{" "}
            {PLACEHOLDERS.legalEntityName} or our licensors. You receive a limited, personal,
            non-transferable license to use the app for study. User-generated content is limited to
            profile fields (e.g. display name); you grant us a license to display your display name
            on leaderboards as part of the service.
          </p>
        </LegalSection>

        <LegalSection heading="8. Leaderboards">
          <p>
            Participation in leaderboards is optional in practice but may be integral to weekly mock
            features. Scores and display names may be visible to other users as described in the
            Privacy Policy.
          </p>
        </LegalSection>

        <LegalSection heading="9. Availability">
          <p>
            We strive for reliable service but do not guarantee uninterrupted access. Maintenance,
            updates, or factors outside our control may cause downtime.
          </p>
        </LegalSection>

        <LegalSection heading="10. Termination">
          <p>
            You may stop using Mediceen at any time and request account deletion. We may suspend or
            terminate access for violations of these Terms or to protect the platform.
          </p>
        </LegalSection>

        <LegalSection heading="11. Disclaimer of warranties">
          <p>
            THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” TO THE MAXIMUM EXTENT PERMITTED BY
            LAW. WE DISCLAIM WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>
        </LegalSection>

        <LegalSection heading="12. Limitation of liability">
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, {PLACEHOLDERS.legalEntityName} AND ITS
            AFFILIATES WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF
            MEDICEEN. OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SERVICE SHALL NOT EXCEED THE
            AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS BEFORE THE CLAIM (OR ZERO IF THE SERVICE IS
            FREE).
          </p>
          <p>
            Some jurisdictions do not allow certain limitations; in those cases our liability is
            limited to the fullest extent permitted.
          </p>
        </LegalSection>

        <LegalSection heading="13. Governing law">
          <p>
            These Terms are governed by the laws of {PLACEHOLDERS.governingLaw}, without regard to
            conflict-of-law principles. Disputes shall be subject to the exclusive jurisdiction of
            the courts of {PLACEHOLDERS.governingLaw} unless mandatory consumer law requires
            otherwise. (Confirm with legal counsel before publish.)
          </p>
        </LegalSection>

        <LegalSection heading="14. Changes">
          <p>
            We may modify these Terms. We will post updates at https://mediceen.app/terms. Material
            changes may be communicated via the app or email where appropriate.
          </p>
        </LegalSection>

        <LegalSection heading="15. Contact">
          <p>
            {PLACEHOLDERS.legalEntityName}
            <br />
            {PLACEHOLDERS.registeredAddress}
            <br />
            {PLACEHOLDERS.supportEmail}
          </p>
        </LegalSection>
      </LegalPage>
    </main>
  );
}
