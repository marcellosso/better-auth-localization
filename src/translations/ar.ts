import { createTranslationObject } from "../utils/create-translation-object";

export const AR_SA = createTranslationObject("ar-SA", {
	// User related errors
	USER_NOT_FOUND: "المستخدم غير موجود",
	FAILED_TO_CREATE_USER: "فشل في إنشاء حساب المستخدم",
	FAILED_TO_UPDATE_USER: "فشل في تحديث بيانات المستخدم",
	USER_ALREADY_EXISTS: "المستخدم موجود مسبقًا",
	USER_EMAIL_NOT_FOUND: "البريد الإلكتروني للمستخدم غير موجود",
	USER_ALREADY_HAS_PASSWORD:
		"المستخدم لديه كلمة مرور بالفعل. يرجى إدخال كلمة المرور الحالية لحذف الحساب.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"المستخدم موجود مسبقًا. استخدم بريدًا إلكترونيًا آخر.",

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

	INVALID_USER: "مستخدم غير صالح",
	TOKEN_EXPIRED: "انتهت صلاحية الرمز",
	CHANGE_EMAIL_DISABLED: "تغيير البريد الإلكتروني معطل",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"تم حظر تسجيل الدخول عبر التنقل بين المواقع. يبدو أن هذا الطلب هجوم CSRF.",
	VERIFICATION_EMAIL_NOT_ENABLED: "بريد التحقق غير مفعّل",
	EMAIL_ALREADY_VERIFIED: "تم التحقق من البريد الإلكتروني بالفعل",
	EMAIL_MISMATCH: "البريد الإلكتروني غير متطابق",
	SESSION_NOT_FRESH: "الجلسة ليست حديثة",
	LINKED_ACCOUNT_ALREADY_EXISTS: "الحساب المرتبط موجود بالفعل",
	INVALID_ORIGIN: "المصدر غير صالح",
	INVALID_CALLBACK_URL: "callbackURL غير صالح",
	INVALID_REDIRECT_URL: "redirectURL غير صالح",
	INVALID_ERROR_CALLBACK_URL: "errorCallbackURL غير صالح",
	INVALID_NEW_USER_CALLBACK_URL: "newUserCallbackURL غير صالح",
	MISSING_OR_NULL_ORIGIN: "Origin مفقود أو فارغ",
	CALLBACK_URL_REQUIRED: "callbackURL مطلوب",
	FAILED_TO_CREATE_VERIFICATION: "تعذر إنشاء التحقق",
	FIELD_NOT_ALLOWED: "لا يُسمح بتعيين هذا الحقل",
	ASYNC_VALIDATION_NOT_SUPPORTED: "التحقق غير المتزامن غير مدعوم",
	VALIDATION_ERROR: "خطأ في التحقق",
	MISSING_FIELD: "الحقل مطلوب",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"يتطلب أسلوب POST تفعيل deferSessionRefresh في إعدادات الجلسة",
	BODY_MUST_BE_AN_OBJECT: "يجب أن يكون المحتوى كائناً",
	PASSWORD_ALREADY_SET: "لدى المستخدم كلمة مرور بالفعل",
});

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
