import type { GenericOAuthErrorCodesType } from "../../../types";

export const IT_IT = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Configurazione OAuth non valida",
	TOKEN_URL_NOT_FOUND:
		"Configurazione OAuth non valida. URL del token non trovato.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
