import type { UsernameErrorCodesType } from "../../../types";

export const IT_IT = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Nome utente o password non validi",
	USERNAME_IS_ALREADY_TAKEN:
		"Il nome utente è già stato preso. Prova con un altro.",
	USERNAME_TOO_SHORT: "Nome utente troppo corto",
	USERNAME_TOO_LONG: "Nome utente troppo lungo",
	INVALID_USERNAME: "Nome utente non valido",
	INVALID_DISPLAY_USERNAME: "Nome visualizzato non valido",
	USERNAME_IS_IMMUTABLE: "Il nome utente non può essere aggiornato",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
