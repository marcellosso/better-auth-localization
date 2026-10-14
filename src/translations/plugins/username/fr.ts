import type { UsernameErrorCodesType } from "../../../types";

export const FR_FR = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Nom d'utilisateur ou mot de passe invalide",
	USERNAME_IS_ALREADY_TAKEN:
		"Le nom d'utilisateur est déjà pris. Veuillez en essayer un autre.",
	USERNAME_TOO_SHORT: "Nom d'utilisateur trop court",
	USERNAME_TOO_LONG: "Nom d'utilisateur trop long",
	INVALID_USERNAME: "Nom d'utilisateur invalide",
	INVALID_DISPLAY_USERNAME: "Nom d'affichage invalide",
	USERNAME_IS_IMMUTABLE: "Le nom d'utilisateur ne peut pas être modifié",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
