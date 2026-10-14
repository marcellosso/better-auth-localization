import type { StripeErrorCodesType } from "../../../types";

export const FA_IR = {
	UNAUTHORIZED: "دسترسی غیرمجاز",
	INVALID_REQUEST_BODY: "بدنه درخواست نامعتبر است",
	SUBSCRIPTION_NOT_FOUND: "اشتراک یافت نشد",
	SUBSCRIPTION_PLAN_NOT_FOUND: "طرح اشتراک یافت نشد",
	ALREADY_SUBSCRIBED_PLAN: "شما قبلاً در این طرح مشترک شده‌اید",
	REFERENCE_ID_NOT_ALLOWED: "شناسه مرجع مجاز نیست",
	CUSTOMER_NOT_FOUND: "مشتری Stripe برای این کاربر یافت نشد",
	UNABLE_TO_CREATE_CUSTOMER: "ایجاد مشتری ممکن نیست",
	UNABLE_TO_CREATE_BILLING_PORTAL: "ایجاد نشست پورتال صورتحساب ممکن نیست",
	STRIPE_SIGNATURE_NOT_FOUND: "امضای Stripe یافت نشد",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "رمز وب‌هوک Stripe یافت نشد",
	STRIPE_WEBHOOK_ERROR: "خطای وب‌هوک Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "ساخت رویداد Stripe ناموفق بود",
	FAILED_TO_FETCH_PLANS: "دریافت طرح‌ها ناموفق بود",
	EMAIL_VERIFICATION_REQUIRED:
		"پیش از اشتراک در یک طرح باید ایمیل خود را تأیید کنید",
	SUBSCRIPTION_NOT_ACTIVE: "اشتراک فعال نیست",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"اشتراک برای لغو برنامه‌ریزی نشده است",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"اشتراک هیچ لغو در انتظار یا تغییر طرح برنامه‌ریزی‌شده‌ای ندارد",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED: "اشتراک سازمان فعال نیست",
	AUTHORIZE_REFERENCE_REQUIRED:
		"اشتراک‌های سازمانی نیازمند پیکربندی تابع authorizeReference هستند",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"سازمانی که اشتراک فعال دارد قابل حذف نیست",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"شناسه مرجع الزامی است. referenceId را ارائه کنید یا activeOrganizationId را در نشست تنظیم کنید",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
