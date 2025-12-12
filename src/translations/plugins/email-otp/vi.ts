import type { EmailOTPErrorCodesType } from "../../../types";

export const VI_VN = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "Số lần thử vượt quá giới hạn",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
