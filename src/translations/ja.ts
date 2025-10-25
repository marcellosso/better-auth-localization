import type { ErrorCodesType } from "../types";

export const JA_JP = {
	// User related errors
	USER_NOT_FOUND: "ユーザーが見つかりません",
	FAILED_TO_CREATE_USER: "ユーザーの作成に失敗しました",
	FAILED_TO_UPDATE_USER: "ユーザーの更新に失敗しました",
	USER_ALREADY_EXISTS: "ユーザーは既に存在します",
	USER_EMAIL_NOT_FOUND: "ユーザーのメールアドレスが見つかりません",
	USER_ALREADY_HAS_PASSWORD:
		"ユーザーは既にパスワードを設定しています。アカウントを削除するには、そのパスワードを入力してください。",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"ユーザーは既に存在します。別のメールアドレスを使用してください。",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "セッションの作成に失敗しました",
	FAILED_TO_GET_SESSION: "セッションの取得に失敗しました",
	SESSION_EXPIRED:
		"セッションが期限切れです。この操作を実行するには再度ログインしてください。",

	// Authentication errors
	INVALID_PASSWORD: "パスワードが無効です",
	INVALID_EMAIL: "メールアドレスが無効です",
	INVALID_EMAIL_OR_PASSWORD: "メールアドレスまたはパスワードが無効です",
	INVALID_TOKEN: "トークンが無効です",
	EMAIL_NOT_VERIFIED: "メールアドレスが確認されていません",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "認証アカウントが見つかりません",

	// Password related errors
	PASSWORD_TOO_SHORT: "パスワードが短すぎます",
	PASSWORD_TOO_LONG: "パスワードが長すぎます",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "アカウントは既に連携済みです",
	PROVIDER_NOT_FOUND: "プロバイダーが見つかりません",
	ID_TOKEN_NOT_SUPPORTED: "id_tokenはサポートされていません",
	FAILED_TO_GET_USER_INFO: "ユーザー情報の取得に失敗しました",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "メールアドレスを更新できません",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "最後のアカウントの連携を解除できません",
	ACCOUNT_NOT_FOUND: "アカウントが見つかりません",
} satisfies ErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
