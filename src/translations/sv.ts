import { createTranslationObject } from "../utils/create-translation-object";

export const SV_SE = createTranslationObject("sv-SE", {
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

	// Additional errors
	INVALID_USER: "Ogiltig användare",
	TOKEN_EXPIRED: "Token har gått ut",
	CHANGE_EMAIL_DISABLED: "Ändring av e-postadress är inaktiverad",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Inloggning via navigering mellan webbplatser blockerades. Denna begäran verkar vara en CSRF-attack.",
	VERIFICATION_EMAIL_NOT_ENABLED: "Verifieringsmejl är inte aktiverat",
	EMAIL_ALREADY_VERIFIED: "E-postadressen är redan verifierad",
	EMAIL_MISMATCH: "E-postadresserna matchar inte",
	SESSION_NOT_FRESH: "Sessionen är inte ny",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Länkat konto finns redan",
	INVALID_ORIGIN: "Ogiltigt ursprung",
	INVALID_CALLBACK_URL: "Ogiltig callbackURL",
	INVALID_REDIRECT_URL: "Ogiltig redirectURL",
	INVALID_ERROR_CALLBACK_URL: "Ogiltig errorCallbackURL",
	INVALID_NEW_USER_CALLBACK_URL: "Ogiltig newUserCallbackURL",
	MISSING_OR_NULL_ORIGIN: "Origin saknas eller är null",
	CALLBACK_URL_REQUIRED: "callbackURL krävs",
	FAILED_TO_CREATE_VERIFICATION: "Kunde inte skapa verifiering",
	FIELD_NOT_ALLOWED: "Fältet får inte anges",
	ASYNC_VALIDATION_NOT_SUPPORTED: "Asynkron validering stöds inte",
	VALIDATION_ERROR: "Valideringsfel",
	MISSING_FIELD: "Fältet krävs",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"POST-metoden kräver att deferSessionRefresh är aktiverat i sessionskonfigurationen",
	BODY_MUST_BE_AN_OBJECT: "Body måste vara ett objekt",
	PASSWORD_ALREADY_SET: "Användaren har redan ett lösenord",
});

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
