import { ErrorCodesType } from "../types";

export const HI_HI = {
	// User related errors
	USER_NOT_FOUND: "उपयोगकर्ता नहीं मिला",
	FAILED_TO_CREATE_USER: "उपयोगकर्ता बनाने में विफल",
	FAILED_TO_UPDATE_USER: "उपयोगकर्ता अपडेट करने में विफल",
	USER_ALREADY_EXISTS: "उपयोगकर्ता पहले से मौजूद है",
	USER_EMAIL_NOT_FOUND: "उपयोगकर्ता का ईमेल नहीं मिला",
	USER_ALREADY_HAS_PASSWORD:
		"उपयोगकर्ता ने पहले से पासवर्ड सेट किया है। खाता हटाने के लिए कृपया वह पासवर्ड प्रदान करें।",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "सत्र बनाने में विफल",
	FAILED_TO_GET_SESSION: "सत्र प्राप्त करने में विफल",
	SESSION_EXPIRED:
		"सत्र समाप्त हो गया है। इस कार्रवाई को करने के लिए कृपया फिर से लॉगिन करें।",

	// Authentication errors
	INVALID_PASSWORD: "अमान्य पासवर्ड",
	INVALID_EMAIL: "अमान्य ईमेल",
	INVALID_EMAIL_OR_PASSWORD: "ईमेल या पासवर्ड अमान्य है",
	INVALID_TOKEN: "अमान्य टोकन",
	EMAIL_NOT_VERIFIED: "ईमेल सत्यापित नहीं हुआ है",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "प्रमाण पत्र खाता नहीं मिला",

	// Password related errors
	PASSWORD_TOO_SHORT: "पासवर्ड बहुत छोटा है",
	PASSWORD_TOO_LONG: "पासवर्ड बहुत लंबा है",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "खाता पहले से जुड़ा हुआ है",
	PROVIDER_NOT_FOUND: "प्रदाता नहीं मिला",
	ID_TOKEN_NOT_SUPPORTED: "id_token समर्थित नहीं है",
	FAILED_TO_GET_USER_INFO: "उपयोगकर्ता जानकारी प्राप्त करने में विफल",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "ईमेल अपडेट नहीं किया जा सकता",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "आखिरी खाते का लिंक हटाने में विफल",
	ACCOUNT_NOT_FOUND: "खाता नहीं मिला",
} satisfies ErrorCodesType;

export const LOCALES = {
    "hi-HI": HI_HI,
} as const;
