import type { UsernameErrorCodesType } from "../../../types";

export const SV_SE = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Ogiltigt användarnamn eller lösenord",
	USERNAME_IS_ALREADY_TAKEN:
		"Användarnamn är redan taget. Försök med ett annat.",
	USERNAME_TOO_SHORT: "Användarnamn för kort",
	USERNAME_TOO_LONG: "Användarnamn för långt",
	INVALID_USERNAME: "Ogiltigt användarnamn",
	INVALID_DISPLAY_USERNAME: "Ogiltigt visningsnamn",
	USERNAME_IS_IMMUTABLE: "Användarnamnet kan inte ändras",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
