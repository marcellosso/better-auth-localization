import type { PasskeyErrorCodesType } from "../../../types";

export const BN_BD = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "চ্যালেঞ্জ পাওয়া যায়নি",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"আপনার এই পাসকি নিবন্ধন করার অনুমতি নেই",
	FAILED_TO_VERIFY_REGISTRATION: "নিবন্ধন যাচাই করতে ব্যর্থ",
	PASSKEY_NOT_FOUND: "পাসকি পাওয়া যায়নি",
	AUTHENTICATION_FAILED: "প্রমাণীকরণ ব্যর্থ",
	UNABLE_TO_CREATE_SESSION: "সেশন তৈরি করতে অক্ষম",
	FAILED_TO_UPDATE_PASSKEY: "পাসকি আপডেট করতে ব্যর্থ",
	PREVIOUSLY_REGISTERED: "পূর্বে নিবন্ধিত",
	REGISTRATION_CANCELLED: "নিবন্ধন বাতিল করা হয়েছে",
	AUTH_CANCELLED: "প্রমাণীকরণ বাতিল করা হয়েছে",
	SESSION_REQUIRED: "পাসকি নিবন্ধনের জন্য একটি প্রমাণীকৃত সেশন প্রয়োজন",
	RESOLVE_USER_REQUIRED:
		"requireSession false হলে পাসকি নিবন্ধনের জন্য একটি প্রমাণীকৃত সেশন বা resolveUser কলব্যাক প্রয়োজন",
	RESOLVED_USER_INVALID: "রিজলভ করা ব্যবহারকারী অবৈধ",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"bn-BD": BN_BD,
} as const;
