import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const RU_RU = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "Неверный код устройства",
	EXPIRED_DEVICE_CODE: "Код устройства истек",
	EXPIRED_USER_CODE: "Код пользователя истек",
	AUTHORIZATION_PENDING: "Авторизация ожидает",
	ACCESS_DENIED: "Доступ запрещен",
	INVALID_USER_CODE: "Неверный код пользователя",
	DEVICE_CODE_ALREADY_PROCESSED: "Код устройства уже обработан",
	POLLING_TOO_FREQUENTLY: "Слишком частые запросы",
	INVALID_DEVICE_CODE_STATUS: "Неверный статус кода устройства",
	AUTHENTICATION_REQUIRED: "Требуется аутентификация",
	DEVICE_CODE_NOT_CLAIMED:
		"Код устройства не был закреплен за проверяющей сессией; перед подтверждением или отклонением вызовите `GET /device` с `user_code`, будучи авторизованным",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
