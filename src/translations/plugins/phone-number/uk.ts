import type { PhoneNumberErrorCodesType } from "../../../types";

export const UK_UA = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Невірний номер телефону",
	PHONE_NUMBER_EXIST: "Номер телефону вже існує",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Невірний номер телефону або пароль",
	UNEXPECTED_ERROR: "Неочікувана помилка",
	OTP_NOT_FOUND: "Код підтвердження не знайдено",
	OTP_EXPIRED: "Код підтвердження прострочено",
	INVALID_OTP: "Невірний код підтвердження",
	PHONE_NUMBER_NOT_VERIFIED: "Номер телефону не підтверджено",
	PHONE_NUMBER_NOT_EXIST: "Номер телефону не зареєстровано",
	PHONE_NUMBER_CANNOT_BE_UPDATED: "Номер телефону не можна змінити",
	SEND_OTP_NOT_IMPLEMENTED: "sendOTP не реалізовано",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
