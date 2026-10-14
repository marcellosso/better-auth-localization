import type { GenericOAuthErrorCodesType } from "../../../types";

export const ZH_HANT = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "無效的OAuth配置",
	TOKEN_URL_NOT_FOUND: "OAuth 配置無效。找不到令牌 URL。",
} satisfies GenericOAuthErrorCodesType;

export const ZH_HANS = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "无效的OAuth配置",
	TOKEN_URL_NOT_FOUND: "OAuth 配置无效。找不到令牌 URL。",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
