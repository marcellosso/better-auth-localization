import type { PhoneNumberErrorCodesType } from "../../../types";

export const CKB_IQ = {
	INVALID_PHONE_NUMBER: "ژمارەی تەلەفۆن نادروستە",
	PHONE_NUMBER_EXIST: "ژمارەی تەلەفۆن پێشتر هەیە",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "ژمارەی تەلەفۆن یان وشەی نهێنی نادروستە",
	UNEXPECTED_ERROR: "هەڵەیەکی چاوەڕواننەکراو ڕوویدا",
	OTP_NOT_FOUND: "OTP نەدۆزرایەوە",
	PHONE_NUMBER_NOT_VERIFIED: "ژمارەی تەلەفۆن پشتڕاست نەکراوەتەوە",
	PHONE_NUMBER_NOT_EXIST: "ژمارەی تەلەفۆن تۆمار نەکراوە",
	PHONE_NUMBER_CANNOT_BE_UPDATED: "ژمارەی تەلەفۆن ناتوانرێت نوێ بکرێتەوە",
	SEND_OTP_NOT_IMPLEMENTED: "sendOTP جێبەجێ نەکراوە",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
