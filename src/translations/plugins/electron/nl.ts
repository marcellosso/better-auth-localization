import type { ElectronErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	INVALID_CLIENT_ID: "Ongeldige client-ID",
	STATE_MISMATCH: "state komt niet overeen",
	MISSING_CODE_CHALLENGE: "code challenge ontbreekt",
	INVALID_CODE_VERIFIER: "Ongeldige code verifier",
	MISSING_STATE: "state is vereist",
	MISSING_PKCE: "pkce is vereist",
} satisfies ElectronErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
