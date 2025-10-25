import type { ErrorCodesType } from "../types";

export const FR_FR = {
	// User related errors
	USER_NOT_FOUND: "Utilisateur non trouvé",
	FAILED_TO_CREATE_USER: "Échec de la création de l'utilisateur",
	FAILED_TO_UPDATE_USER: "Échec de la mise à jour de l'utilisateur",
	USER_ALREADY_EXISTS: "Utilisateur déjà existant",
	USER_EMAIL_NOT_FOUND: "E-mail de l'utilisateur non trouvé",
	USER_ALREADY_HAS_PASSWORD:
		"L'utilisateur a déjà un mot de passe. Veuillez le fournir pour supprimer le compte.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Utilisateur déjà existant. Utilisez un autre e-mail.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Échec de la création de la session",
	FAILED_TO_GET_SESSION: "Échec de la récupération de la session",
	SESSION_EXPIRED:
		"Session expirée. Veuillez vous authentifier à nouveau pour effectuer cette action.",

	// Authentication errors
	INVALID_PASSWORD: "Mot de passe invalide",
	INVALID_EMAIL: "E-mail invalide",
	INVALID_EMAIL_OR_PASSWORD: "E-mail ou mot de passe invalides",
	INVALID_TOKEN: "Token invalide",
	EMAIL_NOT_VERIFIED: "E-mail non vérifié",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Compte d'identification non trouvé",

	// Password related errors
	PASSWORD_TOO_SHORT: "Mot de passe trop court",
	PASSWORD_TOO_LONG: "Mot de passe trop long",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Compte déjà lié",
	PROVIDER_NOT_FOUND: "Fournisseur non trouvé",
	ID_TOKEN_NOT_SUPPORTED: "id_token non pris en charge",
	FAILED_TO_GET_USER_INFO:
		"Échec de la récupération des informations de l'utilisateur",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "L'e-mail ne peut pas être mis à jour",
	FAILED_TO_UNLINK_LAST_ACCOUNT:
		"Vous ne pouvez pas dissocier votre dernier compte",
	ACCOUNT_NOT_FOUND: "Compte non trouvé",
} satisfies ErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
