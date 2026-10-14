import type { TwoFactorErrorCodesType } from "../../../types";

export const ID_ID = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Kode sekali pakai tidak diaktifkan",
	OTP_HAS_EXPIRED: "Kode sekali pakai telah kedaluwarsa",
	TOTP_NOT_ENABLED: "Kode sekali pakai berbasis waktu tidak diaktifkan",
	TWO_FACTOR_NOT_ENABLED: "Autentikasi dua faktor tidak diaktifkan",
	BACKUP_CODES_NOT_ENABLED: "Kode cadangan tidak diaktifkan",
	INVALID_BACKUP_CODE: "Kode cadangan tidak valid",
	INVALID_CODE: "Kode tidak valid",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Terlalu banyak percobaan. Silakan minta kode baru.",
	INVALID_TWO_FACTOR_COOKIE: "Cookie autentikasi dua faktor tidak valid",
	OTP_NOT_CONFIGURED: "OTP tidak tersedia",
	TOTP_ALREADY_ENABLED: "TOTP sudah diaktifkan",
	TOTP_NOT_CONFIGURED: "TOTP tidak tersedia",
	ACCOUNT_TEMPORARILY_LOCKED:
		"Terlalu banyak percobaan verifikasi yang gagal. Akun Anda dikunci sementara. Silakan coba lagi nanti.",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
