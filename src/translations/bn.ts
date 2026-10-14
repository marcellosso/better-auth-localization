import { createTranslationObject } from "../utils/create-translation-object";

export const BN_BD = createTranslationObject("bn-BD", {
	// User related errors
	USER_NOT_FOUND: "ব্যবহারকারী পাওয়া যায়নি",
	FAILED_TO_CREATE_USER: "ব্যবহারকারী তৈরি করতে ব্যর্থ",
	FAILED_TO_UPDATE_USER: "ব্যবহারকারী আপডেট করতে ব্যর্থ",
	USER_ALREADY_EXISTS: "ব্যবহারকারী ইতিমধ্যে বিদ্যমান",
	USER_EMAIL_NOT_FOUND: "ব্যবহারকারীর ইমেল পাওয়া যায়নি",
	USER_ALREADY_HAS_PASSWORD:
		"ব্যবহারকারীর ইতিমধ্যে একটি পাসওয়ার্ড আছে। অ্যাকাউন্ট মুছে ফেলার জন্য এটি প্রদান করুন।",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"ব্যবহারকারী ইতিমধ্যে বিদ্যমান। অন্য একটি ইমেল ব্যবহার করুন।",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "সেশন তৈরি করতে ব্যর্থ",
	FAILED_TO_GET_SESSION: "সেশন পেতে ব্যর্থ",
	SESSION_EXPIRED:
		"সেশনের মেয়াদ শেষ হয়ে গেছে। এই কার্যটি সম্পাদন করতে আবার লগইন করুন।",

	// Authentication errors
	INVALID_PASSWORD: "ভুল পাসওয়ার্ড",
	INVALID_EMAIL: "ভুল ইমেল",
	INVALID_EMAIL_OR_PASSWORD: "ভুল ইমেল বা পাসওয়ার্ড",
	INVALID_TOKEN: "ভুল টোকেন",
	EMAIL_NOT_VERIFIED: "ইমেল যাচাই করা হয়নি",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "শংসাপত্র অ্যাকাউন্ট পাওয়া যায়নি",

	// Password related errors
	PASSWORD_TOO_SHORT: "পাসওয়ার্ড অত্যন্ত ছোট",
	PASSWORD_TOO_LONG: "পাসওয়ার্ড অত্যন্ত বড়",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "সোশ্যাল অ্যাকাউন্ট ইতিমধ্যে সংযুক্ত",
	PROVIDER_NOT_FOUND: "প্রদানকারী পাওয়া যায়নি",
	ID_TOKEN_NOT_SUPPORTED: "id_token সমর্থিত নয়",
	FAILED_TO_GET_USER_INFO: "ব্যবহারকারীর তথ্য পেতে ব্যর্থ",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "ইমেল আপডেট করা যাবে না",
	FAILED_TO_UNLINK_LAST_ACCOUNT:
		"আপনি আপনার শেষ অ্যাকাউন্ট সংযোগ বিচ্ছিন্ন করতে পারবেন না",
	ACCOUNT_NOT_FOUND: "অ্যাকাউন্ট পাওয়া যায়নি",
	INVALID_USER: "ভুল ব্যবহারকারী",
	TOKEN_EXPIRED: "টোকেনের মেয়াদ শেষ হয়ে গেছে",
	CHANGE_EMAIL_DISABLED: "ইমেল পরিবর্তন নিষ্ক্রিয়",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"ক্রস-সাইট নেভিগেশন লগইন ব্লক করা হয়েছে। এই অনুরোধটি CSRF আক্রমণ বলে মনে হচ্ছে।",
	VERIFICATION_EMAIL_NOT_ENABLED: "যাচাইকরণ ইমেল সক্রিয় নয়",
	EMAIL_ALREADY_VERIFIED: "ইমেল ইতিমধ্যে যাচাই করা হয়েছে",
	EMAIL_MISMATCH: "ইমেল মিলছে না",
	SESSION_NOT_FRESH: "সেশন নতুন নয়",
	LINKED_ACCOUNT_ALREADY_EXISTS: "সংযুক্ত অ্যাকাউন্ট ইতিমধ্যে বিদ্যমান",
	INVALID_ORIGIN: "ভুল অরিজিন",
	INVALID_CALLBACK_URL: "ভুল callbackURL",
	INVALID_REDIRECT_URL: "ভুল redirectURL",
	INVALID_ERROR_CALLBACK_URL: "ভুল errorCallbackURL",
	INVALID_NEW_USER_CALLBACK_URL: "ভুল newUserCallbackURL",
	MISSING_OR_NULL_ORIGIN: "Origin অনুপস্থিত বা শূন্য",
	CALLBACK_URL_REQUIRED: "callbackURL প্রয়োজন",
	FAILED_TO_CREATE_VERIFICATION: "যাচাইকরণ তৈরি করতে অক্ষম",
	FIELD_NOT_ALLOWED: "এই ফিল্ড সেট করার অনুমতি নেই",
	ASYNC_VALIDATION_NOT_SUPPORTED: "অ্যাসিঙ্ক্রোনাস যাচাইকরণ সমর্থিত নয়",
	VALIDATION_ERROR: "যাচাইকরণ ত্রুটি",
	MISSING_FIELD: "ফিল্ড প্রয়োজন",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"POST মেথডের জন্য সেশন কনফিগারেশনে deferSessionRefresh সক্রিয় থাকা প্রয়োজন",
	BODY_MUST_BE_AN_OBJECT: "বডি অবশ্যই একটি অবজেক্ট হতে হবে",
	PASSWORD_ALREADY_SET: "ব্যবহারকারীর ইতিমধ্যে একটি পাসওয়ার্ড সেট করা আছে",
});

export const LOCALES = {
	"bn-BD": BN_BD,
} as const;
