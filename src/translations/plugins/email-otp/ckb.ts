import type { EmailOTPErrorCodesType } from "../../../types";

export const CKB_IQ = {
	OTP_EXPIRED: "OTP بەسەرچووە",
	INVALID_OTP: "OTP نادروستە",
	TOO_MANY_ATTEMPTS: "هەوڵی زۆر درا",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
