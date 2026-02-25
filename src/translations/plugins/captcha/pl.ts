import type { CaptchaErrorCodesType } from "../../../types";

export const PL_PL = {
	VERIFICATION_FAILED: "Weryfikacja CAPTCHA nie powiodła się",
	MISSING_RESPONSE: "Brak odpowiedzi CAPTCHA",
	UNKNOWN_ERROR: "Nieznany błąd",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
