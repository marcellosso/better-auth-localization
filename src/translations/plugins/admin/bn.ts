import type { AdminErrorCodesType } from "../../../types";

export const BN_BD = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "আপনি নিজেকে নিষিদ্ধ করতে পারবেন না",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"আপনার ব্যবহারকারীদের ভূমিকা পরিবর্তন করার অনুমতি নেই",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "আপনার ব্যবহারকারী তৈরি করার অনুমতি নেই",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "আপনার ব্যবহারকারী তালিকা দেখার অনুমতি নেই",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"আপনার ব্যবহারকারীদের সেশন তালিকা দেখার অনুমতি নেই",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "আপনার ব্যবহারকারী নিষিদ্ধ করার অনুমতি নেই",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"আপনার ব্যবহারকারীদের ছদ্মবেশ ধারণ করার অনুমতি নেই",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"আপনার ব্যবহারকারীদের সেশন বাতিল করার অনুমতি নেই",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "আপনার ব্যবহারকারী মুছে ফেলার অনুমতি নেই",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"আপনার ব্যবহারকারীদের পাসওয়ার্ড সেট করার অনুমতি নেই",
	BANNED_USER: "আপনি এই অ্যাপ্লিকেশন থেকে নিষিদ্ধ করা হয়েছে",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "আপনার ব্যবহারকারী পাওয়ার অনুমতি নেই",
	NO_DATA_TO_UPDATE: "আপডেট করার জন্য কোনো ডেটা নেই",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS: "আপনার ব্যবহারকারী আপডেট করার অনুমতি নেই",
	YOU_CANNOT_REMOVE_YOURSELF: "আপনি নিজেকে সরাতে পারবেন না",
	YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE:
		"আপনার অস্তিত্বহীন ভূমিকার মান সেট করার অনুমতি নেই",
	YOU_CANNOT_IMPERSONATE_ADMINS: "আপনি অ্যাডমিনদের ছদ্মবেশ ধারণ করতে পারবেন না",
	INVALID_ROLE_TYPE: "ভুল ভূমিকার ধরন",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL:
		"আপনার ব্যবহারকারীদের ইমেল আপডেট করার অনুমতি নেই",
	PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER:
		"update-user এর মাধ্যমে পাসওয়ার্ড আপডেট করা যাবে না। এর পরিবর্তে set-user-password এন্ডপয়েন্ট ব্যবহার করুন",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"bn-BD": BN_BD,
} as const;
