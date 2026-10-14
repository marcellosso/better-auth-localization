import type { ElectronErrorCodesType } from "../../../types";

export const PT_BR = {
	INVALID_CLIENT_ID: "ID de cliente inválido",
	STATE_MISMATCH: "Estado (state) não corresponde",
	MISSING_CODE_CHALLENGE: "Code challenge ausente",
	INVALID_CODE_VERIFIER: "Code verifier inválido",
	MISSING_STATE: "O state é obrigatório",
	MISSING_PKCE: "O pkce é obrigatório",
} satisfies ElectronErrorCodesType;

export const PT_PT = {
	INVALID_CLIENT_ID: "ID de cliente inválido",
	STATE_MISMATCH: "Estado (state) não corresponde",
	MISSING_CODE_CHALLENGE: "Code challenge ausente",
	INVALID_CODE_VERIFIER: "Code verifier inválido",
	MISSING_STATE: "O state é obrigatório",
	MISSING_PKCE: "O pkce é obrigatório",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"pt-BR": PT_BR,
	"pt-PT": PT_PT,
} as const;
