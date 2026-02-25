import type { CaptchaErrorCodesType } from "../../../types";

export const EL_GR = {
	VERIFICATION_FAILED: "Η επαλήθευση CAPTCHA απέτυχε",
	MISSING_RESPONSE: "Λείπει η απάντηση CAPTCHA",
	UNKNOWN_ERROR: "Άγνωστο σφάλμα",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
