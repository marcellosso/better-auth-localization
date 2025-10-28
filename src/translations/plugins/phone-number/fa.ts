import type { PhoneNumberErrorCodesType } from "../../../types";

export const FA_IR = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "شماره تلفن نامعتبر",
	PHONE_NUMBER_EXIST: "شماره تلفن قبلاً وجود دارد",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "شماره تلفن یا رمز عبور نامعتبر",
	UNEXPECTED_ERROR: "خطای غیرمنتظره",
	OTP_NOT_FOUND: "کد تأیید یافت نشد",
	OTP_EXPIRED: "کد تأیید منقضی شده",
	INVALID_OTP: "کد تأیید نامعتبر",
	PHONE_NUMBER_NOT_VERIFIED: "شماره تلفن تأیید نشده",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
