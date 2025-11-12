import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const ZH_HANS = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "无效的设备代码",
	EXPIRED_DEVICE_CODE: "设备代码已过期",
	EXPIRED_USER_CODE: "用户代码已过期",
	AUTHORIZATION_PENDING: "授权待处理",
	ACCESS_DENIED: "访问被拒绝",
	INVALID_USER_CODE: "无效的用户代码",
	DEVICE_CODE_ALREADY_PROCESSED: "设备代码已处理",
	POLLING_TOO_FREQUENTLY: "轮询过于频繁",
	INVALID_DEVICE_CODE_STATUS: "无效的设备代码状态",
	AUTHENTICATION_REQUIRED: "需要身份验证",
} satisfies DeviceAuthorizationErrorCodesType;

export const ZH_HANT = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "無效的設備代碼",
	EXPIRED_DEVICE_CODE: "設備代碼已過期",
	EXPIRED_USER_CODE: "用戶代碼已過期",
	AUTHORIZATION_PENDING: "授權待處理",
	ACCESS_DENIED: "訪問被拒絕",
	INVALID_USER_CODE: "無效的用戶代碼",
	DEVICE_CODE_ALREADY_PROCESSED: "設備代碼已處理",
	POLLING_TOO_FREQUENTLY: "輪詢過於頻繁",
	INVALID_DEVICE_CODE_STATUS: "無效的設備代碼狀態",
	AUTHENTICATION_REQUIRED: "需要身份驗證",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
