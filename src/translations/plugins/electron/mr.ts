import type { ElectronErrorCodesType } from "../../../types";

export const MR_MR = {
	INVALID_CLIENT_ID: "अवैध क्लायंट ID",
	STATE_MISMATCH: "state जुळत नाही",
	MISSING_CODE_CHALLENGE: "code challenge अनुपस्थित आहे",
	INVALID_CODE_VERIFIER: "अवैध code verifier",
	MISSING_STATE: "state आवश्यक आहे",
	MISSING_PKCE: "pkce आवश्यक आहे",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
