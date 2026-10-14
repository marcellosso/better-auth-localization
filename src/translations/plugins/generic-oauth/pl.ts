import type { GenericOAuthErrorCodesType } from "../../../types";

export const PL_PL = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Nieprawidłowa konfiguracja OAuth",
	TOKEN_URL_NOT_FOUND:
		"Nieprawidłowa konfiguracja OAuth. Nie znaleziono adresu URL tokena.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
