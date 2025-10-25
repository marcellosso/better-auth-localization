import type { ErrorCodesType } from "../types";

export const SV_SE = {
	// User related errors
	USER_NOT_FOUND: "Användaren hittades inte",
	FAILED_TO_CREATE_USER: "Lyckades inte skapa användare",
	FAILED_TO_UPDATE_USER: "Lyckades inte uppdatera användare",
	USER_ALREADY_EXISTS: "Användaren finns redan",
	USER_EMAIL_NOT_FOUND: "Användarens e-post hittades inte",
	USER_ALREADY_HAS_PASSWORD: "Användaren har redan ett lösenord",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Användaren finns redan. Använd en annan e-postadress.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Lyckades inte skapa session",
	FAILED_TO_GET_SESSION: "Lyckades inte hämta session",
	SESSION_EXPIRED: "Sessionen har gått ut",

	// Authentication errors
	INVALID_PASSWORD: "Ogiltigt lösenord",
	INVALID_EMAIL: "Ogiltig e-postadress",
	INVALID_EMAIL_OR_PASSWORD: "Ogiltig e-postadress eller lösenord",
	INVALID_TOKEN: "Ogiltig token",
	EMAIL_NOT_VERIFIED: "E-postadress har inte verifierats",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Inloggningsuppgifter hittades inte",

	// Password related errors
	PASSWORD_TOO_SHORT: "Lösenordet är för kort",
	PASSWORD_TOO_LONG: "Lösenordet är för långt",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Socialt konto är redan länkat",
	PROVIDER_NOT_FOUND: "Leverantör hittades inte",
	ID_TOKEN_NOT_SUPPORTED: "ID-token stöds inte",
	FAILED_TO_GET_USER_INFO: "Kunde inte hämta användaruppgifter",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "E-postadress kan inte uppdateras",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Du kan inte koppla bort det sista kontot",
	ACCOUNT_NOT_FOUND: "Konto hittades inte",
} satisfies ErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
