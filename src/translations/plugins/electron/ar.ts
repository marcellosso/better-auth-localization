import type { ElectronErrorCodesType } from "../../../types";

export const AR_SA = {
	INVALID_CLIENT_ID: "معرّف العميل غير صالح",
	STATE_MISMATCH: "عدم تطابق state",
	MISSING_CODE_CHALLENGE: "code challenge مفقود",
	INVALID_CODE_VERIFIER: "code verifier غير صالح",
	MISSING_STATE: "state مطلوب",
	MISSING_PKCE: "PKCE مطلوب",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
