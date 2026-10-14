import type { AnonymousErrorCodesType } from "../../../types";

export const FR_FR = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Impossible de créer la session",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Les utilisateurs anonymes ne peuvent pas se connecter à nouveau de manière anonyme",
	INVALID_EMAIL_FORMAT: "L'e-mail n'a pas été généré dans un format valide",
	FAILED_TO_DELETE_ANONYMOUS_USER:
		"Échec de la suppression de l'utilisateur anonyme",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Échec de la suppression des sessions de l'utilisateur anonyme",
	USER_IS_NOT_ANONYMOUS: "L'utilisateur n'est pas anonyme",
	DELETE_ANONYMOUS_USER_DISABLED:
		"La suppression des utilisateurs anonymes est désactivée",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
