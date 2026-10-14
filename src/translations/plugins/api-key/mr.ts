import type { ApiKeyErrorCodesType } from "../../../types";

export const MR_MR = {
	// Api key related errors
	INVALID_METADATA_TYPE: "मेटाडेटा ऑब्जेक्ट किंवा अपरिभाषित असावे",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"रिफिल मध्यांतर प्रदान केले जाते तेव्हा रिफिल रक्कम आवश्यक आहे",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"रिफिल रक्कम प्रदान केली जाते तेव्हा रिफिल मध्यांतर आवश्यक आहे",
	USER_BANNED: "वापरकर्ता प्रतिबंधित",
	UNAUTHORIZED_SESSION: "अनधिकृत किंवा अवैध सत्र",
	KEY_NOT_FOUND: "API की सापडली नाही",
	KEY_DISABLED: "API की अक्षम केली",
	KEY_EXPIRED: "API की कालबाह्य झाली",
	USAGE_EXCEEDED: "API की वापर मर्यादा ओलांडली",
	KEY_NOT_RECOVERABLE: "API की पुनर्प्राप्त करता येत नाही",
	EXPIRES_IN_IS_TOO_SMALL: "कालबाह्यता वेळ पूर्वनिर्धारित किमान मूल्यापेक्षा कमी आहे.",
	EXPIRES_IN_IS_TOO_LARGE: "कालबाह्यता वेळ पूर्वनिर्धारित कमाल मूल्यापेक्षा जास्त आहे.",
	INVALID_REMAINING: "उर्वरित मूल्य खूप मोठे किंवा खूप लहान आहे.",
	INVALID_PREFIX_LENGTH: "उपसर्ग आकार खूप मोठा किंवा खूप लहान आहे.",
	INVALID_NAME_LENGTH: "नाव आकार खूप मोठा किंवा खूप लहान आहे.",
	METADATA_DISABLED: "मेटाडेटा अक्षम केले आहे.",
	RATE_LIMIT_EXCEEDED: "विनंती मर्यादा ओलांडली.",
	NO_VALUES_TO_UPDATE: "अपडेट करण्यासाठी कोणतीही मूल्ये नाहीत.",
	KEY_DISABLED_EXPIRATION: "सानुकूल की कालबाह्यता मूल्ये अक्षम केली आहेत.",
	INVALID_API_KEY: "अवैध API की.",
	INVALID_USER_ID_FROM_API_KEY: "API की वरून वापरकर्ता ID अवैध आहे.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"API की गेटरने अवैध प्रकार परत केला. अपेक्षित: स्ट्रिंग.",
	SERVER_ONLY_PROPERTY:
		"आपण सेट करण्याचा प्रयत्न करत असलेली गुणधर्म फक्त सर्व्हर प्रमाणीकरण उदाहरणावरून सेट केली जाऊ शकते.",
	FAILED_TO_UPDATE_API_KEY: "API की अपडेट करण्यात अयशस्वी",
	NAME_REQUIRED: "API की नाव आवश्यक आहे.",
	INVALID_REFERENCE_ID_FROM_API_KEY: "API की मधील रेफरन्स ID अवैध आहे.",
	ORGANIZATION_ID_REQUIRED: "संस्थेच्या मालकीच्या API की साठी संस्था ID आवश्यक आहे.",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"ही API की ज्या संस्थेच्या मालकीची आहे त्या संस्थेचे तुम्ही सदस्य नाही.",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"तुम्हाला संस्थेच्या API की वर ही कृती करण्याची परवानगी नाही.",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"डीफॉल्ट api-key कॉन्फिगरेशन सापडले नाही.",
	ORGANIZATION_PLUGIN_REQUIRED:
		"संस्थेच्या मालकीच्या API की साठी संस्था प्लगइन आवश्यक आहे. कृपया संस्था प्लगइन इंस्टॉल आणि कॉन्फिगर करा.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
