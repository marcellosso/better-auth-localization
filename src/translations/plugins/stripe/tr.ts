import type { StripeErrorCodesType } from "../../../types";

export const TR_TR = {
	UNAUTHORIZED: "Yetkisiz erişim",
	INVALID_REQUEST_BODY: "Geçersiz istek gövdesi",
	SUBSCRIPTION_NOT_FOUND: "Abonelik bulunamadı",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Abonelik planı bulunamadı",
	ALREADY_SUBSCRIBED_PLAN: "Bu plana zaten abonesiniz",
	REFERENCE_ID_NOT_ALLOWED: "Referans ID'sine izin verilmiyor",
	CUSTOMER_NOT_FOUND: "Bu kullanıcı için Stripe müşterisi bulunamadı",
	UNABLE_TO_CREATE_CUSTOMER: "Müşteri oluşturulamadı",
	UNABLE_TO_CREATE_BILLING_PORTAL: "Fatura portalı oturumu oluşturulamadı",
	STRIPE_SIGNATURE_NOT_FOUND: "Stripe imzası bulunamadı",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Stripe webhook gizli anahtarı bulunamadı",
	STRIPE_WEBHOOK_ERROR: "Stripe webhook hatası",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Stripe olayı oluşturulamadı",
	FAILED_TO_FETCH_PLANS: "Planlar getirilemedi",
	EMAIL_VERIFICATION_REQUIRED:
		"Bir plana abone olmadan önce e-posta doğrulaması gereklidir",
	SUBSCRIPTION_NOT_ACTIVE: "Abonelik etkin değil",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"Abonelik için iptal planlanmamış",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"Aboneliğin bekleyen bir iptali veya planlanmış bir plan değişikliği yok",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED: "Organizasyon aboneliği etkin değil",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Organizasyon abonelikleri için authorizeReference callback'inin yapılandırılması gerekir",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Etkin aboneliği olan organizasyon silinemez",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"Referans ID'si gerekli. referenceId sağlayın veya oturumda activeOrganizationId ayarlayın",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
