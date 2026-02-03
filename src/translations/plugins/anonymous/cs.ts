import type { AnonymousErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Nepodařilo se vytvořit relaci",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonymní uživatelé se nemohou anonymně přihlašovat opakovaně",
} satisfies AnonymousErrorCodesType;

export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"cs": CS_CZ_INFORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
