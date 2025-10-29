import type { PasskeyErrorCodesType } from "../../../types";

export const ES_ES = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Desafío no encontrado",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"No tienes permiso para registrar esta clave de acceso",
	FAILED_TO_VERIFY_REGISTRATION: "Error al verificar el registro",
	PASSKEY_NOT_FOUND: "Clave de acceso no encontrada",
	AUTHENTICATION_FAILED: "Error de autenticación",
	UNABLE_TO_CREATE_SESSION: "No se pudo crear la sesión",
	FAILED_TO_UPDATE_PASSKEY: "Error al actualizar la clave de acceso",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
