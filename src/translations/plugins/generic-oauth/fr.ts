import type { GenericOAuthErrorCodesType } from "../../../types";

export const FR_FR = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Configuration OAuth invalide",
	TOKEN_URL_NOT_FOUND:
		"Configuration OAuth invalide. URL du jeton introuvable.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
