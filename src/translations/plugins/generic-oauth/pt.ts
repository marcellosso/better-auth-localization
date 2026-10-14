import type { GenericOAuthErrorCodesType } from "../../../types";

export const PT_BR = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Configuração OAuth inválida",
	TOKEN_URL_NOT_FOUND:
		"Configuração OAuth inválida. URL do token não encontrada.",
} satisfies GenericOAuthErrorCodesType;

export const PT_PT = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Configuração OAuth inválida",
	TOKEN_URL_NOT_FOUND:
		"Configuração OAuth inválida. URL do token não encontrado.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"pt-BR": PT_BR,
	"pt-PT": PT_PT,
} as const;
