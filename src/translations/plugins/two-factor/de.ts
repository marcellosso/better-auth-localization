import type { TwoFactorErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Einmalpasswort nicht aktiviert",
	OTP_HAS_EXPIRED: "Einmalpasswort ist abgelaufen",
	TOTP_NOT_ENABLED: "Zeitbasiertes Einmalpasswort nicht aktiviert",
	TWO_FACTOR_NOT_ENABLED: "Zwei-Faktor-Authentifizierung nicht aktiviert",
	BACKUP_CODES_NOT_ENABLED: "Backup-Codes nicht aktiviert",
	INVALID_BACKUP_CODE: "Ungültiger Backup-Code",
	INVALID_CODE: "Ungültiger Code",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Zu viele Versuche. Bitte einen neuen Code anfordern.",
	INVALID_TWO_FACTOR_COOKIE: "Ungültiger Zwei-Faktor-Authentifizierung Cookie",
	OTP_NOT_CONFIGURED: "Einmalpasswort ist nicht verfügbar",
	TOTP_ALREADY_ENABLED: "Zeitbasiertes Einmalpasswort ist bereits aktiviert",
	TOTP_NOT_CONFIGURED: "Zeitbasiertes Einmalpasswort ist nicht verfügbar",
	ACCOUNT_TEMPORARILY_LOCKED:
		"Zu viele fehlgeschlagene Verifizierungsversuche. Ihr Konto ist vorübergehend gesperrt. Bitte versuchen Sie es später erneut.",
} satisfies TwoFactorErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
