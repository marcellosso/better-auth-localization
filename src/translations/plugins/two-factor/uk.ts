import type { TwoFactorErrorCodesType } from "../../../types";

export const UK_UA = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Одноразовий пароль не увімкнено",
	OTP_HAS_EXPIRED: "Одноразовий пароль прострочено",
	TOTP_NOT_ENABLED: "Тимчасовий одноразовий пароль не увімкнено",
	TWO_FACTOR_NOT_ENABLED: "Двофакторну автентифікацію не увімкнено",
	BACKUP_CODES_NOT_ENABLED: "Резервні коди не увімкнено",
	INVALID_BACKUP_CODE: "Невірний резервний код",
	INVALID_CODE: "Невірний код",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Забагато спроб. Запросіть новий код.",
	INVALID_TWO_FACTOR_COOKIE: "Невірний cookie двофакторної автентифікації",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
