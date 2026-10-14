import type { UsernameErrorCodesType } from "../../../types";

export const RU_RU = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Неверное имя пользователя или пароль",
	USERNAME_IS_ALREADY_TAKEN: "Имя пользователя уже занято. Попробуйте другое.",
	USERNAME_TOO_SHORT: "Имя пользователя слишком короткое",
	USERNAME_TOO_LONG: "Имя пользователя слишком длинное",
	INVALID_USERNAME: "Неверное имя пользователя",
	INVALID_DISPLAY_USERNAME: "Неверное отображаемое имя",
	USERNAME_IS_IMMUTABLE: "Имя пользователя нельзя изменить",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
