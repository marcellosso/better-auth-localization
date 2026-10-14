import type { ElectronErrorCodesType } from "../../../types";

export const IT_IT = {
	INVALID_CLIENT_ID: "ID client non valido",
	STATE_MISMATCH: "Lo state non corrisponde",
	MISSING_CODE_CHALLENGE: "Code challenge mancante",
	INVALID_CODE_VERIFIER: "Code verifier non valido",
	MISSING_STATE: "Lo state è obbligatorio",
	MISSING_PKCE: "Il pkce è obbligatorio",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
