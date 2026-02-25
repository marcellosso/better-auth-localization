import type { CaptchaErrorCodesType } from "../../../types";

export const DA_DK = {
	VERIFICATION_FAILED: "CAPTCHA-verifikation mislykkedes",
	MISSING_RESPONSE: "Manglende CAPTCHA-svar",
	UNKNOWN_ERROR: "Ukendt fejl",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
