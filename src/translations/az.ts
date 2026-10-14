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
	INVALID_USER: "Yanlış istifadəçi",
	TOKEN_EXPIRED: "Tokenin vaxtı bitib",
	CHANGE_EMAIL_DISABLED: "E-poçt ünvanının dəyişdirilməsi deaktivdir",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Saytlararası naviqasiya ilə giriş bloklandı. Bu sorğu CSRF hücumuna bənzəyir.",
	VERIFICATION_EMAIL_NOT_ENABLED: "Təsdiq e-poçtu aktiv deyil",
	EMAIL_ALREADY_VERIFIED: "E-poçt ünvanı artıq təsdiqlənib",
	EMAIL_MISMATCH: "E-poçt ünvanı uyğun gəlmir",
	SESSION_NOT_FRESH: "Sessiya təzə deyil",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Əlaqələndirilmiş hesab artıq mövcuddur",
	INVALID_ORIGIN: "Yanlış mənbə",
	INVALID_CALLBACK_URL: "Yanlış callbackURL",
	INVALID_REDIRECT_URL: "Yanlış redirectURL",
	INVALID_ERROR_CALLBACK_URL: "Yanlış errorCallbackURL",
	INVALID_NEW_USER_CALLBACK_URL: "Yanlış newUserCallbackURL",
	MISSING_OR_NULL_ORIGIN: "Origin yoxdur və ya boşdur",
	CALLBACK_URL_REQUIRED: "callbackURL tələb olunur",
	FAILED_TO_CREATE_VERIFICATION: "Təsdiq yaradıla bilmədi",
	FIELD_NOT_ALLOWED: "Sahənin təyin edilməsinə icazə verilmir",
	ASYNC_VALIDATION_NOT_SUPPORTED: "Asinxron yoxlama dəstəklənmir",
	VALIDATION_ERROR: "Yoxlama xətası",
	MISSING_FIELD: "Sahə tələb olunur",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"POST metodu sessiya konfiqurasiyasında deferSessionRefresh seçiminin aktiv olmasını tələb edir",
	BODY_MUST_BE_AN_OBJECT: "Body obyekt olmalıdır",
	PASSWORD_ALREADY_SET: "İstifadəçinin artıq şifrəsi təyin edilib",
});

export const AZ_AZ = createTranslationObject("az-AZ", {
	...AZ,
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
