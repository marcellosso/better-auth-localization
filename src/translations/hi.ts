import { createTranslationObject } from "../utils/create-translation-object";

export const HI_HI = createTranslationObject("hi-HI", {
	// User related errors
	USER_NOT_FOUND: "उपयोगकर्ता नहीं मिला",
	FAILED_TO_CREATE_USER: "उपयोगकर्ता बनाने में विफल",
	FAILED_TO_UPDATE_USER: "उपयोगकर्ता अपडेट करने में विफल",
	USER_ALREADY_EXISTS: "उपयोगकर्ता पहले से मौजूद है",
	USER_EMAIL_NOT_FOUND: "उपयोगकर्ता का ईमेल नहीं मिला",
	USER_ALREADY_HAS_PASSWORD:
		"उपयोगकर्ता ने पहले से पासवर्ड सेट किया है। खाता हटाने के लिए कृपया वह पासवर्ड प्रदान करें।",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"उपयोगकर्ता पहले से मौजूद है। दूसरा ईमेल उपयोग करें।",

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
	INVALID_USER: "अमान्य उपयोगकर्ता",
	TOKEN_EXPIRED: "टोकन समाप्त हो गया है",
	CHANGE_EMAIL_DISABLED: "ईमेल बदलना अक्षम है",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"क्रॉस-साइट नेविगेशन लॉगिन अवरुद्ध किया गया। यह अनुरोध CSRF हमले जैसा प्रतीत होता है।",
	VERIFICATION_EMAIL_NOT_ENABLED: "सत्यापन ईमेल सक्षम नहीं है",
	EMAIL_ALREADY_VERIFIED: "ईमेल पहले से सत्यापित है",
	EMAIL_MISMATCH: "ईमेल मेल नहीं खाता",
	SESSION_NOT_FRESH: "सत्र नया नहीं है",
	LINKED_ACCOUNT_ALREADY_EXISTS: "लिंक किया गया खाता पहले से मौजूद है",
	INVALID_ORIGIN: "अमान्य ओरिजिन",
	INVALID_CALLBACK_URL: "अमान्य callbackURL",
	INVALID_REDIRECT_URL: "अमान्य redirectURL",
	INVALID_ERROR_CALLBACK_URL: "अमान्य errorCallbackURL",
	INVALID_NEW_USER_CALLBACK_URL: "अमान्य newUserCallbackURL",
	MISSING_OR_NULL_ORIGIN: "Origin अनुपस्थित या शून्य है",
	CALLBACK_URL_REQUIRED: "callbackURL आवश्यक है",
	FAILED_TO_CREATE_VERIFICATION: "सत्यापन बनाने में असमर्थ",
	FIELD_NOT_ALLOWED: "इस फ़ील्ड को सेट करने की अनुमति नहीं है",
	ASYNC_VALIDATION_NOT_SUPPORTED: "एसिंक्रोनस सत्यापन समर्थित नहीं है",
	VALIDATION_ERROR: "सत्यापन त्रुटि",
	MISSING_FIELD: "फ़ील्ड आवश्यक है",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"POST मेथड के लिए सत्र कॉन्फ़िगरेशन में deferSessionRefresh सक्षम होना आवश्यक है",
	BODY_MUST_BE_AN_OBJECT: "बॉडी एक ऑब्जेक्ट होनी चाहिए",
	PASSWORD_ALREADY_SET: "उपयोगकर्ता ने पहले से पासवर्ड सेट किया हुआ है",
});

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
