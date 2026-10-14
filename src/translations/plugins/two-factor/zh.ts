import type { TwoFactorErrorCodesType } from "../../../types";

export const ZH_HANS = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "一次性密码未启用",
	OTP_HAS_EXPIRED: "一次性密码已过期",
	TOTP_NOT_ENABLED: "基于时间的一次性密码未启用",
	TWO_FACTOR_NOT_ENABLED: "双因素认证未启用",
	BACKUP_CODES_NOT_ENABLED: "备用代码未启用",
	INVALID_BACKUP_CODE: "无效的备用代码",
	INVALID_CODE: "无效的代码",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "尝试次数过多。请请求新代码。",
	INVALID_TWO_FACTOR_COOKIE: "无效的双因素认证Cookie",
	OTP_NOT_CONFIGURED: "OTP 不可用",
	TOTP_ALREADY_ENABLED: "TOTP 已啟用",
	TOTP_NOT_CONFIGURED: "TOTP 不可用",
	ACCOUNT_TEMPORARILY_LOCKED:
		"驗證失敗次數過多，您的帳戶已被暫時鎖定。請稍後再試。",
} satisfies TwoFactorErrorCodesType;

export const ZH_HANT = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "一次性密碼未啟用",
	OTP_HAS_EXPIRED: "一次性密碼已過期",
	TOTP_NOT_ENABLED: "基於時間的一次性密碼未啟用",
	TWO_FACTOR_NOT_ENABLED: "雙因素認證未啟用",
	BACKUP_CODES_NOT_ENABLED: "備用代碼未啟用",
	INVALID_BACKUP_CODE: "無效的備用代碼",
	INVALID_CODE: "無效的代碼",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "嘗試次數過多。請請求新代碼。",
	INVALID_TWO_FACTOR_COOKIE: "無效的雙因素認證Cookie",
	OTP_NOT_CONFIGURED: "OTP 不可用",
	TOTP_ALREADY_ENABLED: "TOTP 已启用",
	TOTP_NOT_CONFIGURED: "TOTP 不可用",
	ACCOUNT_TEMPORARILY_LOCKED:
		"验证失败次数过多，您的账户已被暂时锁定。请稍后再试。",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
