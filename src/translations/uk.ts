import { createTranslationObject } from "../utils/create-translation-object";

export const UK_UA = createTranslationObject("uk-UA", {
	// User related errors
	USER_NOT_FOUND: "Користувача не знайдено",
	FAILED_TO_CREATE_USER: "Не вдалося створити користувача",
	FAILED_TO_UPDATE_USER: "Не вдалося оновити користувача",
	USER_ALREADY_EXISTS: "Користувач вже існує",
	USER_EMAIL_NOT_FOUND: "Email користувача не знайдено",
	USER_ALREADY_HAS_PASSWORD:
		"Користувач вже має пароль. Вкажіть цей пароль для видалення акаунта.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Користувач вже існує. Використайте інший email.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Не вдалося створити сесію",
	FAILED_TO_GET_SESSION: "Не вдалося отримати сесію",
	SESSION_EXPIRED: "Сесія закінчилася. Увійдіть знову для виконання цієї дії.",

	// Authentication errors
	INVALID_PASSWORD: "Невірний пароль",
	INVALID_EMAIL: "Невірний email",
	INVALID_EMAIL_OR_PASSWORD: "Невірний email або пароль",
	INVALID_TOKEN: "Невірний токен",
	EMAIL_NOT_VERIFIED: "Email не підтверджено",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Обліковий запис не знайдено",

	// Password related errors
	PASSWORD_TOO_SHORT: "Пароль занадто короткий",
	PASSWORD_TOO_LONG: "Пароль занадто довгий",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Акаунт вже прив'язано",
	PROVIDER_NOT_FOUND: "Провайдера не знайдено",
	ID_TOKEN_NOT_SUPPORTED: "id_token не підтримується",
	FAILED_TO_GET_USER_INFO: "Не вдалося отримати інформацію про користувача",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "Email не можна оновити",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Неможливо відв'язати останній акаунт",
	ACCOUNT_NOT_FOUND: "Акаунт не знайдено",
	INVALID_USER: "Недійсний користувач",
	TOKEN_EXPIRED: "Термін дії токена минув",
	CHANGE_EMAIL_DISABLED: "Зміну email вимкнено",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Вхід через міжсайтову навігацію заблоковано. Цей запит схожий на CSRF-атаку.",
	VERIFICATION_EMAIL_NOT_ENABLED:
		"Надсилання листа для підтвердження не ввімкнено",
	EMAIL_ALREADY_VERIFIED: "Email уже підтверджено",
	EMAIL_MISMATCH: "Адреси email не збігаються",
	SESSION_NOT_FRESH: "Сесія не є свіжою",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Пов'язаний акаунт уже існує",
	INVALID_ORIGIN: "Недійсне джерело запиту",
	INVALID_CALLBACK_URL: "Недійсний callbackURL",
	INVALID_REDIRECT_URL: "Недійсний redirectURL",
	INVALID_ERROR_CALLBACK_URL: "Недійсний errorCallbackURL",
	INVALID_NEW_USER_CALLBACK_URL: "Недійсний newUserCallbackURL",
	MISSING_OR_NULL_ORIGIN: "Заголовок Origin відсутній або порожній",
	CALLBACK_URL_REQUIRED: "Потрібен callbackURL",
	FAILED_TO_CREATE_VERIFICATION: "Не вдалося створити підтвердження",
	FIELD_NOT_ALLOWED: "Встановлення цього поля не дозволено",
	ASYNC_VALIDATION_NOT_SUPPORTED: "Асинхронна валідація не підтримується",
	VALIDATION_ERROR: "Помилка валідації",
	MISSING_FIELD: "Поле обов'язкове",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"Для методу POST потрібно ввімкнути deferSessionRefresh у конфігурації сесії",
	BODY_MUST_BE_AN_OBJECT: "Тіло запиту має бути об'єктом",
	PASSWORD_ALREADY_SET: "Користувач уже має встановлений пароль",
});

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
