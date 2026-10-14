import type { PhoneNumberErrorCodesType } from "../../../types";

export const AR_SA = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "رقم الهاتف غير صالح",
	PHONE_NUMBER_EXIST: "رقم الهاتف موجود بالفعل",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "رقم الهاتف أو كلمة المرور غير صالحة",
	UNEXPECTED_ERROR: "خطأ غير متوقع",
	OTP_NOT_FOUND: "رمز التحقق غير موجود",
	OTP_EXPIRED: "رمز التحقق منتهي الصلاحية",
	INVALID_OTP: "رمز التحقق غير صالح",
	PHONE_NUMBER_NOT_VERIFIED: "رقم الهاتف غير محقق",

	PHONE_NUMBER_NOT_EXIST: "رقم الهاتف غير مسجل",
	PHONE_NUMBER_CANNOT_BE_UPDATED: "لا يمكن تحديث رقم الهاتف",
	SEND_OTP_NOT_IMPLEMENTED: "sendOTP غير مُنفَّذ",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
