import type { AnonymousErrorCodesType } from "../../../types";

export const IT_IT = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Impossibile creare la sessione",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Gli utenti anonimi non possono accedere nuovamente in modo anonimo",
	INVALID_EMAIL_FORMAT: "L'email non è stata generata in un formato valido",
	FAILED_TO_DELETE_ANONYMOUS_USER: "Impossibile eliminare l'utente anonimo",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Impossibile eliminare le sessioni dell'utente anonimo",
	USER_IS_NOT_ANONYMOUS: "L'utente non è anonimo",
	DELETE_ANONYMOUS_USER_DISABLED:
		"L'eliminazione degli utenti anonimi è disabilitata",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
