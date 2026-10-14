import type { SSOErrorCodesType } from "../../../types";

export const BN_BD = {
	SINGLE_LOGOUT_NOT_ENABLED: "সিঙ্গেল লগআউট সক্রিয় নয়",
	INVALID_LOGOUT_RESPONSE: "ভুল LogoutResponse",
	INVALID_LOGOUT_REQUEST: "ভুল LogoutRequest",
	LOGOUT_FAILED_AT_IDP: "IdP-তে লগআউট ব্যর্থ হয়েছে",
	IDP_SLO_NOT_SUPPORTED: "IdP সিঙ্গেল লগআউট সার্ভিস সমর্থন করে না",
	SAML_PROVIDER_NOT_FOUND: "SAML প্রদানকারী পাওয়া যায়নি",
	SAML_INVALID_XML: "SAML রেসপন্স XML পার্স করতে ব্যর্থ",
	SAML_INVALID_ENCODING: "ভুল base64-এনকোডেড SAML রেসপন্স",
	SAML_NO_ASSERTION: "SAML রেসপন্সে কোনো অ্যাসার্শন নেই",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "SAML অ্যাসার্শন স্বাক্ষর প্রয়োজন",
	SAML_RESPONSE_INVALID_XML: "SAML রেসপন্স XML পার্স করা যায়নি",
	SAML_ASSERTION_MISSING: "SAML রেসপন্সে অ্যাসার্শন অনুপস্থিত",
	SAML_AUDIENCE_MISSING: "SAML অ্যাসার্শনে AudienceRestriction অনুপস্থিত",
	SAML_AUDIENCE_MISMATCH: "SAML অ্যাসার্শনের অডিয়েন্স এই সার্ভিস প্রোভাইডারের সাথে মেলে না",
	SAML_BEARER_CONFIRMATION_MISSING:
		"SAML অ্যাসার্শনে bearer SubjectConfirmationData অনুপস্থিত",
	SAML_RECIPIENT_MISSING:
		"SAML bearer SubjectConfirmationData-তে Recipient অনুপস্থিত",
	SAML_RECIPIENT_MISMATCH:
		"SAML bearer SubjectConfirmationData-এর Recipient এই সার্ভিস প্রোভাইডারের সাথে মেলে না",
	SAML_DESTINATION_MISMATCH:
		"SAML রেসপন্সের Destination এই সার্ভিস প্রোভাইডারের সাথে মেলে না",
	SSO_USER_RESOLUTION_FAILED: "SSO ব্যবহারকারী শনাক্ত করা যায়নি",
	SSO_PROVIDER_MUTATION_REJECTED: "SSO প্রদানকারী পরিবর্তনের অনুমতি নেই",
	SSO_PROVIDER_CHANGED:
		"অপারেশন চলাকালীন SSO প্রদানকারী পরিবর্তিত হয়েছে। প্রদানকারী পুনরায় লোড করে আবার চেষ্টা করুন",
	DOMAIN_VERIFIED: "ডোমেইন ইতিমধ্যে যাচাই করা হয়েছে",
	NO_PENDING_VERIFICATION: "কোনো মুলতুবি ডোমেইন যাচাইকরণ নেই",
	INVALID_DOMAIN: "ভুল ডোমেইন",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"bn-BD": BN_BD,
} as const;
