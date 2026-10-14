import type { AdminErrorCodesType } from "../../../types";

export const SV_SE = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "Du kan inte banna dig själv",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"Du har inte behörighet att ändra användarroller",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
		"Du har inte behörighet att skapa användare",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"Du har inte behörighet att lista användare",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"Du har inte behörighet att lista användarsessioner",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
		"Du har inte behörighet att banna användare",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"Du har inte behörighet att efterlikna andra användare",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"Du har inte behörighet att återkalla användarsessioner",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"Du har inte behörighet att ta bort användare",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"Du har inte behörighet att sätta användarlösenord",
	BANNED_USER: "Du har blivit bannad från denna applikation",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "Du har inte behörighet att hämta användare",
	NO_DATA_TO_UPDATE: "Ingen data att uppdatera",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"Du har inte behörighet att uppdatera användare",
	YOU_CANNOT_REMOVE_YOURSELF: "Du kan inte ta bort dig själv",
	YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE:
		"Du får inte ange ett icke-existerande rollvärde",
	YOU_CANNOT_IMPERSONATE_ADMINS: "Du kan inte imitera administratörer",
	INVALID_ROLE_TYPE: "Ogiltig rolltyp",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL:
		"Du får inte ändra användares e-postadress",
	PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER:
		"Lösenordet kan inte uppdateras via update-user. Använd slutpunkten set-user-password istället",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
