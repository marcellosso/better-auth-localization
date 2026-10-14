import type { TwoFactorErrorCodesType } from "../../../types";

export const CKB_IQ = {
	OTP_NOT_ENABLED: "OTP چالاک نەکراوە",
	OTP_HAS_EXPIRED: "OTP بەسەرچووە",
	TOTP_NOT_ENABLED: "TOTP چالاک نەکراوە",
	TWO_FACTOR_NOT_ENABLED: "دووقۆناغی چالاک نەکراوە",
	BACKUP_CODES_NOT_ENABLED: "کۆدەکانی یەدەگ چالاک نەکراون",
	INVALID_BACKUP_CODE: "کۆدی یەدەگ نادروستە",
	INVALID_CODE: "کۆد نادروستە",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"هەوڵی زۆر درا. تکایە کۆدێکی نوێ داوا بکە.",
	INVALID_TWO_FACTOR_COOKIE: "کووکیی دووقۆناغی نادروستە",
	OTP_NOT_CONFIGURED: "OTP بەردەست نییە",
	TOTP_ALREADY_ENABLED: "TOTP پێشتر چالاک کراوە",
	TOTP_NOT_CONFIGURED: "TOTP بەردەست نییە",
	ACCOUNT_TEMPORARILY_LOCKED:
		"هەوڵی پشتڕاستکردنەوەی سەرنەکەوتووی زۆر درا. هەژمارەکەت بە شێوەیەکی کاتی قفڵ کراوە. تکایە دواتر دووبارە هەوڵبدەرەوە.",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
