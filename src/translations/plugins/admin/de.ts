import type { AdminErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "Du kannst dich nicht selbst bannen",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"Du hast keine Berechtigung, Benutzerrollen zu ändern",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
		"Du hast keine Berechtigung, Benutzer zu erstellen",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"Du hast keine Berechtigung, Benutzer aufzulisten",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"Du hast keine Berechtigung, Benutzersitzungen aufzulisten",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
		"Du hast keine Berechtigung, Benutzer zu bannen",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"Du hast keine Berechtigung, andere Benutzer zu imitieren",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"Du hast keine Berechtigung, Benutzersitzungen zu widerrufen",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"Du hast keine Berechtigung, Benutzer zu löschen",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"Du hast keine Berechtigung, Benutzerpasswörter festzulegen",
	BANNED_USER: "Du wurdest von dieser Anwendung gebannt",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER:
		"Du hast keine Berechtigung, Benutzer abzurufen",
	NO_DATA_TO_UPDATE: "Keine Daten zum Aktualisieren",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"Du hast keine Berechtigung, Benutzer zu aktualisieren",
	YOU_CANNOT_REMOVE_YOURSELF: "Du kannst dich nicht selbst entfernen",
	YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE:
		"Sie dürfen keinen nicht existierenden Rollenwert festlegen",
	YOU_CANNOT_IMPERSONATE_ADMINS:
		"Sie können sich nicht als Administrator ausgeben",
	INVALID_ROLE_TYPE: "Ungültiger Rollentyp",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL:
		"Sie dürfen die E-Mail-Adresse von Benutzern nicht ändern",
	PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER:
		"Das Passwort kann nicht über update-user geändert werden. Verwenden Sie stattdessen den Endpunkt set-user-password",
} satisfies AdminErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
	YOU_CANNOT_BAN_YOURSELF: "Sie können sich nicht selbst bannen",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"Sie haben keine Berechtigung, Benutzerrollen zu ändern",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
		"Sie haben keine Berechtigung, Benutzer zu erstellen",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"Sie haben keine Berechtigung, Benutzer aufzulisten",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"Sie haben keine Berechtigung, Benutzersitzungen aufzulisten",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
		"Sie haben keine Berechtigung, Benutzer zu bannen",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"Sie haben keine Berechtigung, andere Benutzer zu imitieren",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"Sie haben keine Berechtigung, Benutzersitzungen zu widerrufen",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"Sie haben keine Berechtigung, Benutzer zu löschen",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"Sie haben keine Berechtigung, Benutzerpasswörter festzulegen",
	BANNED_USER: "Sie wurden von dieser Anwendung gebannt",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER:
		"Sie haben keine Berechtigung, Benutzer abzurufen",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"Sie haben keine Berechtigung, Benutzer zu aktualisieren",
	YOU_CANNOT_REMOVE_YOURSELF: "Sie können sich nicht selbst entfernen",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
