import type { CaptchaErrorCodesType } from "../../../types";

export const RU_RU = {
	VERIFICATION_FAILED: "Проверка CAPTCHA не удалась",
	MISSING_RESPONSE: "Ответ CAPTCHA отсутствует",
	UNKNOWN_ERROR: "Неизвестная ошибка",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
