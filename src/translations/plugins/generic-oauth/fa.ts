import type { GenericOAuthErrorCodesType } from "../../../types";

export const FA_IR = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "پیکربندی OAuth نامعتبر",

	TOKEN_URL_NOT_FOUND: "پیکربندی OAuth نامعتبر است. Token URL یافت نشد.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
