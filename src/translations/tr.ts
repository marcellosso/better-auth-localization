import { createTranslationObject } from "../utils/create-translation-object";

export const TR_TR = createTranslationObject("tr-TR", {
	// User related errors
	USER_NOT_FOUND: "Kullanıcı bulunamadı",
	FAILED_TO_CREATE_USER: "Kullanıcı oluşturulamadı",
	FAILED_TO_UPDATE_USER: "Kullanıcı güncellenemedi",
	USER_ALREADY_EXISTS: "Kullanıcı zaten mevcut",
	USER_EMAIL_NOT_FOUND: "Kullanıcı e-posta adresi bulunamadı",
	USER_ALREADY_HAS_PASSWORD:
		"Kullanıcının zaten bir şifresi var. Hesabı silmek için lütfen şifreyi girin.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Kullanıcı zaten mevcut. Başka bir e-posta adresi kullanın.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Oturum oluşturulamadı",
	FAILED_TO_GET_SESSION: "Oturum alınamadı",
	SESSION_EXPIRED:
		"Oturum süresi doldu. Bu işlemi gerçekleştirmek için lütfen tekrar giriş yapın.",

	// Authentication errors
	INVALID_PASSWORD: "Geçersiz şifre",
	INVALID_EMAIL: "Geçersiz e-posta adresi",
	INVALID_EMAIL_OR_PASSWORD: "Geçersiz e-posta adresi veya şifre",
	INVALID_TOKEN: "Geçersiz token",
	EMAIL_NOT_VERIFIED: "E-posta adresi doğrulanmamış",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Hesap bulunamadı",

	// Password related errors
	PASSWORD_TOO_SHORT: "Şifre çok kısa",
	PASSWORD_TOO_LONG: "Şifre çok uzun",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Hesap zaten bağlı",
	PROVIDER_NOT_FOUND: "Sağlayıcı bulunamadı",
	ID_TOKEN_NOT_SUPPORTED: "id_token desteklenmiyor",
	FAILED_TO_GET_USER_INFO: "Kullanıcı bilgileri alınamadı",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "E-posta adresi güncellenemedi",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Son hesabın bağlantısını kaldıramazsınız",
	ACCOUNT_NOT_FOUND: "Hesap bulunamadı",
	INVALID_USER: "Geçersiz kullanıcı",
	TOKEN_EXPIRED: "Token'ın süresi doldu",
	CHANGE_EMAIL_DISABLED: "E-posta adresi değiştirme devre dışı",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Siteler arası gezinme ile giriş engellendi. Bu istek bir CSRF saldırısı gibi görünüyor.",
	VERIFICATION_EMAIL_NOT_ENABLED: "Doğrulama e-postası etkin değil",
	EMAIL_ALREADY_VERIFIED: "E-posta adresi zaten doğrulanmış",
	EMAIL_MISMATCH: "E-posta adresi eşleşmiyor",
	SESSION_NOT_FRESH: "Oturum yeni değil",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Bağlı hesap zaten mevcut",
	INVALID_ORIGIN: "Geçersiz kaynak",
	INVALID_CALLBACK_URL: "Geçersiz callbackURL",
	INVALID_REDIRECT_URL: "Geçersiz redirectURL",
	INVALID_ERROR_CALLBACK_URL: "Geçersiz errorCallbackURL",
	INVALID_NEW_USER_CALLBACK_URL: "Geçersiz newUserCallbackURL",
	MISSING_OR_NULL_ORIGIN: "Origin eksik veya boş",
	CALLBACK_URL_REQUIRED: "callbackURL gerekli",
	FAILED_TO_CREATE_VERIFICATION: "Doğrulama oluşturulamadı",
	FIELD_NOT_ALLOWED: "Alanın ayarlanmasına izin verilmiyor",
	ASYNC_VALIDATION_NOT_SUPPORTED: "Asenkron doğrulama desteklenmiyor",
	VALIDATION_ERROR: "Doğrulama hatası",
	MISSING_FIELD: "Alan gerekli",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"POST yöntemi, oturum yapılandırmasında deferSessionRefresh seçeneğinin etkin olmasını gerektirir",
	BODY_MUST_BE_AN_OBJECT: "Gövde bir nesne olmalıdır",
	PASSWORD_ALREADY_SET: "Kullanıcının zaten bir şifresi var",
});

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
