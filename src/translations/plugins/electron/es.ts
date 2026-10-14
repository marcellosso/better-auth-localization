import type { ElectronErrorCodesType } from "../../../types";

export const ES_ES = {
	INVALID_CLIENT_ID: "ID de cliente no válido",
	STATE_MISMATCH: "El state no coincide",
	MISSING_CODE_CHALLENGE: "Falta el code challenge",
	INVALID_CODE_VERIFIER: "Code verifier no válido",
	MISSING_STATE: "El state es obligatorio",
	MISSING_PKCE: "El pkce es obligatorio",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
