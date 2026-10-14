import type { GenericOAuthErrorCodesType } from "../../../types";

export const RU_RU = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Неверная конфигурация OAuth",
	TOKEN_URL_NOT_FOUND: "Недопустимая конфигурация OAuth. URL токена не найден.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
