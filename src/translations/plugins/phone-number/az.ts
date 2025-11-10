import type { PhoneNumberErrorCodesType } from "../../../types";

export const AZ = {
	INVALID_PHONE_NUMBER: "Yanlış telefon nömrəsi",
	PHONE_NUMBER_EXIST: "Telefon nömrəsi artıq mövcuddur",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Yanlış telefon nömrəsi və ya şifrə",
	UNEXPECTED_ERROR: "Gözlənilməz xəta",
	OTP_NOT_FOUND: "Təsdiq kodu tapılmadı",
	OTP_EXPIRED: "Təsdiq kodunun müddəti bitib",
	INVALID_OTP: "Yanlış təsdiq kodu",
	PHONE_NUMBER_NOT_VERIFIED: "Telefon nömrəsi təsdiqlənməyib",
} satisfies PhoneNumberErrorCodesType;
export const AZ_AZ = {
	INVALID_PHONE_NUMBER: "Yanlış telefon nömrəsi",
	PHONE_NUMBER_EXIST: "Telefon nömrəsi artıq mövcuddur",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Yanlış telefon nömrəsi və ya şifrə",
	UNEXPECTED_ERROR: "Gözlənilməz xəta",
	OTP_NOT_FOUND: "Təsdiq kodu tapılmadı",
	OTP_EXPIRED: "Təsdiq kodunun müddəti bitib",
	INVALID_OTP: "Yanlış təsdiq kodu",
	PHONE_NUMBER_NOT_VERIFIED: "Telefon nömrəsi təsdiqlənməyib",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	az: AZ,
	"az-AZ": AZ_AZ,
} as const;
