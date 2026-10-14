import type { PhoneNumberErrorCodesType } from "../../../types";

export const HI_HI = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "अमान्य फोन नंबर",
	PHONE_NUMBER_EXIST: "फोन नंबर पहले से मौजूद है",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "अमान्य फोन नंबर या पासवर्ड",
	UNEXPECTED_ERROR: "अप्रत्याशित त्रुटि",
	OTP_NOT_FOUND: "OTP नहीं मिला",
	OTP_EXPIRED: "OTP समाप्त हो गया",
	INVALID_OTP: "अमान्य OTP",
	PHONE_NUMBER_NOT_VERIFIED: "फोन नंबर सत्यापित नहीं",
	PHONE_NUMBER_NOT_EXIST: "फोन नंबर पंजीकृत नहीं है",
	PHONE_NUMBER_CANNOT_BE_UPDATED: "फोन नंबर अपडेट नहीं किया जा सकता",
	SEND_OTP_NOT_IMPLEMENTED: "sendOTP लागू नहीं किया गया है",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
