import type { ElectronErrorCodesType } from "../../../types";

export const JA_JP = {
	INVALID_CLIENT_ID: "無効なクライアントIDです",
	STATE_MISMATCH: "state が一致しません",
	MISSING_CODE_CHALLENGE: "code challenge がありません",
	INVALID_CODE_VERIFIER: "無効な code verifier です",
	MISSING_STATE: "state は必須です",
	MISSING_PKCE: "pkce は必須です",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
