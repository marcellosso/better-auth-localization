import { createTranslationObject } from "../utils/create-translation-object";

export const ID_ID = createTranslationObject("id-ID", {
	// User related errors
	USER_NOT_FOUND: "Pengguna tidak ditemukan",
	FAILED_TO_CREATE_USER: "Gagal membuat pengguna",
	FAILED_TO_UPDATE_USER: "Gagal memperbarui pengguna",
	USER_ALREADY_EXISTS: "Pengguna sudah ada",
	USER_EMAIL_NOT_FOUND: "Email pengguna tidak ditemukan",
	USER_ALREADY_HAS_PASSWORD:
		"Pengguna sudah memiliki kata sandi. Gunakan kata sandi sebelumnya untuk menghapus akun.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Pengguna sudah ada. Gunakan email lain.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Gagal membuat sesi",
	FAILED_TO_GET_SESSION: "Gagal mendapatkan sesi",
	SESSION_EXPIRED:
		"Sesi telah kedaluwarsa. Silakan autentikasi ulang untuk melanjutkan.",

	// Authentication errors
	INVALID_PASSWORD: "Kata sandi tidak valid",
	INVALID_EMAIL: "Alamat email tidak valid",
	INVALID_EMAIL_OR_PASSWORD: "Email atau kata sandi salah",
	INVALID_TOKEN: "Token tidak valid",
	EMAIL_NOT_VERIFIED: "Email belum diverifikasi",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Tidak ditemukan kredensial akun",

	// Password related errors
	PASSWORD_TOO_SHORT: "Kata sandi terlalu pendek",
	PASSWORD_TOO_LONG: "Kata sandi terlalu panjang",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Akun sosial ini sudah terhubung",
	PROVIDER_NOT_FOUND: "Penyedia tidak ditemukan",
	ID_TOKEN_NOT_SUPPORTED: "`id_token` tidak didukung",
	FAILED_TO_GET_USER_INFO: "Gagal mengambil informasi pengguna",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "Alamat email tidak dapat diperbarui",
	FAILED_TO_UNLINK_LAST_ACCOUNT:
		"Anda tidak dapat menghapus tautan akun terakhir Anda",
	ACCOUNT_NOT_FOUND: "Akun tidak ditemukan",
	INVALID_USER: "Pengguna tidak valid",
	TOKEN_EXPIRED: "Token telah kedaluwarsa",
	CHANGE_EMAIL_DISABLED: "Pengubahan email dinonaktifkan",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Login melalui navigasi lintas situs diblokir. Permintaan ini tampaknya merupakan serangan CSRF.",
	VERIFICATION_EMAIL_NOT_ENABLED: "Email verifikasi tidak diaktifkan",
	EMAIL_ALREADY_VERIFIED: "Email sudah diverifikasi",
	EMAIL_MISMATCH: "Email tidak cocok",
	SESSION_NOT_FRESH: "Sesi tidak baru",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Akun tertaut sudah ada",
	INVALID_ORIGIN: "Origin tidak valid",
	INVALID_CALLBACK_URL: "callbackURL tidak valid",
	INVALID_REDIRECT_URL: "redirectURL tidak valid",
	INVALID_ERROR_CALLBACK_URL: "errorCallbackURL tidak valid",
	INVALID_NEW_USER_CALLBACK_URL: "newUserCallbackURL tidak valid",
	MISSING_OR_NULL_ORIGIN: "Origin tidak ada atau null",
	CALLBACK_URL_REQUIRED: "callbackURL wajib diisi",
	FAILED_TO_CREATE_VERIFICATION: "Gagal membuat verifikasi",
	FIELD_NOT_ALLOWED: "Kolom tidak diizinkan untuk diatur",
	ASYNC_VALIDATION_NOT_SUPPORTED: "Validasi asinkron tidak didukung",
	VALIDATION_ERROR: "Kesalahan validasi",
	MISSING_FIELD: "Kolom wajib diisi",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"Metode POST mengharuskan deferSessionRefresh diaktifkan dalam konfigurasi sesi",
	BODY_MUST_BE_AN_OBJECT: "Body harus berupa objek",
	PASSWORD_ALREADY_SET: "Pengguna sudah memiliki kata sandi",
});

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
