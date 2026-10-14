import { createTranslationObject } from "../utils/create-translation-object";

export const JA_JP = createTranslationObject("ja-JP", {
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
	INVALID_USER: "無効なユーザーです",
	TOKEN_EXPIRED: "トークンの有効期限が切れています",
	CHANGE_EMAIL_DISABLED: "メールアドレスの変更は無効になっています",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"クロスサイトナビゲーションによるログインがブロックされました。このリクエストはCSRF攻撃の可能性があります。",
	VERIFICATION_EMAIL_NOT_ENABLED: "確認メールは有効になっていません",
	EMAIL_ALREADY_VERIFIED: "メールアドレスはすでに確認済みです",
	EMAIL_MISMATCH: "メールアドレスが一致しません",
	SESSION_NOT_FRESH: "セッションが最新ではありません",
	LINKED_ACCOUNT_ALREADY_EXISTS: "連携済みのアカウントがすでに存在します",
	INVALID_ORIGIN: "無効なオリジンです",
	INVALID_CALLBACK_URL: "無効な callbackURL です",
	INVALID_REDIRECT_URL: "無効な redirectURL です",
	INVALID_ERROR_CALLBACK_URL: "無効な errorCallbackURL です",
	INVALID_NEW_USER_CALLBACK_URL: "無効な newUserCallbackURL です",
	MISSING_OR_NULL_ORIGIN: "Origin がないか null です",
	CALLBACK_URL_REQUIRED: "callbackURL は必須です",
	FAILED_TO_CREATE_VERIFICATION: "確認を作成できませんでした",
	FIELD_NOT_ALLOWED: "このフィールドは設定できません",
	ASYNC_VALIDATION_NOT_SUPPORTED: "非同期検証はサポートされていません",
	VALIDATION_ERROR: "検証エラー",
	MISSING_FIELD: "このフィールドは必須です",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"POST メソッドを使用するには、セッション設定で deferSessionRefresh を有効にする必要があります",
	BODY_MUST_BE_AN_OBJECT: "Body はオブジェクトである必要があります",
	PASSWORD_ALREADY_SET: "ユーザーにはすでにパスワードが設定されています",
});

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
