import type { CaptchaErrorCodesType } from "../../../types";

export const RO_RO = {
	VERIFICATION_FAILED: "Verificarea CAPTCHA a eșuat",
	MISSING_RESPONSE: "Răspuns CAPTCHA lipsă",
	UNKNOWN_ERROR: "Eroare necunoscută",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
