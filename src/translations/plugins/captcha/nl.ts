import type { CaptchaErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	VERIFICATION_FAILED: "CAPTCHA-verificatie mislukt",
	MISSING_RESPONSE: "CAPTCHA-antwoord ontbreekt",
	UNKNOWN_ERROR: "Onbekende fout",
} satisfies CaptchaErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
