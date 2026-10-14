import type { TwoFactorErrorCodesType } from "../../../types";

export const EL_GR = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Ο κωδικός μιας χρήσης δεν είναι ενεργοποιημένος",
	OTP_HAS_EXPIRED: "Ο κωδικός μιας χρήσης έχει λήξει",
	TOTP_NOT_ENABLED:
		"Ο χρονικά βασισμένος κωδικός μιας χρήσης δεν είναι ενεργοποιημένος",
	TWO_FACTOR_NOT_ENABLED: "Η διπλή πιστοποίηση δεν είναι ενεργοποιημένη",
	BACKUP_CODES_NOT_ENABLED: "Οι κωδικοί εφεδρικού δεν είναι ενεργοποιημένοι",
	INVALID_BACKUP_CODE: "Μη έγκυρος κωδικός εφεδρικού",
	INVALID_CODE: "Μη έγκυρος κωδικός",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Πάρα πολλές προσπάθειες. Παρακαλώ ζητήστε νέο κωδικό.",
	INVALID_TWO_FACTOR_COOKIE: "Μη έγκυρο cookie διπλής πιστοποίησης",
	OTP_NOT_CONFIGURED: "Το OTP δεν είναι διαθέσιμο",
	TOTP_ALREADY_ENABLED: "Το TOTP είναι ήδη ενεργοποιημένο",
	TOTP_NOT_CONFIGURED: "Το TOTP δεν είναι διαθέσιμο",
	ACCOUNT_TEMPORARILY_LOCKED:
		"Πάρα πολλές αποτυχημένες προσπάθειες επαλήθευσης. Ο λογαριασμός σας είναι προσωρινά κλειδωμένος. Παρακαλώ δοκιμάστε ξανά αργότερα.",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
