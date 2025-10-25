import type { ErrorCodesType } from "../types";

export const NL_NL_INFORMAL = {
	// User related errors
	USER_NOT_FOUND: "Gebruiker niet gevonden",
	FAILED_TO_CREATE_USER: "Gebruiker kon niet worden aangemaakt",
	FAILED_TO_UPDATE_USER: "Gebruiker kon niet worden bijgewerkt",
	USER_ALREADY_EXISTS: "Gebruiker bestaat al",
	USER_EMAIL_NOT_FOUND: "E-mailadres van gebruiker niet gevonden",
	USER_ALREADY_HAS_PASSWORD:
		"Gebruiker heeft al een wachtwoord. Voer het in om het account te verwijderen.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Gebruiker bestaat al. Gebruik een ander e-mailadres.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Sessie kon niet worden aangemaakt",
	FAILED_TO_GET_SESSION: "Sessie kon niet worden opgehaald",
	SESSION_EXPIRED:
		"Sessie verlopen. Log opnieuw in om deze actie uit te voeren.",

	// Authentication errors
	INVALID_PASSWORD: "Ongeldig wachtwoord",
	INVALID_EMAIL: "Ongeldig e-mailadres",
	INVALID_EMAIL_OR_PASSWORD: "Ongeldig e-mailadres of wachtwoord",
	INVALID_TOKEN: "Ongeldig token",
	EMAIL_NOT_VERIFIED: "E-mailadres niet geverifieerd",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Account niet gevonden",

	// Password related errors
	PASSWORD_TOO_SHORT: "Wachtwoord te kort",
	PASSWORD_TOO_LONG: "Wachtwoord te lang",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Account al gekoppeld",
	PROVIDER_NOT_FOUND: "Provider niet gevonden",
	ID_TOKEN_NOT_SUPPORTED: "id_token niet ondersteund",
	FAILED_TO_GET_USER_INFO: "Gebruikersgegevens konden niet worden opgehaald",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "E-mailadres kon niet worden bijgewerkt",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Je kunt het laatste account niet ontkoppelen",
	ACCOUNT_NOT_FOUND: "Account niet gevonden",
} satisfies ErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
	FAILED_TO_UNLINK_LAST_ACCOUNT: "U kunt het laatste account niet ontkoppelen",
} satisfies ErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
