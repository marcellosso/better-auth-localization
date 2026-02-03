import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	INVALID_DEVICE_CODE: "Neplatný kód zařízení",
	EXPIRED_DEVICE_CODE: "Kód zařízení vypršel",
	EXPIRED_USER_CODE: "Kód uživatele vypršel",
	AUTHORIZATION_PENDING: "Probíhá autorizace",
	ACCESS_DENIED: "Přístup zamítnut",
	INVALID_USER_CODE: "Neplatný kód uživatele",
	DEVICE_CODE_ALREADY_PROCESSED: "Kód zařízení byl již zpracován",
	POLLING_TOO_FREQUENTLY: "Příliš mnoho požadavků",
	INVALID_DEVICE_CODE_STATUS: "Neplatný kód stavu zařízení",
	AUTHENTICATION_REQUIRED: "Požadováno přihlášení",
} satisfies DeviceAuthorizationErrorCodesType;

export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"cs": CS_CZ_INFORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
