import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const CKB_IQ = {
	INVALID_DEVICE_CODE: "کۆدی ئامێر نادروستە",
	EXPIRED_DEVICE_CODE: "کۆدی ئامێر بەسەرچووە",
	EXPIRED_USER_CODE: "کۆدی بەکارهێنەر بەسەرچووە",
	AUTHORIZATION_PENDING: "ڕێگەپێدان چاوەڕێیە",
	ACCESS_DENIED: "دەستگەیشتن ڕەتکرایەوە",
	INVALID_USER_CODE: "کۆدی بەکارهێنەر نادروستە",
	DEVICE_CODE_ALREADY_PROCESSED: "کۆدی ئامێر پێشتر پرۆسێس کراوە",
	POLLING_TOO_FREQUENTLY: "زۆر بە زوویی داواکاری دووبارە دەکرێتەوە",
	INVALID_DEVICE_CODE_STATUS: "دۆخی کۆدی ئامێر نادروستە",
	AUTHENTICATION_REQUIRED: "ناسنامەپشتڕاستکردنەوە پێویستە",
	DEVICE_CODE_NOT_CLAIMED:
		"کۆدی ئامێر لەلایەن هیچ سێشنێکی پشتڕاستکەرەوە داواکراو نییە؛ پێش پەسەندکردن یان ڕەتکردنەوە، لە کاتی چوونەژوورەوەدا `GET /device` لەگەڵ `user_code` بانگ بکە",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
