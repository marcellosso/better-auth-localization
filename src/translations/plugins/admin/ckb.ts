import type { AdminErrorCodesType } from "../../../types";

export const CKB_IQ = {
	YOU_CANNOT_BAN_YOURSELF: "ناتوانیت خۆت ڕابگریت",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"ڕێگەت پێنەدراوە ڕۆڵی بەکارهێنەران بگۆڕیت",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "ڕێگەت پێنەدراوە بەکارهێنەر دروست بکەیت",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"ڕێگەت پێنەدراوە لیستی بەکارهێنەران ببینیت",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"ڕێگەت پێنەدراوە لیستی سێشنەکانی بەکارهێنەران ببینیت",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "ڕێگەت پێنەدراوە بەکارهێنەران ڕابگریت",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"ڕێگەت پێنەدراوە خۆت بکەیت بە بەکارهێنەرانی تر",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"ڕێگەت پێنەدراوە سێشنەکانی بەکارهێنەران هەڵبوەشێنیتەوە",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "ڕێگەت پێنەدراوە بەکارهێنەران بسڕیتەوە",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"ڕێگەت پێنەدراوە وشەی نهێنی بەکارهێنەران دابنێیت",
	BANNED_USER: "ڕێگری لێکراویت لەم ئەپلیکەیشنە",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER:
		"ڕێگەت پێنەدراوە زانیاری بەکارهێنەر وەربگریت",
	NO_DATA_TO_UPDATE: "هیچ زانیارییەک نییە بۆ نوێکردنەوە",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"ڕێگەت پێنەدراوە بەکارهێنەران نوێ بکەیتەوە",
	YOU_CANNOT_REMOVE_YOURSELF: "ناتوانیت خۆت لاببەیت",
	YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE:
		"ڕێگەت پێنەدراوە ڕۆڵێک دابنێیت کە بوونی نییە",
	YOU_CANNOT_IMPERSONATE_ADMINS: "ناتوانیت خۆت بکەیت بە بەڕێوەبەرەکان",
	INVALID_ROLE_TYPE: "جۆری ڕۆڵ نادروستە",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL:
		"ڕێگەت پێنەدراوە ئیمەیڵی بەکارهێنەران نوێ بکەیتەوە",
	PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER:
		"وشەی نهێنی ناتوانرێت لە ڕێگەی update-user نوێ بکرێتەوە. لەجیاتی ئەوە endpointـی set-user-password بەکاربهێنە",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
