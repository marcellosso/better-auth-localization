import { createTranslationObject } from "../utils/create-translation-object";

export const PL_PL = createTranslationObject("pl-PL", {
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
	INVALID_USER: "Nieprawidłowy użytkownik",
	TOKEN_EXPIRED: "Token wygasł",
	CHANGE_EMAIL_DISABLED: "Zmiana adresu email jest wyłączona",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Logowanie przez nawigację między witrynami zostało zablokowane. To żądanie wygląda na atak CSRF.",
	VERIFICATION_EMAIL_NOT_ENABLED: "Weryfikacja przez email nie jest włączona",
	EMAIL_ALREADY_VERIFIED: "Adres email został już zweryfikowany",
	EMAIL_MISMATCH: "Adresy email nie są zgodne",
	SESSION_NOT_FRESH: "Sesja nie jest świeża",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Połączone konto już istnieje",
	INVALID_ORIGIN: "Nieprawidłowe źródło żądania",
	INVALID_CALLBACK_URL: "Nieprawidłowy callbackURL",
	INVALID_REDIRECT_URL: "Nieprawidłowy redirectURL",
	INVALID_ERROR_CALLBACK_URL: "Nieprawidłowy errorCallbackURL",
	INVALID_NEW_USER_CALLBACK_URL: "Nieprawidłowy newUserCallbackURL",
	MISSING_OR_NULL_ORIGIN: "Brakujący lub pusty nagłówek Origin",
	CALLBACK_URL_REQUIRED: "callbackURL jest wymagany",
	FAILED_TO_CREATE_VERIFICATION: "Nie udało się utworzyć weryfikacji",
	FIELD_NOT_ALLOWED: "Ustawienie tego pola jest niedozwolone",
	ASYNC_VALIDATION_NOT_SUPPORTED:
		"Walidacja asynchroniczna nie jest obsługiwana",
	VALIDATION_ERROR: "Błąd walidacji",
	MISSING_FIELD: "Pole jest wymagane",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"Metoda POST wymaga włączenia deferSessionRefresh w konfiguracji sesji",
	BODY_MUST_BE_AN_OBJECT: "Treść żądania musi być obiektem",
	PASSWORD_ALREADY_SET: "Użytkownik ma już ustawione hasło",
});

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
