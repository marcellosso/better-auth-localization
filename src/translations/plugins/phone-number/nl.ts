import type { PhoneNumberErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Ongeldig telefoonnummer",
	PHONE_NUMBER_EXIST: "Telefoonnummer bestaat al",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Ongeldig telefoonnummer of wachtwoord",
	UNEXPECTED_ERROR: "Onverwachte fout",
	OTP_NOT_FOUND: "Verificatiecode niet gevonden",
	OTP_EXPIRED: "Verificatiecode verlopen",
	INVALID_OTP: "Ongeldige verificatiecode",
	PHONE_NUMBER_NOT_VERIFIED: "Telefoonnummer niet geverifieerd",
	PHONE_NUMBER_NOT_EXIST: "Telefoonnummer is niet geregistreerd",
	PHONE_NUMBER_CANNOT_BE_UPDATED: "Telefoonnummer kan niet worden bijgewerkt",
	SEND_OTP_NOT_IMPLEMENTED: "sendOTP is niet geïmplementeerd",
} satisfies PhoneNumberErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
