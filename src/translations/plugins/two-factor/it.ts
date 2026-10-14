import type { TwoFactorErrorCodesType } from "../../../types";

export const IT_IT = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Codice monouso non abilitato",
	OTP_HAS_EXPIRED: "Il codice monouso è scaduto",
	TOTP_NOT_ENABLED: "Codice monouso basato sul tempo non abilitato",
	TWO_FACTOR_NOT_ENABLED: "Autenticazione a due fattori non abilitata",
	BACKUP_CODES_NOT_ENABLED: "Codici di backup non abilitati",
	INVALID_BACKUP_CODE: "Codice di backup non valido",
	INVALID_CODE: "Codice non valido",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Troppi tentativi. Richiedi un nuovo codice.",
	INVALID_TWO_FACTOR_COOKIE:
		"Cookie di autenticazione a due fattori non valido",
	OTP_NOT_CONFIGURED: "OTP non è disponibile",
	TOTP_ALREADY_ENABLED: "TOTP è già abilitato",
	TOTP_NOT_CONFIGURED: "TOTP non è disponibile",
	ACCOUNT_TEMPORARILY_LOCKED:
		"Troppi tentativi di verifica falliti. Il tuo account è temporaneamente bloccato. Riprova più tardi.",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
