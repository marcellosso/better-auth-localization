import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const KO_KR = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "유효하지 않은 디바이스 코드",
	EXPIRED_DEVICE_CODE: "디바이스 코드가 만료되었습니다",
	EXPIRED_USER_CODE: "사용자 코드가 만료되었습니다",
	AUTHORIZATION_PENDING: "승인 대기 중",
	ACCESS_DENIED: "액세스가 거부되었습니다",
	INVALID_USER_CODE: "유효하지 않은 사용자 코드",
	DEVICE_CODE_ALREADY_PROCESSED: "디바이스 코드가 이미 처리되었습니다",
	POLLING_TOO_FREQUENTLY: "폴링이 너무 자주 발생합니다",
	INVALID_DEVICE_CODE_STATUS: "유효하지 않은 디바이스 코드 상태",
	AUTHENTICATION_REQUIRED: "인증이 필요합니다",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KR,
} as const;
