import type { AnonymousErrorCodesType } from "../../../types";

export const AR_SA = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "لا يمكن إنشاء الجلسة",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"لا يمكن للمستخدمين المجهولين تسجيل الدخول مرة أخرى كمجهولين",

	INVALID_EMAIL_FORMAT: "لم يتم إنشاء البريد الإلكتروني بصيغة صالحة",
	FAILED_TO_DELETE_ANONYMOUS_USER: "فشل في حذف المستخدم المجهول",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS: "فشل في حذف جلسات المستخدم المجهول",
	USER_IS_NOT_ANONYMOUS: "المستخدم ليس مجهولاً",
	DELETE_ANONYMOUS_USER_DISABLED: "حذف المستخدمين المجهولين معطل",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
