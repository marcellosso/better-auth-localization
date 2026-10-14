import { createTranslationObject } from "../utils/create-translation-object";

export const NL_NL_INFORMAL = createTranslationObject("nl-NL", {
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

	// Additional errors
	INVALID_USER: "Ongeldige gebruiker",
	TOKEN_EXPIRED: "Token verlopen",
	CHANGE_EMAIL_DISABLED: "E-mailadres wijzigen is uitgeschakeld",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Inloggen via navigatie tussen websites is geblokkeerd. Dit verzoek lijkt een CSRF-aanval te zijn.",
	VERIFICATION_EMAIL_NOT_ENABLED: "Verificatie-e-mail is niet ingeschakeld",
	EMAIL_ALREADY_VERIFIED: "E-mailadres is al geverifieerd",
	EMAIL_MISMATCH: "E-mailadressen komen niet overeen",
	SESSION_NOT_FRESH: "Sessie is niet vers",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Gekoppeld account bestaat al",
	INVALID_ORIGIN: "Ongeldige oorsprong",
	INVALID_CALLBACK_URL: "Ongeldige callbackURL",
	INVALID_REDIRECT_URL: "Ongeldige redirectURL",
	INVALID_ERROR_CALLBACK_URL: "Ongeldige errorCallbackURL",
	INVALID_NEW_USER_CALLBACK_URL: "Ongeldige newUserCallbackURL",
	MISSING_OR_NULL_ORIGIN: "Origin ontbreekt of is null",
	CALLBACK_URL_REQUIRED: "callbackURL is vereist",
	FAILED_TO_CREATE_VERIFICATION: "Verificatie kon niet worden aangemaakt",
	FIELD_NOT_ALLOWED: "Dit veld mag niet worden ingesteld",
	ASYNC_VALIDATION_NOT_SUPPORTED: "Asynchrone validatie wordt niet ondersteund",
	VALIDATION_ERROR: "Validatiefout",
	MISSING_FIELD: "Veld is vereist",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"De POST-methode vereist dat deferSessionRefresh is ingeschakeld in de sessieconfiguratie",
	BODY_MUST_BE_AN_OBJECT: "Body moet een object zijn",
	PASSWORD_ALREADY_SET: "De gebruiker heeft al een wachtwoord ingesteld",
});

export const NL_NL_FORMAL = createTranslationObject("nl-NL-formal", {
	...NL_NL_INFORMAL,
	FAILED_TO_UNLINK_LAST_ACCOUNT: "U kunt het laatste account niet ontkoppelen",
});

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
