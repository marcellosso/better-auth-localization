import { createTranslationObject } from "../utils/create-translation-object";

export const ZH_HANT = createTranslationObject("zh-Hant", {
	// User related errors
	USER_NOT_FOUND: "找不到用戶",
	FAILED_TO_CREATE_USER: "創建用戶失敗",
	FAILED_TO_UPDATE_USER: "更新用戶失敗",
	USER_ALREADY_EXISTS: "用戶已存在",
	USER_EMAIL_NOT_FOUND: "找不到用戶的電子郵件",
	USER_ALREADY_HAS_PASSWORD: "用戶已設置密碼。請提供該密碼以刪除帳戶。",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "用戶已存在。請使用其他電子郵件。",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "創建會話失敗",
	FAILED_TO_GET_SESSION: "獲取會話失敗",
	SESSION_EXPIRED: "會話已過期。請重新登錄以執行此操作。",

	// Authentication errors
	INVALID_PASSWORD: "密碼無效",
	INVALID_EMAIL: "電子郵件無效",
	INVALID_EMAIL_OR_PASSWORD: "電子郵件或密碼無效",
	INVALID_TOKEN: "令牌無效",
	EMAIL_NOT_VERIFIED: "電子郵件未驗證",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "找不到憑證帳戶",

	// Password related errors
	PASSWORD_TOO_SHORT: "密碼過短",
	PASSWORD_TOO_LONG: "密碼過長",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "帳戶已連結",
	PROVIDER_NOT_FOUND: "找不到提供者",
	ID_TOKEN_NOT_SUPPORTED: "不支援 id_token",
	FAILED_TO_GET_USER_INFO: "獲取用戶資訊失敗",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "無法更新電子郵件",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "無法解除最後一個帳戶的連結",
	ACCOUNT_NOT_FOUND: "找不到帳戶",
	INVALID_USER: "用戶無效",
	TOKEN_EXPIRED: "令牌已過期",
	CHANGE_EMAIL_DISABLED: "已停用更改電子郵件",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"跨站導航登錄已被阻止。此請求疑似 CSRF 攻擊。",
	VERIFICATION_EMAIL_NOT_ENABLED: "未啟用驗證電子郵件",
	EMAIL_ALREADY_VERIFIED: "電子郵件已驗證",
	EMAIL_MISMATCH: "電子郵件不匹配",
	SESSION_NOT_FRESH: "會話不是最新的",
	LINKED_ACCOUNT_ALREADY_EXISTS: "已存在關聯帳戶",
	INVALID_ORIGIN: "來源無效",
	INVALID_CALLBACK_URL: "callbackURL 無效",
	INVALID_REDIRECT_URL: "redirectURL 無效",
	INVALID_ERROR_CALLBACK_URL: "errorCallbackURL 無效",
	INVALID_NEW_USER_CALLBACK_URL: "newUserCallbackURL 無效",
	MISSING_OR_NULL_ORIGIN: "缺少 Origin 或 Origin 為空",
	CALLBACK_URL_REQUIRED: "必須提供 callbackURL",
	FAILED_TO_CREATE_VERIFICATION: "創建驗證失敗",
	FIELD_NOT_ALLOWED: "不允許設置該欄位",
	ASYNC_VALIDATION_NOT_SUPPORTED: "不支援非同步驗證",
	VALIDATION_ERROR: "驗證錯誤",
	MISSING_FIELD: "此欄位為必填項",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"POST 方法需要在會話配置中啟用 deferSessionRefresh",
	BODY_MUST_BE_AN_OBJECT: "Body 必須是物件",
	PASSWORD_ALREADY_SET: "用戶已設置密碼",
});

export const ZH_HANS = createTranslationObject("zh-Hans", {
	// User related errors
	USER_NOT_FOUND: "找不到此用户",
	FAILED_TO_CREATE_USER: "创建用户失败",
	FAILED_TO_UPDATE_USER: "更新用户失败",
	USER_ALREADY_EXISTS: "此用户已存在",
	USER_EMAIL_NOT_FOUND: "找不到此用户的电子邮件",
	USER_ALREADY_HAS_PASSWORD: "此用户已设置密码。请提供该密码以删除账户。",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "此用户已存在。请使用其他电子邮件。",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "创建会话失败",
	FAILED_TO_GET_SESSION: "获取会话失败",
	SESSION_EXPIRED: "会话已过期。请重新登录以执行此操作。",

	// Authentication errors
	INVALID_PASSWORD: "密码无效",
	INVALID_EMAIL: "电子邮件无效",
	INVALID_EMAIL_OR_PASSWORD: "电子邮件或密码无效",
	INVALID_TOKEN: "令牌无效",
	EMAIL_NOT_VERIFIED: "电子邮件未验证",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "找不到凭证账户",

	// Password related errors
	PASSWORD_TOO_SHORT: "密码过短",
	PASSWORD_TOO_LONG: "密码过长",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "账户已链接",
	PROVIDER_NOT_FOUND: "找不到服务提供商",
	ID_TOKEN_NOT_SUPPORTED: "不支持 id_token",
	FAILED_TO_GET_USER_INFO: "获取用户信息失败",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "无法更新电子邮件",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "无法解除最后一个账户的链接",
	ACCOUNT_NOT_FOUND: "找不到账户",
	INVALID_USER: "用户无效",
	TOKEN_EXPIRED: "令牌已过期",
	CHANGE_EMAIL_DISABLED: "已禁用更改电子邮件",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"跨站导航登录已被阻止。此请求疑似 CSRF 攻击。",
	VERIFICATION_EMAIL_NOT_ENABLED: "未启用验证电子邮件",
	EMAIL_ALREADY_VERIFIED: "电子邮件已验证",
	EMAIL_MISMATCH: "电子邮件不匹配",
	SESSION_NOT_FRESH: "会话不是最新的",
	LINKED_ACCOUNT_ALREADY_EXISTS: "已存在关联账户",
	INVALID_ORIGIN: "来源无效",
	INVALID_CALLBACK_URL: "callbackURL 无效",
	INVALID_REDIRECT_URL: "redirectURL 无效",
	INVALID_ERROR_CALLBACK_URL: "errorCallbackURL 无效",
	INVALID_NEW_USER_CALLBACK_URL: "newUserCallbackURL 无效",
	MISSING_OR_NULL_ORIGIN: "缺少 Origin 或 Origin 为空",
	CALLBACK_URL_REQUIRED: "必须提供 callbackURL",
	FAILED_TO_CREATE_VERIFICATION: "创建验证失败",
	FIELD_NOT_ALLOWED: "不允许设置该字段",
	ASYNC_VALIDATION_NOT_SUPPORTED: "不支持异步验证",
	VALIDATION_ERROR: "验证错误",
	MISSING_FIELD: "此字段为必填项",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"POST 方法需要在会话配置中启用 deferSessionRefresh",
	BODY_MUST_BE_AN_OBJECT: "Body 必须是对象",
	PASSWORD_ALREADY_SET: "用户已设置密码",
});

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
