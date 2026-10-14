import type { PasskeyErrorCodesType } from "../../../types";

export const UK_UA = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Виклик не знайдено",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Ви не маєте дозволу на реєстрацію цього ключа доступу",
	FAILED_TO_VERIFY_REGISTRATION: "Не вдалося перевірити реєстрацію",
	PASSKEY_NOT_FOUND: "Ключ доступу не знайдено",
	AUTHENTICATION_FAILED: "Помилка автентифікації",
	UNABLE_TO_CREATE_SESSION: "Не вдалося створити сесію",
	FAILED_TO_UPDATE_PASSKEY: "Не вдалося оновити ключ доступу",
	PREVIOUSLY_REGISTERED: "Раніше зареєстровано",
	REGISTRATION_CANCELLED: "Реєстрацію скасовано",
	AUTH_CANCELLED: "Автентифікацію скасовано",
	SESSION_REQUIRED:
		"Для реєстрації ключа доступу потрібна автентифікована сесія",
	RESOLVE_USER_REQUIRED:
		"Для реєстрації ключа доступу потрібна автентифікована сесія або callback resolveUser, якщо requireSession має значення false",
	RESOLVED_USER_INVALID: "Визначений користувач недійсний",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
