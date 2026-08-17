import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalList, LegalSection } from "@/components/layout/LegalPage";
import { PLACEHOLDERS } from "@/lib/constants";

const title = "About Mediceen";
const description =
  "Mediceen helps MECEE-BL aspirants prepare with curated MCQs, spaced repetition, and weekly timed mocks. Learn about our mission.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: "Independent MECEE-BL prep for Nepal medical entrance students.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <LegalPage
        eyebrow="About"
        title="Our mission"
        intro="Mediceen exists to give medical entrance aspirants in Nepal a focused, high-quality way to prepare for MECEE-BL — through curated MCQs, evidence-based spaced repetition, and exam-realistic weekly mocks."
      >
        <LegalSection heading="Phase 1 scope">
          <p>
            Phase 1 covers core undergraduate subjects including Anatomy, Physiology,
            Pharmacology, Pathology, Biochemistry, Microbiology, and Immunology. Support
            for additional exams may follow.
          </p>
        </LegalSection>

        <LegalSection heading="Who we serve">
          <LegalList
            items={[
              "Students use the Mediceen mobile app to practice, review, and compete on weekly mocks.",
              "Content teams use a separate admin dashboard to ingest past papers, review AI-assisted drafts, and publish the question bank. That dashboard is not open to the public.",
            ]}
          />
        </LegalSection>

        <LegalSection heading="Who we are">
          <p>
            {PLACEHOLDERS.legalEntityName}
            <br />
            {PLACEHOLDERS.registeredAddress}
          </p>
          <p>Questions: {PLACEHOLDERS.supportEmail}</p>
        </LegalSection>

        <LegalSection heading="Disclaimer">
          <p>
            Mediceen is an independent learning product. References to MECEE-BL describe
            the exam format we prepare for; they do not imply official partnership or
            certification.
          </p>
        </LegalSection>
      </LegalPage>
    </main>
  );
}
