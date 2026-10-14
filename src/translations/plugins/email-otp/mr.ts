import type { EmailOTPErrorCodesType } from "../../../types";

export const MR_MR = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "खूप जास्त प्रयत्न",
	OTP_EXPIRED: "OTP कालबाह्य झाले",
	INVALID_OTP: "अवैध OTP",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
