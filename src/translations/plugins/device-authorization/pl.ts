import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const PL_PL = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "Nieprawidłowy kod urządzenia",
	EXPIRED_DEVICE_CODE: "Kod urządzenia wygasł",
	EXPIRED_USER_CODE: "Kod użytkownika wygasł",
	AUTHORIZATION_PENDING: "Autoryzacja oczekuje",
	ACCESS_DENIED: "Dostęp odrzucony",
	INVALID_USER_CODE: "Nieprawidłowy kod użytkownika",
	DEVICE_CODE_ALREADY_PROCESSED: "Kod urządzenia już przetworzony",
	POLLING_TOO_FREQUENTLY: "Zbyt częste zapytania",
	INVALID_DEVICE_CODE_STATUS: "Nieprawidłowy status kodu urządzenia",
	AUTHENTICATION_REQUIRED: "Wymagana autentykacja",
	DEVICE_CODE_NOT_CLAIMED:
		"Kod urządzenia nie został przypisany do weryfikującej go sesji; przed zatwierdzeniem lub odrzuceniem wywołaj `GET /device` z `user_code`, będąc zalogowanym",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
