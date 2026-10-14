import type { AnonymousErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Kon geen sessie aanmaken",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonieme gebruikers kunnen niet opnieuw anoniem inloggen",
	INVALID_EMAIL_FORMAT: "E-mailadres is niet in een geldig formaat gegenereerd",
	FAILED_TO_DELETE_ANONYMOUS_USER:
		"Anonieme gebruiker kon niet worden verwijderd",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Sessies van anonieme gebruiker konden niet worden verwijderd",
	USER_IS_NOT_ANONYMOUS: "De gebruiker is niet anoniem",
	DELETE_ANONYMOUS_USER_DISABLED:
		"Het verwijderen van anonieme gebruikers is uitgeschakeld",
} satisfies AnonymousErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
