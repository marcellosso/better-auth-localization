import type { ApiKeyErrorCodesType } from "../../../types";

export const PL_PL = {
	// Api key related errors
	INVALID_METADATA_TYPE: "metadata musi być obiektem lub undefined",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"ilość uzupełnienia jest wymagana gdy podano interwał uzupełnienia",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"interwał uzupełnienia jest wymagany gdy podano ilość uzupełnienia",
	USER_BANNED: "użytkownik zbanowany",
	UNAUTHORIZED_SESSION: "nieautoryzowana lub nieprawidłowa sesja",
	KEY_NOT_FOUND: "klucz API nie znaleziony",
	KEY_DISABLED: "klucz API wyłączony",
	KEY_EXPIRED: "klucz API wygasł",
	USAGE_EXCEEDED: "klucz API przekroczył limit użycia",
	KEY_NOT_RECOVERABLE: "klucz API nie jest odzyskiwalny",
	EXPIRES_IN_IS_TOO_SMALL:
		"czas wygaśnięcia jest mniejszy niż predefiniowana wartość minimalna.",
	EXPIRES_IN_IS_TOO_LARGE:
		"czas wygaśnięcia jest większy niż predefiniowana wartość maksymalna.",
	INVALID_REMAINING: "pozostała wartość jest za duża lub za mała.",
	INVALID_PREFIX_LENGTH: "rozmiar prefiksu jest za duży lub za mały.",
	INVALID_NAME_LENGTH: "rozmiar nazwy jest za duży lub za mały.",
	METADATA_DISABLED: "metadane są wyłączone.",
	RATE_LIMIT_EXCEEDED: "limit żądań przekroczony.",
	NO_VALUES_TO_UPDATE: "brak wartości do aktualizacji.",
	KEY_DISABLED_EXPIRATION:
		"niestandardowe wartości wygaśnięcia klucza są wyłączone.",
	INVALID_API_KEY: "nieprawidłowy klucz API.",
	INVALID_USER_ID_FROM_API_KEY:
		"ID użytkownika z klucza API jest nieprawidłowe.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"pobieracz klucza API zwrócił nieprawidłowy typ. Oczekiwany: string.",
	SERVER_ONLY_PROPERTY:
		"właściwość którą próbujesz ustawić może być ustawiona tylko z instancji uwierzytelniania serwera.",
	FAILED_TO_UPDATE_API_KEY: "nie udało się zaktualizować klucza API",
	NAME_REQUIRED: "nazwa klucza API jest wymagana.",
	INVALID_REFERENCE_ID_FROM_API_KEY:
		"Identyfikator referencyjny z klucza API jest nieprawidłowy.",
	ORGANIZATION_ID_REQUIRED:
		"Identyfikator organizacji jest wymagany dla kluczy API należących do organizacji.",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"Nie jesteś członkiem organizacji, do której należy ten klucz API.",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"Nie masz uprawnień do wykonania tej czynności na kluczach API organizacji.",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"Nie znaleziono domyślnej konfiguracji klucza API.",
	ORGANIZATION_PLUGIN_REQUIRED:
		"Klucze API należące do organizacji wymagają wtyczki organizacji. Zainstaluj i skonfiguruj wtyczkę organizacji.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
