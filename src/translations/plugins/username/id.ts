import type { UsernameErrorCodesType } from "../../../types";

export const ID_ID = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Nama pengguna atau kata sandi tidak valid",
	USERNAME_IS_ALREADY_TAKEN:
		"Nama pengguna sudah digunakan. Silakan coba yang lain.",
	USERNAME_TOO_SHORT: "Nama pengguna terlalu pendek",
	USERNAME_TOO_LONG: "Nama pengguna terlalu panjang",
	INVALID_USERNAME: "Nama pengguna tidak valid",
	INVALID_DISPLAY_USERNAME: "Nama tampilan tidak valid",
	USERNAME_IS_IMMUTABLE: "Nama pengguna tidak dapat diperbarui",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
