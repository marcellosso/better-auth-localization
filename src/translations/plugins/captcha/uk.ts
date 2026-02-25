import type { CaptchaErrorCodesType } from "../../../types";

export const UK_UA = {
	VERIFICATION_FAILED: "Перевірка CAPTCHA не вдалася",
	MISSING_RESPONSE: "Відповідь CAPTCHA відсутня",
	UNKNOWN_ERROR: "Невідома помилка",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
