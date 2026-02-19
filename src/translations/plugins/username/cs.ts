import type { UsernameErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Nesprávné uživatelské jméno nebo heslo",
	USERNAME_IS_ALREADY_TAKEN:
		"Uživatelské jméno už je zabrané. Použij prosím jiné",
	USERNAME_TOO_SHORT: "Uživatelské jméno je příliš krátké",
	USERNAME_TOO_LONG: "Uživatelské jméno je příliš dlouhé",
	INVALID_USERNAME: "Uživatelské jméno je ve špatném formátu",
	INVALID_DISPLAY_USERNAME: "Uživatelské viditelné jméno je ve špatném formátu",
} satisfies UsernameErrorCodesType;
export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL,
	USERNAME_IS_ALREADY_TAKEN:
		"Uživatelské jméno už je zabrané. Použijte prosím jiné",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"cs": CS_CZ_INFORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
