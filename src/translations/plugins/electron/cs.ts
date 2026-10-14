import type { ElectronErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	INVALID_CLIENT_ID: "Neplatné ID klienta",
	STATE_MISMATCH: "Parametr state se neshoduje",
	MISSING_CODE_CHALLENGE: "Chybí code challenge",
	INVALID_CODE_VERIFIER: "Neplatný code verifier",
	MISSING_STATE: "Parametr state je povinný",
	MISSING_PKCE: "Parametr pkce je povinný",
} satisfies ElectronErrorCodesType;

export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL,
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"cs-CZ": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
} as const;
