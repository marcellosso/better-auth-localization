import type { UsernameErrorCodesType } from "../../../types";

export const FA_IR = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "نام کاربری یا رمز عبور نامعتبر",
	USERNAME_IS_ALREADY_TAKEN:
		"نام کاربری قبلاً استفاده شده است. لطفاً نام دیگری امتحان کنید.",
	USERNAME_TOO_SHORT: "نام کاربری خیلی کوتاه است",
	USERNAME_TOO_LONG: "نام کاربری خیلی طولانی است",
	INVALID_USERNAME: "نام کاربری نامعتبر",
	INVALID_DISPLAY_USERNAME: "نام نمایشی نامعتبر",

	USERNAME_IS_IMMUTABLE: "نام کاربری قابل به‌روزرسانی نیست",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
