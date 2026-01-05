import type { EmailOTPErrorCodesType } from "../../../types";

export const UK_UA = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "Забагато спроб",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
