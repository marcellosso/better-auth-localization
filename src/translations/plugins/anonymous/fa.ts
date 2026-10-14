import type { AnonymousErrorCodesType } from "../../../types";

export const FA_IR = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "نشست ایجاد نشد",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"کاربران ناشناس نمی‌توانند دوباره به صورت ناشناس وارد شوند",

	INVALID_EMAIL_FORMAT: "ایمیل با قالب معتبر ایجاد نشده است",
	FAILED_TO_DELETE_ANONYMOUS_USER: "حذف کاربر ناشناس ناموفق بود",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"حذف نشست‌های کاربر ناشناس ناموفق بود",
	USER_IS_NOT_ANONYMOUS: "کاربر ناشناس نیست",
	DELETE_ANONYMOUS_USER_DISABLED: "حذف کاربران ناشناس غیرفعال است",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
