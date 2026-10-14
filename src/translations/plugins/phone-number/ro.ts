import type { PhoneNumberErrorCodesType } from "../../../types";

export const RO_RO = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Număr de telefon invalid",
	PHONE_NUMBER_EXIST: "Numărul de telefon există deja",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Număr de telefon sau parolă invalid",
	UNEXPECTED_ERROR: "Eroare neașteptată",
	OTP_NOT_FOUND: "Codul de verificare nu a fost găsit",
	OTP_EXPIRED: "Codul de verificare a expirat",
	INVALID_OTP: "Cod de verificare invalid",
	PHONE_NUMBER_NOT_VERIFIED: "Numărul de telefon nu a fost verificat",
	PHONE_NUMBER_NOT_EXIST: "Numărul de telefon nu este înregistrat",
	PHONE_NUMBER_CANNOT_BE_UPDATED: "Numărul de telefon nu poate fi actualizat",
	SEND_OTP_NOT_IMPLEMENTED: "sendOTP nu este implementat",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
