import type { AnonymousErrorCodesType } from "../../../types";

export const PL_PL = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Nie można utworzyć sesji",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonimowi użytkownicy nie mogą ponownie zalogować się anonimowo",
	INVALID_EMAIL_FORMAT:
		"Adres email nie został wygenerowany w prawidłowym formacie",
	FAILED_TO_DELETE_ANONYMOUS_USER:
		"Nie udało się usunąć użytkownika anonimowego",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Nie udało się usunąć sesji użytkownika anonimowego",
	USER_IS_NOT_ANONYMOUS: "Użytkownik nie jest anonimowy",
	DELETE_ANONYMOUS_USER_DISABLED:
		"Usuwanie użytkowników anonimowych jest wyłączone",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
