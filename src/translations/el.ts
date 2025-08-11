import { ErrorCodesType } from "../types";

export const EL_GR = {
	// User related errors
	USER_NOT_FOUND: "Ο χρήστης δεν υπάρχει",
	FAILED_TO_CREATE_USER: "Αποτυχία δημιουργίας χρήστη",
	FAILED_TO_UPDATE_USER: "Αποτυχία ενημέρωσης χρήστη",
	USER_ALREADY_EXISTS: "Ο χρήστης υπάρχει ήδη",
	USER_EMAIL_NOT_FOUND: "Το email του χρήστη δεν βρέθηκε",
	USER_ALREADY_HAS_PASSWORD: "Ο χρήστης έχει ήδη κωδικό",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Αποτυχία δημιουργίας συνεδρίας",
	FAILED_TO_GET_SESSION: "Αποτυχία ανάκτησης συνεδρίας",
	SESSION_EXPIRED: "Η συνεδρία έληξε",

	// Authentication errors
	INVALID_PASSWORD: "Λάθος κωδικός",
	INVALID_EMAIL: "Λάθος email",
	INVALID_EMAIL_OR_PASSWORD: "Λάθος email η κωδικός",
	INVALID_TOKEN: "Λάθος token",
	EMAIL_NOT_VERIFIED: "Το email δεν έχει επαληθευτεί",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Δεν βρέθηκε ο λογαριασμός",

	// Password related errors
	PASSWORD_TOO_SHORT: "Ο κωδικός είναι πολύ μικρός",
	PASSWORD_TOO_LONG: "Ο κωδικός είναι πολύ μεγάλος",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED:
		"Ο λογαριασμός κοινωνικού μέσου έχει συνδεθεί ήδη",
	PROVIDER_NOT_FOUND: "Δεν βρέθηκε ο πάροχος",
	ID_TOKEN_NOT_SUPPORTED: "Το id_token δεν υποστηρίζεται",
	FAILED_TO_GET_USER_INFO: "Αποτυχία ανάκτησης πληροφοριών του χρήστη",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "Το email δεν μπορεί να ενημερωθεί",
	FAILED_TO_UNLINK_LAST_ACCOUNT:
		"Αποτυχία αποσύνδεσης του τελευταίου λογαριασμού",
	ACCOUNT_NOT_FOUND: "Ο λογαριασμός δεν βρέθηκε",
} satisfies ErrorCodesType;

export const LOCALES = {
    "el-GR": EL_GR,
} as const;
