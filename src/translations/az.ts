import { createTranslationObject } from "../utils/create-translation-object";

export const AZ = createTranslationObject("az", {
	// User related errors
	USER_NOT_FOUND: "İstifadəçi tapılmadı",
	FAILED_TO_CREATE_USER: "İstifadəçi yaradıla bilmədi",
	FAILED_TO_UPDATE_USER: "İstifadəçi yenilənə bilmədi",
	USER_ALREADY_EXISTS: "İstifadəçi artıq mövcuddur",
	USER_EMAIL_NOT_FOUND: "İstifadəçinin e-poçt ünvanı tapılmadı",
	USER_ALREADY_HAS_PASSWORD:
		"İstifadəçinin artıq şifrəsi var. Hesabı silmək üçün şifrəni daxil edin.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"İstifadəçi artıq mövcuddur. Başqa bir e-poçt ünvanı istifadə edin.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Sessiya yaradıla bilmədi",
	FAILED_TO_GET_SESSION: "Sessiya oxuna bilmədi",
	SESSION_EXPIRED:
		"Sessiyanın vaxtı bitdi. Davam etmək üçün yenidən daxil olun.",

	// Authentication errors
	INVALID_PASSWORD: "Yanlış şifrə",
	INVALID_EMAIL: "Yanlış e-poçt ünvanı",
	INVALID_EMAIL_OR_PASSWORD: "Yanlış e-poçt ünvanı və ya şifrə",
	INVALID_TOKEN: "Yanlış token",
	EMAIL_NOT_VERIFIED: "E-poçt ünvanı təsdiqlənməmişdir",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Hesap tapılmadı",

	// Password related errors
	PASSWORD_TOO_SHORT: "Şifrə çox qısadır",
	PASSWORD_TOO_LONG: "Şifrə çox uzundur",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Hesab artıq bağlıdır",
	PROVIDER_NOT_FOUND: "Provayder tapılmadı",
	ID_TOKEN_NOT_SUPPORTED: "id_token dəstəklənmir",
	FAILED_TO_GET_USER_INFO: "İstifadəçi məlumatları oxuna bilmədi",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "E-poçt ünvanı yenilənə bilmədi",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Son bağlı hesabı ayıra bilməzsiniz",
	ACCOUNT_NOT_FOUND: "Hesap tapılmadı",
});

export const AZ_AZ = createTranslationObject("az-AZ", {
	// User related errors
	USER_NOT_FOUND: "İstifadəçi tapılmadı",
	FAILED_TO_CREATE_USER: "İstifadəçi yaradıla bilmədi",
	FAILED_TO_UPDATE_USER: "İstifadəçi yenilənə bilmədi",
	USER_ALREADY_EXISTS: "İstifadəçi artıq mövcuddur",
	USER_EMAIL_NOT_FOUND: "İstifadəçinin e-poçt ünvanı tapılmadı",
	USER_ALREADY_HAS_PASSWORD:
		"İstifadəçinin artıq şifrəsi var. Hesabı silmək üçün şifrəni daxil edin.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"İstifadəçi artıq mövcuddur. Başqa bir e-poçt ünvanı istifadə edin.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Sessiya yaradıla bilmədi",
	FAILED_TO_GET_SESSION: "Sessiya oxuna bilmədi",
	SESSION_EXPIRED:
		"Sessiyanın vaxtı bitdi. Davam etmək üçün yenidən daxil olun.",

	// Authentication errors
	INVALID_PASSWORD: "Yanlış şifrə",
	INVALID_EMAIL: "Yanlış e-poçt ünvanı",
	INVALID_EMAIL_OR_PASSWORD: "Yanlış e-poçt ünvanı və ya şifrə",
	INVALID_TOKEN: "Yanlış token",
	EMAIL_NOT_VERIFIED: "E-poçt ünvanı təsdiqlənməmişdir",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Hesap tapılmadı",

	// Password related errors
	PASSWORD_TOO_SHORT: "Şifrə çox qısadır",
	PASSWORD_TOO_LONG: "Şifrə çox uzundur",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Hesab artıq bağlıdır",
	PROVIDER_NOT_FOUND: "Provayder tapılmadı",
	ID_TOKEN_NOT_SUPPORTED: "id_token dəstəklənmir",
	FAILED_TO_GET_USER_INFO: "İstifadəçi məlumatları oxuna bilmədi",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "E-poçt ünvanı yenilənə bilmədi",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Son bağlı hesabı ayıra bilməzsiniz",
	ACCOUNT_NOT_FOUND: "Hesap tapılmadı",
});

export const LOCALES = {
	az: AZ,
	"az-AZ": AZ_AZ,
} as const;
