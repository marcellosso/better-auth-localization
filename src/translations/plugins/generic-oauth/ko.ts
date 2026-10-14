import type { GenericOAuthErrorCodesType } from "../../../types";

export const KO_KR = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "유효하지 않은 OAuth 구성",
	TOKEN_URL_NOT_FOUND: "잘못된 OAuth 구성입니다. 토큰 URL을 찾을 수 없습니다.",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KR,
} as const;
