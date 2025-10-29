import type { AdminErrorCodesType } from "../../../types";

export const KO_KR = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "자신을 차단할 수 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"사용자 역할을 변경할 권한이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "사용자를 생성할 권한이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "사용자 목록을 볼 권한이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"사용자 세션 목록을 볼 권한이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "사용자를 차단할 권한이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"다른 사용자를 가장할 권한이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"사용자 세션을 취소할 권한이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "사용자를 삭제할 권한이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"사용자 비밀번호를 설정할 권한이 없습니다",
	BANNED_USER: "이 애플리케이션에서 차단되었습니다",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "사용자를 가져올 권한이 없습니다",
	NO_DATA_TO_UPDATE: "업데이트할 데이터가 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS: "사용자를 업데이트할 권한이 없습니다",
	YOU_CANNOT_REMOVE_YOURSELF: "자신을 제거할 수 없습니다",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KR,
} as const;
