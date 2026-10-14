import type { SSOErrorCodesType } from "../../../types";

export const TR_TR = {
	SINGLE_LOGOUT_NOT_ENABLED: "Tek Oturum Kapatma etkin değil",
	INVALID_LOGOUT_RESPONSE: "Geçersiz LogoutResponse",
	INVALID_LOGOUT_REQUEST: "Geçersiz LogoutRequest",
	LOGOUT_FAILED_AT_IDP: "IdP'de oturum kapatma başarısız oldu",
	IDP_SLO_NOT_SUPPORTED: "IdP, Tek Oturum Kapatma Hizmeti'ni desteklemiyor",
	SAML_PROVIDER_NOT_FOUND: "SAML sağlayıcısı bulunamadı",
	SAML_INVALID_XML: "SAML yanıtı XML'i ayrıştırılamadı",
	SAML_INVALID_ENCODING: "Geçersiz base64 kodlu SAML yanıtı",
	SAML_NO_ASSERTION: "SAML yanıtı hiçbir assertion içermiyor",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "SAML assertion imzası gerekli",
	SAML_RESPONSE_INVALID_XML: "SAML yanıtı XML'i ayrıştırılamadı",
	SAML_ASSERTION_MISSING: "SAML yanıtında assertion eksik",
	SAML_AUDIENCE_MISSING: "SAML assertion'ında AudienceRestriction eksik",
	SAML_AUDIENCE_MISMATCH:
		"SAML assertion hedef kitlesi bu Service Provider ile eşleşmiyor",
	SAML_BEARER_CONFIRMATION_MISSING:
		"SAML assertion'ında bearer SubjectConfirmationData eksik",
	SAML_RECIPIENT_MISSING:
		"SAML bearer SubjectConfirmationData içinde Recipient eksik",
	SAML_RECIPIENT_MISMATCH:
		"SAML bearer SubjectConfirmationData Recipient değeri bu Service Provider ile eşleşmiyor",
	SAML_DESTINATION_MISMATCH:
		"SAML yanıtı Destination değeri bu Service Provider ile eşleşmiyor",
	SSO_USER_RESOLUTION_FAILED: "SSO kullanıcısı çözümlenemedi",
	SSO_PROVIDER_MUTATION_REJECTED:
		"SSO sağlayıcısını değiştirmeye izin verilmiyor",
	SSO_PROVIDER_CHANGED:
		"İşlem sürerken SSO sağlayıcısı değişti. Sağlayıcıyı yeniden yükleyip tekrar deneyin",
	DOMAIN_VERIFIED: "Alan adı zaten doğrulanmış",
	NO_PENDING_VERIFICATION: "Bekleyen bir alan adı doğrulaması yok",
	INVALID_DOMAIN: "Geçersiz alan adı",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
