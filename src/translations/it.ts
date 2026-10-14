import { createTranslationObject } from "../utils/create-translation-object";

export const IT_IT = createTranslationObject("it-IT", {
	// User related errors
	USER_NOT_FOUND: "Utente non trovato",
	FAILED_TO_CREATE_USER: "Errore nella creazione dell'utente",
	FAILED_TO_UPDATE_USER: "Errore nell'aggiornamento dell'utente",
	USER_ALREADY_EXISTS: "Utente già esistente",
	USER_EMAIL_NOT_FOUND: "Email dell'utente non trovata",
	USER_ALREADY_HAS_PASSWORD:
		"L'utente ha già una password. Forniscila per eliminare l'account.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Utente già esistente. Usa un altro email.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Errore nella creazione della sessione",
	FAILED_TO_GET_SESSION: "Errore nel recupero della sessione",
	SESSION_EXPIRED:
		"Sessione scaduta. Autenticati nuovamente per eseguire questa azione.",

	// Authentication errors
	INVALID_PASSWORD: "Password non valida",
	INVALID_EMAIL: "Email non valida",
	INVALID_EMAIL_OR_PASSWORD: "Email o password non valide",
	INVALID_TOKEN: "Token non valido",
	EMAIL_NOT_VERIFIED: "Email non verificata",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Account delle credenziali non trovato",

	// Password related errors
	PASSWORD_TOO_SHORT: "Password troppo corta",
	PASSWORD_TOO_LONG: "Password troppo lunga",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Account già collegato",
	PROVIDER_NOT_FOUND: "Provider non trovato",
	ID_TOKEN_NOT_SUPPORTED: "id_token non supportato",
	FAILED_TO_GET_USER_INFO: "Errore nel recupero delle informazioni dell'utente",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "L'email non può essere aggiornata",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Non puoi scollegare il tuo ultimo account",
	ACCOUNT_NOT_FOUND: "Account non trovato",
	INVALID_USER: "Utente non valido",
	TOKEN_EXPIRED: "Token scaduto",
	CHANGE_EMAIL_DISABLED: "La modifica dell'email è disabilitata",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Accesso tramite navigazione tra siti bloccato. Questa richiesta sembra essere un attacco CSRF.",
	VERIFICATION_EMAIL_NOT_ENABLED: "L'email di verifica non è abilitata",
	EMAIL_ALREADY_VERIFIED: "L'email è già verificata",
	EMAIL_MISMATCH: "Le email non corrispondono",
	SESSION_NOT_FRESH: "La sessione non è recente",
	LINKED_ACCOUNT_ALREADY_EXISTS: "L'account collegato esiste già",
	INVALID_ORIGIN: "Origine non valida",
	INVALID_CALLBACK_URL: "callbackURL non valido",
	INVALID_REDIRECT_URL: "redirectURL non valido",
	INVALID_ERROR_CALLBACK_URL: "errorCallbackURL non valido",
	INVALID_NEW_USER_CALLBACK_URL: "newUserCallbackURL non valido",
	MISSING_OR_NULL_ORIGIN: "Origin mancante o nullo",
	CALLBACK_URL_REQUIRED: "callbackURL è obbligatorio",
	FAILED_TO_CREATE_VERIFICATION: "Impossibile creare la verifica",
	FIELD_NOT_ALLOWED: "Non è consentito impostare questo campo",
	ASYNC_VALIDATION_NOT_SUPPORTED: "La validazione asincrona non è supportata",
	VALIDATION_ERROR: "Errore di validazione",
	MISSING_FIELD: "Il campo è obbligatorio",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"Il metodo POST richiede che deferSessionRefresh sia abilitato nella configurazione della sessione",
	BODY_MUST_BE_AN_OBJECT: "Il corpo deve essere un oggetto",
	PASSWORD_ALREADY_SET: "L'utente ha già una password impostata",
});

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
