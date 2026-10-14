import type { ElectronErrorCodesType } from "../../../types";

export const SV_SE = {
	INVALID_CLIENT_ID: "Ogiltigt klient-ID",
	STATE_MISMATCH: "state matchar inte",
	MISSING_CODE_CHALLENGE: "code challenge saknas",
	INVALID_CODE_VERIFIER: "Ogiltig code verifier",
	MISSING_STATE: "state krävs",
	MISSING_PKCE: "pkce krävs",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
