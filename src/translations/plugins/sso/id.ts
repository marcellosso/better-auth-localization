import type { SSOErrorCodesType } from "../../../types";

export const ID_ID = {
	SINGLE_LOGOUT_NOT_ENABLED: "Single Logout tidak diaktifkan",
	INVALID_LOGOUT_RESPONSE: "LogoutResponse tidak valid",
	INVALID_LOGOUT_REQUEST: "LogoutRequest tidak valid",
	LOGOUT_FAILED_AT_IDP: "Logout gagal di IdP",
	IDP_SLO_NOT_SUPPORTED: "IdP tidak mendukung Single Logout Service",
	SAML_PROVIDER_NOT_FOUND: "Penyedia SAML tidak ditemukan",
	SAML_INVALID_XML: "Gagal mengurai XML respons SAML",
	SAML_INVALID_ENCODING: "Respons SAML berenkode base64 tidak valid",
	SAML_NO_ASSERTION: "Respons SAML tidak berisi assertion",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "Tanda tangan assertion SAML diperlukan",
	SAML_RESPONSE_INVALID_XML: "XML respons SAML tidak dapat diurai",
	SAML_ASSERTION_MISSING: "Respons SAML tidak memiliki assertion",
	SAML_AUDIENCE_MISSING: "Assertion SAML tidak memiliki AudienceRestriction",
	SAML_AUDIENCE_MISMATCH:
		"Audience assertion SAML tidak cocok dengan Service Provider ini",
	SAML_BEARER_CONFIRMATION_MISSING:
		"Assertion SAML tidak memiliki bearer SubjectConfirmationData",
	SAML_RECIPIENT_MISSING:
		"bearer SubjectConfirmationData SAML tidak memiliki Recipient",
	SAML_RECIPIENT_MISMATCH:
		"Recipient pada bearer SubjectConfirmationData SAML tidak cocok dengan Service Provider ini",
	SAML_DESTINATION_MISMATCH:
		"Destination respons SAML tidak cocok dengan Service Provider ini",
	SSO_USER_RESOLUTION_FAILED: "Tidak dapat menentukan pengguna SSO",
	SSO_PROVIDER_MUTATION_REJECTED: "Perubahan penyedia SSO tidak diizinkan",
	SSO_PROVIDER_CHANGED:
		"Penyedia SSO berubah saat operasi sedang berlangsung. Muat ulang penyedia dan coba lagi",
	DOMAIN_VERIFIED: "Domain sudah diverifikasi",
	NO_PENDING_VERIFICATION: "Tidak ada verifikasi domain yang tertunda",
	INVALID_DOMAIN: "Domain tidak valid",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
