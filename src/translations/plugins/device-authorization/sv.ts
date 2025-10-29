import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const SV_SE = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "Ogiltig enhetskod",
	EXPIRED_DEVICE_CODE: "Enhetskod har gått ut",
	EXPIRED_USER_CODE: "Användarkod har gått ut",
	AUTHORIZATION_PENDING: "Auktorisering väntar",
	ACCESS_DENIED: "Åtkomst nekad",
	INVALID_USER_CODE: "Ogiltig användarkod",
	DEVICE_CODE_ALREADY_PROCESSED: "Enhetskod redan bearbetad",
	POLLING_TOO_FREQUENTLY: "För frekventa förfrågningar",
	INVALID_DEVICE_CODE_STATUS: "Ogiltig enhetskod status",
	AUTHENTICATION_REQUIRED: "Autentisering krävs",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
