import { createTranslationObject } from "../utils/create-translation-object";

export const EL_GR = createTranslationObject("el-GR", {
	// User related errors
	USER_NOT_FOUND: "Ο χρήστης δεν υπάρχει",
	FAILED_TO_CREATE_USER: "Αποτυχία δημιουργίας χρήστη",
	FAILED_TO_UPDATE_USER: "Αποτυχία ενημέρωσης χρήστη",
	USER_ALREADY_EXISTS: "Ο χρήστης υπάρχει ήδη",
	USER_EMAIL_NOT_FOUND: "Το email του χρήστη δεν βρέθηκε",
	USER_ALREADY_HAS_PASSWORD: "Ο χρήστης έχει ήδη κωδικό",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Ο χρήστης υπάρχει ήδη. Χρησιμοποιήστε άλλο email.",

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
	INVALID_USER: "Μη έγκυρος χρήστης",
	TOKEN_EXPIRED: "Το token έχει λήξει",
	CHANGE_EMAIL_DISABLED: "Η αλλαγή email είναι απενεργοποιημένη",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Η σύνδεση μέσω πλοήγησης από άλλον ιστότοπο αποκλείστηκε. Το αίτημα αυτό φαίνεται να είναι επίθεση CSRF.",
	VERIFICATION_EMAIL_NOT_ENABLED:
		"Το email επαλήθευσης δεν είναι ενεργοποιημένο",
	EMAIL_ALREADY_VERIFIED: "Το email έχει ήδη επαληθευτεί",
	EMAIL_MISMATCH: "Τα email δεν ταιριάζουν",
	SESSION_NOT_FRESH: "Η συνεδρία δεν είναι πρόσφατη",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Ο συνδεδεμένος λογαριασμός υπάρχει ήδη",
	INVALID_ORIGIN: "Μη έγκυρη προέλευση",
	INVALID_CALLBACK_URL: "Μη έγκυρο callbackURL",
	INVALID_REDIRECT_URL: "Μη έγκυρο redirectURL",
	INVALID_ERROR_CALLBACK_URL: "Μη έγκυρο errorCallbackURL",
	INVALID_NEW_USER_CALLBACK_URL: "Μη έγκυρο newUserCallbackURL",
	MISSING_OR_NULL_ORIGIN: "Το Origin λείπει ή είναι null",
	CALLBACK_URL_REQUIRED: "Το callbackURL είναι υποχρεωτικό",
	FAILED_TO_CREATE_VERIFICATION: "Αποτυχία δημιουργίας επαλήθευσης",
	FIELD_NOT_ALLOWED: "Δεν επιτρέπεται ο ορισμός του πεδίου",
	ASYNC_VALIDATION_NOT_SUPPORTED: "Η ασύγχρονη επικύρωση δεν υποστηρίζεται",
	VALIDATION_ERROR: "Σφάλμα επικύρωσης",
	MISSING_FIELD: "Το πεδίο είναι υποχρεωτικό",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"Η μέθοδος POST απαιτεί να είναι ενεργοποιημένο το deferSessionRefresh στις ρυθμίσεις της συνεδρίας",
	BODY_MUST_BE_AN_OBJECT: "Το σώμα του αιτήματος πρέπει να είναι αντικείμενο",
	PASSWORD_ALREADY_SET: "Ο χρήστης έχει ήδη ορίσει κωδικό",
});

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
