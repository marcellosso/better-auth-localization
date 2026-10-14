import type { GenericOAuthErrorCodesType } from "../../../types";

export const AZ = {
	// Ümumi OAuth ilə bağlı səhvlər
	INVALID_OAUTH_CONFIGURATION: "Yanlış OAuth konfiqurasiyası",
	TOKEN_URL_NOT_FOUND: "Yanlış OAuth konfiqurasiyası. Token URL tapılmadı.",
} satisfies GenericOAuthErrorCodesType;
export const AZ_AZ = {
	...AZ,
	// Ümumi OAuth ilə bağlı səhvlər
	INVALID_OAUTH_CONFIGURATION: "Yanlış OAuth konfiqurasiyası",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	az: AZ,
	"az-AZ": AZ_AZ,
} as const;
