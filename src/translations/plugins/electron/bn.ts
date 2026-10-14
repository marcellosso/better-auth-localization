import type { ElectronErrorCodesType } from "../../../types";

export const BN_BD = {
	INVALID_CLIENT_ID: "ভুল ক্লায়েন্ট ID",
	STATE_MISMATCH: "state মিলছে না",
	MISSING_CODE_CHALLENGE: "code challenge অনুপস্থিত",
	INVALID_CODE_VERIFIER: "ভুল code verifier",
	MISSING_STATE: "state প্রয়োজন",
	MISSING_PKCE: "pkce প্রয়োজন",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"bn-BD": BN_BD,
} as const;
