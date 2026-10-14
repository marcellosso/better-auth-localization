import type { AnonymousErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Sitzung konnte nicht erstellt werden",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonyme Benutzer können sich nicht erneut anonym anmelden",
	INVALID_EMAIL_FORMAT:
		"E-Mail-Adresse wurde nicht in einem gültigen Format generiert",
	FAILED_TO_DELETE_ANONYMOUS_USER:
		"Anonymer Benutzer konnte nicht gelöscht werden",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Sitzungen des anonymen Benutzers konnten nicht gelöscht werden",
	USER_IS_NOT_ANONYMOUS: "Der Benutzer ist nicht anonym",
	DELETE_ANONYMOUS_USER_DISABLED:
		"Das Löschen anonymer Benutzer ist deaktiviert",
} satisfies AnonymousErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonyme Benutzer können sich nicht erneut anonym anmelden",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
