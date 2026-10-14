import type { ElectronErrorCodesType } from "../../../types";

export const ID_ID = {
	INVALID_CLIENT_ID: "ID klien tidak valid",
	STATE_MISMATCH: "state tidak cocok",
	MISSING_CODE_CHALLENGE: "code challenge tidak ada",
	INVALID_CODE_VERIFIER: "code verifier tidak valid",
	MISSING_STATE: "state wajib diisi",
	MISSING_PKCE: "pkce wajib diisi",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
