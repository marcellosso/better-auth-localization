import type { TwoFactorErrorCodesType } from "../../../types";

export const SV_SE = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Engångslösenord inte aktiverat",
	OTP_HAS_EXPIRED: "Engångslösenord har gått ut",
	TOTP_NOT_ENABLED: "Tidsbaserat engångslösenord inte aktiverat",
	TWO_FACTOR_NOT_ENABLED: "Tvåfaktorsautentisering inte aktiverad",
	BACKUP_CODES_NOT_ENABLED: "Backup-koder inte aktiverade",
	INVALID_BACKUP_CODE: "Ogiltig backup-kod",
	INVALID_CODE: "Ogiltig kod",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "För många försök. Begär en ny kod.",
	INVALID_TWO_FACTOR_COOKIE: "Ogiltig tvåfaktorsautentisering cookie",
	OTP_NOT_CONFIGURED: "Engångslösenord är inte tillgängligt",
	TOTP_ALREADY_ENABLED: "Tidsbaserat engångslösenord är redan aktiverat",
	TOTP_NOT_CONFIGURED: "Tidsbaserat engångslösenord är inte tillgängligt",
	ACCOUNT_TEMPORARILY_LOCKED:
		"För många misslyckade verifieringsförsök. Ditt konto är tillfälligt låst. Försök igen senare.",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
