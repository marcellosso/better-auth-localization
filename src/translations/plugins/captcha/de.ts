import type { CaptchaErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	VERIFICATION_FAILED: "CAPTCHA-Überprüfung fehlgeschlagen",
	MISSING_RESPONSE: "CAPTCHA-Antwort fehlt",
	UNKNOWN_ERROR: "Unbekannter Fehler",
} satisfies CaptchaErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
