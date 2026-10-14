import { createTranslationObject } from "../utils/create-translation-object";

export const RO_RO = createTranslationObject("ro-RO", {
	// User related errors
	USER_NOT_FOUND: "Utilizatorul nu a fost găsit",
	FAILED_TO_CREATE_USER: "Eroare la crearea utilizatorului",
	FAILED_TO_UPDATE_USER: "Eroare la actualizarea utilizatorului",
	USER_ALREADY_EXISTS: "Utilizatorul deja există",
	USER_EMAIL_NOT_FOUND: "Email-ul utilizatorului nu a fost găsit",
	USER_ALREADY_HAS_PASSWORD:
		"Utilizatorul are deja o parolă. Folosiți această parolă pentru a șterge contul.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Utilizatorul există deja. Folosiți un alt email.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Eroare la crearea sesiunii",
	FAILED_TO_GET_SESSION: "Eroare la obținerea sesiunii",
	SESSION_EXPIRED: "Sesiunea a expirat. Autentificați-vă din nou.",

	// Authentication errors
	INVALID_PASSWORD: "Parolă invalidă",
	INVALID_EMAIL: "Email invalid",
	INVALID_EMAIL_OR_PASSWORD: "Email sau parolă invalide",
	INVALID_TOKEN: "Token invalid",
	EMAIL_NOT_VERIFIED: "Email neverificat",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Contul cu aceste credențiale nu a fost găsit",

	// Password related errors
	PASSWORD_TOO_SHORT: "Parolă prea scurtă",
	PASSWORD_TOO_LONG: "Parolă prea lungă",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Contul social este deja conectat",
	PROVIDER_NOT_FOUND: "Furnizorul nu a fost găsit",
	ID_TOKEN_NOT_SUPPORTED: "id_token nu este suportat",
	FAILED_TO_GET_USER_INFO: "Eroare la obținerea informațiilor utilizatorului",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "Email-ul nu poate fi actualizat",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Nu se poate deconecta ultimul cont",
	ACCOUNT_NOT_FOUND: "Contul nu a fost găsit",
	INVALID_USER: "Utilizator invalid",
	TOKEN_EXPIRED: "Token-ul a expirat",
	CHANGE_EMAIL_DISABLED: "Schimbarea adresei de email este dezactivată",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Autentificarea prin navigare între site-uri a fost blocată. Această solicitare pare a fi un atac CSRF.",
	VERIFICATION_EMAIL_NOT_ENABLED: "Email-ul de verificare nu este activat",
	EMAIL_ALREADY_VERIFIED: "Adresa de email a fost deja verificată",
	EMAIL_MISMATCH: "Adresele de email nu coincid",
	SESSION_NOT_FRESH: "Sesiunea nu este recentă",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Contul asociat există deja",
	INVALID_ORIGIN: "Origine invalidă",
	INVALID_CALLBACK_URL: "callbackURL invalid",
	INVALID_REDIRECT_URL: "redirectURL invalid",
	INVALID_ERROR_CALLBACK_URL: "errorCallbackURL invalid",
	INVALID_NEW_USER_CALLBACK_URL: "newUserCallbackURL invalid",
	MISSING_OR_NULL_ORIGIN: "Antetul Origin lipsește sau este nul",
	CALLBACK_URL_REQUIRED: "callbackURL este necesar",
	FAILED_TO_CREATE_VERIFICATION: "Nu s-a putut crea verificarea",
	FIELD_NOT_ALLOWED: "Setarea acestui câmp nu este permisă",
	ASYNC_VALIDATION_NOT_SUPPORTED: "Validarea asincronă nu este acceptată",
	VALIDATION_ERROR: "Eroare de validare",
	MISSING_FIELD: "Câmpul este necesar",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"Metoda POST necesită activarea deferSessionRefresh în configurația sesiunii",
	BODY_MUST_BE_AN_OBJECT: "Corpul cererii trebuie să fie un obiect",
	PASSWORD_ALREADY_SET: "Utilizatorul are deja o parolă setată",
});

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
