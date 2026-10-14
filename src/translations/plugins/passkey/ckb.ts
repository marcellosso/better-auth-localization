import type { PasskeyErrorCodesType } from "../../../types";

export const CKB_IQ = {
	CHALLENGE_NOT_FOUND: "Challenge نەدۆزرایەوە",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"ڕێگەت پێنەدراوە ئەم passkey ـە تۆمار بکەیت",
	FAILED_TO_VERIFY_REGISTRATION: "نەتوانرا تۆمارکردن پشتڕاست بکرێتەوە",
	PASSKEY_NOT_FOUND: "Passkey نەدۆزرایەوە",
	AUTHENTICATION_FAILED: "ناسنامەپشتڕاستکردنەوە سەرنەکەوت",
	UNABLE_TO_CREATE_SESSION: "نەتوانرا سێشن دروست بکرێت",
	FAILED_TO_UPDATE_PASSKEY: "نەتوانرا passkey نوێ بکرێتەوە",
	PREVIOUSLY_REGISTERED: "پێشتر تۆمار کراوە",
	REGISTRATION_CANCELLED: "تۆمارکردن هەڵوەشێنرایەوە",
	AUTH_CANCELLED: "ناسنامەپشتڕاستکردنەوە هەڵوەشێنرایەوە",
	SESSION_REQUIRED: "تۆمارکردنی passkey پێویستی بە سێشنی پشتڕاستکراو هەیە",
	RESOLVE_USER_REQUIRED:
		"کاتێک requireSession بریتییە لە false، تۆمارکردنی passkey پێویستی بە سێشنی پشتڕاستکراو یان callbackـی resolveUser هەیە",
	RESOLVED_USER_INVALID: "بەکارهێنەری دیاریکراو نادروستە",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
