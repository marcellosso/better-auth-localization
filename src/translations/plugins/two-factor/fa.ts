import type { TwoFactorErrorCodesType } from "../../../types";

export const FA_IR = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "رمز یکبار مصرف فعال نیست",
	OTP_HAS_EXPIRED: "رمز یکبار مصرف منقضی شده",
	TOTP_NOT_ENABLED: "رمز یکبار مصرف مبتنی بر زمان فعال نیست",
	TWO_FACTOR_NOT_ENABLED: "احراز هویت دو مرحله‌ای فعال نیست",
	BACKUP_CODES_NOT_ENABLED: "کدهای پشتیبان فعال نیستند",
	INVALID_BACKUP_CODE: "کد پشتیبان نامعتبر",
	INVALID_CODE: "کد نامعتبر",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"تلاش‌های بیش از حد. لطفاً کد جدیدی درخواست کنید.",
	INVALID_TWO_FACTOR_COOKIE: "کوکی احراز هویت دو مرحله‌ای نامعتبر",

	OTP_NOT_CONFIGURED: "OTP در دسترس نیست",
	TOTP_ALREADY_ENABLED: "TOTP از قبل فعال است",
	TOTP_NOT_CONFIGURED: "TOTP در دسترس نیست",
	ACCOUNT_TEMPORARILY_LOCKED:
		"تعداد تلاش‌های ناموفق تأیید بیش از حد مجاز بود. حساب شما موقتاً قفل شده است. لطفاً بعداً دوباره تلاش کنید.",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
