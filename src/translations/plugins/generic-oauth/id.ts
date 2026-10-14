import type { GenericOAuthErrorCodesType } from "../../../types";

export const ID_ID = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Konfigurasi OAuth tidak valid",
	TOKEN_URL_NOT_FOUND:
		"Konfigurasi OAuth tidak valid. URL token tidak ditemukan.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
