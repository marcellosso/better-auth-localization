import type { SSOErrorCodesType } from "../../../types";

export const AR_SA = {
	SINGLE_LOGOUT_NOT_ENABLED: "تسجيل الخروج الموحد غير مفعّل",
	INVALID_LOGOUT_RESPONSE: "LogoutResponse غير صالح",
	INVALID_LOGOUT_REQUEST: "LogoutRequest غير صالح",
	LOGOUT_FAILED_AT_IDP: "فشل تسجيل الخروج لدى IdP",
	IDP_SLO_NOT_SUPPORTED: "IdP لا يدعم خدمة تسجيل الخروج الموحد",
	SAML_PROVIDER_NOT_FOUND: "مزود SAML غير موجود",
	SAML_INVALID_XML: "فشل تحليل XML لاستجابة SAML",
	SAML_INVALID_ENCODING: "استجابة SAML بترميز base64 غير صالح",
	SAML_NO_ASSERTION: "استجابة SAML لا تحتوي على أي assertion",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "توقيع SAML assertion مطلوب",
	SAML_RESPONSE_INVALID_XML: "تعذر تحليل XML لاستجابة SAML",
	SAML_ASSERTION_MISSING: "استجابة SAML لا تحتوي على assertion",
	SAML_AUDIENCE_MISSING: "SAML assertion لا يحتوي على AudienceRestriction",
	SAML_AUDIENCE_MISMATCH: "جمهور SAML assertion لا يطابق مزود الخدمة هذا",
	SAML_BEARER_CONFIRMATION_MISSING:
		"SAML assertion لا يحتوي على SubjectConfirmationData من نوع bearer",
	SAML_RECIPIENT_MISSING:
		"SubjectConfirmationData من نوع bearer في SAML لا يحتوي على Recipient",
	SAML_RECIPIENT_MISMATCH:
		"Recipient في SubjectConfirmationData من نوع bearer لا يطابق مزود الخدمة هذا",
	SAML_DESTINATION_MISMATCH:
		"Destination في استجابة SAML لا يطابق مزود الخدمة هذا",
	SSO_USER_RESOLUTION_FAILED: "تعذر تحديد مستخدم SSO",
	SSO_PROVIDER_MUTATION_REJECTED: "تعديل مزود SSO غير مسموح",
	SSO_PROVIDER_CHANGED:
		"تغيّر مزود SSO أثناء تنفيذ العملية. أعد تحميل المزود وحاول مرة أخرى",
	DOMAIN_VERIFIED: "تم التحقق من النطاق بالفعل",
	NO_PENDING_VERIFICATION: "لا يوجد تحقق معلق من النطاق",
	INVALID_DOMAIN: "نطاق غير صالح",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
