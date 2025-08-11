import { ErrorCodesType } from "../types";

export const DE_DE_INFORMAL = {
	// User related errors
	USER_NOT_FOUND: "Benutzer nicht gefunden",
	FAILED_TO_CREATE_USER: "Benutzer konnte nicht erstellt werden",
	FAILED_TO_UPDATE_USER: "Benutzer konnte nicht aktualisiert werden",
	USER_ALREADY_EXISTS: "Benutzer bereits vorhanden",
	USER_EMAIL_NOT_FOUND: "E-Mail-Adresse des Benutzers nicht gefunden",
	USER_ALREADY_HAS_PASSWORD:
		"Benutzer hat bereits ein Passwort. Bitte gib es ein, um das Konto zu löschen.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Sitzung konnte nicht erstellt werden",
	FAILED_TO_GET_SESSION: "Sitzung konnte nicht abgerufen werden",
	SESSION_EXPIRED:
		"Sitzung abgelaufen. Bitte melde dich erneut an, um diese Aktion auszuführen.",

	// Authentication errors
	INVALID_PASSWORD: "Ungültiges Passwort",
	INVALID_EMAIL: "Ungültige E-Mail-Adresse",
	INVALID_EMAIL_OR_PASSWORD: "Ungültige E-Mail-Adresse oder Passwort",
	INVALID_TOKEN: "Ungültiger Token",
	EMAIL_NOT_VERIFIED: "E-Mail-Adresse nicht verifiziert",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Konto nicht gefunden",

	// Password related errors
	PASSWORD_TOO_SHORT: "Passwort zu kurz",
	PASSWORD_TOO_LONG: "Passwort zu lang",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Konto bereits verknüpft",
	PROVIDER_NOT_FOUND: "Anbieter nicht gefunden",
	ID_TOKEN_NOT_SUPPORTED: "id_token nicht unterstützt",
	FAILED_TO_GET_USER_INFO:
		"Informationen des Benutzers konnten nicht abgerufen werden",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "E-Mail-Adresse konnte nicht aktualisiert werden",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Du kannst das letzte Konto nicht trennen",
	ACCOUNT_NOT_FOUND: "Konto nicht gefunden",
} satisfies ErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
	USER_ALREADY_HAS_PASSWORD:
		"Der Benutzer hat bereits ein Passwort. Bitte geben Sie es ein, um das Konto zu löschen.",
	SESSION_EXPIRED:
		"Sitzung abgelaufen. Bitte melden Sie sich erneut an, um diese Aktion auszuführen.",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Sie können das letzte Konto nicht trennen",
} satisfies ErrorCodesType;

export const LOCALES = {
    "de-DE": DE_DE_INFORMAL,
    "de-DE-formal": DE_DE_FORMAL,
    "de-DE-informal": DE_DE_INFORMAL,
} as const;
