import type { TwoFactorErrorCodesType } from "../../../types";

export const RO_RO = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Parola de o singură folosință nu este activată",
	OTP_HAS_EXPIRED: "Parola de o singură folosință a expirat",
	TOTP_NOT_ENABLED:
		"Parola de o singură folosință bazată pe timp nu este activată",
	TWO_FACTOR_NOT_ENABLED: "Autentificarea cu doi factori nu este activată",
	BACKUP_CODES_NOT_ENABLED: "Codurile de rezervă nu sunt activate",
	INVALID_BACKUP_CODE: "Cod de rezervă invalid",
	INVALID_CODE: "Cod invalid",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Prea multe încercări. Vă rugăm să solicitați un cod nou.",
	INVALID_TWO_FACTOR_COOKIE: "Cookie de autentificare cu doi factori invalid",
	OTP_NOT_CONFIGURED: "OTP nu este disponibil",
	TOTP_ALREADY_ENABLED: "TOTP este deja activat",
	TOTP_NOT_CONFIGURED: "TOTP nu este disponibil",
	ACCOUNT_TEMPORARILY_LOCKED:
		"Prea multe încercări de verificare eșuate. Contul dumneavoastră este blocat temporar. Încercați din nou mai târziu.",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
