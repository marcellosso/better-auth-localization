import type { AdminErrorCodesType } from "../../../types";

export const UK_UA = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "Ви не можете заблокувати себе",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"Ви не маєте дозволу змінювати ролі користувачів",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
		"Ви не маєте дозволу створювати користувачів",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"Ви не маєте дозволу переглядати список користувачів",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"Ви не маєте дозволу переглядати сесії користувачів",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
		"Ви не маєте дозволу блокувати користувачів",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"Ви не маєте дозволу видавати себе за інших користувачів",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"Ви не маєте дозволу відкликати сесії користувачів",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"Ви не маєте дозволу видаляти користувачів",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"Ви не маєте дозволу встановлювати паролі користувачів",
	BANNED_USER: "Вас заблоковано у цьому застосунку",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER:
		"Ви не маєте дозволу отримувати дані користувача",
	NO_DATA_TO_UPDATE: "Немає даних для оновлення",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"Ви не маєте дозволу оновлювати користувачів",
	YOU_CANNOT_REMOVE_YOURSELF: "Ви не можете видалити себе",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
