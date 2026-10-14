import type { ApiKeyErrorCodesType } from "../../../types";

export const ES_ES = {
	// Api key related errors
	INVALID_METADATA_TYPE: "metadata debe ser un objeto o undefined",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"la cantidad de recarga es requerida cuando se proporciona el intervalo de recarga",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"el intervalo de recarga es requerido cuando se proporciona la cantidad de recarga",
	USER_BANNED: "usuario baneado",
	UNAUTHORIZED_SESSION: "sesión no autorizada o inválida",
	KEY_NOT_FOUND: "clave API no encontrada",
	KEY_DISABLED: "clave API deshabilitada",
	KEY_EXPIRED: "clave API expirada",
	USAGE_EXCEEDED: "clave API ha excedido el límite de uso",
	KEY_NOT_RECOVERABLE: "clave API no es recuperable",
	EXPIRES_IN_IS_TOO_SMALL:
		"el tiempo de expiración es menor que el valor mínimo predefinido.",
	EXPIRES_IN_IS_TOO_LARGE:
		"el tiempo de expiración es mayor que el valor máximo predefinido.",
	INVALID_REMAINING:
		"el valor restante es demasiado grande o demasiado pequeño.",
	INVALID_PREFIX_LENGTH:
		"el tamaño del prefijo es demasiado grande o demasiado pequeño.",
	INVALID_NAME_LENGTH:
		"el tamaño del nombre es demasiado grande o demasiado pequeño.",
	METADATA_DISABLED: "los metadatos están deshabilitados.",
	RATE_LIMIT_EXCEEDED: "límite de solicitudes excedido.",
	NO_VALUES_TO_UPDATE: "no hay valores para actualizar.",
	KEY_DISABLED_EXPIRATION:
		"los valores personalizados de expiración de clave están deshabilitados.",
	INVALID_API_KEY: "clave API inválida.",
	INVALID_USER_ID_FROM_API_KEY: "el ID de usuario de la clave API es inválido.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"el obtenedor de clave API devolvió un tipo inválido. Esperado: cadena.",
	SERVER_ONLY_PROPERTY:
		"la propiedad que intentas establecer solo puede ser establecida desde la instancia de autenticación del servidor.",
	FAILED_TO_UPDATE_API_KEY: "fallo al actualizar la clave API",
	NAME_REQUIRED: "el nombre de la clave API es requerido.",
	INVALID_REFERENCE_ID_FROM_API_KEY:
		"El ID de referencia de la clave API no es válido.",
	ORGANIZATION_ID_REQUIRED:
		"El ID de la organización es obligatorio para las claves API que pertenecen a una organización.",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"No eres miembro de la organización propietaria de esta clave API.",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"No tienes permiso para realizar esta acción en las claves API de la organización.",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"No se encontró ninguna configuración predeterminada de clave API.",
	ORGANIZATION_PLUGIN_REQUIRED:
		"El plugin de organización es obligatorio para las claves API que pertenecen a una organización. Instala y configura el plugin de organización.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
