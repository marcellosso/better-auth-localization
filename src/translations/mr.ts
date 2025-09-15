import type { ErrorCodesType } from "../types";

export const MR_MR = {
	// User related errors
	USER_NOT_FOUND: "वापरकर्ता सापडला नाही",
	FAILED_TO_CREATE_USER: "वापरकर्ता तयार करण्यात अयशस्वी",
	FAILED_TO_UPDATE_USER: "वापरकर्ता अद्यतनित करण्यात अयशस्वी",
	USER_ALREADY_EXISTS: "वापरकर्ता आधीच अस्तित्वात आहे",
	USER_EMAIL_NOT_FOUND: "वापरकर्त्याचा ईमेल सापडला नाही",
	USER_ALREADY_HAS_PASSWORD:
		"वापरकर्त्याने आधीच पासवर्ड सेट केला आहे. खाते हटवण्यासाठी कृपया तो पासवर्ड द्या.",

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
} satisfies ErrorCodesType;

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
