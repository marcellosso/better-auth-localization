import type { ApiKeyErrorCodesType } from "../../../types";

export const UK_UA = {
	// Api key related errors
	INVALID_METADATA_TYPE: "metadata має бути об'єктом або undefined",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"кількість поповнення потрібна, коли вказано інтервал поповнення",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"інтервал поповнення потрібен, коли вказано кількість поповнення",
	USER_BANNED: "користувача заблоковано",
	UNAUTHORIZED_SESSION: "неавторизована або недійсна сесія",
	KEY_NOT_FOUND: "API ключ не знайдено",
	KEY_DISABLED: "API ключ вимкнено",
	KEY_EXPIRED: "API ключ прострочено",
	USAGE_EXCEEDED: "API ключ перевищив ліміт використання",
	KEY_NOT_RECOVERABLE: "API ключ не може бути відновлено",
	EXPIRES_IN_IS_TOO_SMALL:
		"час закінчення менший за попередньо визначене мінімальне значення.",
	EXPIRES_IN_IS_TOO_LARGE:
		"час закінчення більший за попередньо визначене максимальне значення.",
	INVALID_REMAINING:
		"залишкове значення занадто велике або занадто мале.",
	INVALID_PREFIX_LENGTH:
		"розмір префікса занадто великий або занадто малий.",
	INVALID_NAME_LENGTH: "розмір імені занадто великий або занадто малий.",
	METADATA_DISABLED: "метадані вимкнено.",
	RATE_LIMIT_EXCEEDED: "ліміт запитів перевищено.",
	NO_VALUES_TO_UPDATE: "немає значень для оновлення.",
	KEY_DISABLED_EXPIRATION:
		"користувацькі значення закінчення ключа вимкнено.",
	INVALID_API_KEY: "недійсний API ключ.",
	INVALID_USER_ID_FROM_API_KEY: "ID користувача з API ключа недійсний.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"отримувач API ключа повернув недійсний тип. Очікується: рядок.",
	SERVER_ONLY_PROPERTY:
		"властивість, яку ви намагаєтесь встановити, може бути встановлена лише з екземпляра автентифікації сервера.",
	FAILED_TO_UPDATE_API_KEY: "не вдалося оновити API ключ",
	NAME_REQUIRED: "ім'я API ключа обов'язкове.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
