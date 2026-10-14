import type { AnonymousErrorCodesType } from "../../../types";

export const ZH_HANT = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "無法創建會話",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY: "匿名用戶無法再次匿名登入",
	INVALID_EMAIL_FORMAT: "生成的電子郵件格式無效",
	FAILED_TO_DELETE_ANONYMOUS_USER: "刪除匿名用戶失敗",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS: "刪除匿名用戶會話失敗",
	USER_IS_NOT_ANONYMOUS: "用戶不是匿名用戶",
	DELETE_ANONYMOUS_USER_DISABLED: "已停用刪除匿名用戶",
} satisfies AnonymousErrorCodesType;

export const ZH_HANS = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "无法创建会话",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY: "匿名用户无法再次匿名登录",
	INVALID_EMAIL_FORMAT: "生成的电子邮件格式无效",
	FAILED_TO_DELETE_ANONYMOUS_USER: "删除匿名用户失败",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS: "删除匿名用户会话失败",
	USER_IS_NOT_ANONYMOUS: "用户不是匿名用户",
	DELETE_ANONYMOUS_USER_DISABLED: "已禁用删除匿名用户",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
