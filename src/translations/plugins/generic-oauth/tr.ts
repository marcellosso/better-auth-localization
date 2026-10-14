import type { GenericOAuthErrorCodesType } from "../../../types";

export const TR_TR = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Geçersiz OAuth yapılandırması",
	TOKEN_URL_NOT_FOUND:
		"Geçersiz OAuth yapılandırması. Token URL'si bulunamadı.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
