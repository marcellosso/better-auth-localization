import type { AnonymousErrorCodesType } from "../../../types";

export const AZ = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Sessiya yaradıla bilmədi",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonim istifadəçilər yenidən anonim olaraq giriş edə bilməzlər",
	INVALID_EMAIL_FORMAT: "E-poçt ünvanı düzgün formatda yaradılmayıb",
	FAILED_TO_DELETE_ANONYMOUS_USER: "Anonim istifadəçi silinə bilmədi",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Anonim istifadəçinin sessiyaları silinə bilmədi",
	USER_IS_NOT_ANONYMOUS: "İstifadəçi anonim deyil",
	DELETE_ANONYMOUS_USER_DISABLED: "Anonim istifadəçilərin silinməsi deaktivdir",
} satisfies AnonymousErrorCodesType;
export const AZ_AZ = {
	...AZ,
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Sessiya yaradıla bilmədi",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonim istifadəçilər yenidən anonim olaraq giriş edə bilməzlər",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	az: AZ,
	"az-AZ": AZ_AZ,
} as const;
