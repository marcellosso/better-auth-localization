import type { CaptchaErrorCodesType } from "../../../types";

export const AZ = {
	VERIFICATION_FAILED: "CAPTCHA doğrulaması uğursuz oldu",
	MISSING_RESPONSE: "CAPTCHA cavabı yoxdur",
	UNKNOWN_ERROR: "Naməlum xəta",
} satisfies CaptchaErrorCodesType;

export const AZ_AZ = {
	VERIFICATION_FAILED: "CAPTCHA doğrulaması uğursuz oldu",
	MISSING_RESPONSE: "CAPTCHA cavabı yoxdur",
	UNKNOWN_ERROR: "Naməlum xəta",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	az: AZ,
	"az-AZ": AZ_AZ,
} as const;
