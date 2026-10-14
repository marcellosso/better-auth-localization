import { createTranslationObject } from "../utils/create-translation-object";

export const CKB_IQ = createTranslationObject("ckb-IQ", {
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

	INVALID_USER: "بەکارهێنەری نادروست",
	TOKEN_EXPIRED: "تۆکن بەسەرچووە",
	CHANGE_EMAIL_DISABLED: "گۆڕینی ئیمەیڵ ناچالاک کراوە",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"چوونەژوورەوە لە ڕێگەی گەڕان لە نێوان وێبسایتەکان ڕێگری لێکراوە. وادیارە ئەم داواکارییە هێرشی CSRF بێت.",
	VERIFICATION_EMAIL_NOT_ENABLED: "ئیمەیڵی پشتڕاستکردنەوە چالاک نەکراوە",
	EMAIL_ALREADY_VERIFIED: "ئیمەیڵ پێشتر پشتڕاست کراوەتەوە",
	EMAIL_MISMATCH: "ئیمەیڵەکان یەک ناگرنەوە",
	SESSION_NOT_FRESH: "سێشنەکە تازە نییە",
	LINKED_ACCOUNT_ALREADY_EXISTS: "هەژماری پەیوەستکراو پێشتر هەیە",
	INVALID_ORIGIN: "سەرچاوەی نادروست",
	INVALID_CALLBACK_URL: "callbackURL نادروستە",
	INVALID_REDIRECT_URL: "redirectURL نادروستە",
	INVALID_ERROR_CALLBACK_URL: "errorCallbackURL نادروستە",
	INVALID_NEW_USER_CALLBACK_URL: "newUserCallbackURL نادروستە",
	MISSING_OR_NULL_ORIGIN: "Origin نییە یان بەتاڵە",
	CALLBACK_URL_REQUIRED: "callbackURL پێویستە",
	FAILED_TO_CREATE_VERIFICATION: "نەتوانرا پشتڕاستکردنەوە دروست بکرێت",
	FIELD_NOT_ALLOWED: "ڕێگە نەدراوە ئەم خانەیە دابنرێت",
	ASYNC_VALIDATION_NOT_SUPPORTED: "پشتڕاستکردنەوەی ناهاوکات پشتگیری ناکرێت",
	VALIDATION_ERROR: "هەڵەی پشتڕاستکردنەوە",
	MISSING_FIELD: "خانەکە پێویستە",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"شێوازی POST پێویستی بە چالاککردنی deferSessionRefresh هەیە لە ڕێکخستنی سێشندا",
	BODY_MUST_BE_AN_OBJECT: "لەشی داواکارییەکە دەبێت ئۆبجێکت بێت",
	PASSWORD_ALREADY_SET: "بەکارهێنەر پێشتر وشەی نهێنی داناوە",
});

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
