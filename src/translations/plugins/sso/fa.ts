import type { SSOErrorCodesType } from "../../../types";

export const FA_IR = {
	SINGLE_LOGOUT_NOT_ENABLED: "خروج یکپارچه فعال نیست",
	INVALID_LOGOUT_RESPONSE: "LogoutResponse نامعتبر",
	INVALID_LOGOUT_REQUEST: "LogoutRequest نامعتبر",
	LOGOUT_FAILED_AT_IDP: "خروج در IdP ناموفق بود",
	IDP_SLO_NOT_SUPPORTED: "IdP از سرویس خروج یکپارچه پشتیبانی نمی‌کند",
	SAML_PROVIDER_NOT_FOUND: "ارائه‌دهنده SAML یافت نشد",
	SAML_INVALID_XML: "تجزیه XML پاسخ SAML ناموفق بود",
	SAML_INVALID_ENCODING: "پاسخ SAML با کدگذاری base64 نامعتبر است",
	SAML_NO_ASSERTION: "پاسخ SAML هیچ assertion ای ندارد",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "امضای SAML assertion الزامی است",
	SAML_RESPONSE_INVALID_XML: "XML پاسخ SAML قابل تجزیه نبود",
	SAML_ASSERTION_MISSING: "پاسخ SAML فاقد assertion است",
	SAML_AUDIENCE_MISSING: "SAML assertion فاقد AudienceRestriction است",
	SAML_AUDIENCE_MISMATCH:
		"مخاطب SAML assertion با این ارائه‌دهنده سرویس مطابقت ندارد",
	SAML_BEARER_CONFIRMATION_MISSING:
		"SAML assertion فاقد SubjectConfirmationData از نوع bearer است",
	SAML_RECIPIENT_MISSING:
		"SubjectConfirmationData از نوع bearer در SAML فاقد Recipient است",
	SAML_RECIPIENT_MISMATCH:
		"Recipient در SubjectConfirmationData از نوع bearer با این ارائه‌دهنده سرویس مطابقت ندارد",
	SAML_DESTINATION_MISMATCH:
		"Destination در پاسخ SAML با این ارائه‌دهنده سرویس مطابقت ندارد",
	SSO_USER_RESOLUTION_FAILED: "شناسایی کاربر SSO ممکن نبود",
	SSO_PROVIDER_MUTATION_REJECTED: "تغییر ارائه‌دهنده SSO مجاز نیست",
	SSO_PROVIDER_CHANGED:
		"ارائه‌دهنده SSO در حین انجام عملیات تغییر کرد. ارائه‌دهنده را دوباره بارگذاری کنید و دوباره تلاش کنید",
	DOMAIN_VERIFIED: "دامنه قبلاً تأیید شده است",
	NO_PENDING_VERIFICATION: "هیچ تأیید دامنه‌ای در انتظار نیست",
	INVALID_DOMAIN: "دامنه نامعتبر",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
