import type { ElectronErrorCodesType } from "../../../types";

export const PL_PL = {
	INVALID_CLIENT_ID: "Nieprawidłowy identyfikator klienta",
	STATE_MISMATCH: "Niezgodność parametru state",
	MISSING_CODE_CHALLENGE: "Brak code challenge",
	INVALID_CODE_VERIFIER: "Nieprawidłowy code verifier",
	MISSING_STATE: "Parametr state jest wymagany",
	MISSING_PKCE: "Parametr pkce jest wymagany",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
