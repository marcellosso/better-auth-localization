import type { ErrorCodesType } from "../types";

export const TR_TR = {
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
} satisfies ErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
