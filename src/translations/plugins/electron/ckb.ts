import type { ElectronErrorCodesType } from "../../../types";

export const CKB_IQ = {
	INVALID_CLIENT_ID: "ناسنامەی کڵاینت نادروستە",
	STATE_MISMATCH: "state یەک ناگرێتەوە",
	MISSING_CODE_CHALLENGE: "code challenge نییە",
	INVALID_CODE_VERIFIER: "code verifier نادروستە",
	MISSING_STATE: "state پێویستە",
	MISSING_PKCE: "PKCE پێویستە",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
