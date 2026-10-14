import type { AnonymousErrorCodesType } from "../../../types";

export const VI_VN = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Không thể tạo session",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Người dùng ẩn danh không thể đăng nhập lại dưới chế độ ẩn danh",
	INVALID_EMAIL_FORMAT: "Email không được tạo theo định dạng hợp lệ",
	FAILED_TO_DELETE_ANONYMOUS_USER: "Không thể xóa người dùng ẩn danh",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Không thể xóa các session của người dùng ẩn danh",
	USER_IS_NOT_ANONYMOUS: "Người dùng không phải là người dùng ẩn danh",
	DELETE_ANONYMOUS_USER_DISABLED: "Chức năng xóa người dùng ẩn danh đã bị tắt",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
