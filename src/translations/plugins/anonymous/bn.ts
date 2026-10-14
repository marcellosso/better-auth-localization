import type { AnonymousErrorCodesType } from "../../../types";

export const BN_BD = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "সেশন তৈরি করা যায়নি",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"বেনামী ব্যবহারকারীরা আবার বেনামী হিসাবে সাইন ইন করতে পারবেন না",
	INVALID_EMAIL_FORMAT: "ইমেল বৈধ ফরম্যাটে তৈরি হয়নি",
	FAILED_TO_DELETE_ANONYMOUS_USER: "বেনামী ব্যবহারকারী মুছতে ব্যর্থ",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS: "বেনামী ব্যবহারকারীর সেশন মুছতে ব্যর্থ",
	USER_IS_NOT_ANONYMOUS: "ব্যবহারকারী বেনামী নন",
	DELETE_ANONYMOUS_USER_DISABLED: "বেনামী ব্যবহারকারী মুছে ফেলা নিষ্ক্রিয়",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"bn-BD": BN_BD,
} as const;
