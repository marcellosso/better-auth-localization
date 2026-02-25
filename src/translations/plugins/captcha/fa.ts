import type { CaptchaErrorCodesType } from "../../../types";

export const FA_IR = {
	VERIFICATION_FAILED: "تأیید CAPTCHA ناموفق بود",
	MISSING_RESPONSE: "پاسخ CAPTCHA موجود نیست",
	UNKNOWN_ERROR: "خطای ناشناخته",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
