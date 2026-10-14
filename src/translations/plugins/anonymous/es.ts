import type { AnonymousErrorCodesType } from "../../../types";

export const ES_ES = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "No se pudo crear la sesión",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Los usuarios anónimos no pueden iniciar sesión nuevamente como anónimos",
	INVALID_EMAIL_FORMAT: "El email no se generó en un formato válido",
	FAILED_TO_DELETE_ANONYMOUS_USER: "Error al eliminar el usuario anónimo",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Error al eliminar las sesiones del usuario anónimo",
	USER_IS_NOT_ANONYMOUS: "El usuario no es anónimo",
	DELETE_ANONYMOUS_USER_DISABLED:
		"La eliminación de usuarios anónimos está deshabilitada",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
