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
	PREVIOUSLY_REGISTERED: "之前已註冊",
	REGISTRATION_CANCELLED: "註冊已取消",
	AUTH_CANCELLED: "認證已取消",
	SESSION_REQUIRED: "註冊通行密鑰需要已驗證的會話",
	RESOLVE_USER_REQUIRED:
		"當 requireSession 為 false 時，註冊通行密鑰需要已驗證的會話或 resolveUser 回調",
	RESOLVED_USER_INVALID: "解析出的用戶無效",
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
	PREVIOUSLY_REGISTERED: "之前已注册",
	REGISTRATION_CANCELLED: "注册已取消",
	AUTH_CANCELLED: "认证已取消",
	SESSION_REQUIRED: "注册通行密钥需要已验证的会话",
	RESOLVE_USER_REQUIRED:
		"当 requireSession 为 false 时，注册通行密钥需要已验证的会话或 resolveUser 回调",
	RESOLVED_USER_INVALID: "解析出的用户无效",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
