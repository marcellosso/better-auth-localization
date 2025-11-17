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
		"Utente già esistente. Usa un'altra email.",

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
});

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
