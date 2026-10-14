import type { GenericOAuthErrorCodesType } from "../../../types";

export const EL_GR = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Μη έγκυρη διαμόρφωση OAuth",
	TOKEN_URL_NOT_FOUND: "Μη έγκυρη διαμόρφωση OAuth. Δεν βρέθηκε το Token URL.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
