import type { SSOErrorCodesType } from "../../../types";

export const AZ_AZ = {
	SINGLE_LOGOUT_NOT_ENABLED: "Single Logout aktiv deyil",
	INVALID_LOGOUT_RESPONSE: "Yanlış LogoutResponse",
	INVALID_LOGOUT_REQUEST: "Yanlış LogoutRequest",
	LOGOUT_FAILED_AT_IDP: "IdP-də çıxış uğursuz oldu",
	IDP_SLO_NOT_SUPPORTED: "IdP Single Logout Service-i dəstəkləmir",
	SAML_PROVIDER_NOT_FOUND: "SAML provayderi tapılmadı",
	SAML_INVALID_XML: "SAML cavabının XML-i təhlil edilə bilmədi",
	SAML_INVALID_ENCODING: "Yanlış base64 kodlu SAML cavabı",
	SAML_NO_ASSERTION: "SAML cavabında heç bir assertion yoxdur",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "SAML assertion imzası tələb olunur",
	SAML_RESPONSE_INVALID_XML: "SAML cavabının XML-i təhlil edilə bilmədi",
	SAML_ASSERTION_MISSING: "SAML cavabında assertion yoxdur",
	SAML_AUDIENCE_MISSING: "SAML assertion-da AudienceRestriction yoxdur",
	SAML_AUDIENCE_MISMATCH:
		"SAML assertion auditoriyası bu Service Provider ilə uyğun gəlmir",
	SAML_BEARER_CONFIRMATION_MISSING:
		"SAML assertion-da bearer SubjectConfirmationData yoxdur",
	SAML_RECIPIENT_MISSING:
		"SAML bearer SubjectConfirmationData-da Recipient yoxdur",
	SAML_RECIPIENT_MISMATCH:
		"SAML bearer SubjectConfirmationData Recipient dəyəri bu Service Provider ilə uyğun gəlmir",
	SAML_DESTINATION_MISMATCH:
		"SAML cavabının Destination dəyəri bu Service Provider ilə uyğun gəlmir",
	SSO_USER_RESOLUTION_FAILED: "SSO istifadəçisi müəyyən edilə bilmədi",
	SSO_PROVIDER_MUTATION_REJECTED:
		"SSO provayderinin dəyişdirilməsinə icazə verilmir",
	SSO_PROVIDER_CHANGED:
		"Əməliyyat davam edərkən SSO provayderi dəyişdi. Provayderi yenidən yükləyin və təkrar cəhd edin",
	DOMAIN_VERIFIED: "Domen artıq təsdiqlənib",
	NO_PENDING_VERIFICATION: "Gözləyən domen təsdiqi yoxdur",
	INVALID_DOMAIN: "Yanlış domen",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	az: AZ_AZ,
	"az-AZ": AZ_AZ,
} as const;
