import { createTranslationObject } from "../utils/create-translation-object";

export const PT_BR = createTranslationObject("pt-BR", {
	// User related errors
	USER_NOT_FOUND: "Usuário não encontrado",
	FAILED_TO_CREATE_USER: "Falha ao criar usuário",
	FAILED_TO_UPDATE_USER: "Falha ao atualizar usuário",
	USER_ALREADY_EXISTS: "Usuário já existe",
	USER_EMAIL_NOT_FOUND: "Email do usuário não encontrado",
	USER_ALREADY_HAS_PASSWORD:
		"Usuário já possui uma senha. Forneça-a para excluir a conta.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "Usuário já existe. Use outro email.",

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
	INVALID_USER: "Usuário inválido",
	TOKEN_EXPIRED: "Token expirado",
	CHANGE_EMAIL_DISABLED: "A alteração de email está desativada",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Login por navegação entre sites bloqueado. Esta solicitação parece ser um ataque CSRF.",
	VERIFICATION_EMAIL_NOT_ENABLED: "O email de verificação não está ativado",
	EMAIL_ALREADY_VERIFIED: "O email já foi verificado",
	EMAIL_MISMATCH: "Os emails não correspondem",
	SESSION_NOT_FRESH: "A sessão não é recente",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Conta vinculada já existe",
	INVALID_ORIGIN: "Origem inválida",
	INVALID_CALLBACK_URL: "callbackURL inválida",
	INVALID_REDIRECT_URL: "redirectURL inválida",
	INVALID_ERROR_CALLBACK_URL: "errorCallbackURL inválida",
	INVALID_NEW_USER_CALLBACK_URL: "newUserCallbackURL inválida",
	MISSING_OR_NULL_ORIGIN: "Origin ausente ou nula",
	CALLBACK_URL_REQUIRED: "callbackURL é obrigatória",
	FAILED_TO_CREATE_VERIFICATION: "Não foi possível criar a verificação",
	FIELD_NOT_ALLOWED: "Não é permitido definir este campo",
	ASYNC_VALIDATION_NOT_SUPPORTED: "A validação assíncrona não é suportada",
	VALIDATION_ERROR: "Erro de validação",
	MISSING_FIELD: "O campo é obrigatório",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"O método POST exige que deferSessionRefresh esteja ativado na configuração da sessão",
	BODY_MUST_BE_AN_OBJECT: "O corpo da requisição deve ser um objeto",
	PASSWORD_ALREADY_SET: "O usuário já possui uma senha definida",
});

export const PT_PT = createTranslationObject("pt-PT", {
	// User related errors
	USER_NOT_FOUND: "Utilizador não encontrado",
	FAILED_TO_CREATE_USER: "Falha ao criar utilizador",
	FAILED_TO_UPDATE_USER: "Falha ao actualizar utilizador",
	USER_ALREADY_EXISTS: "Utilizador já existe",
	USER_EMAIL_NOT_FOUND: "E-mail do utilizador não encontrado",
	USER_ALREADY_HAS_PASSWORD:
		"Utilizador já possui uma palavra-passe. Forneça-a para eliminar a conta.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Utilizador já existe. Use outro e-mail.",

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
	INVALID_USER: "Utilizador inválido",
	TOKEN_EXPIRED: "Token expirado",
	CHANGE_EMAIL_DISABLED: "A alteração de e-mail está desactivada",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Início de sessão por navegação entre sites bloqueado. Este pedido parece ser um ataque CSRF.",
	VERIFICATION_EMAIL_NOT_ENABLED: "O e-mail de verificação não está activado",
	EMAIL_ALREADY_VERIFIED: "O e-mail já foi verificado",
	EMAIL_MISMATCH: "Os e-mails não correspondem",
	SESSION_NOT_FRESH: "A sessão não é recente",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Conta associada já existe",
	INVALID_ORIGIN: "Origem inválida",
	INVALID_CALLBACK_URL: "callbackURL inválida",
	INVALID_REDIRECT_URL: "redirectURL inválida",
	INVALID_ERROR_CALLBACK_URL: "errorCallbackURL inválida",
	INVALID_NEW_USER_CALLBACK_URL: "newUserCallbackURL inválida",
	MISSING_OR_NULL_ORIGIN: "Origin ausente ou nula",
	CALLBACK_URL_REQUIRED: "callbackURL é obrigatória",
	FAILED_TO_CREATE_VERIFICATION: "Não foi possível criar a verificação",
	FIELD_NOT_ALLOWED: "Não é permitido definir este campo",
	ASYNC_VALIDATION_NOT_SUPPORTED: "A validação assíncrona não é suportada",
	VALIDATION_ERROR: "Erro de validação",
	MISSING_FIELD: "O campo é obrigatório",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"O método POST exige que deferSessionRefresh esteja activado na configuração da sessão",
	BODY_MUST_BE_AN_OBJECT: "O corpo do pedido deve ser um objecto",
	PASSWORD_ALREADY_SET: "O utilizador já possui uma palavra-passe definida",
});

export const LOCALES = {
	"pt-BR": PT_BR,
	"pt-PT": PT_PT,
} as const;
