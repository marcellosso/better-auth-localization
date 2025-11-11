import type { PhoneNumberErrorCodesType } from "../../../types";

export const ZH_HANS = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "无效的电话号码",
	PHONE_NUMBER_EXIST: "电话号码已存在",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "无效的电话号码或密码",
	UNEXPECTED_ERROR: "意外错误",
	OTP_NOT_FOUND: "验证码未找到",
	OTP_EXPIRED: "验证码已过期",
	INVALID_OTP: "无效的验证码",
	PHONE_NUMBER_NOT_VERIFIED: "电话号码未验证",
} satisfies PhoneNumberErrorCodesType;

export const ZH_HANT = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "無效的電話號碼",
	PHONE_NUMBER_EXIST: "電話號碼已存在",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "無效的電話號碼或密碼",
	UNEXPECTED_ERROR: "意外錯誤",
	OTP_NOT_FOUND: "驗證碼未找到",
	OTP_EXPIRED: "驗證碼已過期",
	INVALID_OTP: "無效的驗證碼",
	PHONE_NUMBER_NOT_VERIFIED: "電話號碼未驗證",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
