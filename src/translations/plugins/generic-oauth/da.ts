import type { GenericOAuthErrorCodesType } from "../../../types";

export const DA_DK = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Ugyldig OAuth-konfiguration",
	TOKEN_URL_NOT_FOUND:
		"Ugyldig OAuth-konfiguration. Token-URL blev ikke fundet.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
