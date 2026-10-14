import type { ElectronErrorCodesType } from "../../../types";

export const ZH_HANT = {
	INVALID_CLIENT_ID: "客戶端 ID 無效",
	STATE_MISMATCH: "state 不匹配",
	MISSING_CODE_CHALLENGE: "缺少 code challenge",
	INVALID_CODE_VERIFIER: "code verifier 無效",
	MISSING_STATE: "必須提供 state",
	MISSING_PKCE: "必須提供 pkce",
} satisfies ElectronErrorCodesType;

export const ZH_HANS = {
	INVALID_CLIENT_ID: "客户端 ID 无效",
	STATE_MISMATCH: "state 不匹配",
	MISSING_CODE_CHALLENGE: "缺少 code challenge",
	INVALID_CODE_VERIFIER: "code verifier 无效",
	MISSING_STATE: "必须提供 state",
	MISSING_PKCE: "必须提供 pkce",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
