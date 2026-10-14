import type { PhoneNumberErrorCodesType } from "../../../types";

export const PL_PL = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Nieprawidłowy numer telefonu",
	PHONE_NUMBER_EXIST: "Numer telefonu już istnieje",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Nieprawidłowy numer telefonu lub hasło",
	UNEXPECTED_ERROR: "Nieoczekiwany błąd",
	OTP_NOT_FOUND: "Kod weryfikacyjny nie znaleziony",
	OTP_EXPIRED: "Kod weryfikacyjny wygasł",
	INVALID_OTP: "Nieprawidłowy kod weryfikacyjny",
	PHONE_NUMBER_NOT_VERIFIED: "Numer telefonu nie został zweryfikowany",
	PHONE_NUMBER_NOT_EXIST: "Numer telefonu nie jest zarejestrowany",
	PHONE_NUMBER_CANNOT_BE_UPDATED: "Numeru telefonu nie można zmienić",
	SEND_OTP_NOT_IMPLEMENTED: "sendOTP nie jest zaimplementowane",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
