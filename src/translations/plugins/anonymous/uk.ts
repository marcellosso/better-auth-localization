import type { AnonymousErrorCodesType } from "../../../types";

export const UK_UA = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Не вдалося створити сесію",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Анонімні користувачі не можуть увійти знову анонімно",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
