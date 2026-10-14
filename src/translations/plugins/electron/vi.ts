import type { ElectronErrorCodesType } from "../../../types";

export const VI_VN = {
	INVALID_CLIENT_ID: "ID client không hợp lệ",
	STATE_MISMATCH: "state không khớp",
	MISSING_CODE_CHALLENGE: "Thiếu code challenge",
	INVALID_CODE_VERIFIER: "code verifier không hợp lệ",
	MISSING_STATE: "Yêu cầu state",
	MISSING_PKCE: "Yêu cầu pkce",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
