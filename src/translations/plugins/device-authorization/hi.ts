import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const HI_HI = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "अमान्य डिवाइस कोड",
	EXPIRED_DEVICE_CODE: "डिवाइस कोड समाप्त हो गया",
	EXPIRED_USER_CODE: "उपयोगकर्ता कोड समाप्त हो गया",
	AUTHORIZATION_PENDING: "अनुमोदन लंबित",
	ACCESS_DENIED: "पहुंच अस्वीकृत",
	INVALID_USER_CODE: "अमान्य उपयोगकर्ता कोड",
	DEVICE_CODE_ALREADY_PROCESSED: "डिवाइस कोड पहले से संसाधित",
	POLLING_TOO_FREQUENTLY: "बहुत अधिक बार पूछताछ",
	INVALID_DEVICE_CODE_STATUS: "अमान्य डिवाइस कोड स्थिति",
	AUTHENTICATION_REQUIRED: "प्रमाणीकरण आवश्यक",
	DEVICE_CODE_NOT_CLAIMED:
		"डिवाइस कोड को किसी सत्यापन सत्र द्वारा क्लेम नहीं किया गया है; स्वीकृत या अस्वीकृत करने से पहले साइन इन रहते हुए `user_code` के साथ `GET /device` कॉल करें",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
