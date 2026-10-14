import type { GenericOAuthErrorCodesType } from "../../../types";

export const CKB_IQ = {
	INVALID_OAUTH_CONFIGURATION: "ڕێکخستنی OAuth نادروستە",
	TOKEN_URL_NOT_FOUND: "ڕێکخستنی OAuth نادروستە. Token URL نەدۆزرایەوە.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
