import type { ApiKeyErrorCodesType } from "../../../types";

export const RU_RU = {
	// Api key related errors
	INVALID_METADATA_TYPE: "metadata должно быть объектом или undefined",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"количество пополнения требуется когда указан интервал пополнения",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"интервал пополнения требуется когда указано количество пополнения",
	USER_BANNED: "пользователь заблокирован",
	UNAUTHORIZED_SESSION: "неавторизованная или недействительная сессия",
	KEY_NOT_FOUND: "API ключ не найден",
	KEY_DISABLED: "API ключ отключен",
	KEY_EXPIRED: "API ключ истек",
	USAGE_EXCEEDED: "API ключ превысил лимит использования",
	KEY_NOT_RECOVERABLE: "API ключ не может быть восстановлен",
	EXPIRES_IN_IS_TOO_SMALL:
		"время истечения меньше предопределенного минимального значения.",
	EXPIRES_IN_IS_TOO_LARGE:
		"время истечения больше предопределенного максимального значения.",
	INVALID_REMAINING:
		"оставшееся значение слишком большое или слишком маленькое.",
	INVALID_PREFIX_LENGTH:
		"размер префикса слишком большой или слишком маленький.",
	INVALID_NAME_LENGTH: "размер имени слишком большой или слишком маленький.",
	METADATA_DISABLED: "метаданные отключены.",
	RATE_LIMIT_EXCEEDED: "лимит запросов превышен.",
	NO_VALUES_TO_UPDATE: "нет значений для обновления.",
	KEY_DISABLED_EXPIRATION:
		"пользовательские значения истечения ключа отключены.",
	INVALID_API_KEY: "недействительный API ключ.",
	INVALID_USER_ID_FROM_API_KEY: "ID пользователя из API ключа недействителен.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"получатель API ключа вернул недействительный тип. Ожидается: строка.",
	SERVER_ONLY_PROPERTY:
		"свойство которое вы пытаетесь установить может быть установлено только из экземпляра аутентификации сервера.",
	FAILED_TO_UPDATE_API_KEY: "не удалось обновить API ключ",
	NAME_REQUIRED: "имя API ключа обязательно.",
	INVALID_REFERENCE_ID_FROM_API_KEY:
		"Идентификатор ссылки из API ключа недействителен.",
	ORGANIZATION_ID_REQUIRED:
		"Для API ключей, принадлежащих организации, требуется ID организации.",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"Вы не являетесь участником организации, которой принадлежит этот API ключ.",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"У вас нет разрешения на выполнение этого действия с API ключами организации.",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"Конфигурация API ключа по умолчанию не найдена.",
	ORGANIZATION_PLUGIN_REQUIRED:
		"Для API ключей, принадлежащих организации, требуется плагин организации. Установите и настройте плагин организации.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
