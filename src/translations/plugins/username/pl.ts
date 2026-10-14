import type { UsernameErrorCodesType } from "../../../types";

export const PL_PL = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Nieprawidłowa nazwa użytkownika lub hasło",
	USERNAME_IS_ALREADY_TAKEN:
		"Nazwa użytkownika jest już zajęta. Spróbuj innej.",
	USERNAME_TOO_SHORT: "Nazwa użytkownika za krótka",
	USERNAME_TOO_LONG: "Nazwa użytkownika za długa",
	INVALID_USERNAME: "Nieprawidłowa nazwa użytkownika",
	INVALID_DISPLAY_USERNAME: "Nieprawidłowa nazwa wyświetlana",
	USERNAME_IS_IMMUTABLE: "Nazwy użytkownika nie można zmienić",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
