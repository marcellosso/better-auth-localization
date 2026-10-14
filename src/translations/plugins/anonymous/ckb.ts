import type { AnonymousErrorCodesType } from "../../../types";

export const CKB_IQ = {
	COULD_NOT_CREATE_SESSION: "نەتوانرا سێشن دروست بکرێت",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"بەکارهێنەرە نەناسراوەکان ناتوانن دووبارە بە نەناسراوی بچنە ژوورەوە",
	INVALID_EMAIL_FORMAT: "ئیمەیڵ بە شێوازێکی دروست دروست نەکراوە",
	FAILED_TO_DELETE_ANONYMOUS_USER: "نەتوانرا بەکارهێنەری نەناسراو بسڕدرێتەوە",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"نەتوانرا سێشنەکانی بەکارهێنەری نەناسراو بسڕدرێنەوە",
	USER_IS_NOT_ANONYMOUS: "بەکارهێنەر نەناسراو نییە",
	DELETE_ANONYMOUS_USER_DISABLED:
		"سڕینەوەی بەکارهێنەرە نەناسراوەکان ناچالاک کراوە",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
