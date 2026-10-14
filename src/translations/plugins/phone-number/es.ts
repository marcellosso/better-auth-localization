import type { PhoneNumberErrorCodesType } from "../../../types";

export const ES_ES = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Número de teléfono inválido",
	PHONE_NUMBER_EXIST: "El número de teléfono ya existe",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Número de teléfono o contraseña inválidos",
	UNEXPECTED_ERROR: "Error inesperado",
	OTP_NOT_FOUND: "Código de verificación no encontrado",
	OTP_EXPIRED: "Código de verificación expirado",
	INVALID_OTP: "Código de verificación inválido",
	PHONE_NUMBER_NOT_VERIFIED: "Número de teléfono no verificado",
	PHONE_NUMBER_NOT_EXIST: "El número de teléfono no está registrado",
	PHONE_NUMBER_CANNOT_BE_UPDATED:
		"El número de teléfono no se puede actualizar",
	SEND_OTP_NOT_IMPLEMENTED: "sendOTP no está implementado",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
