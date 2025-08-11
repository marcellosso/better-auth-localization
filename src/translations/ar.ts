import { ErrorCodesType } from "../types";

export const AR_SA = {
	// User related errors
	USER_NOT_FOUND: "المستخدم غير موجود",
	FAILED_TO_CREATE_USER: "فشل في إنشاء حساب المستخدم",
	FAILED_TO_UPDATE_USER: "فشل في تحديث بيانات المستخدم",
	USER_ALREADY_EXISTS: "المستخدم موجود مسبقًا",
	USER_EMAIL_NOT_FOUND: "البريد الإلكتروني للمستخدم غير موجود",
	USER_ALREADY_HAS_PASSWORD:
		"المستخدم لديه كلمة مرور بالفعل. يرجى إدخال كلمة المرور الحالية لحذف الحساب.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "فشل في إنشاء الجلسة",
	FAILED_TO_GET_SESSION: "فشل في استرجاع الجلسة",
	SESSION_EXPIRED:
		"انتهت صلاحية الجلسة. يرجى تسجيل الدخول مجددًا لمتابعة هذا الإجراء.",

	// Authentication errors
	INVALID_PASSWORD: "كلمة المرور غير صحيحة",
	INVALID_EMAIL: "البريد الإلكتروني غير صالح",
	INVALID_EMAIL_OR_PASSWORD: "البريد الإلكتروني أو كلمة المرور غير صحيحين",
	INVALID_TOKEN: "الرمز غير صالح",
	EMAIL_NOT_VERIFIED: "البريد الإلكتروني لم يتم التحقق منه",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "حساب بيانات الاعتماد غير موجود",

	// Password related errors
	PASSWORD_TOO_SHORT: "كلمة المرور قصيرة جدًا",
	PASSWORD_TOO_LONG: "كلمة المرور طويلة جدًا",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "الحساب الاجتماعي مرتبط بالفعل",
	PROVIDER_NOT_FOUND: "مزود الخدمة غير موجود",
	ID_TOKEN_NOT_SUPPORTED: "الرمز المميز غير مدعوم",
	FAILED_TO_GET_USER_INFO: "فشل في استرجاع معلومات المستخدم",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "لا يمكن تحديث البريد الإلكتروني",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "لا يمكن إلغاء ربط الحساب الأخير",
	ACCOUNT_NOT_FOUND: "الحساب غير موجود",
} satisfies ErrorCodesType;

export const LOCALES = {
    "ar-SA": AR_SA,
} as const;
