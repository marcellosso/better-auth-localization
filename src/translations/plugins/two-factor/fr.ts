import type { TwoFactorErrorCodesType } from "../../../types";

export const FR_FR = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Code à usage unique non activé",
	OTP_HAS_EXPIRED: "Le code à usage unique a expiré",
	TOTP_NOT_ENABLED: "Code à usage unique basé sur le temps non activé",
	TWO_FACTOR_NOT_ENABLED: "Authentification à deux facteurs non activée",
	BACKUP_CODES_NOT_ENABLED: "Codes de sauvegarde non activés",
	INVALID_BACKUP_CODE: "Code de sauvegarde invalide",
	INVALID_CODE: "Code invalide",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Trop de tentatives. Veuillez demander un nouveau code.",
	INVALID_TWO_FACTOR_COOKIE:
		"Cookie d'authentification à deux facteurs invalide",
	OTP_NOT_CONFIGURED: "L'OTP n'est pas disponible",
	TOTP_ALREADY_ENABLED: "Le TOTP est déjà activé",
	TOTP_NOT_CONFIGURED: "Le TOTP n'est pas disponible",
	ACCOUNT_TEMPORARILY_LOCKED:
		"Trop de tentatives de vérification échouées. Votre compte est temporairement verrouillé. Veuillez réessayer plus tard.",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
