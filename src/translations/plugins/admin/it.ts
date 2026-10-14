import type { AdminErrorCodesType } from "../../../types";

export const IT_IT = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "Non puoi bannare te stesso",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"Non hai il permesso di modificare i ruoli degli utenti",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "Non hai il permesso di creare utenti",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"Non hai il permesso di elencare gli utenti",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"Non hai il permesso di elencare le sessioni degli utenti",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "Non hai il permesso di bannare gli utenti",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"Non hai il permesso di impersonare altri utenti",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"Non hai il permesso di revocare le sessioni degli utenti",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"Non hai il permesso di eliminare gli utenti",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"Non hai il permesso di impostare le password degli utenti",
	BANNED_USER: "Sei stato bannato da questa applicazione",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "Non hai il permesso di ottenere l'utente",
	NO_DATA_TO_UPDATE: "Nessun dato da aggiornare",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"Non hai il permesso di aggiornare gli utenti",
	YOU_CANNOT_REMOVE_YOURSELF: "Non puoi rimuovere te stesso",
	YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE:
		"Non hai il permesso di impostare un valore di ruolo inesistente",
	YOU_CANNOT_IMPERSONATE_ADMINS: "Non puoi impersonare gli amministratori",
	INVALID_ROLE_TYPE: "Tipo di ruolo non valido",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL:
		"Non hai il permesso di aggiornare l'email degli utenti",
	PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER:
		"La password non può essere aggiornata tramite update-user. Usa invece l'endpoint set-user-password",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
