import type { UsernameErrorCodesType } from "../../../types";

export const ZH_HANS = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "无效的用户名或密码",
	USERNAME_IS_ALREADY_TAKEN: "用户名已被使用。请尝试其他用户名。",
	USERNAME_TOO_SHORT: "用户名太短",
	USERNAME_TOO_LONG: "用户名太长",
	INVALID_USERNAME: "无效的用户名",
	INVALID_DISPLAY_USERNAME: "无效的显示名称",
} satisfies UsernameErrorCodesType;

export const ZH_HANT = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "無效的用戶名或密碼",
	USERNAME_IS_ALREADY_TAKEN: "用戶名已被使用。請嘗試其他用戶名。",
	USERNAME_TOO_SHORT: "用戶名太短",
	USERNAME_TOO_LONG: "用戶名太長",
	INVALID_USERNAME: "無效的用戶名",
	INVALID_DISPLAY_USERNAME: "無效的顯示名稱",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
