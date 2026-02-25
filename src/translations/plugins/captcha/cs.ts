import type { CaptchaErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	VERIFICATION_FAILED: "Ověření CAPTCHA selhalo",
	MISSING_RESPONSE: "Chybí odpověď CAPTCHA",
	UNKNOWN_ERROR: "Neznámá chyba",
} satisfies CaptchaErrorCodesType;

export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL,
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"cs": CS_CZ_INFORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
