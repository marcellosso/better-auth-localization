import type { GenericOAuthErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Ongeldige OAuth-configuratie",
	TOKEN_URL_NOT_FOUND: "Ongeldige OAuth-configuratie. Token-URL niet gevonden.",
} satisfies GenericOAuthErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
