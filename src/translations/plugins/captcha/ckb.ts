import type { CaptchaErrorCodesType } from "../../../types";

export const CKB_IQ = {
	VERIFICATION_FAILED: "پشتڕاستکردنەوەی کاپچا سەرنەکەوت",
	MISSING_RESPONSE: "وەڵامی CAPTCHA نییە",
	UNKNOWN_ERROR: "هەڵەیەک ڕوویدا",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
