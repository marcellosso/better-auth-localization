import type { StripeErrorCodesType } from "../../../types";

export const MR_MR = {
	UNAUTHORIZED: "अनधिकृत प्रवेश",
	INVALID_REQUEST_BODY: "अवैध विनंती बॉडी",
	SUBSCRIPTION_NOT_FOUND: "सदस्यता सापडली नाही",
	SUBSCRIPTION_PLAN_NOT_FOUND: "सदस्यता योजना सापडली नाही",
	ALREADY_SUBSCRIBED_PLAN: "तुम्ही आधीच या योजनेचे सदस्यत्व घेतले आहे",
	REFERENCE_ID_NOT_ALLOWED: "रेफरन्स ID ला परवानगी नाही",
	CUSTOMER_NOT_FOUND: "या वापरकर्त्यासाठी Stripe ग्राहक सापडला नाही",
	UNABLE_TO_CREATE_CUSTOMER: "ग्राहक तयार करता आला नाही",
	UNABLE_TO_CREATE_BILLING_PORTAL: "बिलिंग पोर्टल सत्र तयार करता आले नाही",
	STRIPE_SIGNATURE_NOT_FOUND: "Stripe स्वाक्षरी सापडली नाही",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Stripe वेबहुक सीक्रेट सापडले नाही",
	STRIPE_WEBHOOK_ERROR: "Stripe वेबहुक त्रुटी",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Stripe इव्हेंट तयार करण्यात अयशस्वी",
	FAILED_TO_FETCH_PLANS: "योजना मिळवण्यात अयशस्वी",
	EMAIL_VERIFICATION_REQUIRED: "योजनेचे सदस्यत्व घेण्यापूर्वी ईमेल सत्यापन आवश्यक आहे",
	SUBSCRIPTION_NOT_ACTIVE: "सदस्यता सक्रिय नाही",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"सदस्यता रद्द करण्यासाठी नियोजित नाही",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"सदस्यतेत कोणतेही प्रलंबित रद्दीकरण किंवा नियोजित योजना बदल नाही",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED: "संस्था सदस्यता सक्षम नाही",
	AUTHORIZE_REFERENCE_REQUIRED:
		"संस्था सदस्यतेसाठी authorizeReference कॉलबॅक कॉन्फिगर केलेला असणे आवश्यक आहे",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION: "सक्रिय सदस्यता असलेली संस्था हटवता येत नाही",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"रेफरन्स ID आवश्यक आहे. referenceId द्या किंवा सत्रात activeOrganizationId सेट करा",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
