import type { AnonymousErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Nepodařilo se vytvořit relaci",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonymní uživatelé se nemohou anonymně přihlašovat opakovaně",
	INVALID_EMAIL_FORMAT: "Email nebyl vygenerován v platném formátu",
	FAILED_TO_DELETE_ANONYMOUS_USER: "Nepodařilo se smazat anonymního uživatele",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Nepodařilo se smazat relace anonymního uživatele",
	USER_IS_NOT_ANONYMOUS: "Uživatel není anonymní",
	DELETE_ANONYMOUS_USER_DISABLED: "Mazání anonymních uživatelů je zakázáno",
} satisfies AnonymousErrorCodesType;

export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL,
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	cs: CS_CZ_INFORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
