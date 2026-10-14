import type { TwoFactorErrorCodesType } from "../../../types";

export const TR_TR = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Tek kullanımlık şifre etkin değil",
	OTP_HAS_EXPIRED: "Tek kullanımlık şifre süresi doldu",
	TOTP_NOT_ENABLED: "Zaman tabanlı tek kullanımlık şifre etkin değil",
	TWO_FACTOR_NOT_ENABLED: "İki faktörlü kimlik doğrulama etkin değil",
	BACKUP_CODES_NOT_ENABLED: "Yedek kodlar etkin değil",
	INVALID_BACKUP_CODE: "Geçersiz yedek kod",
	INVALID_CODE: "Geçersiz kod",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Çok fazla deneme. Lütfen yeni bir kod isteyin.",
	INVALID_TWO_FACTOR_COOKIE: "Geçersiz iki faktörlü kimlik doğrulama çerezi",
	OTP_NOT_CONFIGURED: "OTP kullanılamıyor",
	TOTP_ALREADY_ENABLED: "TOTP zaten etkin",
	TOTP_NOT_CONFIGURED: "TOTP kullanılamıyor",
	ACCOUNT_TEMPORARILY_LOCKED:
		"Çok fazla başarısız doğrulama denemesi. Hesabınız geçici olarak kilitlendi. Lütfen daha sonra tekrar deneyin.",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
