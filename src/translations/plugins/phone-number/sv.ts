import type { PhoneNumberErrorCodesType } from "../../../types";

export const SV_SE = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Ogiltigt telefonnummer",
	PHONE_NUMBER_EXIST: "Telefonnummer finns redan",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Ogiltigt telefonnummer eller lösenord",
	UNEXPECTED_ERROR: "Oväntat fel",
	OTP_NOT_FOUND: "Verifieringskod hittades inte",
	OTP_EXPIRED: "Verifieringskod har gått ut",
	INVALID_OTP: "Ogiltig verifieringskod",
	PHONE_NUMBER_NOT_VERIFIED: "Telefonnummer inte verifierat",
	PHONE_NUMBER_NOT_EXIST: "Telefonnumret är inte registrerat",
	PHONE_NUMBER_CANNOT_BE_UPDATED: "Telefonnumret kan inte uppdateras",
	SEND_OTP_NOT_IMPLEMENTED: "sendOTP är inte implementerad",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
