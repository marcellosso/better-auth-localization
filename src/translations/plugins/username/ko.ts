import type { UsernameErrorCodesType } from "../../../types";

export const KO_KR = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "유효하지 않은 사용자 이름 또는 비밀번호",
	USERNAME_IS_ALREADY_TAKEN:
		"사용자 이름이 이미 사용 중입니다. 다른 이름을 시도해 주세요.",
	USERNAME_TOO_SHORT: "사용자 이름이 너무 짧습니다",
	USERNAME_TOO_LONG: "사용자 이름이 너무 깁니다",
	INVALID_USERNAME: "유효하지 않은 사용자 이름",
	INVALID_DISPLAY_USERNAME: "유효하지 않은 표시 이름",
	USERNAME_IS_IMMUTABLE: "사용자 이름은 업데이트할 수 없습니다",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KR,
} as const;
