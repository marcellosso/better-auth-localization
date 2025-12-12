import type { PhoneNumberErrorCodesType } from "../../../types";

export const VI_VN = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Số điện thoại không hợp lệ",
	PHONE_NUMBER_EXIST: "Số điện thoại đã tồn tại",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Số điện thoại hoặc mật khẩu không hợp lệ",
	UNEXPECTED_ERROR: "Lỗi không mong muốn",
	OTP_NOT_FOUND: "Không tìm thấy mã OTP",
	OTP_EXPIRED: "Mã OTP đã hết hạn",
	INVALID_OTP: "Mã OTP không hợp lệ",
	PHONE_NUMBER_NOT_VERIFIED: "Số điện thoại chưa được xác minh",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
