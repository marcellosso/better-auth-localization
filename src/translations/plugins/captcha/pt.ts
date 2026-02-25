import type { CaptchaErrorCodesType } from "../../../types";

export const PT_BR = {
	VERIFICATION_FAILED: "Verificação do CAPTCHA falhou",
	MISSING_RESPONSE: "Resposta faltando do CAPTCHA",
	UNKNOWN_ERROR: "Erro desconhecido",
} satisfies CaptchaErrorCodesType;

export const PT_PT = {
	VERIFICATION_FAILED: "Verificação do CAPTCHA falhou",
	MISSING_RESPONSE: "Resposta faltando do CAPTCHA",
	UNKNOWN_ERROR: "Erro desconhecido",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"pt-BR": PT_BR,
	"pt-PT": PT_PT,
} as const;
