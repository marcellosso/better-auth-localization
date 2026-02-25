import type { CaptchaErrorCodesType } from "../../../types";

export const ZH_HANT = {
	VERIFICATION_FAILED: "CAPTCHA 驗證失敗",
	MISSING_RESPONSE: "缺少 CAPTCHA 回應",
	UNKNOWN_ERROR: "未知錯誤",
} satisfies CaptchaErrorCodesType;

export const ZH_HANS = {
	VERIFICATION_FAILED: "CAPTCHA 验证失败",
	MISSING_RESPONSE: "缺少 CAPTCHA 响应",
	UNKNOWN_ERROR: "未知错误",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
