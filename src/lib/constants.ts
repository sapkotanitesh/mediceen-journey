/**
 * Central configuration for the Mediceen marketing site.
 * Placeholders come from the Website & Legal Content Pack (Part 0) and must be
 * replaced with real values before publishing.
 */

export const SITE = {
  name: "Mediceen",
  tagline: "Practice. Review. Improve.",
  domain: "https://mediceen.app",
  bundleId: "com.mediceen.app",
} as const;

/** Part 0 placeholders — keep as placeholders until legal supplies real values. */
export const PLACEHOLDERS = {
  legalEntityName: "[LEGAL_ENTITY_NAME]",
  registeredAddress: "[REGISTERED_ADDRESS]",
  supportEmail: "[SUPPORT_EMAIL]",
  privacyEmail: "[PRIVACY_EMAIL]",
  publishDate: "[PUBLISH_DATE]",
  governingLaw: "[GOVERNING_LAW]",
  minimumAge: "[MINIMUM_AGE]",
  supabaseRegion: "[SUPABASE_REGION]",
} as const;

/** Store URLs are placeholders until the listings are live (Part 0). */
export const STORE_LINKS = {
  appStore: "[APP_STORE_URL]",
  playStore: "[PLAY_STORE_URL]",
} as const;

export const isStoreLinkLive = (url: string): boolean => !url.startsWith("[");

export const LEGAL_LAST_UPDATED = "2026-08-17";

export const DISCLAIMER =
  "Mediceen is a study aid for exam preparation. It does not provide medical advice, diagnosis, or treatment. Content is for educational use only. Mediceen is not affiliated with, endorsed by, or operated by MECEE, NMC, or any official exam authority unless explicitly stated by [LEGAL_ENTITY_NAME].";

export const DRAFT_NOTICE =
  "Draft — this page requires legal review before publication. Placeholder values in square brackets will be replaced before launch.";
