import type { AdminErrorCodesType } from "../../../types";

export const DA_DK = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "Du kan ikke banne dig selv",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"Du har ikke tilladelse til at ændre brugernes roller",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
		"Du har ikke tilladelse til at oprette brugere",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"Du har ikke tilladelse til at liste brugere",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"Du har ikke tilladelse til at liste brugernes sessioner",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
		"Du har ikke tilladelse til at banne brugere",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"Du har ikke tilladelse til at efterligne andre brugere",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"Du har ikke tilladelse til at tilbagekalde brugernes sessioner",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"Du har ikke tilladelse til at slette brugere",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"Du har ikke tilladelse til at sætte brugernes adgangskoder",
	BANNED_USER: "Du er blevet bandlyst fra denne applikation",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "Du har ikke tilladelse til at hente bruger",
	NO_DATA_TO_UPDATE: "Ingen data at opdatere",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"Du har ikke tilladelse til at opdatere brugere",
	YOU_CANNOT_REMOVE_YOURSELF: "Du kan ikke fjerne dig selv",
	YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE:
		"Du må ikke angive en ikke-eksisterende rolleværdi",
	YOU_CANNOT_IMPERSONATE_ADMINS:
		"Du kan ikke udgive dig for at være administratorer",
	INVALID_ROLE_TYPE: "Ugyldig rolletype",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL: "Du må ikke ændre brugeres e-mail",
	PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER:
		"Adgangskoden kan ikke opdateres via update-user. Brug i stedet set-user-password-endpointet",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
