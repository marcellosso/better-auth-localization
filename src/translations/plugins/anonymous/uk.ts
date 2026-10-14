import type { AnonymousErrorCodesType } from "../../../types";

export const UK_UA = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Не вдалося створити сесію",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Анонімні користувачі не можуть увійти знову анонімно",
	INVALID_EMAIL_FORMAT: "Email було згенеровано в недійсному форматі",
	FAILED_TO_DELETE_ANONYMOUS_USER: "Не вдалося видалити анонімного користувача",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Не вдалося видалити сесії анонімного користувача",
	USER_IS_NOT_ANONYMOUS: "Користувач не є анонімним",
	DELETE_ANONYMOUS_USER_DISABLED: "Видалення анонімних користувачів вимкнено",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
