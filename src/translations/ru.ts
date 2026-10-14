import { createTranslationObject } from "../utils/create-translation-object";

export const RU_RU = createTranslationObject("ru-RU", {
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
	INVALID_USER: "Недействительный пользователь",
	TOKEN_EXPIRED: "Срок действия токена истек",
	CHANGE_EMAIL_DISABLED: "Изменение email отключено",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Вход через межсайтовую навигацию заблокирован. Этот запрос похож на CSRF-атаку.",
	VERIFICATION_EMAIL_NOT_ENABLED:
		"Отправка письма для подтверждения не включена",
	EMAIL_ALREADY_VERIFIED: "Email уже подтвержден",
	EMAIL_MISMATCH: "Адреса email не совпадают",
	SESSION_NOT_FRESH: "Сессия не является свежей",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Связанный аккаунт уже существует",
	INVALID_ORIGIN: "Недействительный источник запроса",
	INVALID_CALLBACK_URL: "Недействительный callbackURL",
	INVALID_REDIRECT_URL: "Недействительный redirectURL",
	INVALID_ERROR_CALLBACK_URL: "Недействительный errorCallbackURL",
	INVALID_NEW_USER_CALLBACK_URL: "Недействительный newUserCallbackURL",
	MISSING_OR_NULL_ORIGIN: "Заголовок Origin отсутствует или пуст",
	CALLBACK_URL_REQUIRED: "Требуется callbackURL",
	FAILED_TO_CREATE_VERIFICATION: "Не удалось создать подтверждение",
	FIELD_NOT_ALLOWED: "Установка этого поля не разрешена",
	ASYNC_VALIDATION_NOT_SUPPORTED: "Асинхронная валидация не поддерживается",
	VALIDATION_ERROR: "Ошибка валидации",
	MISSING_FIELD: "Поле обязательно",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"Для метода POST необходимо включить deferSessionRefresh в конфигурации сессии",
	BODY_MUST_BE_AN_OBJECT: "Тело запроса должно быть объектом",
	PASSWORD_ALREADY_SET: "У пользователя уже установлен пароль",
});

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
