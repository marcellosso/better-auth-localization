import type { ElectronErrorCodesType } from "../../../types";

export const KO_KO = {
	INVALID_CLIENT_ID: "잘못된 클라이언트 ID입니다",
	STATE_MISMATCH: "state가 일치하지 않습니다",
	MISSING_CODE_CHALLENGE: "code challenge가 없습니다",
	INVALID_CODE_VERIFIER: "잘못된 code verifier입니다",
	MISSING_STATE: "state는 필수입니다",
	MISSING_PKCE: "pkce는 필수입니다",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KO,
} as const;
