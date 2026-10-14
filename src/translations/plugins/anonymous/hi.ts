import type { AnonymousErrorCodesType } from "../../../types";

export const HI_HI = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "सत्र बनाने में विफल",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"अज्ञात उपयोगकर्ता फिर से अज्ञात रूप से साइन इन नहीं कर सकते",
	INVALID_EMAIL_FORMAT: "ईमेल मान्य प्रारूप में नहीं बनाया गया था",
	FAILED_TO_DELETE_ANONYMOUS_USER: "गुमनाम उपयोगकर्ता को हटाने में विफल",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS: "गुमनाम उपयोगकर्ता के सत्र हटाने में विफल",
	USER_IS_NOT_ANONYMOUS: "उपयोगकर्ता गुमनाम नहीं है",
	DELETE_ANONYMOUS_USER_DISABLED: "गुमनाम उपयोगकर्ताओं को हटाना अक्षम है",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
