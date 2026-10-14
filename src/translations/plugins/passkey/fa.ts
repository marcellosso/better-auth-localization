import type { PasskeyErrorCodesType } from "../../../types";

export const FA_IR = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "چالش یافت نشد",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"شما مجاز به ثبت این کلید دسترسی نیستید",
	FAILED_TO_VERIFY_REGISTRATION: "تأیید ثبت نام با شکست مواجه شد",
	PASSKEY_NOT_FOUND: "کلید دسترسی یافت نشد",
	AUTHENTICATION_FAILED: "احراز هویت با شکست مواجه شد",
	UNABLE_TO_CREATE_SESSION: "قادر به ایجاد جلسه نیست",
	FAILED_TO_UPDATE_PASSKEY: "به‌روزرسانی کلید دسترسی با شکست مواجه شد",

	PREVIOUSLY_REGISTERED: "قبلاً ثبت شده است",
	REGISTRATION_CANCELLED: "ثبت‌نام لغو شد",
	AUTH_CANCELLED: "احراز هویت لغو شد",
	SESSION_REQUIRED: "ثبت کلید دسترسی نیازمند یک نشست احراز هویت‌شده است",
	RESOLVE_USER_REQUIRED:
		"ثبت کلید دسترسی نیازمند یک نشست احراز هویت‌شده یا تابع resolveUser در صورت false بودن requireSession است",
	RESOLVED_USER_INVALID: "کاربر شناسایی‌شده نامعتبر است",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
