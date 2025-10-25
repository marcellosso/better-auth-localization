import type { ErrorCodesType } from "../types";

export const PL_PL = {
	// User related errors
	USER_NOT_FOUND: "Nie znaleziono użytkownika",
	FAILED_TO_CREATE_USER: "Wystąpił problem podczas tworzenia użytkownika",
	FAILED_TO_UPDATE_USER: "Wystąpił problem podczas aktulizacji użytkownika",
	USER_ALREADY_EXISTS: "Użytkownik już istnieje",
	USER_EMAIL_NOT_FOUND: "Nie znaleziono adresu email",
	USER_ALREADY_HAS_PASSWORD: "Użytkownik już posiada ustawione hasło",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Użytkownik już istnieje. Użyj innego adresu email.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Wystąpił problem podczas tworzenia sesji",
	FAILED_TO_GET_SESSION: "Nie można przetworzyć sesji",
	SESSION_EXPIRED:
		"Sesja wygasła. Aby wykonać tę czynność, należy dokonać ponownego uwierzytelnienia.",

	// Authentication errors
	INVALID_PASSWORD: "Niepoprawne hasło",
	INVALID_EMAIL: "Niepoprawny adres email",
	INVALID_EMAIL_OR_PASSWORD: "Adres email lub hasło są niepoprawne",
	INVALID_TOKEN: "Niepoprawny token",
	EMAIL_NOT_VERIFIED: "Email nie został zweryfikowany",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Nie posiadasz żadnego hasła",

	// Password related errors
	PASSWORD_TOO_SHORT: "Hasło jest za krótkie",
	PASSWORD_TOO_LONG: "Hasło jest za długie",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "To konto już jest połączone",
	PROVIDER_NOT_FOUND: "Nie znaleziono dostawcy",
	ID_TOKEN_NOT_SUPPORTED: "id_token nie jest obsługiwany",
	FAILED_TO_GET_USER_INFO:
		"Wystąpił błąd podczas pobierania informacji o użytkowniku",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "Nie można zaktulizować adresu email",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Nie możesz odłączyć swojego ostatniego konta",
	ACCOUNT_NOT_FOUND: "Nie znaleziono konta",
} satisfies ErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
