import type { PasskeyErrorCodesType } from "../../../types";

export const VI_VN = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Không tìm thấy challenge",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Bạn không có quyền đăng ký passkey này",
	FAILED_TO_VERIFY_REGISTRATION: "Xác minh đăng ký thất bại",
	PASSKEY_NOT_FOUND: "Không tìm thấy passkey",
	AUTHENTICATION_FAILED: "Xác thực thất bại",
	UNABLE_TO_CREATE_SESSION: "Không thể tạo phiên đăng nhập",
	FAILED_TO_UPDATE_PASSKEY: "Cập nhật passkey thất bại",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
