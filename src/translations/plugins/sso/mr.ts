import type { SSOErrorCodesType } from "../../../types";

export const MR_MR = {
	SINGLE_LOGOUT_NOT_ENABLED: "सिंगल लॉगआउट सक्षम नाही",
	INVALID_LOGOUT_RESPONSE: "अवैध LogoutResponse",
	INVALID_LOGOUT_REQUEST: "अवैध LogoutRequest",
	LOGOUT_FAILED_AT_IDP: "IdP वर लॉगआउट अयशस्वी झाले",
	IDP_SLO_NOT_SUPPORTED: "IdP सिंगल लॉगआउट सेवेला समर्थन देत नाही",
	SAML_PROVIDER_NOT_FOUND: "SAML प्रदाता सापडला नाही",
	SAML_INVALID_XML: "SAML प्रतिसाद XML पार्स करण्यात अयशस्वी",
	SAML_INVALID_ENCODING: "अवैध base64-एन्कोडेड SAML प्रतिसाद",
	SAML_NO_ASSERTION: "SAML प्रतिसादात कोणतेही असर्शन नाही",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "SAML असर्शन स्वाक्षरी आवश्यक आहे",
	SAML_RESPONSE_INVALID_XML: "SAML प्रतिसाद XML पार्स करता आला नाही",
	SAML_ASSERTION_MISSING: "SAML प्रतिसादात असर्शन अनुपस्थित आहे",
	SAML_AUDIENCE_MISSING: "SAML असर्शनमध्ये AudienceRestriction अनुपस्थित आहे",
	SAML_AUDIENCE_MISMATCH: "SAML असर्शनचा ऑडियन्स या सर्व्हिस प्रोव्हायडरशी जुळत नाही",
	SAML_BEARER_CONFIRMATION_MISSING:
		"SAML असर्शनमध्ये bearer SubjectConfirmationData अनुपस्थित आहे",
	SAML_RECIPIENT_MISSING:
		"SAML bearer SubjectConfirmationData मध्ये Recipient अनुपस्थित आहे",
	SAML_RECIPIENT_MISMATCH:
		"SAML bearer SubjectConfirmationData चा Recipient या सर्व्हिस प्रोव्हायडरशी जुळत नाही",
	SAML_DESTINATION_MISMATCH:
		"SAML प्रतिसादाचा Destination या सर्व्हिस प्रोव्हायडरशी जुळत नाही",
	SSO_USER_RESOLUTION_FAILED: "SSO वापरकर्त्याची ओळख पटवता आली नाही",
	SSO_PROVIDER_MUTATION_REJECTED: "SSO प्रदात्यात बदल करण्याची परवानगी नाही",
	SSO_PROVIDER_CHANGED:
		"ऑपरेशन सुरू असताना SSO प्रदाता बदलला. प्रदाता पुन्हा लोड करा आणि पुन्हा प्रयत्न करा",
	DOMAIN_VERIFIED: "डोमेन आधीच सत्यापित झाले आहे",
	NO_PENDING_VERIFICATION: "कोणतेही प्रलंबित डोमेन सत्यापन अस्तित्वात नाही",
	INVALID_DOMAIN: "अवैध डोमेन",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
