import type { CaptchaErrorCodesType } from "../../../types";

export const MR_MR = {
	VERIFICATION_FAILED: "CAPTCHA पडताळणी अयशस्वी",
	MISSING_RESPONSE: "CAPTCHA प्रतिसाद गहाळ आहे",
	UNKNOWN_ERROR: "अज्ञात त्रुटी",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
