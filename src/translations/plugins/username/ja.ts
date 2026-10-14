import type { UsernameErrorCodesType } from "../../../types";

export const JA_JP = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "無効なユーザー名またはパスワード",
	USERNAME_IS_ALREADY_TAKEN:
		"ユーザー名は既に使用されています。別の名前をお試しください。",
	USERNAME_TOO_SHORT: "ユーザー名が短すぎます",
	USERNAME_TOO_LONG: "ユーザー名が長すぎます",
	INVALID_USERNAME: "無効なユーザー名",
	INVALID_DISPLAY_USERNAME: "無効な表示名",
	USERNAME_IS_IMMUTABLE: "ユーザー名は更新できません",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
