import type { SSOErrorCodesType } from "../../../types";

export const CKB_IQ = {
	SINGLE_LOGOUT_NOT_ENABLED: "Single Logout چالاک نەکراوە",
	INVALID_LOGOUT_RESPONSE: "LogoutResponse نادروستە",
	INVALID_LOGOUT_REQUEST: "LogoutRequest نادروستە",
	LOGOUT_FAILED_AT_IDP: "چوونەدەرەوە لە IdP سەرنەکەوت",
	IDP_SLO_NOT_SUPPORTED: "IdP پشتگیری خزمەتگوزاری Single Logout ناکات",
	SAML_PROVIDER_NOT_FOUND: "دابینکەری SAML نەدۆزرایەوە",
	SAML_INVALID_XML: "نەتوانرا XMLـی وەڵامی SAML شی بکرێتەوە",
	SAML_INVALID_ENCODING: "وەڵامی SAML بە base64 ی نادروست کۆد کراوە",
	SAML_NO_ASSERTION: "وەڵامی SAML هیچ assertion ێکی تێدا نییە",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "ئیمزای SAML assertion پێویستە",
	SAML_RESPONSE_INVALID_XML: "XMLـی وەڵامی SAML نەتوانرا شی بکرێتەوە",
	SAML_ASSERTION_MISSING: "وەڵامی SAML assertion ی تێدا نییە",
	SAML_AUDIENCE_MISSING: "SAML assertion AudienceRestriction ی تێدا نییە",
	SAML_AUDIENCE_MISMATCH:
		"بینەری SAML assertion لەگەڵ ئەم Service Provider ـە یەک ناگرێتەوە",
	SAML_BEARER_CONFIRMATION_MISSING:
		"SAML assertion SubjectConfirmationData ی جۆری bearer ی تێدا نییە",
	SAML_RECIPIENT_MISSING:
		"SubjectConfirmationData ی جۆری bearer ی SAML هیچ Recipient ێکی تێدا نییە",
	SAML_RECIPIENT_MISMATCH:
		"Recipient ی SubjectConfirmationData ی جۆری bearer لەگەڵ ئەم Service Provider ـە یەک ناگرێتەوە",
	SAML_DESTINATION_MISMATCH:
		"Destination ی وەڵامی SAML لەگەڵ ئەم Service Provider ـە یەک ناگرێتەوە",
	SSO_USER_RESOLUTION_FAILED: "نەتوانرا بەکارهێنەری SSO دیاری بکرێت",
	SSO_PROVIDER_MUTATION_REJECTED: "گۆڕینی دابینکەری SSO ڕێگەپێدراو نییە",
	SSO_PROVIDER_CHANGED:
		"دابینکەری SSO لە کاتی ئەنجامدانی کردارەکەدا گۆڕدرا. دابینکەرەکە دووبارە باربکە و دووبارە هەوڵبدەرەوە",
	DOMAIN_VERIFIED: "دۆمەین پێشتر پشتڕاست کراوەتەوە",
	NO_PENDING_VERIFICATION: "هیچ پشتڕاستکردنەوەیەکی دۆمەین چاوەڕێ نییە",
	INVALID_DOMAIN: "دۆمەینی نادروست",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
