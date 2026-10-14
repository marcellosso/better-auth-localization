import type { UsernameErrorCodesType } from "../../../types";

export const ES_ES = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Nombre de usuario o contraseña inválidos",
	USERNAME_IS_ALREADY_TAKEN:
		"El nombre de usuario ya está en uso. Por favor, prueba con otro.",
	USERNAME_TOO_SHORT: "Nombre de usuario muy corto",
	USERNAME_TOO_LONG: "Nombre de usuario muy largo",
	INVALID_USERNAME: "Nombre de usuario inválido",
	INVALID_DISPLAY_USERNAME: "Nombre de visualización inválido",
	USERNAME_IS_IMMUTABLE: "El nombre de usuario no se puede actualizar",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
