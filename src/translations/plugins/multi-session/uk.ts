import type { MultiSessionErrorCodesType } from "../../../types";

export const UK_UA = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Невірний токен сесії",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
