import type { CaptchaErrorCodesType } from "../../../types";

export const SK_SK_INFORMAL = {
  VERIFICATION_FAILED: "Overenie CAPTCHA zlyhalo",
  MISSING_RESPONSE: "Chýba odpoveď CAPTCHA",
  UNKNOWN_ERROR: "Neznáma chyba",
} satisfies CaptchaErrorCodesType;

export const SK_SK_FORMAL = {
  ...SK_SK_INFORMAL,
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
  "sk": SK_SK_INFORMAL,
  "sk-SK-informal": SK_SK_INFORMAL,
  "sk-SK-formal": SK_SK_FORMAL,
} as const;
