import type { AnonymousErrorCodesType } from "../../../types";

export const SV_SE = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Kunde inte skapa session",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonyma användare kan inte logga in igen anonymt",
	INVALID_EMAIL_FORMAT: "E-postadressen genererades inte i ett giltigt format",
	FAILED_TO_DELETE_ANONYMOUS_USER: "Kunde inte ta bort anonym användare",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Kunde inte ta bort den anonyma användarens sessioner",
	USER_IS_NOT_ANONYMOUS: "Användaren är inte anonym",
	DELETE_ANONYMOUS_USER_DISABLED:
		"Borttagning av anonyma användare är inaktiverad",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
