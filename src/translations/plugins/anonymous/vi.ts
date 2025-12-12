import type { AnonymousErrorCodesType } from "../../../types";

export const VI_VN = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Không thể tạo session",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Người dùng ẩn danh không thể đăng nhập lại dưới chế độ ẩn danh",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
