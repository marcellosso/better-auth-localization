import type { UsernameErrorCodesType } from "../../../types";

export const UK_UA = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Невірне ім'я користувача або пароль",
	USERNAME_IS_ALREADY_TAKEN: "Ім'я користувача вже зайнято. Спробуйте інше.",
	USERNAME_TOO_SHORT: "Ім'я користувача занадто коротке",
	USERNAME_TOO_LONG: "Ім'я користувача занадто довге",
	INVALID_USERNAME: "Невірне ім'я користувача",
	INVALID_DISPLAY_USERNAME: "Невірне відображуване ім'я",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
