# Mediceen Launchpad

MEDICEEN — FRESH MARKETING WEBSITE

React + Vite + TypeScript + TSX + Tailwind CSS + GSAP

Build a completely fresh frontend skeleton for the Mediceen marketing website.

This is a public marketing and product showcase website for the Mediceen mobile application.

It is NOT the Mediceen student application.

It is NOT the admin dashboard.

It must NOT become a browser-based recreation of the mobile app.

The purpose of this website is to:

introduce Mediceen

explain the product clearly

showcase the mobile app experience

communicate the learning philosophy

build trust

encourage students to download the app

provide required public/legal pages

support the eventual App Store and Google Play launch

The website should feel like a premium technology/product launch experience rather than a traditional education website.

1. SOURCE OF TRUTH

The following provided Mediceen documents are the authoritative sources for this project:

Mediceen_Product_Overview.pdf

Mediceen_Feature_Inventory_Roadmap.pdf

Mediceen_Theme_Logo_ColorPallets.pdf

Mediceen_Website_Legal_Content_Pack_Updated.pdf

Treat these documents as the source of truth.

Do not invent product features.

Do not present planned or incomplete features as currently available.

Do not invent statistics, testimonials, partnerships, certifications, claims, rankings, medical claims, or user numbers.

If a feature is marked:

Available → it can be marketed as an existing capability.

In Progress / Partial → do not present it as fully available.

Planned → do not market it as a current feature.

The Product Overview defines Mediceen as a medical entrance exam preparation platform initially focused on MECEE-BL in Nepal. The student mobile app supports practice, review, flashcards, weekly MECEE-style mocks, insights, streaks, bookmarks, and leaderboards.

The marketing/legal content pack should be treated as the source of truth for public-facing copy, URLs, SEO, legal pages, store links, disclaimers, and support information. It explicitly states that the legal pages are drafts requiring legal review before publishing.

2. TECHNOLOGY REQUIREMENTS

Use:

React

Vite

TypeScript

TSX

Tailwind CSS

GSAP

GSAP ScrollTrigger

Do NOT build the website as:

one giant JSX file

one min.jsx

a single HTML file with massive inline CSS

an unstructured JavaScript prototype

Use a clean, maintainable React architecture.

3. REQUIRED PROJECT STRUCTURE

Create a structure similar to:

src/
├── assets/
│ ├── images/
│ ├── icons/
│ ├── logos/
│ └── mockups/
│
├── components/
│ ├── layout/
│ │ ├── Navbar.tsx
│ │ ├── Footer.tsx
│ │ └── PageContainer.tsx
│ │
│ ├── ui/
│ │ ├── Button.tsx
│ │ ├── StoreBadge.tsx
│ │ ├── SectionHeading.tsx
│ │ └── PhoneMockup.tsx
│ │
│ ├── product/
│ │ ├── McqExperience.tsx
│ │ ├── FlashcardExperience.tsx
│ │ ├── MockTestExperience.tsx
│ │ ├── ResultsExperience.tsx
│ │ ├── ProgressExperience.tsx
│ │ ├── LeaderboardExperience.tsx
│ │ └── JourneyPath.tsx
│ │
│ └── sections/
│ ├── Hero.tsx
│ ├── PracticeSection.tsx
│ ├── RecallSection.tsx
│ ├── ReviewSection.tsx
│ ├── MockSection.tsx
│ ├── ProgressSection.tsx
│ ├── JourneySection.tsx
│ └── DownloadSection.tsx
│
├── pages/
│ ├── Home.tsx
│ ├── About.tsx
│ ├── FAQ.tsx
│ ├── Support.tsx
│ ├── Privacy.tsx
│ ├── Terms.tsx
│ ├── DeleteAccount.tsx
│ ├── Cookies.tsx
│ └── Licenses.tsx
│
├── animations/
│ ├── heroTimeline.ts
│ ├── practiceTimeline.ts
│ ├── recallTimeline.ts
│ ├── mockTimeline.ts
│ ├── progressTimeline.ts
│ └── journeyTimeline.ts
│
├── data/
│ ├── product.ts
│ ├── faq.ts
│ └── navigation.ts
│
├── hooks/
│ └── useScrollAnimation.ts
│
├── lib/
│ └── constants.ts
│
├── App.tsx
├── main.tsx
└── index.css

You may improve this structure where appropriate, but preserve the principle:

small reusable components + isolated animation logic + centralized content + clean pages.

4. WEBSITE IDENTITY

Mediceen should feel:

premium

calm

intelligent

modern

medical without looking like a hospital website

technologically advanced

trustworthy

focused

cinematic

spacious

The visual language should combine:

medical education + premium consumer technology + focused studying

Do not make it look like:

a generic LMS

a university website

a hospital website

a dashboard

a SaaS admin panel

a template marketplace landing page

5. BRAND COLORS

Use the official Mediceen palette.

Brand Blue

#4D78BD

Use for:

logo typography

headings

navigation

buttons

primary interface elements

important visual accents

Primary Green

#5F9F56

Use for:

positive states

correctness

progress

success

selected leaderboard position

healthcare-related accents

Secondary Teal

#7CC4C1

Use for:

supporting UI

highlights

subtle backgrounds

secondary interface elements

visual accents

Pure White

#FFFFFF

Use as the primary canvas.

The official theme document defines these exact roles for the colors.

Do not replace the brand palette with arbitrary gradients.

Gradients may be used extremely subtly for atmosphere, but the official colors must remain dominant.

6. TYPOGRAPHY

Use a modern, highly readable sans-serif.

Typography should feel closer to:

Apple

Linear

Stripe

modern health-tech products

rather than:

traditional academic websites

government websites

generic Bootstrap templates

Use strong typographic hierarchy.

Large headings should have:

tight line-height

controlled width

generous surrounding whitespace

Avoid excessive bold text everywhere.

7. NAVIGATION

Create a minimal sticky navigation.

Desktop:

MEDICEEN

Product
How It Works
FAQ
About

                         Download App

The navigation should remain visually lightweight.

As the page scrolls:

background may subtly change

blur can increase slightly

border/shadow can appear

logo remains visible

Do not create a huge navbar.

Mobile should use a clean menu interaction.

8. MAIN WEBSITE EXPERIENCE

The primary homepage should feel like one continuous product story.

The overall narrative:

DISCOVER
↓
PRACTICE
↓
RECALL
↓
REVIEW
↓
TEST
↓
RESULTS
↓
UNDERSTAND
↓
IMPROVE
↓
DOWNLOAD

The website should not feel like:

Hero
↓
Feature Card
↓
Feature Card
↓
Feature Card
↓
CTA

Instead, the visitor should feel like they are moving through the Mediceen learning system.

The mobile phone should act as the visual anchor connecting these scenes.

9. HERO — DISCOVER MEDICEEN

Create a calm, cinematic hero.

Suggested copy:

MEDICEEN

Prepare Smarter for
MECEE-BL

Practice. Review. Improve.

Primary visual:

A realistic 3D-style smartphone containing a Mediceen app interface.

Initial state:

phone relatively small

centered

subtle perspective

soft shadow

slight floating motion

generous whitespace

Do NOT begin with an enormous phone.

As scrolling begins:

Hero text
↓
phone gently moves
↓
phone approaches
↓
screen becomes more visible
↓
Mediceen product experience begins

The transition should feel like the visitor is entering the product.

10. PRACTICE — PRACTICE WITH PURPOSE

Headline:

Practice With Purpose.

Supporting copy:

Focused practice built around your MECEE-BL preparation.

Show a realistic MCQ interface inside the phone.

Use product-supported functionality:

subject filtering

difficulty filtering

question count

MECEE-BL question bank

MCQ session

The current product supports filtered MCQ sessions by subject and difficulty.

Visual:

        PRACTICE WITH PURPOSE

       Every question moves you forward.

                    PHONE

              ┌──────────────┐
              │ Question     │
              │              │
              │ A. ...       │
              │ B. ...       │
              │ C. ...       │
              │ D. ...       │
              └──────────────┘

Animation:

Question enters
↓
Options appear
↓
User selection is visualized
↓
Question transitions
↓
Next question

IMPORTANT:

Do NOT show instant correct/incorrect feedback as a current Mediceen feature.

The Product Overview states that immediate correct/incorrect explanation during Practice is currently being redesigned/planned.

Instead, visually communicate:

Question → Practice → Continue

11. MCQ TRANSITION INTO RECALL

Do not abruptly replace the MCQ.

Create a continuous transformation:

MCQ
↓
question card contracts
↓
interface shifts
↓
card transforms
↓
card flips
↓
flashcard appears

This should communicate that practice and recall are connected.

12. RECALL — MASTER RECALL

Headline:

Master Recall.

Supporting copy:

Practice is only half the journey.
Remembering is where it sticks.

Show:

flashcard

Easy

Hard

Missed

spaced review

These are supported student features.

Visual:

              MASTER RECALL

             Make knowledge stick.

                    PHONE

             ┌─────────────────┐
             │                 │
             │    FLASHCARD    │
             │                 │
             │     Anatomy     │
             │                 │
             └─────────────────┘

                Easy  Hard  Missed

Animation:

Flashcard appears
↓
Card flips
↓
Answer revealed
↓
Rating controls appear
↓
Easy / Hard / Missed
↓
Card moves into review system

Keep this section calm.

13. REVIEW — THE SPACED REPETITION LOOP

Create a short visual breathing section.

Headline:

Review When It Matters.

Supporting idea:

Questions return when they are due.

Represent the SM-2 spaced-repetition system visually.

Example:

Question 01
Question 02
Question 03
↓
Due for review
↓
Review again

The product currently uses SM-2 scheduling for due reviews, and flashcard ratings feed that scheduling.

Keep this section shorter than the main Practice and Mock sections.

It is a breathing point.

14. TEST — TEST YOURSELF

Transition from learning mode into exam mode.

Headline:

Test Yourself.

Supporting copy:

When preparation meets pressure.

Show the Weekly MECEE-style Mock.

The actual product supports:

scheduled weekly mock

one serious scored attempt

countdown timer

auto-submit

resume if interrupted

answer review after completion

cohort leaderboard

MECEE-style paper

up to a full 200-question / 3-hour mock format

These capabilities are documented in the product overview.

Visual:

                    TEST YOURSELF

               Ready when the clock starts.

                     PHONE

                ┌─────────────┐
                │  02:59:42   │
                │             │
                │ Question    │
                │             │
                │ A           │
                │ B           │
                │ C           │
                │ D           │
                └─────────────┘

15. MOCK TEST ANIMATION

Use GSAP ScrollTrigger.

Animation sequence:

Mock interface appears
↓
Timer becomes visible
↓
Question changes
↓
Progress indicator advances
↓
Another question
↓
Exam completion
↓
Results appear

The timer does not need to run in real time.

It is a choreographed visual representation of the product.

Do not create a fake functional examination system.

This is a marketing animation.

16. RESULTS — FROM PERFORMANCE TO INSIGHT

This transition is extremely important.

Do not cut directly from:

Mock
↓
Analytics section

Instead:

Mock finishes
↓
Result screen appears inside phone
↓
Result panel expands
↓
Key metrics separate from phone
↓
Charts begin forming
↓
Progress section begins

This makes the product narrative continuous.

17. PROGRESS — UNDERSTAND YOUR PROGRESS

Headline:

Understand Your Progress.

Supporting copy:

See what is improving.
See where to focus next.

Show actual supported concepts:

subject accuracy

7-day trends

30-day trends

leaderboard information

study progress

The student app currently includes insights for subject accuracy and 7/30-day trend charts.

Visual:

          UNDERSTAND YOUR PROGRESS

      See what is improving.
      See where to focus next.

              PHONE

          Accuracy
             78%

       ─────────────────
           7-Day Trend

       ─────────────────
          30-Day Trend

Animation:

Accuracy appears
↓
Chart draws itself
↓
Subject metrics appear
↓
7-day chart expands
↓
30-day chart appears

Keep animation elegant.

18. LEADERBOARD — KEEP CLIMBING

Headline:

Keep Climbing.

Show a compact leaderboard.

The product supports:

Weekly

Monthly

All-time

leaderboards.

Example:

          WEEKLY LEADERBOARD

             #04   Student
             #05   You
             #06   Student
             #07   Student

Animate rows gently into position.

Highlight "You" using:

#5F9F56

Do not make this a huge dashboard.

It should feel like part of the larger progress story.

19. SMALL FEATURE MOMENT — WORD OF THE DAY

Introduce Word of the Day as a small supporting product moment rather than another giant section.

Example:

          WORD OF THE DAY

             Synapse

       The junction between
       two communicating neurons.

The student Home experience includes one published medical term for the day.

Use a subtle animation.

This section should feel like a small detail that makes Mediceen feel alive.

Do not give it the same visual weight as Practice, Mock, or Progress.

20. THE COMPLETE MEDICEEN JOURNEY

Now show the entire learning loop.

Do not create a boring vertical feature list.

Create an elegant flowing path.

Concept:

                 PRACTICE
                    ↓
                RECALL
                    ↓
                 REVIEW
                    ↓
                   TEST
                    ↓
                RESULTS
                    ↓
                INSIGHTS
                    ↓
                 IMPROVE
                    │
                    └────────→ PRACTICE

Better yet, create a curved/circular visual path.

A small indicator should travel along the path as the visitor scrolls.

Core idea:

Prepare → Measure → Improve → Repeat

This is the emotional conclusion of the website.

21. FINAL PRODUCT MOMENT

Bring the phone back one final time.

Keep it extremely simple.

                    MEDICEEN

             Your preparation.
                Your pace.

                  PHONE

Use:

calm movement

soft lighting

generous whitespace

minimal supporting UI

This should feel like the final product reveal before the download CTA.

22. FINAL DOWNLOAD CTA

Headline:

Ready to Prepare?

Supporting copy:

Your MECEE-BL journey starts here.

Buttons:

[ Download on the App Store ]

[ Get it on Google Play ]

Use the official store URLs as configurable constants.

Do NOT hard-code fake store URLs.

The legal content pack explicitly defines placeholders for the App Store and Google Play URLs until the live links are available.

Create a reusable:

StoreBadge.tsx

component.

23. FOOTER

Create a polished, minimal footer.

Include:

MEDICEEN

Practice. Review. Improve.

Product
About
FAQ
Support

Privacy
Terms
Delete Account
Cookies
Licenses

© [YEAR] Redis Digital

Use the legal content pack as the source of truth for footer structure and links.

Do not invent legal entity information.

Keep placeholders where the source document contains placeholders.

24. PUBLIC WEBSITE ROUTES

Implement the following routes:

/
/about
/faq
/support
/privacy
/terms
/support/delete-account
/cookies
/licenses

These paths are defined in the Mediceen website/legal content pack.

The homepage is the main cinematic marketing experience.

The other pages should be significantly simpler.

Do NOT apply the giant scroll animation system to legal pages.

25. LEGAL CONTENT

Use the provided:

Mediceen_Website_Legal_Content_Pack_Updated.pdf

as the source of truth for:

Privacy Policy

Terms of Service

Support

Delete Account

Cookie Notice

Licenses

FAQ

About

footer information

Do not invent legal wording.

Do not modify legal meaning.

Preserve placeholders such as:

Redis Digital
[REGISTERED_ADDRESS]
[SUPPORT_EMAIL]
[PRIVACY_EMAIL]
[PUBLISH_DATE]
[GOVERNING_LAW]
[MINIMUM_AGE]

until real values are supplied.

The document explicitly says the Privacy Policy and Terms are drafts requiring legal review before publication.

26. MEDICAL / LEGAL DISCLAIMER

The website must clearly communicate that Mediceen is an educational exam-preparation product.

Use the source-approved concept:

Mediceen does not provide medical advice, diagnosis, treatment, or professional certification.

It is an exam preparation/study aid.

It is not affiliated with, endorsed by, or operated by MECEE, NMC, or an official exam authority unless formally stated.

The marketing content pack explicitly provides this disclaimer.

Do not make claims such as:

"official MECEE app"

"NMC approved"

"guaranteed admission"

"guaranteed rank"

"best medical entrance app"

"highest success rate"

unless such claims are explicitly supported by future approved content.

27. ANIMATION ARCHITECTURE

Use:

GSAP
GSAP ScrollTrigger

Create independent animation scenes.

For example:

HeroTimeline
PracticeTimeline
RecallTimeline
ReviewTimeline
MockTimeline
ResultsTimeline
ProgressTimeline
JourneyTimeline

Do NOT create one gigantic ScrollTrigger timeline for the entire website.

Each section should own its animation logic.

Use:

scrub

pin where genuinely useful

transform

scale

opacity

rotation

clip-path

subtle parallax

Use pinning selectively.

Not every section needs to be pinned.

28. SCROLL EXPERIENCE

The scroll should feel intentional.

Use:

FOCUS
↓
INTERACTION
↓
PAUSE
↓
FOCUS
↓
INTERACTION
↓
PAUSE

Example:

Hero
↓
Practice interaction
↓
Recall
↓
Review pause
↓
Mock interaction
↓
Results
↓
Progress
↓
Leaderboard
↓
Journey
↓
Final phone
↓
Download

Do not make every section aggressively animated.

The visitor should always understand:

where they are

what feature they are seeing

why it matters

what happens next

29. SPACING

Prioritize:

Spacing
↓
Hierarchy
↓
Continuity
↓
Animation

NOT:

Animation
↓
Force everything into viewport
↓
Crowd page

Some sections may naturally require:

120vh
140vh
160vh

or longer.

That is acceptable.

Do not compress content simply to make every scene fit into exactly one screen.

30. PHONE DESIGN

The phone is the main visual product object.

Desktop guideline:

25–40vw

depending on the section.

Do not make it unnecessarily huge.

The phone should have:

realistic rounded corners

subtle frame

depth

soft shadow

slight perspective

controlled reflections

believable app UI

The UI inside the phone must remain readable.

Avoid excessive fake 3D.

The phone should feel like a premium physical product.

31. RESPONSIVE DESIGN

Design intentionally for:

desktop

laptop

tablet

mobile

Do not simply scale the desktop design down.

Desktop:

TEXT PHONE

or:

PHONE ANALYTICS

Tablet:

TEXT
PHONE
SUPPORTING UI

Mobile:

TEXT

PHONE

SUPPORTING UI

On mobile:

simplify complex animation

reduce 3D

reduce pinning

reduce simultaneous elements

preserve the storytelling sequence

prevent horizontal overflow

ensure all text remains readable

Respect:

prefers-reduced-motion

and provide a reduced-motion experience.

32. PERFORMANCE

The site should feel extremely smooth.

Avoid:

unnecessary re-renders

massive DOM trees

dozens of simultaneous animations

oversized assets

continuous expensive effects

unnecessary WebGL

Use:

transform-based animation

opacity

GPU-friendly properties

lazy loading

responsive images

code splitting where appropriate

Do not use heavy 3D libraries unless genuinely necessary.

A convincing CSS/DOM phone mockup is preferable to introducing unnecessary complexity.

33. CONTENT ARCHITECTURE

Do not hard-code repeated marketing content throughout components.

Create centralized data such as:

src/data/product.ts
src/data/faq.ts
src/data/navigation.ts

Example:

export const productFeatures = [...]
export const navigationItems = [...]
export const faqItems = [...]

This makes future content changes easy.

34. SEO

Implement proper metadata.

Use the source-approved SEO information from the legal content pack.

Homepage title:

Mediceen - MECEE-BL Medical Entrance Prep

Homepage meta description:

Practice MCQs, spaced review, flashcards, and weekly MECEE-style mocks. Built for Nepal medical aspirants. Download free.

The legal content pack also defines SEO titles and metadata for About, FAQ, Privacy, Terms, Support, Delete Account, Cookies, and Licenses.

Implement:

title

meta description

canonical URL

Open Graph metadata

Twitter/X card metadata

favicon

robots.txt

sitemap-ready structure

Use:

https://mediceen.app/

as the canonical production domain.

35. ACCESSIBILITY

Implement:

semantic HTML

keyboard navigation

visible focus states

accessible buttons

meaningful alt text

proper heading hierarchy

sufficient contrast

reduced-motion support

Do not sacrifice usability for animation.

36. WHAT NOT TO BUILD

Do NOT create:

login screens

student dashboard

browser MCQ practice system

browser flashcard application

admin dashboard

question-bank management

real leaderboard backend

real mock-test system

fake authentication

fake analytics backend

The marketing website should showcase these experiences visually, not reproduce the application itself.

37. WHAT THE WEBSITE SHOULD FEEL LIKE

The emotional progression should be:

Curiosity
↓
Understanding
↓
Interaction
↓
Trust
↓
Motivation
↓
Action

The visitor should finish thinking:

"I understand what Mediceen does."

then:

"This looks useful for my preparation."

then:

"I want to try it."

and finally:

"I'll download it."

38. VISUAL REFERENCES

The quality bar should be inspired by premium product websites such as:

Apple product pages

modern technology launches

Linear

Stripe

premium health-tech products

But DO NOT copy any existing website.

Do not reproduce Apple's layout, typography, wording, or visual identity.

Take inspiration from:

cinematic scrolling

product storytelling

whitespace

restrained animation

visual hierarchy

smooth transitions

physical product presentation

Create a unique Mediceen visual identity.

39. FINAL HOMEPAGE STRUCTURE

The final homepage should approximately follow:

NAVBAR

        ↓

HERO
MEDICEEN
Prepare Smarter for MECEE-BL
PHONE

        ↓

PRACTICE
Practice With Purpose
MCQ experience

        ↓

RECALL
Master Recall
Flashcards

        ↓

REVIEW
Review When It Matters
SM-2 visual loop

        ↓

TEST
Test Yourself
Weekly MECEE-style Mock

        ↓

RESULTS
From Performance to Insight

        ↓

PROGRESS
Understand Your Progress
Charts + insights

        ↓

LEADERBOARD
Keep Climbing

        ↓

WORD OF THE DAY
Small supporting product moment

        ↓

JOURNEY
Practice → Recall → Review
→ Test → Results → Insights
→ Improve → Practice

        ↓

FINAL PHONE
Your preparation.
Your pace.

        ↓

DOWNLOAD
Ready to Prepare?

App Store
Google Play

        ↓

FOOTER

40. IMPORTANT PRODUCT ACCURACY RULE

Before implementing any visual, compare it against the provided product documents.

For example:

CURRENTLY SUPPORTED:

MCQ practice
Subject filtering
Difficulty filtering
Flashcards
Easy / Hard / Missed ratings
SM-2 review
Weekly MECEE-style mock
Countdown
Auto-submit
Results
Answer review
Practice again
Insights
7-day trends
30-day trends
Bookmarks
Leaderboards
Word of the Day
Study streaks

Do not present roadmap items such as:

Custom timed sessions
Push notifications
Offline mode
Translations
Live synchronized exams

as if they are already shipped.

The feature inventory explicitly distinguishes implemented, partial, and missing functionality.

41. DEVELOPMENT QUALITY

Write production-quality TypeScript.

Use:

strict TypeScript

reusable components

typed props

clean naming

no unnecessary any

no duplicated components

no giant files

no inline giant style objects

Tailwind utilities where appropriate

CSS only when needed for complex effects

isolated GSAP animation logic

clean imports

The project should be easy for another developer to understand and continue.

42. FIRST IMPLEMENTATION GOAL

Do not attempt to build every detail immediately.

First create the complete visual skeleton:

Navbar
Hero
Practice
Recall
Review
Mock
Results
Progress
Leaderboard
Journey
Final Product Moment
Download CTA
Footer

Make sure:

spacing is excellent

typography is excellent

hierarchy is excellent

transitions work

responsive behavior works

GSAP scenes are structured correctly

the phone remains the main visual anchor

Then progressively refine the individual app UI scenes.

43. FINAL QUALITY BAR

The finished website should feel like a premium product launch for a real mobile application.

It should NOT feel like:

student project
generic React template
AI-generated landing page
dashboard
education portal

It should feel:

                 MEDICEEN

          calm
          intelligent
          premium
          focused
          cinematic
          trustworthy

                ↓

          product discovery

                ↓

          learning journey

                ↓

          download

The most important principle is:

Do less, but make every visual moment intentional.

Do not add animation simply because GSAP is available.

Do not add UI simply because there is empty space.

Do not add features simply because they sound impressive.

Every section must answer:

What is Mediceen showing me?

Why does it matter to my preparation?

What should I understand before I scroll further?

The final result should make the visitor feel that they have experienced the Mediceen app without ever leaving the marketing website.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f295f2b7-a439-4589-abfb-9d0bbfcf45b4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
