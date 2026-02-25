import type { CaptchaErrorCodesType } from "../../../types";

export const VI_VN = {
	VERIFICATION_FAILED: "Xác minh CAPTCHA thất bại",
	MISSING_RESPONSE: "Thiếu phản hồi CAPTCHA",
	UNKNOWN_ERROR: "Lỗi không xác định",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
