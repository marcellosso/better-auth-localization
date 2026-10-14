import type { StripeErrorCodesType } from "../../../types";

export const JA_JP = {
	UNAUTHORIZED: "認証されていないアクセスです",
	INVALID_REQUEST_BODY: "無効なリクエストボディです",
	SUBSCRIPTION_NOT_FOUND: "サブスクリプションが見つかりません",
	SUBSCRIPTION_PLAN_NOT_FOUND: "サブスクリプションプランが見つかりません",
	ALREADY_SUBSCRIBED_PLAN: "すでにこのプランを購読しています",
	REFERENCE_ID_NOT_ALLOWED: "参照IDは許可されていません",
	CUSTOMER_NOT_FOUND: "このユーザーの Stripe 顧客が見つかりません",
	UNABLE_TO_CREATE_CUSTOMER: "顧客を作成できません",
	UNABLE_TO_CREATE_BILLING_PORTAL: "請求ポータルセッションを作成できません",
	STRIPE_SIGNATURE_NOT_FOUND: "Stripe の署名が見つかりません",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND:
		"Stripe の Webhook シークレットが見つかりません",
	STRIPE_WEBHOOK_ERROR: "Stripe の Webhook エラー",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Stripe イベントの構築に失敗しました",
	FAILED_TO_FETCH_PLANS: "プランの取得に失敗しました",
	EMAIL_VERIFICATION_REQUIRED:
		"プランを購読するには、メールアドレスの確認が必要です",
	SUBSCRIPTION_NOT_ACTIVE: "サブスクリプションが有効ではありません",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"サブスクリプションはキャンセル予定ではありません",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"サブスクリプションに保留中のキャンセルや予定されているプラン変更はありません",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"組織のサブスクリプションは有効になっていません",
	AUTHORIZE_REFERENCE_REQUIRED:
		"組織のサブスクリプションには authorizeReference コールバックの設定が必要です",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"有効なサブスクリプションがある組織は削除できません",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"参照IDが必要です。referenceId を指定するか、セッションに activeOrganizationId を設定してください",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
