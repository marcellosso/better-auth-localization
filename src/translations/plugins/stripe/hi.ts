import type { StripeErrorCodesType } from "../../../types";

export const HI_HI = {
	UNAUTHORIZED: "अनधिकृत पहुंच",
	INVALID_REQUEST_BODY: "अमान्य अनुरोध बॉडी",
	SUBSCRIPTION_NOT_FOUND: "सदस्यता नहीं मिली",
	SUBSCRIPTION_PLAN_NOT_FOUND: "सदस्यता योजना नहीं मिली",
	ALREADY_SUBSCRIBED_PLAN: "आपने पहले से इस योजना की सदस्यता ले रखी है",
	REFERENCE_ID_NOT_ALLOWED: "रेफ़रेंस ID की अनुमति नहीं है",
	CUSTOMER_NOT_FOUND: "इस उपयोगकर्ता के लिए Stripe ग्राहक नहीं मिला",
	UNABLE_TO_CREATE_CUSTOMER: "ग्राहक बनाने में असमर्थ",
	UNABLE_TO_CREATE_BILLING_PORTAL: "बिलिंग पोर्टल सत्र बनाने में असमर्थ",
	STRIPE_SIGNATURE_NOT_FOUND: "Stripe हस्ताक्षर नहीं मिला",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Stripe वेबहुक सीक्रेट नहीं मिला",
	STRIPE_WEBHOOK_ERROR: "Stripe वेबहुक त्रुटि",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Stripe इवेंट बनाने में विफल",
	FAILED_TO_FETCH_PLANS: "योजनाएं प्राप्त करने में विफल",
	EMAIL_VERIFICATION_REQUIRED:
		"किसी योजना की सदस्यता लेने से पहले ईमेल सत्यापन आवश्यक है",
	SUBSCRIPTION_NOT_ACTIVE: "सदस्यता सक्रिय नहीं है",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"सदस्यता रद्द करने के लिए निर्धारित नहीं है",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"सदस्यता में कोई लंबित रद्दीकरण या निर्धारित योजना परिवर्तन नहीं है",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED: "संगठन सदस्यता सक्षम नहीं है",
	AUTHORIZE_REFERENCE_REQUIRED:
		"संगठन सदस्यता के लिए authorizeReference कॉलबैक कॉन्फ़िगर किया जाना आवश्यक है",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"सक्रिय सदस्यता वाले संगठन को हटाया नहीं जा सकता",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"रेफ़रेंस ID आवश्यक है। referenceId प्रदान करें या सत्र में activeOrganizationId सेट करें",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
