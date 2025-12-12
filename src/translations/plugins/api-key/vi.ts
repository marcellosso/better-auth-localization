import type { ApiKeyErrorCodesType } from "../../../types";

export const VI_VN = {
	// Api key related errors
	INVALID_METADATA_TYPE: "Metadata phải là một object hoặc undefined",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"Cần có lượng refill khi khoảng thời gian refill được cung cấp",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"Cần có khoảng thời gian refill khi lượng refill được cung cấp",
	USER_BANNED: "Người dùng đã bị cấm",
	UNAUTHORIZED_SESSION: "Session không hợp lệ hoặc chưa được xác thực",
	KEY_NOT_FOUND: "Không tìm thấy API key",
	KEY_DISABLED: "API key đã bị vô hiệu hóa",
	KEY_EXPIRED: "API key đã hết hạn",
	USAGE_EXCEEDED: "API key đã vượt quá giới hạn sử dụng",
	KEY_NOT_RECOVERABLE: "API key không thể được khôi phục",
	EXPIRES_IN_IS_TOO_SMALL:
		"Thời gian hết hạn nhỏ hơn giá trị tối thiểu cho phép",
	EXPIRES_IN_IS_TOO_LARGE: "Thời gian hết hạn lớn hơn giá trị tối đa cho phép",
	INVALID_REMAINING: "Giá trị remaining quá lớn hoặc quá nhỏ",
	INVALID_PREFIX_LENGTH: "Độ dài tiền tố quá lớn hoặc quá nhỏ",
	INVALID_NAME_LENGTH: "Độ dài tên quá lớn hoặc quá nhỏ",
	METADATA_DISABLED: "Metadata đã bị vô hiệu hóa",
	RATE_LIMIT_EXCEEDED: "Đã vượt quá giới hạn yêu cầu",
	NO_VALUES_TO_UPDATE: "Không có giá trị nào để cập nhật",
	KEY_DISABLED_EXPIRATION:
		"Giá trị hết hạn tùy chỉnh của API key đã bị vô hiệu hóa",
	INVALID_API_KEY: "API key không hợp lệ",
	INVALID_USER_ID_FROM_API_KEY: "User ID từ API key không hợp lệ",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"Hàm getter API key trả về kiểu không hợp lệ. Mong đợi: chuỗi.",
	SERVER_ONLY_PROPERTY:
		"Thuộc tính bạn đang cố đặt chỉ có thể được cấu hình trên instance xác thực phía server",
	FAILED_TO_UPDATE_API_KEY: "Không thể cập nhật API key",
	NAME_REQUIRED: "Tên API key là bắt buộc",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
