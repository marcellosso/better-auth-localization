import type { PasskeyErrorCodesType } from "../../../types";

export const ZH_HANS = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "未找到挑战",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY: "您无权注册此通行密钥",
	FAILED_TO_VERIFY_REGISTRATION: "注册验证失败",
	PASSKEY_NOT_FOUND: "未找到通行密钥",
	AUTHENTICATION_FAILED: "身份验证失败",
	UNABLE_TO_CREATE_SESSION: "无法创建会话",
	FAILED_TO_UPDATE_PASSKEY: "通行密钥更新失败",
} satisfies PasskeyErrorCodesType;

export const ZH_HANT = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "未找到挑戰",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY: "您無權註冊此通行密鑰",
	FAILED_TO_VERIFY_REGISTRATION: "註冊驗證失敗",
	PASSKEY_NOT_FOUND: "未找到通行密鑰",
	AUTHENTICATION_FAILED: "身份驗證失敗",
	UNABLE_TO_CREATE_SESSION: "無法創建會話",
	FAILED_TO_UPDATE_PASSKEY: "通行密鑰更新失敗",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
