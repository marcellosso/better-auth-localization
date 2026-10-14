import type { ApiKeyErrorCodesType } from "../../../types";

export const EL_GR = {
	// Api key related errors
	INVALID_METADATA_TYPE:
		"τα μεταδεδομένα πρέπει να είναι αντικείμενο ή απροσδιόριστο",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"η ποσότητα αναπλήρωσης απαιτείται όταν παρέχεται διάστημα αναπλήρωσης",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"το διάστημα αναπλήρωσης απαιτείται όταν παρέχεται ποσότητα αναπλήρωσης",
	USER_BANNED: "χρήστης αποκλεισμένος",
	UNAUTHORIZED_SESSION: "μη εξουσιοδοτημένη ή άκυρη συνεδρία",
	KEY_NOT_FOUND: "κλειδί API δεν βρέθηκε",
	KEY_DISABLED: "κλειδί API απενεργοποιημένο",
	KEY_EXPIRED: "κλειδί API έληξε",
	USAGE_EXCEEDED: "κλειδί API ξεπέρασε το όριο χρήσης",
	KEY_NOT_RECOVERABLE: "κλειδί API δεν είναι ανακτήσιμο",
	EXPIRES_IN_IS_TOO_SMALL:
		"ο χρόνος λήξης είναι μικρότερος από την προκαθορισμένη ελάχιστη αξία.",
	EXPIRES_IN_IS_TOO_LARGE:
		"ο χρόνος λήξης είναι μεγαλύτερος από την προκαθορισμένη μέγιστη αξία.",
	INVALID_REMAINING: "η υπόλοιπη αξία είναι πολύ μεγάλη ή πολύ μικρή.",
	INVALID_PREFIX_LENGTH:
		"το μέγεθος του προθέματος είναι πολύ μεγάλο ή πολύ μικρό.",
	INVALID_NAME_LENGTH:
		"το μέγεθος του ονόματος είναι πολύ μεγάλο ή πολύ μικρό.",
	METADATA_DISABLED: "τα μεταδεδομένα είναι απενεργοποιημένα.",
	RATE_LIMIT_EXCEEDED: "το όριο αιτημάτων ξεπεράστηκε.",
	NO_VALUES_TO_UPDATE: "δεν υπάρχουν αξίες για ενημέρωση.",
	KEY_DISABLED_EXPIRATION:
		"οι προσαρμοσμένες αξίες λήξης κλειδιού είναι απενεργοποιημένες.",
	INVALID_API_KEY: "άκυρο κλειδί API.",
	INVALID_USER_ID_FROM_API_KEY:
		"το αναγνωριστικό χρήστη από το κλειδί API είναι άκυρο.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"η ανάκτηση κλειδιού API επέστρεψε άκυρο τύπο. Αναμενόμενο: συμβολοσειρά.",
	SERVER_ONLY_PROPERTY:
		"η ιδιότητα που προσπαθείτε να ορίσετε μπορεί να οριστεί μόνο από την παρουσία πιστοποίησης διακομιστή.",
	FAILED_TO_UPDATE_API_KEY: "αποτυχία ενημέρωσης κλειδιού API",
	NAME_REQUIRED: "το όνομα κλειδιού API απαιτείται.",
	INVALID_REFERENCE_ID_FROM_API_KEY:
		"Το αναγνωριστικό αναφοράς από το κλειδί API δεν είναι έγκυρο.",
	ORGANIZATION_ID_REQUIRED:
		"Απαιτείται αναγνωριστικό οργάνωσης για κλειδιά API που ανήκουν σε οργάνωση.",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"Δεν είστε μέλος της οργάνωσης που κατέχει αυτό το κλειδί API.",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"Δεν έχετε δικαίωμα να εκτελέσετε αυτή την ενέργεια σε κλειδιά API οργάνωσης.",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"Δεν βρέθηκε προεπιλεγμένη διαμόρφωση κλειδιού API.",
	ORGANIZATION_PLUGIN_REQUIRED:
		"Απαιτείται το πρόσθετο οργάνωσης για κλειδιά API που ανήκουν σε οργάνωση. Παρακαλώ εγκαταστήστε και ρυθμίστε το πρόσθετο οργάνωσης.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
