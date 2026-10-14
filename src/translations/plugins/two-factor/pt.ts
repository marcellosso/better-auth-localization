import type { TwoFactorErrorCodesType } from "../../../types";

export const PT_BR = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Senha descartável não habilitado",
	OTP_HAS_EXPIRED: "Senha descartável expirou",
	TOTP_NOT_ENABLED: "Senha de Uso Único Temporária não habilitada",
	TWO_FACTOR_NOT_ENABLED: "Autenticação em duas etapas não está habilitada",
	BACKUP_CODES_NOT_ENABLED: "Códigos de backup não estão habilitados",
	INVALID_BACKUP_CODE: "Código de backup inválido",
	INVALID_CODE: "Código inválido",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Muitas tentativas. Por favor, solicite um novo código.",
	INVALID_TWO_FACTOR_COOKIE: "Cookie de autenticação em duas etapas inválido",
	OTP_NOT_CONFIGURED: "O OTP não está disponível",
	TOTP_ALREADY_ENABLED: "O TOTP já está ativado",
	TOTP_NOT_CONFIGURED: "O TOTP não está disponível",
	ACCOUNT_TEMPORARILY_LOCKED:
		"Muitas tentativas de verificação malsucedidas. Sua conta está temporariamente bloqueada. Tente novamente mais tarde.",
} satisfies TwoFactorErrorCodesType;

export const PT_PT = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Palavra-passe descartável não habilitada",
	OTP_HAS_EXPIRED: "Palavra-passe descartável expirou",
	TOTP_NOT_ENABLED: "Palavra-passe de Uso Único Temporária não habilitada",
	TWO_FACTOR_NOT_ENABLED: "Autenticação em duas etapas não está habilitada",
	BACKUP_CODES_NOT_ENABLED: "Códigos de backup não estão habilitados",
	INVALID_BACKUP_CODE: "Código de backup inválido",
	INVALID_CODE: "Código inválido",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Muitas tentativas. Por favor, solicite um novo código.",
	INVALID_TWO_FACTOR_COOKIE: "Cookie de autenticação em duas etapas inválido",
	OTP_NOT_CONFIGURED: "O OTP não está disponível",
	TOTP_ALREADY_ENABLED: "O TOTP já está activado",
	TOTP_NOT_CONFIGURED: "O TOTP não está disponível",
	ACCOUNT_TEMPORARILY_LOCKED:
		"Demasiadas tentativas de verificação falhadas. A sua conta está temporariamente bloqueada. Tente novamente mais tarde.",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"pt-BR": PT_BR,
	"pt-PT": PT_PT,
} as const;
