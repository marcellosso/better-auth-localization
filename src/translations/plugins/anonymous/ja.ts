import type { AnonymousErrorCodesType } from "../../../types";

export const JA_JP = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "セッションを作成できませんでした",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"匿名ユーザーは再度匿名でサインインできません",
	INVALID_EMAIL_FORMAT: "生成されたメールアドレスの形式が無効です",
	FAILED_TO_DELETE_ANONYMOUS_USER: "匿名ユーザーを削除できませんでした",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"匿名ユーザーのセッションを削除できませんでした",
	USER_IS_NOT_ANONYMOUS: "ユーザーは匿名ではありません",
	DELETE_ANONYMOUS_USER_DISABLED: "匿名ユーザーの削除は無効になっています",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
