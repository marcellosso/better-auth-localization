import type { PasskeyErrorCodesType } from "../../../types";

export const ID_ID = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Tantangan tidak ditemukan",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Anda tidak diizinkan untuk mendaftarkan kunci akses ini",
	FAILED_TO_VERIFY_REGISTRATION: "Gagal memverifikasi pendaftaran",
	PASSKEY_NOT_FOUND: "Kunci akses tidak ditemukan",
	AUTHENTICATION_FAILED: "Autentikasi gagal",
	UNABLE_TO_CREATE_SESSION: "Tidak dapat membuat sesi",
	FAILED_TO_UPDATE_PASSKEY: "Gagal memperbarui kunci akses",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
