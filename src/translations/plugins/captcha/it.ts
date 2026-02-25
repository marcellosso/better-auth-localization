import type { CaptchaErrorCodesType } from "../../../types";

export const IT_IT = {
	VERIFICATION_FAILED: "Verifica CAPTCHA fallita",
	MISSING_RESPONSE: "Risposta CAPTCHA mancante",
	UNKNOWN_ERROR: "Errore sconosciuto",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
