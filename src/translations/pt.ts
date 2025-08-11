import { ErrorCodesType } from "../types";

export const PT_BR = {
	// User related errors
	USER_NOT_FOUND: "Usuário não encontrado",
	FAILED_TO_CREATE_USER: "Falha ao criar usuário",
	FAILED_TO_UPDATE_USER: "Falha ao atualizar usuário",
	USER_ALREADY_EXISTS: "Usuário já existe",
	USER_EMAIL_NOT_FOUND: "Email do usuário não encontrado",
	USER_ALREADY_HAS_PASSWORD:
		"Usuário já possui uma senha. Forneça-a para excluir a conta.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Falha ao criar sessão",
	FAILED_TO_GET_SESSION: "Falha ao obter sessão",
	SESSION_EXPIRED:
		"Sessão expirada. Autentique-se novamente para realizar esta ação.",

	// Authentication errors
	INVALID_PASSWORD: "Senha inválida",
	INVALID_EMAIL: "Email inválido",
	INVALID_EMAIL_OR_PASSWORD: "Email ou senha inválidos",
	INVALID_TOKEN: "Token inválido",
	EMAIL_NOT_VERIFIED: "Email não verificado",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Conta de credenciais não encontrada",

	// Password related errors
	PASSWORD_TOO_SHORT: "Senha muito curta",
	PASSWORD_TOO_LONG: "Senha muito longa",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Conta já vinculada",
	PROVIDER_NOT_FOUND: "Provedor não encontrado",
	ID_TOKEN_NOT_SUPPORTED: "id_token não suportado",
	FAILED_TO_GET_USER_INFO: "Falha ao obter informações do usuário",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "Email não pode ser atualizado",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Você não pode desvincular sua última conta",
	ACCOUNT_NOT_FOUND: "Conta não encontrada",
} satisfies ErrorCodesType;

export const PT_PT = {
	// User related errors
	USER_NOT_FOUND: "Utilizador não encontrado",
	FAILED_TO_CREATE_USER: "Falha ao criar utilizador",
	FAILED_TO_UPDATE_USER: "Falha ao actualizar utilizador",
	USER_ALREADY_EXISTS: "Utilizador já existe",
	USER_EMAIL_NOT_FOUND: "E-mail do utilizador não encontrado",
	USER_ALREADY_HAS_PASSWORD:
		"Utilizador já possui uma palavra-passe. Forneça-a para eliminar a conta.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Falha ao criar sessão",
	FAILED_TO_GET_SESSION: "Falha ao obter sessão",
	SESSION_EXPIRED:
		"Sessão expirada. Autentique-se novamente para realizar esta acção.",

	// Authentication errors
	INVALID_PASSWORD: "Palavra-passe inválida",
	INVALID_EMAIL: "E-mail inválido",
	INVALID_EMAIL_OR_PASSWORD: "E-mail ou palavra-passe inválidos",
	INVALID_TOKEN: "Token inválido",
	EMAIL_NOT_VERIFIED: "E-mail não verificado",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Conta de credenciais não encontrada",

	// Password related errors
	PASSWORD_TOO_SHORT: "Palavra-passe muito curta",
	PASSWORD_TOO_LONG: "Palavra-passe muito longa",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Conta já associada",
	PROVIDER_NOT_FOUND: "Fornecedor não encontrado",
	ID_TOKEN_NOT_SUPPORTED: "id_token não suportado",
	FAILED_TO_GET_USER_INFO: "Falha ao obter informações do utilizador",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "E-mail não pode ser actualizado",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Não pode desassociar a sua última conta",
	ACCOUNT_NOT_FOUND: "Conta não encontrada",
} satisfies ErrorCodesType;

export const LOCALES = {
    "pt-BR": PT_BR,
    "pt-PT": PT_PT,
} as const;
