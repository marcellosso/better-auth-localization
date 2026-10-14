import type { AdminErrorCodesType } from "../../../types";

export const PL_PL = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "Nie możesz zbanować siebie",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"Nie masz uprawnień do zmiany ról użytkowników",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
		"Nie masz uprawnień do tworzenia użytkowników",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"Nie masz uprawnień do wyświetlania listy użytkowników",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"Nie masz uprawnień do wyświetlania sesji użytkowników",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
		"Nie masz uprawnień do banowania użytkowników",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"Nie masz uprawnień do podszywania się pod innych użytkowników",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"Nie masz uprawnień do cofania sesji użytkowników",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"Nie masz uprawnień do usuwania użytkowników",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"Nie masz uprawnień do ustawiania haseł użytkowników",
	BANNED_USER: "Zostałeś zbanowany z tej aplikacji",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER:
		"Nie masz uprawnień do pobierania użytkownika",
	NO_DATA_TO_UPDATE: "Brak danych do aktualizacji",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"Nie masz uprawnień do aktualizowania użytkowników",
	YOU_CANNOT_REMOVE_YOURSELF: "Nie możesz usunąć siebie",
	YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE:
		"Nie masz uprawnień do ustawienia nieistniejącej wartości roli",
	YOU_CANNOT_IMPERSONATE_ADMINS: "Nie możesz podszywać się pod administratorów",
	INVALID_ROLE_TYPE: "Nieprawidłowy typ roli",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL:
		"Nie masz uprawnień do zmiany adresu email użytkowników",
	PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER:
		"Hasła nie można zmienić przez update-user. Użyj zamiast tego endpointu set-user-password",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
