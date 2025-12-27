import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const UK_UA = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "Невірний код пристрою",
	EXPIRED_DEVICE_CODE: "Код пристрою прострочено",
	EXPIRED_USER_CODE: "Код користувача прострочено",
	AUTHORIZATION_PENDING: "Авторизація очікує",
	ACCESS_DENIED: "Доступ заборонено",
	INVALID_USER_CODE: "Невірний код користувача",
	DEVICE_CODE_ALREADY_PROCESSED: "Код пристрою вже оброблено",
	POLLING_TOO_FREQUENTLY: "Занадто часті запити",
	INVALID_DEVICE_CODE_STATUS: "Невірний статус коду пристрою",
	AUTHENTICATION_REQUIRED: "Потрібна автентифікація",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
