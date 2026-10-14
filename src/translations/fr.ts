import { createTranslationObject } from "../utils/create-translation-object";

export const FR_FR = createTranslationObject("fr-FR", {
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
	INVALID_USER: "Utilisateur invalide",
	TOKEN_EXPIRED: "Jeton expiré",
	CHANGE_EMAIL_DISABLED: "Le changement d'e-mail est désactivé",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Connexion par navigation inter-sites bloquée. Cette requête semble être une attaque CSRF.",
	VERIFICATION_EMAIL_NOT_ENABLED: "L'e-mail de vérification n'est pas activé",
	EMAIL_ALREADY_VERIFIED: "L'e-mail est déjà vérifié",
	EMAIL_MISMATCH: "Les e-mails ne correspondent pas",
	SESSION_NOT_FRESH: "La session n'est pas récente",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Le compte lié existe déjà",
	INVALID_ORIGIN: "Origine invalide",
	INVALID_CALLBACK_URL: "callbackURL invalide",
	INVALID_REDIRECT_URL: "redirectURL invalide",
	INVALID_ERROR_CALLBACK_URL: "errorCallbackURL invalide",
	INVALID_NEW_USER_CALLBACK_URL: "newUserCallbackURL invalide",
	MISSING_OR_NULL_ORIGIN: "Origin manquant ou nul",
	CALLBACK_URL_REQUIRED: "callbackURL est requis",
	FAILED_TO_CREATE_VERIFICATION: "Impossible de créer la vérification",
	FIELD_NOT_ALLOWED: "Ce champ ne peut pas être défini",
	ASYNC_VALIDATION_NOT_SUPPORTED:
		"La validation asynchrone n'est pas prise en charge",
	VALIDATION_ERROR: "Erreur de validation",
	MISSING_FIELD: "Le champ est requis",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"La méthode POST nécessite que deferSessionRefresh soit activé dans la configuration de la session",
	BODY_MUST_BE_AN_OBJECT: "Le corps de la requête doit être un objet",
	PASSWORD_ALREADY_SET: "L'utilisateur a déjà un mot de passe défini",
});

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
