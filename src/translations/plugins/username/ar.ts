import type { UsernameErrorCodesType } from "../../../types";

export const AR_SA = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "اسم المستخدم أو كلمة المرور غير صالحة",
	USERNAME_IS_ALREADY_TAKEN: "اسم المستخدم مستخدم بالفعل. يرجى تجربة اسم آخر.",
	USERNAME_TOO_SHORT: "اسم المستخدم قصير جداً",
	USERNAME_TOO_LONG: "اسم المستخدم طويل جداً",
	INVALID_USERNAME: "اسم المستخدم غير صالح",
	INVALID_DISPLAY_USERNAME: "اسم العرض غير صالح",

	USERNAME_IS_IMMUTABLE: "لا يمكن تحديث اسم المستخدم",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
