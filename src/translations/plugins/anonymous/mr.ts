import type { AnonymousErrorCodesType } from "../../../types";

export const MR_MR = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "सत्र तयार करण्यात अयशस्वी",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"अज्ञात वापरकर्ते पुन्हा अज्ञात म्हणून साइन इन करू शकत नाहीत",
	INVALID_EMAIL_FORMAT: "ईमेल वैध स्वरूपात तयार केला गेला नाही",
	FAILED_TO_DELETE_ANONYMOUS_USER: "अनामिक वापरकर्ता हटवण्यात अयशस्वी",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"अनामिक वापरकर्त्याची सत्रे हटवण्यात अयशस्वी",
	USER_IS_NOT_ANONYMOUS: "वापरकर्ता अनामिक नाही",
	DELETE_ANONYMOUS_USER_DISABLED: "अनामिक वापरकर्ते हटवणे अक्षम आहे",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
