import type { CaptchaErrorCodesType } from "../../../types";

export const HI_HI = {
	VERIFICATION_FAILED: "CAPTCHA सत्यापन विफल",
	MISSING_RESPONSE: "CAPTCHA प्रतिक्रिया गायब है",
	UNKNOWN_ERROR: "अज्ञात त्रुटि",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
