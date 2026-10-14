import type { ApiKeyErrorCodesType } from "../../../types";

export const JA_JP = {
	// Api key related errors
	INVALID_METADATA_TYPE:
		"メタデータはオブジェクトまたはundefinedである必要があります",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"リフィル間隔が提供される場合、リフィル量が必要です",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"リフィル量が提供される場合、リフィル間隔が必要です",
	USER_BANNED: "ユーザーが禁止されています",
	UNAUTHORIZED_SESSION: "認証されていないまたは無効なセッション",
	KEY_NOT_FOUND: "APIキーが見つかりません",
	KEY_DISABLED: "APIキーが無効になっています",
	KEY_EXPIRED: "APIキーの有効期限が切れています",
	USAGE_EXCEEDED: "APIキーが使用制限を超えました",
	KEY_NOT_RECOVERABLE: "APIキーは復旧できません",
	EXPIRES_IN_IS_TOO_SMALL: "有効期限が事前定義された最小値より短いです。",
	EXPIRES_IN_IS_TOO_LARGE: "有効期限が事前定義された最大値より長いです。",
	INVALID_REMAINING: "残りの値が大きすぎるか小さすぎます。",
	INVALID_PREFIX_LENGTH: "プレフィックスサイズが大きすぎるか小さすぎます。",
	INVALID_NAME_LENGTH: "名前のサイズが大きすぎるか小さすぎます。",
	METADATA_DISABLED: "メタデータが無効になっています。",
	RATE_LIMIT_EXCEEDED: "リクエスト制限を超えました。",
	NO_VALUES_TO_UPDATE: "更新する値がありません。",
	KEY_DISABLED_EXPIRATION: "カスタムキー有効期限値が無効になっています。",
	INVALID_API_KEY: "無効なAPIキーです。",
	INVALID_USER_ID_FROM_API_KEY: "APIキーからのユーザーIDが無効です。",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"APIキーゲッターが無効な型を返しました。期待値: 文字列。",
	SERVER_ONLY_PROPERTY:
		"設定しようとしているプロパティは、サーバー認証インスタンスからのみ設定できます。",
	FAILED_TO_UPDATE_API_KEY: "APIキーの更新に失敗しました",
	NAME_REQUIRED: "APIキー名が必要です。",
	INVALID_REFERENCE_ID_FROM_API_KEY: "APIキーの参照IDが無効です。",
	ORGANIZATION_ID_REQUIRED: "組織所有のAPIキーには組織IDが必要です。",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"このAPIキーを所有する組織のメンバーではありません。",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"組織のAPIキーに対してこの操作を行う権限がありません。",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"デフォルトのapi-key設定が見つかりません。",
	ORGANIZATION_PLUGIN_REQUIRED:
		"組織所有のAPIキーには組織プラグインが必要です。組織プラグインをインストールして設定してください。",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
