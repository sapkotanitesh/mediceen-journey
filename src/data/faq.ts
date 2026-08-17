/** FAQ copy — verbatim from Part 5 of the Website & Legal Content Pack. */
export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "What is Mediceen?",
    answer:
      "A mobile app for MECEE-BL-style MCQ practice, spaced review, flashcards, weekly timed mocks, and progress tracking.",
  },
  {
    question: "Who is it for?",
    answer:
      "Medical entrance aspirants in Nepal (phase 1). You should be at least [MINIMUM_AGE] years old to create an account.",
  },
  {
    question: "How do I sign up?",
    answer:
      "Register with your email (verification code), set a password and display name, then verify your mobile number with a one-time SMS code. You can also use Continue with Google on supported devices and complete phone verification before using the app. Day-to-day login uses email/password or Google — not SMS each time.",
  },
  {
    question: "Why do you need my phone number?",
    answer:
      "We require a verified mobile number once at signup to reduce fake accounts and protect the community. We do not use your number for marketing SMS. See our Privacy Policy.",
  },
  {
    question: "Is Mediceen free?",
    answer:
      "The app is free to use at launch. If paid features are added later, we will update our Terms and store listings.",
  },
  {
    question: "What is the Weekly test?",
    answer:
      "It is Mediceen's MECEE-style mock: a scheduled, timed paper shared with all students that week. You get one scored attempt, a countdown timer, results after submission, and a cohort leaderboard.",
  },
  {
    question: "Can I practice past weekly mocks again?",
    answer:
      "Yes — you can review answers and run an unscored \u201cpractice again\u201d session after your official attempt.",
  },
  {
    question: "How do streaks and review work?",
    answer:
      "Practice builds recall. Review (SM-2) resurfaces questions when you are likely to forget them. Flashcard ratings also feed your review schedule.",
  },
  {
    question: "Will others see my name?",
    answer:
      "Your display name may appear on leaderboards. Choose a name you are comfortable showing publicly.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Use Forgot password on the login screen. We email a reset link to your registered address.",
  },
  {
    question: "How do I delete my account?",
    answer: "See Delete account & data or email [PRIVACY_EMAIL] from your registered email.",
  },
  {
    question: "Does Mediceen give medical advice?",
    answer:
      "No. All content is for exam preparation only. Consult qualified professionals for health decisions.",
  },
  {
    question: "Is Mediceen official MECEE / NMC?",
    answer:
      "No. We are an independent prep platform unless [LEGAL_ENTITY_NAME] publishes a formal partnership announcement.",
  },
  {
    question: "How do I get help?",
    answer: "Email [SUPPORT_EMAIL] — see the Support page for what to include in your message.",
  },
];
