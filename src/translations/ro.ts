import type { ErrorCodesType } from "../types";

export const RO_RO = {
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
} satisfies ErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
