import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const FA_IR = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "کد دستگاه نامعتبر",
	EXPIRED_DEVICE_CODE: "کد دستگاه منقضی شده",
	EXPIRED_USER_CODE: "کد کاربر منقضی شده",
	AUTHORIZATION_PENDING: "مجوز در انتظار",
	ACCESS_DENIED: "دسترسی رد شد",
	INVALID_USER_CODE: "کد کاربر نامعتبر",
	DEVICE_CODE_ALREADY_PROCESSED: "کد دستگاه قبلاً پردازش شده",
	POLLING_TOO_FREQUENTLY: "درخواست‌های بیش از حد مکرر",
	INVALID_DEVICE_CODE_STATUS: "وضعیت کد دستگاه نامعتبر",
	AUTHENTICATION_REQUIRED: "احراز هویت مورد نیاز",

	DEVICE_CODE_NOT_CLAIMED:
		"کد دستگاه توسط هیچ نشست تأییدکننده‌ای دریافت نشده است؛ پیش از تأیید یا رد، در حالت ورود به حساب، `GET /device` را با `user_code` فراخوانی کنید",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
