import type { PhoneNumberErrorCodesType } from "../../../types";

export const BN_BD = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "ভুল ফোন নম্বর",
	PHONE_NUMBER_EXIST: "ফোন নম্বর ইতিমধ্যে বিদ্যমান",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "ভুল ফোন নম্বর বা পাসওয়ার্ড",
	UNEXPECTED_ERROR: "অপ্রত্যাশিত ত্রুটি",
	OTP_NOT_FOUND: "OTP পাওয়া যায়নি",
	OTP_EXPIRED: "OTP এর মেয়াদ শেষ হয়ে গেছে",
	INVALID_OTP: "ভুল OTP",
	PHONE_NUMBER_NOT_VERIFIED: "ফোন নম্বর যাচাই করা হয়নি",
	PHONE_NUMBER_NOT_EXIST: "ফোন নম্বর নিবন্ধিত নয়",
	PHONE_NUMBER_CANNOT_BE_UPDATED: "ফোন নম্বর আপডেট করা যাবে না",
	SEND_OTP_NOT_IMPLEMENTED: "sendOTP বাস্তবায়িত হয়নি",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"bn-BD": BN_BD,
} as const;
