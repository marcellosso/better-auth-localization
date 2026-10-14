import type { AnonymousErrorCodesType } from "../../../types";

export const EL_GR = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Δεν ήταν δυνατή η δημιουργία συνεδρίας",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Οι ανώνυμοι χρήστες δεν μπορούν να συνδεθούν ξανά ανώνυμα",
	INVALID_EMAIL_FORMAT: "Το email δεν δημιουργήθηκε σε έγκυρη μορφή",
	FAILED_TO_DELETE_ANONYMOUS_USER: "Αποτυχία διαγραφής ανώνυμου χρήστη",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Αποτυχία διαγραφής των συνεδριών του ανώνυμου χρήστη",
	USER_IS_NOT_ANONYMOUS: "Ο χρήστης δεν είναι ανώνυμος",
	DELETE_ANONYMOUS_USER_DISABLED:
		"Η διαγραφή ανώνυμων χρηστών είναι απενεργοποιημένη",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
