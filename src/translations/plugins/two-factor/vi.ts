import type { TwoFactorErrorCodesType } from "../../../types";

export const VI_VN = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Mã OTP chưa được bật",
	OTP_HAS_EXPIRED: "Mã OTP đã hết hạn",
	TOTP_NOT_ENABLED: "Mã OTP theo thời gian (TOTP) chưa được bật",
	TWO_FACTOR_NOT_ENABLED: "Xác thực hai bước chưa được bật",
	BACKUP_CODES_NOT_ENABLED: "Mã dự phòng chưa được bật",
	INVALID_BACKUP_CODE: "Mã dự phòng không hợp lệ",
	INVALID_CODE: "Mã không hợp lệ",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Số lần thử quá nhiều. Vui lòng yêu cầu mã mới.",
	INVALID_TWO_FACTOR_COOKIE: "Cookie xác thực hai bước không hợp lệ",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
