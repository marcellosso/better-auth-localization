import type { PasskeyErrorCodesType } from "../../../types";

export const HI_HI = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "चुनौती नहीं मिली",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"आपको इस पासकी को पंजीकृत करने की अनुमति नहीं है",
	FAILED_TO_VERIFY_REGISTRATION: "पंजीकरण सत्यापन में विफल",
	PASSKEY_NOT_FOUND: "पासकी नहीं मिली",
	AUTHENTICATION_FAILED: "प्रमाणीकरण विफल",
	UNABLE_TO_CREATE_SESSION: "सत्र बनाने में असमर्थ",
	FAILED_TO_UPDATE_PASSKEY: "पासकी अपडेट करने में विफल",
	PREVIOUSLY_REGISTERED: "पहले से पंजीकृत",
	REGISTRATION_CANCELLED: "पंजीकरण रद्द किया गया",
	AUTH_CANCELLED: "प्रमाणीकरण रद्द किया गया",
	SESSION_REQUIRED: "पासकी पंजीकरण के लिए प्रमाणित सत्र आवश्यक है",
	RESOLVE_USER_REQUIRED:
		"requireSession के false होने पर पासकी पंजीकरण के लिए प्रमाणित सत्र या resolveUser कॉलबैक आवश्यक है",
	RESOLVED_USER_INVALID: "रिज़ॉल्व किया गया उपयोगकर्ता अमान्य है",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
