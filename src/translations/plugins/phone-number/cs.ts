import type { PhoneNumberErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Neplatné telefonní číslo",
	PHONE_NUMBER_EXIST: "Telefonní číslo už existuje",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Nesprávné telefonní číslo nebo heslo",
	UNEXPECTED_ERROR: "Neočekávaná chyba",
	OTP_NOT_FOUND: "Jednorázový kód nenalezen",
	OTP_EXPIRED: "Platnost jednorázového kódu vypršela",
	INVALID_OTP: "Nesprávný jednorázový kód",
	PHONE_NUMBER_NOT_VERIFIED: "Telefonní číslo není ověřené",
} satisfies PhoneNumberErrorCodesType;
export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL,
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"cs": CS_CZ_INFORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
