import { createTranslationObject } from "../utils/create-translation-object";

export const FA_IR = createTranslationObject("fa-IR", {
	// User related errors
	USER_NOT_FOUND: "کاربر یافت نشد",
	FAILED_TO_CREATE_USER: "ایجاد حساب کاربری ناموفق بود",
	FAILED_TO_UPDATE_USER: "به‌روزرسانی اطلاعات کاربر ناموفق بود",
	USER_ALREADY_EXISTS: "کاربر از قبل وجود دارد",
	USER_EMAIL_NOT_FOUND: "ایمیل کاربر یافت نشد",
	USER_ALREADY_HAS_PASSWORD:
		"کاربر قبلاً رمز عبور دارد. لطفاً رمز عبور فعلی را برای حذف حساب وارد کنید.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"کاربر از قبل وجود دارد. از ایمیل دیگری استفاده کنید.",

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

	INVALID_USER: "کاربر نامعتبر",
	TOKEN_EXPIRED: "توکن منقضی شده است",
	CHANGE_EMAIL_DISABLED: "تغییر ایمیل غیرفعال است",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"ورود از طریق هدایت بین‌سایتی مسدود شد. به نظر می‌رسد این درخواست یک حمله CSRF است.",
	VERIFICATION_EMAIL_NOT_ENABLED: "ایمیل تأیید فعال نیست",
	EMAIL_ALREADY_VERIFIED: "ایمیل قبلاً تأیید شده است",
	EMAIL_MISMATCH: "ایمیل مطابقت ندارد",
	SESSION_NOT_FRESH: "نشست تازه نیست",
	LINKED_ACCOUNT_ALREADY_EXISTS: "حساب متصل‌شده از قبل وجود دارد",
	INVALID_ORIGIN: "مبدأ نامعتبر",
	INVALID_CALLBACK_URL: "callbackURL نامعتبر است",
	INVALID_REDIRECT_URL: "redirectURL نامعتبر است",
	INVALID_ERROR_CALLBACK_URL: "errorCallbackURL نامعتبر است",
	INVALID_NEW_USER_CALLBACK_URL: "newUserCallbackURL نامعتبر است",
	MISSING_OR_NULL_ORIGIN: "Origin وجود ندارد یا خالی است",
	CALLBACK_URL_REQUIRED: "callbackURL الزامی است",
	FAILED_TO_CREATE_VERIFICATION: "ایجاد تأیید ناموفق بود",
	FIELD_NOT_ALLOWED: "تنظیم این فیلد مجاز نیست",
	ASYNC_VALIDATION_NOT_SUPPORTED: "اعتبارسنجی ناهمگام پشتیبانی نمی‌شود",
	VALIDATION_ERROR: "خطای اعتبارسنجی",
	MISSING_FIELD: "فیلد الزامی است",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"متد POST نیازمند فعال بودن deferSessionRefresh در تنظیمات نشست است",
	BODY_MUST_BE_AN_OBJECT: "بدنه باید یک شیء باشد",
	PASSWORD_ALREADY_SET: "کاربر از قبل رمز عبور دارد",
});

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
