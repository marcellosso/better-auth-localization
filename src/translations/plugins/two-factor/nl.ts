import type { TwoFactorErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Eenmalige wachtwoord niet ingeschakeld",
	OTP_HAS_EXPIRED: "Eenmalige wachtwoord is verlopen",
	TOTP_NOT_ENABLED: "Tijdgebaseerde eenmalige wachtwoord niet ingeschakeld",
	TWO_FACTOR_NOT_ENABLED: "Twee-factor authenticatie niet ingeschakeld",
	BACKUP_CODES_NOT_ENABLED: "Backup-codes niet ingeschakeld",
	INVALID_BACKUP_CODE: "Ongeldige backup-code",
	INVALID_CODE: "Ongeldige code",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Te veel pogingen. Vraag een nieuwe code aan.",
	INVALID_TWO_FACTOR_COOKIE: "Ongeldige twee-factor authenticatie cookie",
	OTP_NOT_CONFIGURED: "Eenmalig wachtwoord is niet beschikbaar",
	TOTP_ALREADY_ENABLED: "Tijdgebaseerd eenmalig wachtwoord is al ingeschakeld",
	TOTP_NOT_CONFIGURED: "Tijdgebaseerd eenmalig wachtwoord is niet beschikbaar",
	ACCOUNT_TEMPORARILY_LOCKED:
		"Te veel mislukte verificatiepogingen. Je account is tijdelijk vergrendeld. Probeer het later opnieuw.",
} satisfies TwoFactorErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
