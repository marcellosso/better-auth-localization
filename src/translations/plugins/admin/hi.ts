import type { AdminErrorCodesType } from "../../../types";

export const HI_HI = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "आप खुद को बैन नहीं कर सकते",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"आपको उपयोगकर्ताओं की भूमिकाएं बदलने की अनुमति नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "आपको उपयोगकर्ता बनाने की अनुमति नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"आपको उपयोगकर्ताओं की सूची देखने की अनुमति नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"आपको उपयोगकर्ताओं के सत्रों की सूची देखने की अनुमति नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "आपको उपयोगकर्ताओं को बैन करने की अनुमति नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"आपको अन्य उपयोगकर्ताओं का रूप धारण करने की अनुमति नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"आपको उपयोगकर्ताओं के सत्र रद्द करने की अनुमति नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "आपको उपयोगकर्ताओं को हटाने की अनुमति नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"आपको उपयोगकर्ताओं के पासवर्ड सेट करने की अनुमति नहीं है",
	BANNED_USER: "आपको इस एप्लिकेशन से बैन कर दिया गया है",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "आपको उपयोगकर्ता प्राप्त करने की अनुमति नहीं है",
	NO_DATA_TO_UPDATE: "अपडेट करने के लिए कोई डेटा नहीं",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"आपको उपयोगकर्ताओं को अपडेट करने की अनुमति नहीं है",
	YOU_CANNOT_REMOVE_YOURSELF: "आप खुद को हटा नहीं सकते",
	YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE:
		"आपको अस्तित्वहीन भूमिका मान सेट करने की अनुमति नहीं है",
	YOU_CANNOT_IMPERSONATE_ADMINS: "आप एडमिन का रूप धारण नहीं कर सकते",
	INVALID_ROLE_TYPE: "अमान्य भूमिका प्रकार",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL:
		"आपको उपयोगकर्ताओं का ईमेल अपडेट करने की अनुमति नहीं है",
	PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER:
		"पासवर्ड update-user के माध्यम से अपडेट नहीं किया जा सकता। इसके बजाय set-user-password एंडपॉइंट का उपयोग करें",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
