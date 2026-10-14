import type { UsernameErrorCodesType } from "../../../types";

export const DA_DK = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Ugyldigt brugernavn eller adgangskode",
	USERNAME_IS_ALREADY_TAKEN:
		"Brugernavn er allerede taget. Prøv venligst et andet.",
	USERNAME_TOO_SHORT: "Brugernavn for kort",
	USERNAME_TOO_LONG: "Brugernavn for langt",
	INVALID_USERNAME: "Ugyldigt brugernavn",
	INVALID_DISPLAY_USERNAME: "Ugyldigt visningsnavn",
	USERNAME_IS_IMMUTABLE: "Brugernavnet kan ikke ændres",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
