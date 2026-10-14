import type { ElectronErrorCodesType } from "../../../types";

export const TR_TR = {
	INVALID_CLIENT_ID: "Geçersiz istemci ID'si",
	STATE_MISMATCH: "state eşleşmiyor",
	MISSING_CODE_CHALLENGE: "code challenge eksik",
	INVALID_CODE_VERIFIER: "Geçersiz code verifier",
	MISSING_STATE: "state gerekli",
	MISSING_PKCE: "pkce gerekli",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
