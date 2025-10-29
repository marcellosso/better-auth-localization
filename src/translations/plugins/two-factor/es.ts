import type { TwoFactorErrorCodesType } from "../../../types";

export const ES_ES = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Código de un solo uso no habilitado",
	OTP_HAS_EXPIRED: "El código de un solo uso ha expirado",
	TOTP_NOT_ENABLED: "Código de un solo uso basado en tiempo no habilitado",
	TWO_FACTOR_NOT_ENABLED: "Autenticación de dos factores no habilitada",
	BACKUP_CODES_NOT_ENABLED: "Códigos de respaldo no habilitados",
	INVALID_BACKUP_CODE: "Código de respaldo inválido",
	INVALID_CODE: "Código inválido",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Demasiados intentos. Por favor solicita un nuevo código.",
	INVALID_TWO_FACTOR_COOKIE: "Cookie de autenticación de dos factores inválido",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
