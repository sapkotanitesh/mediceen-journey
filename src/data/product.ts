/**
 * Product content, sourced from Mediceen_Product_Overview.pdf and the
 * Website & Legal Content Pack. Only "Available" capabilities are marketed here.
 */

export type Capability = {
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    title: "Practice MCQs",
    description: "Filter by subject and difficulty; MECEE-BL scoped question bank.",
  },
  {
    title: "Spaced review (SM-2)",
    description: "Revisit questions when they are due so mistakes stick.",
  },
  {
    title: "Flashcards",
    description: "Rate Easy, Hard, or Missed; your schedule adapts.",
  },
  {
    title: "Weekly MECEE mock",
    description: "Timed cohort exam with leaderboard and answer review.",
  },
  {
    title: "Insights",
    description: "Subject accuracy and trends over 7 and 30 days.",
  },
  {
    title: "Word of the Day",
    description: "One medical term each day on your Home screen.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Sign up",
    description:
      "Register with email (verification code) or Google, set your password and profile, then verify your mobile number once with an SMS code.",
  },
  {
    step: "02",
    title: "Practice",
    description:
      "Run MCQs, flashcards, or due reviews on your schedule. Log in later with email or Google — no SMS every time.",
  },
  {
    step: "03",
    title: "Track progress",
    description: "Streaks, insights, bookmarks, and leaderboards show how you are improving.",
  },
];

export const subjects = [
  "Anatomy",
  "Physiology",
  "Pharmacology",
  "Pathology",
  "Biochemistry",
  "Microbiology",
  "Immunology",
];

/** Illustrative MCQ content for the marketing mockups (not a live question bank). */
export const demoQuestions = [
  {
    subject: "Anatomy",
    difficulty: "Medium",
    stem: "Which structure passes through the foramen ovale of the sphenoid bone?",
    options: [
      "Mandibular nerve",
      "Maxillary nerve",
      "Middle meningeal artery",
      "Internal carotid artery",
    ],
  },
  {
    subject: "Physiology",
    difficulty: "Easy",
    stem: "Which ion is primarily responsible for the plateau phase of the cardiac action potential?",
    options: ["Calcium", "Sodium", "Potassium", "Chloride"],
  },
  {
    subject: "Pharmacology",
    difficulty: "Hard",
    stem: "A competitive antagonist shifts the agonist dose–response curve in which direction?",
    options: ["Right, parallel", "Left, parallel", "Downward only", "No shift"],
  },
];

export const demoFlashcards = [
  {
    subject: "Anatomy",
    front: "Nerve supply of the diaphragm",
    back: "Phrenic nerve (C3, C4, C5) — motor supply to the entire diaphragm.",
  },
  {
    subject: "Biochemistry",
    front: "Rate-limiting enzyme of glycolysis",
    back: "Phosphofructokinase-1, allosterically inhibited by ATP and citrate.",
  },
];

export const leaderboardRows = [
  { rank: 4, name: "Student", score: 182, you: false },
  { rank: 5, name: "You", score: 176, you: true },
  { rank: 6, name: "Student", score: 171, you: false },
  { rank: 7, name: "Student", score: 168, you: false },
];

export const leaderboardScopes = ["Weekly", "This Month", "All-time"] as const;

export const wordOfTheDay = {
  term: "Synapse",
  definition: "The junction between two communicating neurons.",
};

export const journeySteps = [
  { label: "Practice", detail: "Filtered MCQ sessions by subject and difficulty." },
  { label: "Recall", detail: "Flashcards rated Easy, Hard, or Missed." },
  { label: "Review", detail: "SM-2 brings questions back when they are due." },
  { label: "Test", detail: "Weekly MECEE-style mock, timed and scored once." },
  { label: "Results", detail: "Score, answer review, and practice-again path." },
  { label: "Insights", detail: "Subject accuracy with 7- and 30-day trends." },
  { label: "Improve", detail: "Focus the next session where it counts." },
];

export const subjectAccuracy = [
  { subject: "Anatomy", value: 82 },
  { subject: "Physiology", value: 74 },
  { subject: "Pharmacology", value: 61 },
  { subject: "Pathology", value: 69 },
];
