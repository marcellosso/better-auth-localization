import type { GenericOAuthErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	INVALID_OAUTH_CONFIGURATION: "Neplatná OAuth konfigurace",
	TOKEN_URL_NOT_FOUND:
		"Neplatná konfigurace OAuth. URL tokenu nebylo nalezeno.",
} satisfies GenericOAuthErrorCodesType;
export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL,
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	cs: CS_CZ_INFORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
