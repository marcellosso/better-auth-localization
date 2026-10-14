import type { ApiKeyErrorCodesType } from "../../../types";

export const HI_HI = {
	// Api key related errors
	INVALID_METADATA_TYPE: "मेटाडेटा एक ऑब्जेक्ट या अपरिभाषित होना चाहिए",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"रिफिल अंतराल प्रदान किए जाने पर रिफिल राशि आवश्यक है",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"रिफिल राशि प्रदान किए जाने पर रिफिल अंतराल आवश्यक है",
	USER_BANNED: "उपयोगकर्ता प्रतिबंधित",
	UNAUTHORIZED_SESSION: "अनधिकृत या अमान्य सत्र",
	KEY_NOT_FOUND: "API कुंजी नहीं मिली",
	KEY_DISABLED: "API कुंजी अक्षम",
	KEY_EXPIRED: "API कुंजी समाप्त हो गई",
	USAGE_EXCEEDED: "API कुंजी ने उपयोग सीमा पार कर ली",
	KEY_NOT_RECOVERABLE: "API कुंजी पुनर्प्राप्त योग्य नहीं है",
	EXPIRES_IN_IS_TOO_SMALL: "समाप्ति समय पूर्वनिर्धारित न्यूनतम मान से कम है।",
	EXPIRES_IN_IS_TOO_LARGE: "समाप्ति समय पूर्वनिर्धारित अधिकतम मान से अधिक है।",
	INVALID_REMAINING: "शेष मान बहुत बड़ा या बहुत छोटा है।",
	INVALID_PREFIX_LENGTH: "उपसर्ग आकार बहुत बड़ा या बहुत छोटा है।",
	INVALID_NAME_LENGTH: "नाम आकार बहुत बड़ा या बहुत छोटा है।",
	METADATA_DISABLED: "मेटाडेटा अक्षम है।",
	RATE_LIMIT_EXCEEDED: "अनुरोध सीमा पार हो गई।",
	NO_VALUES_TO_UPDATE: "अपडेट करने के लिए कोई मान नहीं।",
	KEY_DISABLED_EXPIRATION: "कस्टम कुंजी समाप्ति मान अक्षम हैं।",
	INVALID_API_KEY: "अमान्य API कुंजी।",
	INVALID_USER_ID_FROM_API_KEY: "API कुंजी से उपयोगकर्ता ID अमान्य है।",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"API कुंजी प्राप्तकर्ता ने अमान्य प्रकार लौटाया। अपेक्षित: स्ट्रिंग।",
	SERVER_ONLY_PROPERTY:
		"आप जो गुण सेट करने का प्रयास कर रहे हैं वह केवल सर्वर प्रमाणीकरण उदाहरण से सेट किया जा सकता है।",
	FAILED_TO_UPDATE_API_KEY: "API कुंजी अपडेट करने में विफल",
	NAME_REQUIRED: "API कुंजी नाम आवश्यक है।",
	INVALID_REFERENCE_ID_FROM_API_KEY: "API कुंजी से प्राप्त रेफ़रेंस ID अमान्य है।",
	ORGANIZATION_ID_REQUIRED:
		"संगठन के स्वामित्व वाली API कुंजियों के लिए संगठन ID आवश्यक है।",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"आप उस संगठन के सदस्य नहीं हैं जिसके पास यह API कुंजी है।",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"आपको संगठन की API कुंजियों पर यह कार्रवाई करने की अनुमति नहीं है।",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"कोई डिफ़ॉल्ट api-key कॉन्फ़िगरेशन नहीं मिला।",
	ORGANIZATION_PLUGIN_REQUIRED:
		"संगठन के स्वामित्व वाली API कुंजियों के लिए संगठन प्लगइन आवश्यक है। कृपया संगठन प्लगइन इंस्टॉल और कॉन्फ़िगर करें।",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
