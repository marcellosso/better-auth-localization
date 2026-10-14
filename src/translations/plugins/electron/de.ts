import type { ElectronErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	INVALID_CLIENT_ID: "Ungültige Client-ID",
	STATE_MISMATCH: "state stimmt nicht überein",
	MISSING_CODE_CHALLENGE: "code challenge fehlt",
	INVALID_CODE_VERIFIER: "Ungültiger Code Verifier",
	MISSING_STATE: "state ist erforderlich",
	MISSING_PKCE: "pkce ist erforderlich",
} satisfies ElectronErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
