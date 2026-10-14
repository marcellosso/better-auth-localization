import { createTranslationObject } from "../utils/create-translation-object";

export const KO_KO = createTranslationObject("ko-KR", {
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
	INVALID_USER: "잘못된 사용자입니다",
	TOKEN_EXPIRED: "토큰이 만료되었습니다",
	CHANGE_EMAIL_DISABLED: "이메일 변경이 비활성화되어 있습니다",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"교차 사이트 탐색 로그인이 차단되었습니다. 이 요청은 CSRF 공격으로 보입니다.",
	VERIFICATION_EMAIL_NOT_ENABLED: "인증 이메일이 활성화되어 있지 않습니다",
	EMAIL_ALREADY_VERIFIED: "이메일이 이미 인증되었습니다",
	EMAIL_MISMATCH: "이메일이 일치하지 않습니다",
	SESSION_NOT_FRESH: "세션이 최신 상태가 아닙니다",
	LINKED_ACCOUNT_ALREADY_EXISTS: "연결된 계정이 이미 존재합니다",
	INVALID_ORIGIN: "잘못된 출처입니다",
	INVALID_CALLBACK_URL: "잘못된 callbackURL입니다",
	INVALID_REDIRECT_URL: "잘못된 redirectURL입니다",
	INVALID_ERROR_CALLBACK_URL: "잘못된 errorCallbackURL입니다",
	INVALID_NEW_USER_CALLBACK_URL: "잘못된 newUserCallbackURL입니다",
	MISSING_OR_NULL_ORIGIN: "Origin이 없거나 null입니다",
	CALLBACK_URL_REQUIRED: "callbackURL은 필수입니다",
	FAILED_TO_CREATE_VERIFICATION: "인증을 생성하지 못했습니다",
	FIELD_NOT_ALLOWED: "이 필드는 설정할 수 없습니다",
	ASYNC_VALIDATION_NOT_SUPPORTED: "비동기 검증은 지원되지 않습니다",
	VALIDATION_ERROR: "유효성 검사 오류",
	MISSING_FIELD: "필수 입력 항목입니다",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"POST 메서드를 사용하려면 세션 설정에서 deferSessionRefresh를 활성화해야 합니다",
	BODY_MUST_BE_AN_OBJECT: "Body는 객체여야 합니다",
	PASSWORD_ALREADY_SET: "사용자에게 이미 비밀번호가 설정되어 있습니다",
});

export const LOCALES = {
	"ko-KR": KO_KO,
} as const;
