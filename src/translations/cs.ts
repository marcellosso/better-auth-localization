import { createTranslationObject } from "../utils/create-translation-object";

export const CS_CZ_INFORMAL = createTranslationObject("cs-CZ-informal", {
	// User related errors
	USER_NOT_FOUND: "Uživatel nenalezen",
	FAILED_TO_CREATE_USER: "Nepodařilo se vytvořit uživatele",
	FAILED_TO_UPDATE_USER: "Nepodařilo se aktualizovat uživatele",
	USER_ALREADY_EXISTS: "Uživatel již existuje",

	// To save anyone trouble in the future, this error is used during signInSocial and linkSocialAccount and is returned when the social provider does not return the user email in userInfo.
	USER_EMAIL_NOT_FOUND: "Email uživatele nebyl nalezen",

	USER_ALREADY_HAS_PASSWORD: "Uživatel již má nastavené heslo",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Uživatel s tímto emailem už existuje. Použij prosím jiný email",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Nebylo možné vytvořit uživatelskou relaci",
	FAILED_TO_GET_SESSION: "Uživatelská relace není dostupná",
	SESSION_EXPIRED:
		"Uživatelská relace vypršela. Přihlaš se prosím znovu, než budeš moci pokračovat",

	// Authentication errors
	INVALID_PASSWORD: "Nesprávné heslo",
	INVALID_EMAIL: "Email ve špatném formátu",
	INVALID_EMAIL_OR_PASSWORD: "Nesprávný email nebo heslo",
	INVALID_TOKEN: "Neplatný token",
	EMAIL_NOT_VERIFIED: "Email není ověřený",

	// This error is used on changePassword action when the user has no credential account (either uses passwordless auth like magic links or social providers).
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Nemáš nastavené žádné heslo",

	// Password related errors
	PASSWORD_TOO_SHORT: "Příliš krátké heslo",
	PASSWORD_TOO_LONG: "Příliš dlouhé heslo",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Tento účet už je spárovaný",
	PROVIDER_NOT_FOUND: "Nepodporovaný poskytovatel identity",
	ID_TOKEN_NOT_SUPPORTED: "Nepodporovaný id_token",

	// This error is used during signInSocial and linkSocialAccount and is returned when the provider does not return userInfo.
	FAILED_TO_GET_USER_INFO: "Došlo k chybě při čtení informací o uživateli",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "Email není možné změnit",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Účet se nepodařilo odpojit",
	ACCOUNT_NOT_FOUND: "Účet nebyl nalezen",
	INVALID_USER: "Neplatný uživatel",
	TOKEN_EXPIRED: "Platnost tokenu vypršela",
	CHANGE_EMAIL_DISABLED: "Změna emailu je zakázána",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Přihlášení prostřednictvím navigace mezi weby bylo zablokováno. Tento požadavek vypadá jako útok CSRF.",
	VERIFICATION_EMAIL_NOT_ENABLED: "Ověřovací email není povolen",
	EMAIL_ALREADY_VERIFIED: "Email už byl ověřen",
	EMAIL_MISMATCH: "Emaily se neshodují",
	SESSION_NOT_FRESH: "Uživatelská relace není aktuální",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Propojený účet již existuje",
	INVALID_ORIGIN: "Neplatný původ požadavku",
	INVALID_CALLBACK_URL: "Neplatný callbackURL",
	INVALID_REDIRECT_URL: "Neplatný redirectURL",
	INVALID_ERROR_CALLBACK_URL: "Neplatný errorCallbackURL",
	INVALID_NEW_USER_CALLBACK_URL: "Neplatný newUserCallbackURL",
	MISSING_OR_NULL_ORIGIN: "Hlavička Origin chybí nebo je prázdná",
	CALLBACK_URL_REQUIRED: "callbackURL je povinný",
	FAILED_TO_CREATE_VERIFICATION: "Nepodařilo se vytvořit ověření",
	FIELD_NOT_ALLOWED: "Nastavení tohoto pole není povoleno",
	ASYNC_VALIDATION_NOT_SUPPORTED: "Asynchronní validace není podporována",
	VALIDATION_ERROR: "Chyba validace",
	MISSING_FIELD: "Pole je povinné",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"Metoda POST vyžaduje povolení deferSessionRefresh v konfiguraci relace",
	BODY_MUST_BE_AN_OBJECT: "Tělo požadavku musí být objekt",
	PASSWORD_ALREADY_SET: "Uživatel již má nastavené heslo",
});

export const CS_CZ_FORMAL = createTranslationObject("cs-CZ-formal", {
	...CS_CZ_INFORMAL,
	// This error is used on changePassword action when the user has no credential account (either uses passwordless auth like magic links or social providers).
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Nemáte nastavené žádné heslo",

	SESSION_EXPIRED:
		"Uživatelská relace vypršela. Přihlašte se prosím znovu, než budete moci pokračovat",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Uživatel s tímto emailem už existuje. Použijte prosím jiný email",
});

export const LOCALES = {
	"cs-CZ": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
} as const;
