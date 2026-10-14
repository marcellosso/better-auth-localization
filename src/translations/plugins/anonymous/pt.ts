import type { AnonymousErrorCodesType } from "../../../types";

export const PT_BR = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Não foi possível criar a sessão",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Usuários anônimos não podem entrar novamente como anônimos",
	INVALID_EMAIL_FORMAT: "O email não foi gerado em um formato válido",
	FAILED_TO_DELETE_ANONYMOUS_USER: "Falha ao excluir usuário anônimo",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Falha ao excluir as sessões do usuário anônimo",
	USER_IS_NOT_ANONYMOUS: "O usuário não é anônimo",
	DELETE_ANONYMOUS_USER_DISABLED:
		"A exclusão de usuários anônimos está desativada",
} satisfies AnonymousErrorCodesType;

export const PT_PT = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Não foi possível criar a sessão",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Utilizadores anónimos não podem entrar novamente como anónimos",
	INVALID_EMAIL_FORMAT: "O e-mail não foi gerado num formato válido",
	FAILED_TO_DELETE_ANONYMOUS_USER: "Falha ao eliminar utilizador anónimo",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Falha ao eliminar as sessões do utilizador anónimo",
	USER_IS_NOT_ANONYMOUS: "O utilizador não é anónimo",
	DELETE_ANONYMOUS_USER_DISABLED:
		"A eliminação de utilizadores anónimos está desactivada",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"pt-BR": PT_BR,
	"pt-PT": PT_PT,
} as const;
