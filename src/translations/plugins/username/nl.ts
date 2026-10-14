import type { UsernameErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Ongeldige gebruikersnaam of wachtwoord",
	USERNAME_IS_ALREADY_TAKEN:
		"Gebruikersnaam is al in gebruik. Probeer een andere.",
	USERNAME_TOO_SHORT: "Gebruikersnaam te kort",
	USERNAME_TOO_LONG: "Gebruikersnaam te lang",
	INVALID_USERNAME: "Ongeldige gebruikersnaam",
	INVALID_DISPLAY_USERNAME: "Ongeldige weergavenaam",
	USERNAME_IS_IMMUTABLE: "Gebruikersnaam kan niet worden gewijzigd",
} satisfies UsernameErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
