import type { PasskeyErrorCodesType } from "../../../types";

export const PL_PL = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Wyzwanie nie znalezione",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Nie masz uprawnień do rejestracji tego klucza dostępu",
	FAILED_TO_VERIFY_REGISTRATION: "Weryfikacja rejestracji nie powiodła się",
	PASSKEY_NOT_FOUND: "Klucz dostępu nie znaleziony",
	AUTHENTICATION_FAILED: "Uwierzytelnienie nie powiodło się",
	UNABLE_TO_CREATE_SESSION: "Nie można utworzyć sesji",
	FAILED_TO_UPDATE_PASSKEY: "Aktualizacja klucza dostępu nie powiodła się",
	PREVIOUSLY_REGISTERED: "Wcześniej zarejestrowano",
	REGISTRATION_CANCELLED: "Rejestracja została anulowana",
	AUTH_CANCELLED: "Uwierzytelnianie zostało anulowane",
	SESSION_REQUIRED: "Rejestracja klucza dostępu wymaga uwierzytelnionej sesji",
	RESOLVE_USER_REQUIRED:
		"Rejestracja klucza dostępu wymaga uwierzytelnionej sesji lub wywołania zwrotnego resolveUser, gdy requireSession ma wartość false",
	RESOLVED_USER_INVALID: "Rozpoznany użytkownik jest nieprawidłowy",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
