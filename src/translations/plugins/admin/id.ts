import type { AdminErrorCodesType } from "../../../types";

export const ID_ID = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "Anda tidak dapat melarang diri sendiri",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"Anda tidak diizinkan untuk mengubah peran pengguna",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
		"Anda tidak diizinkan untuk membuat pengguna",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"Anda tidak diizinkan untuk mendaftar pengguna",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"Anda tidak diizinkan untuk mendaftar sesi pengguna",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
		"Anda tidak diizinkan untuk melarang pengguna",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"Anda tidak diizinkan untuk menyamar sebagai pengguna lain",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"Anda tidak diizinkan untuk mencabut sesi pengguna",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"Anda tidak diizinkan untuk menghapus pengguna",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"Anda tidak diizinkan untuk mengatur kata sandi pengguna",
	BANNED_USER: "Anda telah dilarang dari aplikasi ini",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER:
		"Anda tidak diizinkan untuk mendapatkan pengguna",
	NO_DATA_TO_UPDATE: "Tidak ada data untuk diperbarui",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"Anda tidak diizinkan untuk memperbarui pengguna",
	YOU_CANNOT_REMOVE_YOURSELF: "Anda tidak dapat menghapus diri sendiri",
	YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE:
		"Anda tidak diizinkan menetapkan nilai peran yang tidak ada",
	YOU_CANNOT_IMPERSONATE_ADMINS: "Anda tidak dapat meniru admin",
	INVALID_ROLE_TYPE: "Jenis peran tidak valid",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL:
		"Anda tidak diizinkan memperbarui email pengguna",
	PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER:
		"Kata sandi tidak dapat diperbarui melalui update-user. Gunakan endpoint set-user-password",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
