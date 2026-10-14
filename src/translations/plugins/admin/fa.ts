import type { AdminErrorCodesType } from "../../../types";

export const FA_IR = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "شما نمی‌توانید خودتان را ممنوع کنید",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"شما مجاز به تغییر نقش‌های کاربران نیستید",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "شما مجاز به ایجاد کاربر نیستید",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "شما مجاز به فهرست کردن کاربران نیستید",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"شما مجاز به فهرست کردن نشست‌های کاربران نیستید",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "شما مجاز به ممنوع کردن کاربران نیستید",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"شما مجاز به تقلید از کاربران دیگر نیستید",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"شما مجاز به لغو نشست‌های کاربران نیستید",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "شما مجاز به حذف کاربران نیستید",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"شما مجاز به تنظیم رمزهای عبور کاربران نیستید",
	BANNED_USER: "شما از این برنامه ممنوع شده‌اید",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "شما مجاز به دریافت کاربر نیستید",
	NO_DATA_TO_UPDATE: "هیچ داده‌ای برای به‌روزرسانی وجود ندارد",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS: "شما مجاز به به‌روزرسانی کاربران نیستید",
	YOU_CANNOT_REMOVE_YOURSELF: "شما نمی‌توانید خودتان را حذف کنید",

	YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE:
		"شما مجاز به تنظیم نقشی که وجود ندارد نیستید",
	YOU_CANNOT_IMPERSONATE_ADMINS: "شما نمی‌توانید به جای مدیران وارد شوید",
	INVALID_ROLE_TYPE: "نوع نقش نامعتبر",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL:
		"شما مجاز به به‌روزرسانی ایمیل کاربران نیستید",
	PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER:
		"رمز عبور از طریق update-user قابل به‌روزرسانی نیست. به جای آن از نقطه پایانی set-user-password استفاده کنید",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
