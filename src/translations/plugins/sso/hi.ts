import type { SSOErrorCodesType } from "../../../types";

export const HI_HI = {
	SINGLE_LOGOUT_NOT_ENABLED: "सिंगल लॉगआउट सक्षम नहीं है",
	INVALID_LOGOUT_RESPONSE: "अमान्य LogoutResponse",
	INVALID_LOGOUT_REQUEST: "अमान्य LogoutRequest",
	LOGOUT_FAILED_AT_IDP: "IdP पर लॉगआउट विफल रहा",
	IDP_SLO_NOT_SUPPORTED: "IdP सिंगल लॉगआउट सेवा का समर्थन नहीं करता",
	SAML_PROVIDER_NOT_FOUND: "SAML प्रदाता नहीं मिला",
	SAML_INVALID_XML: "SAML प्रतिक्रिया XML को पार्स करने में विफल",
	SAML_INVALID_ENCODING: "अमान्य base64-एन्कोडेड SAML प्रतिक्रिया",
	SAML_NO_ASSERTION: "SAML प्रतिक्रिया में कोई एसर्शन नहीं है",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "SAML एसर्शन हस्ताक्षर आवश्यक है",
	SAML_RESPONSE_INVALID_XML: "SAML प्रतिक्रिया XML को पार्स नहीं किया जा सका",
	SAML_ASSERTION_MISSING: "SAML प्रतिक्रिया में एसर्शन अनुपस्थित है",
	SAML_AUDIENCE_MISSING: "SAML एसर्शन में AudienceRestriction अनुपस्थित है",
	SAML_AUDIENCE_MISMATCH: "SAML एसर्शन का ऑडियंस इस सर्विस प्रोवाइडर से मेल नहीं खाता",
	SAML_BEARER_CONFIRMATION_MISSING:
		"SAML एसर्शन में bearer SubjectConfirmationData अनुपस्थित है",
	SAML_RECIPIENT_MISSING:
		"SAML bearer SubjectConfirmationData में Recipient अनुपस्थित है",
	SAML_RECIPIENT_MISMATCH:
		"SAML bearer SubjectConfirmationData का Recipient इस सर्विस प्रोवाइडर से मेल नहीं खाता",
	SAML_DESTINATION_MISMATCH:
		"SAML प्रतिक्रिया का Destination इस सर्विस प्रोवाइडर से मेल नहीं खाता",
	SSO_USER_RESOLUTION_FAILED: "SSO उपयोगकर्ता की पहचान करने में असमर्थ",
	SSO_PROVIDER_MUTATION_REJECTED: "SSO प्रदाता में बदलाव की अनुमति नहीं है",
	SSO_PROVIDER_CHANGED:
		"ऑपरेशन के दौरान SSO प्रदाता बदल गया। प्रदाता को फिर से लोड करें और पुनः प्रयास करें",
	DOMAIN_VERIFIED: "डोमेन पहले ही सत्यापित हो चुका है",
	NO_PENDING_VERIFICATION: "कोई लंबित डोमेन सत्यापन मौजूद नहीं है",
	INVALID_DOMAIN: "अमान्य डोमेन",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
