import type { AnonymousErrorCodesType } from "../../../types";

export const TR_TR = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Oturum oluşturulamadı",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonim kullanıcılar tekrar anonim olarak giriş yapamaz",
	INVALID_EMAIL_FORMAT: "E-posta adresi geçerli bir biçimde oluşturulmadı",
	FAILED_TO_DELETE_ANONYMOUS_USER: "Anonim kullanıcı silinemedi",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Anonim kullanıcının oturumları silinemedi",
	USER_IS_NOT_ANONYMOUS: "Kullanıcı anonim değil",
	DELETE_ANONYMOUS_USER_DISABLED: "Anonim kullanıcıları silme devre dışı",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
