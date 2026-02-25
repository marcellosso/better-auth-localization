import type { CaptchaErrorCodesType } from "../../../types";

export const KO_KR = {
	VERIFICATION_FAILED: "CAPTCHA 인증에 실패했습니다",
	MISSING_RESPONSE: "CAPTCHA 응답이 없습니다",
	UNKNOWN_ERROR: "알 수 없는 오류",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KR,
} as const;
