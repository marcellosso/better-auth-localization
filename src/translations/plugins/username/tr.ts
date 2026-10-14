import type { UsernameErrorCodesType } from "../../../types";

export const TR_TR = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Geçersiz kullanıcı adı veya şifre",
	USERNAME_IS_ALREADY_TAKEN:
		"Kullanıcı adı zaten alınmış. Lütfen başka bir tane deneyin.",
	USERNAME_TOO_SHORT: "Kullanıcı adı çok kısa",
	USERNAME_TOO_LONG: "Kullanıcı adı çok uzun",
	INVALID_USERNAME: "Geçersiz kullanıcı adı",
	INVALID_DISPLAY_USERNAME: "Geçersiz görüntüleme adı",
	USERNAME_IS_IMMUTABLE: "Kullanıcı adı güncellenemez",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
