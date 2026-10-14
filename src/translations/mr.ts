import { createTranslationObject } from "../utils/create-translation-object";

export const MR_MR = createTranslationObject("mr-MR", {
	// User related errors
	USER_NOT_FOUND: "वापरकर्ता सापडला नाही",
	FAILED_TO_CREATE_USER: "वापरकर्ता तयार करण्यात अयशस्वी",
	FAILED_TO_UPDATE_USER: "वापरकर्ता अद्यतनित करण्यात अयशस्वी",
	USER_ALREADY_EXISTS: "वापरकर्ता आधीच अस्तित्वात आहे",
	USER_EMAIL_NOT_FOUND: "वापरकर्त्याचा ईमेल सापडला नाही",
	USER_ALREADY_HAS_PASSWORD:
		"वापरकर्त्याने आधीच पासवर्ड सेट केला आहे. खाते हटवण्यासाठी कृपया तो पासवर्ड द्या.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"वापरकर्ता आधीच अस्तित्वात आहे. दुसरा ईमेल वापरा.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "सत्र तयार करण्यात अयशस्वी",
	FAILED_TO_GET_SESSION: "सत्र मिळवण्यात अयशस्वी",
	SESSION_EXPIRED: "सत्राची मुदत संपली आहे. ही कृती करण्यासाठी कृपया पुन्हा लॉगिन करा.",

	// Authentication errors
	INVALID_PASSWORD: "अवैध पासवर्ड",
	INVALID_EMAIL: "अवैध ईमेल",
	INVALID_EMAIL_OR_PASSWORD: "ईमेल किंवा पासवर्ड अवैध आहे",
	INVALID_TOKEN: "अवैध टोकन",
	EMAIL_NOT_VERIFIED: "ईमेल सत्यापित केलेले नाही",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "प्रमाणपत्र खाते सापडले नाही",

	// Password related errors
	PASSWORD_TOO_SHORT: "पासवर्ड खूप लहान आहे",
	PASSWORD_TOO_LONG: "पासवर्ड खूप मोठा आहे",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "खाते आधीच जोडले गेले आहे",
	PROVIDER_NOT_FOUND: "प्रदाता सापडला नाही",
	ID_TOKEN_NOT_SUPPORTED: "id_token समर्थित नाही",
	FAILED_TO_GET_USER_INFO: "वापरकर्त्याची माहिती मिळवण्यात अयशस्वी",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "ईमेल अद्यतनित करता येत नाही",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "शेवटचे खाते अनलिंक करण्यात अयशस्वी",
	ACCOUNT_NOT_FOUND: "खाते सापडले नाही",
	INVALID_USER: "अवैध वापरकर्ता",
	TOKEN_EXPIRED: "टोकनची मुदत संपली आहे",
	CHANGE_EMAIL_DISABLED: "ईमेल बदलणे अक्षम आहे",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"क्रॉस-साइट नेव्हिगेशन लॉगिन अवरोधित केले. ही विनंती CSRF हल्ल्यासारखी दिसते.",
	VERIFICATION_EMAIL_NOT_ENABLED: "सत्यापन ईमेल सक्षम नाही",
	EMAIL_ALREADY_VERIFIED: "ईमेल आधीच सत्यापित आहे",
	EMAIL_MISMATCH: "ईमेल जुळत नाही",
	SESSION_NOT_FRESH: "सत्र नवीन नाही",
	LINKED_ACCOUNT_ALREADY_EXISTS: "लिंक केलेले खाते आधीपासून अस्तित्वात आहे",
	INVALID_ORIGIN: "अवैध ओरिजिन",
	INVALID_CALLBACK_URL: "अवैध callbackURL",
	INVALID_REDIRECT_URL: "अवैध redirectURL",
	INVALID_ERROR_CALLBACK_URL: "अवैध errorCallbackURL",
	INVALID_NEW_USER_CALLBACK_URL: "अवैध newUserCallbackURL",
	MISSING_OR_NULL_ORIGIN: "Origin अनुपस्थित किंवा शून्य आहे",
	CALLBACK_URL_REQUIRED: "callbackURL आवश्यक आहे",
	FAILED_TO_CREATE_VERIFICATION: "सत्यापन तयार करता आले नाही",
	FIELD_NOT_ALLOWED: "हे फील्ड सेट करण्याची परवानगी नाही",
	ASYNC_VALIDATION_NOT_SUPPORTED: "असिंक्रोनस सत्यापन समर्थित नाही",
	VALIDATION_ERROR: "सत्यापन त्रुटी",
	MISSING_FIELD: "फील्ड आवश्यक आहे",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"POST मेथडसाठी सत्र कॉन्फिगरेशनमध्ये deferSessionRefresh सक्षम असणे आवश्यक आहे",
	BODY_MUST_BE_AN_OBJECT: "बॉडी ऑब्जेक्ट असणे आवश्यक आहे",
	PASSWORD_ALREADY_SET: "वापरकर्त्याने आधीच पासवर्ड सेट केला आहे",
});

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
