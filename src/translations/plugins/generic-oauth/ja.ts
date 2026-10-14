import type { GenericOAuthErrorCodesType } from "../../../types";

export const JA_JP = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "無効なOAuth設定",
	TOKEN_URL_NOT_FOUND: "OAuth の設定が無効です。トークンURLが見つかりません。",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
