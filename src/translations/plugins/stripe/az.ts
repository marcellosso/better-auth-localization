import type { StripeErrorCodesType } from "../../../types";

export const AZ_AZ = {
	UNAUTHORIZED: "İcazəsiz giriş",
	INVALID_REQUEST_BODY: "Yanlış sorğu gövdəsi",
	SUBSCRIPTION_NOT_FOUND: "Abunəlik tapılmadı",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Abunəlik planı tapılmadı",
	ALREADY_SUBSCRIBED_PLAN: "Siz artıq bu plana abunəsiniz",
	REFERENCE_ID_NOT_ALLOWED: "İstinad ID-sinə icazə verilmir",
	CUSTOMER_NOT_FOUND: "Bu istifadəçi üçün Stripe müştərisi tapılmadı",
	UNABLE_TO_CREATE_CUSTOMER: "Müştəri yaradıla bilmədi",
	UNABLE_TO_CREATE_BILLING_PORTAL: "Billing portal sessiyası yaradıla bilmədi",
	STRIPE_SIGNATURE_NOT_FOUND: "Stripe imzası tapılmadı",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Stripe webhook sirri tapılmadı",
	STRIPE_WEBHOOK_ERROR: "Stripe webhook xətası",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Stripe hadisəsi qurula bilmədi",
	FAILED_TO_FETCH_PLANS: "Planlar əldə edilə bilmədi",
	EMAIL_VERIFICATION_REQUIRED:
		"Plana abunə olmazdan əvvəl e-poçt təsdiqi tələb olunur",
	SUBSCRIPTION_NOT_ACTIVE: "Abunəlik aktiv deyil",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"Abunəlik üçün ləğv planlaşdırılmayıb",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"Abunəliyin gözləyən ləğvi və ya planlaşdırılmış plan dəyişikliyi yoxdur",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED: "Təşkilat abunəliyi aktiv deyil",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Təşkilat abunəlikləri üçün authorizeReference callback-i konfiqurasiya edilməlidir",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Aktiv abunəliyi olan təşkilat silinə bilməz",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"İstinad ID-si tələb olunur. referenceId təqdim edin və ya sessiyada activeOrganizationId təyin edin",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	az: AZ_AZ,
	"az-AZ": AZ_AZ,
} as const;
