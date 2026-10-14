import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "Ungültiger Gerätecode",
	EXPIRED_DEVICE_CODE: "Gerätecode abgelaufen",
	EXPIRED_USER_CODE: "Benutzercode abgelaufen",
	AUTHORIZATION_PENDING: "Autorisierung ausstehend",
	ACCESS_DENIED: "Zugriff verweigert",
	INVALID_USER_CODE: "Ungültiger Benutzercode",
	DEVICE_CODE_ALREADY_PROCESSED: "Gerätecode bereits verarbeitet",
	POLLING_TOO_FREQUENTLY: "Zu häufige Abfragen",
	INVALID_DEVICE_CODE_STATUS: "Ungültiger Gerätecode-Status",
	AUTHENTICATION_REQUIRED: "Authentifizierung erforderlich",
	DEVICE_CODE_NOT_CLAIMED:
		"Der Gerätecode wurde von keiner Verifizierungssitzung beansprucht. Rufen Sie `GET /device` mit dem `user_code` auf, solange Sie angemeldet sind, bevor Sie genehmigen oder ablehnen",
} satisfies DeviceAuthorizationErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
