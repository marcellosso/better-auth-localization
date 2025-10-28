import type { AdminErrorCodesType } from "../../../types";

export const RO_RO = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "Nu vă puteți bana singur",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"Nu aveți permisiunea să schimbați rolurile utilizatorilor",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
		"Nu aveți permisiunea să creați utilizatori",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"Nu aveți permisiunea să listați utilizatorii",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"Nu aveți permisiunea să listați sesiunile utilizatorilor",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
		"Nu aveți permisiunea să banați utilizatori",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"Nu aveți permisiunea să vă prefaceți că sunteți alți utilizatori",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"Nu aveți permisiunea să revocați sesiunile utilizatorilor",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"Nu aveți permisiunea să ștergeți utilizatori",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"Nu aveți permisiunea să setați parolele utilizatorilor",
	BANNED_USER: "Ați fost banat din această aplicație",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER:
		"Nu aveți permisiunea să obțineți utilizator",
	NO_DATA_TO_UPDATE: "Nu există date de actualizat",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"Nu aveți permisiunea să actualizați utilizatori",
	YOU_CANNOT_REMOVE_YOURSELF: "Nu vă puteți elimina singur",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
