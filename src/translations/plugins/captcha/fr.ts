import type { CaptchaErrorCodesType } from "../../../types";

export const FR_FR = {
	VERIFICATION_FAILED: "La vérification du CAPTCHA a échoué",
	MISSING_RESPONSE: "Réponse CAPTCHA manquante",
	UNKNOWN_ERROR: "Erreur inconnue",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
