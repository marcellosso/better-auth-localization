import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const VI_VN = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "Mã thiết bị không hợp lệ",
	EXPIRED_DEVICE_CODE: "Mã thiết bị đã hết hạn",
	EXPIRED_USER_CODE: "Mã người dùng đã hết hạn",
	AUTHORIZATION_PENDING: "Đang chờ xác thực",
	ACCESS_DENIED: "Truy cập bị từ chối",
	INVALID_USER_CODE: "Mã người dùng không hợp lệ",
	DEVICE_CODE_ALREADY_PROCESSED: "Mã thiết bị đã được xử lý",
	POLLING_TOO_FREQUENTLY: "Polling diễn ra quá thường xuyên",
	INVALID_DEVICE_CODE_STATUS: "Trạng thái mã thiết bị không hợp lệ",
	AUTHENTICATION_REQUIRED: "Yêu cầu xác thực",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
