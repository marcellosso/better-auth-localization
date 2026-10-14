import type { PasskeyErrorCodesType } from "../../../types";

export const MR_MR = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "आव्हान सापडले नाही",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"तुम्हाला ही पासकी नोंदणी करण्याची परवानगी नाही",
	FAILED_TO_VERIFY_REGISTRATION: "नोंदणी सत्यापन अयशस्वी",
	PASSKEY_NOT_FOUND: "पासकी सापडली नाही",
	AUTHENTICATION_FAILED: "प्रमाणीकरण अयशस्वी",
	UNABLE_TO_CREATE_SESSION: "सत्र तयार करू शकत नाही",
	FAILED_TO_UPDATE_PASSKEY: "पासकी अपडेट करणे अयशस्वी",
	PREVIOUSLY_REGISTERED: "आधीच नोंदणीकृत",
	REGISTRATION_CANCELLED: "नोंदणी रद्द केली",
	AUTH_CANCELLED: "प्रमाणीकरण रद्द केले",
	SESSION_REQUIRED: "पासकी नोंदणीसाठी प्रमाणीकृत सत्र आवश्यक आहे",
	RESOLVE_USER_REQUIRED:
		"requireSession false असताना पासकी नोंदणीसाठी प्रमाणीकृत सत्र किंवा resolveUser कॉलबॅक आवश्यक आहे",
	RESOLVED_USER_INVALID: "रिझॉल्व्ह केलेला वापरकर्ता अवैध आहे",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
