import type { UsernameErrorCodesType } from "../../../types";

export const HI_HI = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "अमान्य उपयोगकर्ता नाम या पासवर्ड",
	USERNAME_IS_ALREADY_TAKEN:
		"उपयोगकर्ता नाम पहले से लिया गया है। कृपया कोई अन्य नाम आज़माएं।",
	USERNAME_TOO_SHORT: "उपयोगकर्ता नाम बहुत छोटा है",
	USERNAME_TOO_LONG: "उपयोगकर्ता नाम बहुत लंबा है",
	INVALID_USERNAME: "अमान्य उपयोगकर्ता नाम",
	INVALID_DISPLAY_USERNAME: "अमान्य प्रदर्शन नाम",
	USERNAME_IS_IMMUTABLE: "उपयोगकर्ता नाम अपडेट नहीं किया जा सकता",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
