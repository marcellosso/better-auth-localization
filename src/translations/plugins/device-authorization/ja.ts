import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const JA_JP = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "無効なデバイスコード",
	EXPIRED_DEVICE_CODE: "デバイスコードの有効期限が切れています",
	EXPIRED_USER_CODE: "ユーザーコードの有効期限が切れています",
	AUTHORIZATION_PENDING: "承認待ち",
	ACCESS_DENIED: "アクセスが拒否されました",
	INVALID_USER_CODE: "無効なユーザーコード",
	DEVICE_CODE_ALREADY_PROCESSED: "デバイスコードは既に処理済みです",
	POLLING_TOO_FREQUENTLY: "ポーリングが頻繁すぎます",
	INVALID_DEVICE_CODE_STATUS: "無効なデバイスコードステータス",
	AUTHENTICATION_REQUIRED: "認証が必要です",
	DEVICE_CODE_NOT_CLAIMED:
		"デバイスコードは確認用セッションに紐付けられていません。承認または拒否する前に、サインインした状態で `user_code` を指定して `GET /device` を呼び出してください",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
