import type { CaptchaErrorCodesType } from "../../../types";

export const JA_JP = {
	VERIFICATION_FAILED: "CAPTCHA認証に失敗しました",
	MISSING_RESPONSE: "CAPTCHAの応答がありません",
	UNKNOWN_ERROR: "不明なエラー",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
