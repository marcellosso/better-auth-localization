import type { AnonymousErrorCodesType } from "../../../types";

export const SK_SK_INFORMAL = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Nepodarilo sa vytvoriť reláciu",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonymní používatelia sa nemôžu znovu prihlásiť anonymne",
} satisfies AnonymousErrorCodesType;

export const SK_SK_FORMAL = {
	...SK_SK_INFORMAL
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"sk": SK_SK_INFORMAL,
	"sk-SK-informal": SK_SK_INFORMAL,
	"sk-SK-formal": SK_SK_FORMAL,
} as const;
