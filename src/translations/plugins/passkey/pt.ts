import type { PasskeyErrorCodesType } from "../../../types";

export const PT_BR = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Desafio não encontrado",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Você não tem permissão para registrar esta chave de acesso",
	FAILED_TO_VERIFY_REGISTRATION: "Falha ao verificar o registro",
	PASSKEY_NOT_FOUND: "Chave de acesso não encontrada",
	AUTHENTICATION_FAILED: "Falha na autenticação",
	UNABLE_TO_CREATE_SESSION: "Não foi possível criar a sessão",
	FAILED_TO_UPDATE_PASSKEY: "Falha ao atualizar a chave de acesso",
	PREVIOUSLY_REGISTERED: "Já registrada anteriormente",
	REGISTRATION_CANCELLED: "Registro cancelado",
	AUTH_CANCELLED: "Autenticação cancelada",
	SESSION_REQUIRED:
		"O registro de chave de acesso exige uma sessão autenticada",
	RESOLVE_USER_REQUIRED:
		"O registro de chave de acesso exige uma sessão autenticada ou um callback resolveUser quando requireSession é false",
	RESOLVED_USER_INVALID: "O usuário resolvido é inválido",
} satisfies PasskeyErrorCodesType;

export const PT_PT = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Desafio não encontrado",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Não tem permissão para registar esta chave de acesso",
	FAILED_TO_VERIFY_REGISTRATION: "Falha ao verificar o registo",
	PASSKEY_NOT_FOUND: "Chave de acesso não encontrada",
	AUTHENTICATION_FAILED: "Falha na autenticação",
	UNABLE_TO_CREATE_SESSION: "Não foi possível criar a sessão",
	FAILED_TO_UPDATE_PASSKEY: "Falha ao actualizar a chave de acesso",
	PREVIOUSLY_REGISTERED: "Já registada anteriormente",
	REGISTRATION_CANCELLED: "Registo cancelado",
	AUTH_CANCELLED: "Autenticação cancelada",
	SESSION_REQUIRED: "O registo de chave de acesso exige uma sessão autenticada",
	RESOLVE_USER_REQUIRED:
		"O registo de chave de acesso exige uma sessão autenticada ou um callback resolveUser quando requireSession é false",
	RESOLVED_USER_INVALID: "O utilizador resolvido é inválido",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"pt-BR": PT_BR,
	"pt-PT": PT_PT,
} as const;
