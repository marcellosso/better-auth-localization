import type { TwoFactorErrorCodesType } from "../../../types";

export const JA_JP = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "ワンタイムパスワードが有効になっていません",
	OTP_HAS_EXPIRED: "ワンタイムパスワードの有効期限が切れています",
	TOTP_NOT_ENABLED: "時間ベースのワンタイムパスワードが有効になっていません",
	TWO_FACTOR_NOT_ENABLED: "二要素認証が有効になっていません",
	BACKUP_CODES_NOT_ENABLED: "バックアップコードが有効になっていません",
	INVALID_BACKUP_CODE: "無効なバックアップコード",
	INVALID_CODE: "無効なコード",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"試行回数が多すぎます。新しいコードをリクエストしてください。",
	INVALID_TWO_FACTOR_COOKIE: "無効な二要素認証クッキー",
	OTP_NOT_CONFIGURED: "OTP は利用できません",
	TOTP_ALREADY_ENABLED: "TOTP はすでに有効です",
	TOTP_NOT_CONFIGURED: "TOTP は利用できません",
	ACCOUNT_TEMPORARILY_LOCKED:
		"確認の失敗回数が多すぎます。アカウントは一時的にロックされています。しばらくしてからもう一度お試しください。",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
