import type { UsernameErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Ungültiger Benutzername oder Passwort",
	USERNAME_IS_ALREADY_TAKEN:
		"Benutzername ist bereits vergeben. Bitte versuchen Sie einen anderen.",
	USERNAME_TOO_SHORT: "Benutzername zu kurz",
	USERNAME_TOO_LONG: "Benutzername zu lang",
	INVALID_USERNAME: "Ungültiger Benutzername",
	INVALID_DISPLAY_USERNAME: "Ungültiger Anzeigename",
	USERNAME_IS_IMMUTABLE: "Der Benutzername kann nicht geändert werden",
} satisfies UsernameErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
