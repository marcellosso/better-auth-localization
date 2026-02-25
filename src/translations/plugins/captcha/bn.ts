import type { CaptchaErrorCodesType } from "../../../types";

export const BN_BD = {
	VERIFICATION_FAILED: "CAPTCHA যাচাইকরণ ব্যর্থ হয়েছে",
	MISSING_RESPONSE: "CAPTCHA প্রতিক্রিয়া অনুপস্থিত",
	UNKNOWN_ERROR: "অজানা ত্রুটি",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"bn-BD": BN_BD,
} as const;
