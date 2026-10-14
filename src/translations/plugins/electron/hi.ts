import type { ElectronErrorCodesType } from "../../../types";

export const HI_HI = {
	INVALID_CLIENT_ID: "अमान्य क्लाइंट ID",
	STATE_MISMATCH: "state मेल नहीं खाता",
	MISSING_CODE_CHALLENGE: "code challenge अनुपस्थित है",
	INVALID_CODE_VERIFIER: "अमान्य code verifier",
	MISSING_STATE: "state आवश्यक है",
	MISSING_PKCE: "pkce आवश्यक है",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
