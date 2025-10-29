import type { ApiKeyErrorCodesType } from "../../../types";

export const AR_SA = {
	// Api key related errors
	INVALID_METADATA_TYPE: "يجب أن تكون البيانات الوصفية كائن أو غير معرف",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"كمية التعبئة مطلوبة عند توفير فاصل التعبئة",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"فاصل التعبئة مطلوب عند توفير كمية التعبئة",
	USER_BANNED: "المستخدم محظور",
	UNAUTHORIZED_SESSION: "جلسة غير مصرح بها أو غير صالحة",
	KEY_NOT_FOUND: "مفتاح API غير موجود",
	KEY_DISABLED: "مفتاح API معطل",
	KEY_EXPIRED: "مفتاح API منتهي الصلاحية",
	USAGE_EXCEEDED: "مفتاح API تجاوز حد الاستخدام",
	KEY_NOT_RECOVERABLE: "مفتاح API غير قابل للاسترداد",
	EXPIRES_IN_IS_TOO_SMALL: "وقت الانتهاء أقل من القيمة الدنيا المحددة مسبقاً.",
	EXPIRES_IN_IS_TOO_LARGE: "وقت الانتهاء أكبر من القيمة القصوى المحددة مسبقاً.",
	INVALID_REMAINING: "القيمة المتبقية كبيرة جداً أو صغيرة جداً.",
	INVALID_PREFIX_LENGTH: "حجم البادئة كبير جداً أو صغير جداً.",
	INVALID_NAME_LENGTH: "حجم الاسم كبير جداً أو صغير جداً.",
	METADATA_DISABLED: "البيانات الوصفية معطلة.",
	RATE_LIMIT_EXCEEDED: "تم تجاوز حد الطلبات.",
	NO_VALUES_TO_UPDATE: "لا توجد قيم للتحديث.",
	KEY_DISABLED_EXPIRATION: "قيم انتهاء صلاحية المفتاح المخصصة معطلة.",
	INVALID_API_KEY: "مفتاح API غير صالح.",
	INVALID_USER_ID_FROM_API_KEY: "معرف المستخدم لمفتاح API غير صالح.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"أرجع مسترد مفتاح API نوعاً غير صالح. متوقع: نص.",
	SERVER_ONLY_PROPERTY:
		"الخاصية التي تحاول تعيينها يمكن تعيينها فقط من مثيل المصادقة في الخادم.",
	FAILED_TO_UPDATE_API_KEY: "فشل في تحديث مفتاح API",
	NAME_REQUIRED: "اسم مفتاح API مطلوب.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
