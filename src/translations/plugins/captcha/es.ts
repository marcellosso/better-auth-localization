import type { CaptchaErrorCodesType } from "../../../types";

export const ES_ES = {
	VERIFICATION_FAILED: "La verificación de CAPTCHA falló",
	MISSING_RESPONSE: "Falta la respuesta de CAPTCHA",
	UNKNOWN_ERROR: "Error desconocido",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
