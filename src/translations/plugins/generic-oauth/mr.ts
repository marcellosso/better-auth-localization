import type { GenericOAuthErrorCodesType } from "../../../types";

export const MR_MR = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "अवैध OAuth कॉन्फिगरेशन",
	TOKEN_URL_NOT_FOUND: "अवैध OAuth कॉन्फिगरेशन. टोकन URL सापडला नाही.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
