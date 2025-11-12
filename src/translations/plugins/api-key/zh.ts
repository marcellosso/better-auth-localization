import type { ApiKeyErrorCodesType } from "../../../types";

export const ZH_HANS = {
	// Api key related errors
	INVALID_METADATA_TYPE: "元数据必须是对象或undefined",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED: "提供重新填充间隔时需要重新填充数量",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED: "提供重新填充数量时需要重新填充间隔",
	USER_BANNED: "用户被禁止",
	UNAUTHORIZED_SESSION: "未授权或无效的会话",
	KEY_NOT_FOUND: "未找到API密钥",
	KEY_DISABLED: "API密钥已禁用",
	KEY_EXPIRED: "API密钥已过期",
	USAGE_EXCEEDED: "API密钥已超过使用限制",
	KEY_NOT_RECOVERABLE: "API密钥不可恢复",
	EXPIRES_IN_IS_TOO_SMALL: "过期时间小于预定义的最小值。",
	EXPIRES_IN_IS_TOO_LARGE: "过期时间大于预定义的最大值。",
	INVALID_REMAINING: "剩余值太大或太小。",
	INVALID_PREFIX_LENGTH: "前缀大小太大或太小。",
	INVALID_NAME_LENGTH: "名称大小太大或太小。",
	METADATA_DISABLED: "元数据已禁用。",
	RATE_LIMIT_EXCEEDED: "请求限制已超出。",
	NO_VALUES_TO_UPDATE: "没有要更新的值。",
	KEY_DISABLED_EXPIRATION: "自定义密钥过期值已禁用。",
	INVALID_API_KEY: "无效的API密钥。",
	INVALID_USER_ID_FROM_API_KEY: "API密钥的用户ID无效。",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"API密钥获取器返回了无效类型。期望：字符串。",
	SERVER_ONLY_PROPERTY: "您尝试设置的属性只能从服务器身份验证实例设置。",
	FAILED_TO_UPDATE_API_KEY: "更新API密钥失败",
	NAME_REQUIRED: "API密钥名称是必需的。",
} satisfies ApiKeyErrorCodesType;

export const ZH_HANT = {
	// Api key related errors
	INVALID_METADATA_TYPE: "元數據必須是對象或undefined",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED: "提供重新填充間隔時需要重新填充數量",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED: "提供重新填充數量時需要重新填充間隔",
	USER_BANNED: "用戶被禁止",
	UNAUTHORIZED_SESSION: "未授權或無效的會話",
	KEY_NOT_FOUND: "未找到API密鑰",
	KEY_DISABLED: "API密鑰已禁用",
	KEY_EXPIRED: "API密鑰已過期",
	USAGE_EXCEEDED: "API密鑰已超過使用限制",
	KEY_NOT_RECOVERABLE: "API密鑰不可恢復",
	EXPIRES_IN_IS_TOO_SMALL: "過期時間小於預定義的最小值。",
	EXPIRES_IN_IS_TOO_LARGE: "過期時間大於預定義的最大值。",
	INVALID_REMAINING: "剩餘值太大或太小。",
	INVALID_PREFIX_LENGTH: "前綴大小太大或太小。",
	INVALID_NAME_LENGTH: "名稱大小太大或太小。",
	METADATA_DISABLED: "元數據已禁用。",
	RATE_LIMIT_EXCEEDED: "請求限制已超出。",
	NO_VALUES_TO_UPDATE: "沒有要更新的值。",
	KEY_DISABLED_EXPIRATION: "自定義密鑰過期值已禁用。",
	INVALID_API_KEY: "無效的API密鑰。",
	INVALID_USER_ID_FROM_API_KEY: "API密鑰的用戶ID無效。",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"API密鑰獲取器返回了無效類型。期望：字符串。",
	SERVER_ONLY_PROPERTY: "您嘗試設置的屬性只能從服務器身份驗證實例設置。",
	FAILED_TO_UPDATE_API_KEY: "更新API密鑰失敗",
	NAME_REQUIRED: "API密鑰名稱是必需的。",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
