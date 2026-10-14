import type { UsernameErrorCodesType } from "../../../types";

export const RO_RO = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Nume de utilizator sau parolă invalid",
	USERNAME_IS_ALREADY_TAKEN:
		"Numele de utilizator este deja folosit. Vă rugăm să încercați altul.",
	USERNAME_TOO_SHORT: "Numele de utilizator este prea scurt",
	USERNAME_TOO_LONG: "Numele de utilizator este prea lung",
	INVALID_USERNAME: "Nume de utilizator invalid",
	INVALID_DISPLAY_USERNAME: "Nume de afișare invalid",
	USERNAME_IS_IMMUTABLE: "Numele de utilizator nu poate fi actualizat",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
