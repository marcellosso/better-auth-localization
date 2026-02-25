import type { CaptchaErrorCodesType } from "../../../types";

export const SV_SE = {
	VERIFICATION_FAILED: "CAPTCHA-verifiering misslyckades",
	MISSING_RESPONSE: "CAPTCHA-svar saknas",
	UNKNOWN_ERROR: "Okänt fel",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
