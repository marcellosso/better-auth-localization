import type { GenericOAuthErrorCodesType } from "../../../types";

export const BN_BD = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "ভুল OAuth কনফিগারেশন",
	TOKEN_URL_NOT_FOUND: "ভুল OAuth কনফিগারেশন। টোকেন URL পাওয়া যায়নি।",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"bn-BD": BN_BD,
} as const;
