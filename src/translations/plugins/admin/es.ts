import type { AdminErrorCodesType } from "../../../types";

export const ES_ES = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "No puedes banearte a ti mismo",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"No tienes permiso para cambiar los roles de los usuarios",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "No tienes permiso para crear usuarios",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "No tienes permiso para listar usuarios",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"No tienes permiso para listar sesiones de usuarios",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "No tienes permiso para banear usuarios",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"No tienes permiso para suplantar a otros usuarios",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"No tienes permiso para revocar sesiones de usuarios",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"No tienes permiso para eliminar usuarios",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"No tienes permiso para establecer contraseñas de usuarios",
	BANNED_USER: "Has sido baneado de esta aplicación",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "No tienes permiso para obtener usuario",
	NO_DATA_TO_UPDATE: "No hay datos para actualizar",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"No tienes permiso para actualizar usuarios",
	YOU_CANNOT_REMOVE_YOURSELF: "No puedes eliminarte a ti mismo",
	YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE:
		"No tienes permiso para establecer un valor de rol inexistente",
	YOU_CANNOT_IMPERSONATE_ADMINS: "No puedes suplantar a administradores",
	INVALID_ROLE_TYPE: "Tipo de rol no válido",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL:
		"No tienes permiso para actualizar el email de los usuarios",
	PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER:
		"La contraseña no se puede actualizar mediante update-user. Usa el endpoint set-user-password",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
