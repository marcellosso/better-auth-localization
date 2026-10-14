import { createTranslationObject } from "../utils/create-translation-object";

export const ES_ES = createTranslationObject("es-ES", {
	// User related errors
	USER_NOT_FOUND: "Usuario no encontrado",
	FAILED_TO_CREATE_USER: "Error al crear usuario",
	FAILED_TO_UPDATE_USER: "Error al actualizar usuario",
	USER_ALREADY_EXISTS: "Usuario ya existe",
	USER_EMAIL_NOT_FOUND: "Email del usuario no encontrado",
	USER_ALREADY_HAS_PASSWORD:
		"El usuario ya tiene una contraseña. Proporcione esa contraseña para eliminar la cuenta.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "Usuario ya existe. Use otro email.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Error al crear sesión",
	FAILED_TO_GET_SESSION: "Error al obtener sesión",
	SESSION_EXPIRED:
		"Sesión expirada. Inicie sesión nuevamente para realizar esta acción.",

	// Authentication errors
	INVALID_PASSWORD: "Contraseña inválida",
	INVALID_EMAIL: "Email inválido",
	INVALID_EMAIL_OR_PASSWORD: "Email o contraseña inválidos",
	INVALID_TOKEN: "Token inválido",
	EMAIL_NOT_VERIFIED: "Email no verificado",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Cuenta de credenciales no encontrada",

	// Password related errors
	PASSWORD_TOO_SHORT: "Contraseña demasiado corta",
	PASSWORD_TOO_LONG: "Contraseña demasiado larga",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Cuenta ya vinculada",
	PROVIDER_NOT_FOUND: "Proveedor no encontrado",
	ID_TOKEN_NOT_SUPPORTED: "id_token no soportado",
	FAILED_TO_GET_USER_INFO: "Error al obtener información del usuario",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "Email no puede ser actualizado",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "No puede desvincular su última cuenta",
	ACCOUNT_NOT_FOUND: "Cuenta no encontrada",
	INVALID_USER: "Usuario no válido",
	TOKEN_EXPIRED: "Token expirado",
	CHANGE_EMAIL_DISABLED: "El cambio de email está deshabilitado",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Inicio de sesión por navegación entre sitios bloqueado. Esta solicitud parece ser un ataque CSRF.",
	VERIFICATION_EMAIL_NOT_ENABLED: "El email de verificación no está habilitado",
	EMAIL_ALREADY_VERIFIED: "El email ya está verificado",
	EMAIL_MISMATCH: "Los emails no coinciden",
	SESSION_NOT_FRESH: "La sesión no es reciente",
	LINKED_ACCOUNT_ALREADY_EXISTS: "La cuenta vinculada ya existe",
	INVALID_ORIGIN: "Origen no válido",
	INVALID_CALLBACK_URL: "callbackURL no válida",
	INVALID_REDIRECT_URL: "redirectURL no válida",
	INVALID_ERROR_CALLBACK_URL: "errorCallbackURL no válida",
	INVALID_NEW_USER_CALLBACK_URL: "newUserCallbackURL no válida",
	MISSING_OR_NULL_ORIGIN: "Origin ausente o nulo",
	CALLBACK_URL_REQUIRED: "callbackURL es obligatoria",
	FAILED_TO_CREATE_VERIFICATION: "No se pudo crear la verificación",
	FIELD_NOT_ALLOWED: "No se permite establecer este campo",
	ASYNC_VALIDATION_NOT_SUPPORTED: "La validación asíncrona no es compatible",
	VALIDATION_ERROR: "Error de validación",
	MISSING_FIELD: "El campo es obligatorio",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"El método POST requiere que deferSessionRefresh esté habilitado en la configuración de la sesión",
	BODY_MUST_BE_AN_OBJECT: "El cuerpo debe ser un objeto",
	PASSWORD_ALREADY_SET: "El usuario ya tiene una contraseña establecida",
});

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
