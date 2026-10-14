import type { GenericOAuthErrorCodesType } from "../../../types";

export const ES_ES = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Configuración OAuth inválida",
	TOKEN_URL_NOT_FOUND:
		"Configuración de OAuth no válida. No se encontró la URL del token.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
