import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const UK_UA = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"Пароль, який ви ввели, було скомпрометовано. Будь ласка, виберіть інший пароль.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
