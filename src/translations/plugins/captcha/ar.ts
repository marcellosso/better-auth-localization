import type { CaptchaErrorCodesType } from "../../../types";

export const AR_SA = {
	VERIFICATION_FAILED: "فشل التحقق من CAPTCHA",
	MISSING_RESPONSE: "استجابة CAPTCHA مفقودة",
	UNKNOWN_ERROR: "خطأ غير معروف",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
