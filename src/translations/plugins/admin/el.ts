import type { AdminErrorCodesType } from "../../../types";

export const EL_GR = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "Δεν μπορείτε να απαγορεύσετε τον εαυτό σας",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"Δεν έχετε άδεια να αλλάξετε τους ρόλους των χρηστών",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
		"Δεν έχετε άδεια να δημιουργήσετε χρήστες",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"Δεν έχετε άδεια να εμφανίσετε λίστα χρηστών",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"Δεν έχετε άδεια να εμφανίσετε λίστα συνεδριών χρηστών",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "Δεν έχετε άδεια να απαγορεύσετε χρήστες",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"Δεν έχετε άδεια να υποδυθείτε άλλους χρήστες",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"Δεν έχετε άδεια να ανακαλέσετε συνεδρίες χρηστών",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "Δεν έχετε άδεια να διαγράψετε χρήστες",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"Δεν έχετε άδεια να ορίσετε κωδικούς χρηστών",
	BANNED_USER: "Έχετε απαγορευτεί από αυτή την εφαρμογή",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "Δεν έχετε άδεια να λάβετε χρήστη",
	NO_DATA_TO_UPDATE: "Δεν υπάρχουν δεδομένα προς ενημέρωση",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS: "Δεν έχετε άδεια να ενημερώσετε χρήστες",
	YOU_CANNOT_REMOVE_YOURSELF: "Δεν μπορείτε να αφαιρέσετε τον εαυτό σας",
	YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE:
		"Δεν επιτρέπεται να ορίσετε τιμή ρόλου που δεν υπάρχει",
	YOU_CANNOT_IMPERSONATE_ADMINS: "Δεν μπορείτε να υποδυθείτε διαχειριστές",
	INVALID_ROLE_TYPE: "Μη έγκυρος τύπος ρόλου",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL:
		"Δεν επιτρέπεται να ενημερώσετε το email των χρηστών",
	PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER:
		"Ο κωδικός δεν μπορεί να ενημερωθεί μέσω update-user. Χρησιμοποιήστε το endpoint set-user-password",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
