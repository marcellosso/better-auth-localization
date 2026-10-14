import type { ElectronErrorCodesType } from "../../../types";

export const RO_RO = {
	INVALID_CLIENT_ID: "ID de client invalid",
	STATE_MISMATCH: "Parametrul state nu coincide",
	MISSING_CODE_CHALLENGE: "Lipsește code challenge",
	INVALID_CODE_VERIFIER: "Code verifier invalid",
	MISSING_STATE: "Parametrul state este necesar",
	MISSING_PKCE: "Parametrul pkce este necesar",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
