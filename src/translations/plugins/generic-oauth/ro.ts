import type { GenericOAuthErrorCodesType } from "../../../types";

export const RO_RO = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Configurare OAuth nevalidă",
	TOKEN_URL_NOT_FOUND:
		"Configurație OAuth invalidă. URL-ul token-ului nu a fost găsit.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
