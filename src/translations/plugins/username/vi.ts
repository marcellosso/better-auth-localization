import type { UsernameErrorCodesType } from "../../../types";

export const VI_VN = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Tên người dùng hoặc mật khẩu không hợp lệ",
	USERNAME_IS_ALREADY_TAKEN:
		"Tên người dùng đã được sử dụng. Vui lòng thử tên khác.",
	USERNAME_TOO_SHORT: "Tên người dùng quá ngắn",
	USERNAME_TOO_LONG: "Tên người dùng quá dài",
	INVALID_USERNAME: "Tên người dùng không hợp lệ",
	INVALID_DISPLAY_USERNAME: "Tên hiển thị không hợp lệ",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
