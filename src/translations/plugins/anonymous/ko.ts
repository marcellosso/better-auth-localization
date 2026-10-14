import type { AnonymousErrorCodesType } from "../../../types";

export const KO_KR = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "세션을 생성할 수 없습니다",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"익명 사용자는 다시 익명으로 로그인할 수 없습니다",
	INVALID_EMAIL_FORMAT: "생성된 이메일 형식이 올바르지 않습니다",
	FAILED_TO_DELETE_ANONYMOUS_USER: "익명 사용자를 삭제하지 못했습니다",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"익명 사용자의 세션을 삭제하지 못했습니다",
	USER_IS_NOT_ANONYMOUS: "사용자가 익명이 아닙니다",
	DELETE_ANONYMOUS_USER_DISABLED: "익명 사용자 삭제가 비활성화되어 있습니다",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KR,
} as const;
