import type { ErrorCodesType } from "../types";

export const FA_IR = {
	// User related errors
	USER_NOT_FOUND: "کاربر یافت نشد",
	FAILED_TO_CREATE_USER: "ایجاد حساب کاربری ناموفق بود",
	FAILED_TO_UPDATE_USER: "به‌روزرسانی اطلاعات کاربر ناموفق بود",
	USER_ALREADY_EXISTS: "کاربر از قبل وجود دارد",
	USER_EMAIL_NOT_FOUND: "ایمیل کاربر یافت نشد",
	USER_ALREADY_HAS_PASSWORD:
		"کاربر قبلاً رمز عبور دارد. لطفاً رمز عبور فعلی را برای حذف حساب وارد کنید.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "ایجاد نشست ناموفق بود",
	FAILED_TO_GET_SESSION: "بازیابی نشست ناموفق بود",
	SESSION_EXPIRED: "نشست منقضی شده است. لطفاً دوباره وارد شوید تا ادامه دهید.",

	// Authentication errors
	INVALID_PASSWORD: "رمز عبور نادرست است",
	INVALID_EMAIL: "ایمیل نامعتبر است",
	INVALID_EMAIL_OR_PASSWORD: "ایمیل یا رمز عبور نادرست است",
	INVALID_TOKEN: "توکن نامعتبر است",
	EMAIL_NOT_VERIFIED: "ایمیل تأیید نشده است",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "حساب با این اعتبارنامه یافت نشد",

	// Password related errors
	PASSWORD_TOO_SHORT: "رمز عبور خیلی کوتاه است",
	PASSWORD_TOO_LONG: "رمز عبور خیلی بلند است",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "حساب شبکهٔ اجتماعی قبلاً پیوند داده شده است",
	PROVIDER_NOT_FOUND: "ارائه‌دهنده یافت نشد",
	ID_TOKEN_NOT_SUPPORTED: "توکن شناسه (ID Token) پشتیبانی نمی‌شود",
	FAILED_TO_GET_USER_INFO: "بازیابی اطلاعات کاربر ناموفق بود",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "امکان به‌روزرسانی ایمیل وجود ندارد",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "امکان قطع پیوند آخرین حساب وجود ندارد",
	ACCOUNT_NOT_FOUND: "حساب یافت نشد",
} satisfies ErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
