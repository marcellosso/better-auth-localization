import type { StripeErrorCodesType } from "../../../types";

export const AR_SA = {
	UNAUTHORIZED: "وصول غير مصرح به",
	INVALID_REQUEST_BODY: "محتوى الطلب غير صالح",
	SUBSCRIPTION_NOT_FOUND: "الاشتراك غير موجود",
	SUBSCRIPTION_PLAN_NOT_FOUND: "خطة الاشتراك غير موجودة",
	ALREADY_SUBSCRIBED_PLAN: "أنت مشترك بالفعل في هذه الخطة",
	REFERENCE_ID_NOT_ALLOWED: "معرّف المرجع غير مسموح",
	CUSTOMER_NOT_FOUND: "لم يتم العثور على عميل Stripe لهذا المستخدم",
	UNABLE_TO_CREATE_CUSTOMER: "تعذر إنشاء العميل",
	UNABLE_TO_CREATE_BILLING_PORTAL: "تعذر إنشاء جلسة بوابة الفوترة",
	STRIPE_SIGNATURE_NOT_FOUND: "لم يتم العثور على توقيع Stripe",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND:
		"لم يتم العثور على سر webhook الخاص بـ Stripe",
	STRIPE_WEBHOOK_ERROR: "خطأ في webhook الخاص بـ Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "فشل في إنشاء حدث Stripe",
	FAILED_TO_FETCH_PLANS: "فشل في جلب الخطط",
	EMAIL_VERIFICATION_REQUIRED:
		"يلزم التحقق من البريد الإلكتروني قبل الاشتراك في خطة",
	SUBSCRIPTION_NOT_ACTIVE: "الاشتراك غير نشط",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION: "الاشتراك غير مجدول للإلغاء",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"لا يوجد إلغاء معلق أو تغيير مجدول للخطة في هذا الاشتراك",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED: "اشتراك المنظمة غير مفعّل",
	AUTHORIZE_REFERENCE_REQUIRED:
		"تتطلب اشتراكات المنظمات إعداد دالة authorizeReference",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION: "لا يمكن حذف منظمة لديها اشتراك نشط",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"معرّف المرجع مطلوب. قدّم referenceId أو عيّن activeOrganizationId في الجلسة",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
