import type { AnonymousErrorCodesType } from "../../../types";

export const ID_ID = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Tidak dapat membuat sesi",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Pengguna anonim tidak dapat masuk lagi secara anonim",
	INVALID_EMAIL_FORMAT: "Email tidak dibuat dalam format yang valid",
	FAILED_TO_DELETE_ANONYMOUS_USER: "Gagal menghapus pengguna anonim",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Gagal menghapus sesi pengguna anonim",
	USER_IS_NOT_ANONYMOUS: "Pengguna bukan pengguna anonim",
	DELETE_ANONYMOUS_USER_DISABLED: "Penghapusan pengguna anonim dinonaktifkan",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
