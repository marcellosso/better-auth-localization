import type { GenericOAuthErrorCodesType } from "../../../types";

export const UK_UA = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Невірна конфігурація OAuth",
	TOKEN_URL_NOT_FOUND: "Недійсна конфігурація OAuth. URL токена не знайдено.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
