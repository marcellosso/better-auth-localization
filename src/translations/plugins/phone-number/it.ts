import type { PhoneNumberErrorCodesType } from "../../../types";

export const IT_IT = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Numero di telefono non valido",
	PHONE_NUMBER_EXIST: "Il numero di telefono esiste già",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Numero di telefono o password non validi",
	UNEXPECTED_ERROR: "Errore imprevisto",
	OTP_NOT_FOUND: "Codice di verifica non trovato",
	OTP_EXPIRED: "Codice di verifica scaduto",
	INVALID_OTP: "Codice di verifica non valido",
	PHONE_NUMBER_NOT_VERIFIED: "Numero di telefono non verificato",
	PHONE_NUMBER_NOT_EXIST: "Il numero di telefono non è registrato",
	PHONE_NUMBER_CANNOT_BE_UPDATED:
		"Il numero di telefono non può essere aggiornato",
	SEND_OTP_NOT_IMPLEMENTED: "sendOTP non implementato",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
