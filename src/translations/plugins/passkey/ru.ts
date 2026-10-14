import type { PasskeyErrorCodesType } from "../../../types";

export const RU_RU = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Вызов не найден",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"У вас нет разрешения на регистрацию этого ключа доступа",
	FAILED_TO_VERIFY_REGISTRATION: "Не удалось проверить регистрацию",
	PASSKEY_NOT_FOUND: "Ключ доступа не найден",
	AUTHENTICATION_FAILED: "Ошибка аутентификации",
	UNABLE_TO_CREATE_SESSION: "Не удалось создать сессию",
	FAILED_TO_UPDATE_PASSKEY: "Не удалось обновить ключ доступа",
	PREVIOUSLY_REGISTERED: "Ранее зарегистрирован",
	REGISTRATION_CANCELLED: "Регистрация отменена",
	AUTH_CANCELLED: "Аутентификация отменена",
	SESSION_REQUIRED:
		"Для регистрации ключа доступа требуется аутентифицированная сессия",
	RESOLVE_USER_REQUIRED:
		"Для регистрации ключа доступа требуется аутентифицированная сессия или callback resolveUser, если requireSession равно false",
	RESOLVED_USER_INVALID: "Определенный пользователь недействителен",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
