import type { CaptchaErrorCodesType } from "../../../types";

export const TR_TR = {
	VERIFICATION_FAILED: "CAPTCHA doğrulaması başarısız oldu",
	MISSING_RESPONSE: "CAPTCHA yanıtı eksik",
	UNKNOWN_ERROR: "Bilinmeyen hata",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
