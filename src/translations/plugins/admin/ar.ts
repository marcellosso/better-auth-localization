import type { AdminErrorCodesType } from "../../../types";

export const AR_SA = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "لا يمكنك حظر نفسك",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"ليس لديك صلاحية لتغيير أدوار المستخدمين",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "ليس لديك صلاحية لإنشاء مستخدمين",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "ليس لديك صلاحية لعرض قائمة المستخدمين",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"ليس لديك صلاحية لعرض جلسات المستخدمين",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "ليس لديك صلاحية لحظر المستخدمين",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"ليس لديك صلاحية للانتحال شخصية المستخدمين الآخرين",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"ليس لديك صلاحية لإلغاء جلسات المستخدمين",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "ليس لديك صلاحية لحذف المستخدمين",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"ليس لديك صلاحية لتعيين كلمات مرور المستخدمين",
	BANNED_USER: "تم حظرك من هذا التطبيق",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "ليس لديك صلاحية للحصول على المستخدم",
	NO_DATA_TO_UPDATE: "لا توجد بيانات للتحديث",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS: "ليس لديك صلاحية لتحديث المستخدمين",
	YOU_CANNOT_REMOVE_YOURSELF: "لا يمكنك إزالة نفسك",

	YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE:
		"ليس لديك صلاحية لتعيين دور غير موجود",
	YOU_CANNOT_IMPERSONATE_ADMINS: "لا يمكنك انتحال شخصية المسؤولين",
	INVALID_ROLE_TYPE: "نوع الدور غير صالح",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL:
		"ليس لديك صلاحية لتحديث البريد الإلكتروني للمستخدمين",
	PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER:
		"لا يمكن تحديث كلمة المرور عبر update-user. استخدم نقطة النهاية set-user-password بدلاً من ذلك",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
