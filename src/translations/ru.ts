import type { ErrorCodesType } from "../types";

export const RU_RU = {
	// User related errors
	USER_NOT_FOUND: "Пользователь не найден",
	FAILED_TO_CREATE_USER: "Ошибка при создании пользователя",
	FAILED_TO_UPDATE_USER: "Ошибка при обновлении пользователя",
	USER_ALREADY_EXISTS: "Пользователь уже существует",
	USER_EMAIL_NOT_FOUND: "Email пользователя не найден",
	USER_ALREADY_HAS_PASSWORD:
		"У пользователя уже есть пароль. Укажите этот пароль для удаления аккаунта.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Пользователь уже существует. Используйте другой email.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Ошибка при создании сессии",
	FAILED_TO_GET_SESSION: "Ошибка при получении сессии",
	SESSION_EXPIRED:
		"Сессия истекла. Войдите в систему снова для выполнения этого действия.",

	// Authentication errors
	INVALID_PASSWORD: "Неверный пароль",
	INVALID_EMAIL: "Неверный email",
	INVALID_EMAIL_OR_PASSWORD: "Неверный email или пароль",
	INVALID_TOKEN: "Неверный токен",
	EMAIL_NOT_VERIFIED: "Email не подтверждён",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Учётная запись не найдена",

	// Password related errors
	PASSWORD_TOO_SHORT: "Пароль слишком короткий",
	PASSWORD_TOO_LONG: "Пароль слишком длинный",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Аккаунт уже привязан",
	PROVIDER_NOT_FOUND: "Провайдер не найден",
	ID_TOKEN_NOT_SUPPORTED: "id_token не поддерживается",
	FAILED_TO_GET_USER_INFO: "Ошибка при получении информации о пользователе",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "Email нельзя обновить",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Нельзя отвязать последний аккаунт",
	ACCOUNT_NOT_FOUND: "Аккаунт не найден",
} satisfies ErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
