import type { AnonymousErrorCodesType } from "../../../types";

export const RO_RO = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Nu s-a putut crea sesiunea",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Utilizatorii anonimi nu se pot conecta din nou anonim",
	INVALID_EMAIL_FORMAT:
		"Adresa de email nu a fost generată într-un format valid",
	FAILED_TO_DELETE_ANONYMOUS_USER: "Nu s-a putut șterge utilizatorul anonim",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Nu s-au putut șterge sesiunile utilizatorului anonim",
	USER_IS_NOT_ANONYMOUS: "Utilizatorul nu este anonim",
	DELETE_ANONYMOUS_USER_DISABLED:
		"Ștergerea utilizatorilor anonimi este dezactivată",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
