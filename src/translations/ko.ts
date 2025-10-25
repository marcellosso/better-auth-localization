import type { ErrorCodesType } from "../types";

export const KO_KO = {
	// User related errors
	USER_NOT_FOUND: "사용자를 찾을 수 없습니다",
	FAILED_TO_CREATE_USER: "사용자 생성 실패",
	FAILED_TO_UPDATE_USER: "사용자 업데이트 실패",
	USER_ALREADY_EXISTS: "이미 존재하는 사용자입니다",
	USER_EMAIL_NOT_FOUND: "사용자의 이메일을 찾을 수 없습니다",
	USER_ALREADY_HAS_PASSWORD:
		"사용자가 이미 비밀번호를 설정했습니다. 계정을 삭제하려면 해당 비밀번호를 제공하십시오.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"이미 존재하는 사용자입니다. 다른 이메일을 사용하세요.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "세션 생성 실패",
	FAILED_TO_GET_SESSION: "세션 가져오기 실패",
	SESSION_EXPIRED:
		"세션이 만료되었습니다. 이 작업을 수행하려면 다시 로그인하십시오.",

	// Authentication errors
	INVALID_PASSWORD: "잘못된 비밀번호",
	INVALID_EMAIL: "잘못된 이메일",
	INVALID_EMAIL_OR_PASSWORD: "이메일 또는 비밀번호가 잘못되었습니다",
	INVALID_TOKEN: "잘못된 토큰",
	EMAIL_NOT_VERIFIED: "이메일이 인증되지 않았습니다",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "자격 증명 계정을 찾을 수 없습니다",

	// Password related errors
	PASSWORD_TOO_SHORT: "비밀번호가 너무 짧습니다",
	PASSWORD_TOO_LONG: "비밀번호가 너무 깁니다",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "계정이 이미 연결되어 있습니다",
	PROVIDER_NOT_FOUND: "제공자를 찾을 수 없습니다",
	ID_TOKEN_NOT_SUPPORTED: "id_token이 지원되지 않습니다",
	FAILED_TO_GET_USER_INFO: "사용자 정보 가져오기 실패",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "이메일을 업데이트할 수 없습니다",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "마지막 계정의 연결을 해제할 수 없습니다",
	ACCOUNT_NOT_FOUND: "계정을 찾을 수 없습니다",
} satisfies ErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KO,
} as const;
