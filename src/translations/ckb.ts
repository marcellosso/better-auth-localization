import type { ErrorCodesType } from "../types";

export const CKB_IQ = {
	// User related errors
	USER_NOT_FOUND: "بەکارهێنەر نەدۆزرایەوە",
	FAILED_TO_CREATE_USER: "هەڵەیەک ڕوویدا لە درووست کردنی هەژمار",
	FAILED_TO_UPDATE_USER: "هەڵەیەک ڕوویدا لە نوێکردنەوەی هەژمار",
	USER_ALREADY_EXISTS: "بەکارهێنەر پێشتر هەیە",
	USER_EMAIL_NOT_FOUND: "ئیمەیڵی بەکارهێنەر نەدۆزرایەوە",
	USER_ALREADY_HAS_PASSWORD:
		"بەکارهێنەر پێشتر وشەی نهێنی هەیە. تکایە وشەی نهێنی ئێستا بنوسە بۆ سڕینەوەی هەژمارەکە.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"بەکارهێنەر پێشتر هەیە. تکایە ئیمەیڵێکی تر بەکاربهێنە.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "نەتوانرا سێشن دروست بکرێت",
	FAILED_TO_GET_SESSION: "نەتوانرا سێشن بەدەست بێت",
	SESSION_EXPIRED:
		"سێشنەکە بەسەرچووە. تکایە دووبارە بچۆ ژوورەوە بۆ بەردەوام بوون.",

	// Authentication errors
	INVALID_PASSWORD: "وشەی نهێنی نادروستە",
	INVALID_EMAIL: "ئیمەیڵ نادروستە",
	INVALID_EMAIL_OR_PASSWORD: "ئیمەیڵ یان وشەی نهێنی نادروستە",
	INVALID_TOKEN: "تۆکن نادروستە",
	EMAIL_NOT_VERIFIED: "ئیمەیڵ پشتڕاست نەکراوە",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "هەژماری زانیاری نهێنی نەدۆزرایەوە",

	// Password related errors
	PASSWORD_TOO_SHORT: "وشەی نهێنی زۆر کورتە",
	PASSWORD_TOO_LONG: "وشەی نهێنی زۆر درێژە",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "هەژماری کۆمەڵایەتی پێشتر پەیوەست کراوە",
	PROVIDER_NOT_FOUND: "دابینکەر نەدۆزرایەوە",
	ID_TOKEN_NOT_SUPPORTED: "نیشانەی ناسنامە پشتگیری ناکرێت",
	FAILED_TO_GET_USER_INFO: "نەتوانرا زانیاری بەکارهێنەر بەدەست بێت",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "ناتوانرێت ئیمەیڵ نوێ بکرێتەوە",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "ناتوانرێت دوایین هەژمار بپچرێنرێت",
	ACCOUNT_NOT_FOUND: "هەژمار نەدۆزرایەوە",
} satisfies ErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
