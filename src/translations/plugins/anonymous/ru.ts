import type { AnonymousErrorCodesType } from "../../../types";

export const RU_RU = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Не удалось создать сессию",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Анонимные пользователи не могут войти снова анонимно",
	INVALID_EMAIL_FORMAT: "Email был сгенерирован в недопустимом формате",
	FAILED_TO_DELETE_ANONYMOUS_USER: "Не удалось удалить анонимного пользователя",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Не удалось удалить сессии анонимного пользователя",
	USER_IS_NOT_ANONYMOUS: "Пользователь не является анонимным",
	DELETE_ANONYMOUS_USER_DISABLED: "Удаление анонимных пользователей отключено",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
