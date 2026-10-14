import type { StripeErrorCodesType } from "../../../types";

export const ZH_HANT = {
	UNAUTHORIZED: "未經授權的訪問",
	INVALID_REQUEST_BODY: "請求體無效",
	SUBSCRIPTION_NOT_FOUND: "找不到訂閱",
	SUBSCRIPTION_PLAN_NOT_FOUND: "找不到訂閱方案",
	ALREADY_SUBSCRIBED_PLAN: "您已訂閱此方案",
	REFERENCE_ID_NOT_ALLOWED: "不允許使用參考 ID",
	CUSTOMER_NOT_FOUND: "找不到此用戶的 Stripe 客戶",
	UNABLE_TO_CREATE_CUSTOMER: "無法創建客戶",
	UNABLE_TO_CREATE_BILLING_PORTAL: "無法創建帳單門戶會話",
	STRIPE_SIGNATURE_NOT_FOUND: "找不到 Stripe 簽名",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "找不到 Stripe Webhook 密鑰",
	STRIPE_WEBHOOK_ERROR: "Stripe Webhook 錯誤",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "構建 Stripe 事件失敗",
	FAILED_TO_FETCH_PLANS: "獲取方案失敗",
	EMAIL_VERIFICATION_REQUIRED: "訂閱方案前需要先驗證電子郵件",
	SUBSCRIPTION_NOT_ACTIVE: "訂閱未生效",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION: "訂閱未安排取消",
	SUBSCRIPTION_NOT_PENDING_CHANGE: "訂閱沒有待處理的取消或已安排的方案變更",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED: "未啟用組織訂閱",
	AUTHORIZE_REFERENCE_REQUIRED: "組織訂閱需要配置 authorizeReference 回調",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION: "無法刪除有生效訂閱的組織",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"需要參考 ID。請提供 referenceId 或在會話中設置 activeOrganizationId",
} satisfies StripeErrorCodesType;

export const ZH_HANS = {
	UNAUTHORIZED: "未经授权的访问",
	INVALID_REQUEST_BODY: "请求体无效",
	SUBSCRIPTION_NOT_FOUND: "找不到订阅",
	SUBSCRIPTION_PLAN_NOT_FOUND: "找不到订阅方案",
	ALREADY_SUBSCRIBED_PLAN: "您已订阅此方案",
	REFERENCE_ID_NOT_ALLOWED: "不允许使用引用 ID",
	CUSTOMER_NOT_FOUND: "找不到此用户的 Stripe 客户",
	UNABLE_TO_CREATE_CUSTOMER: "无法创建客户",
	UNABLE_TO_CREATE_BILLING_PORTAL: "无法创建账单门户会话",
	STRIPE_SIGNATURE_NOT_FOUND: "找不到 Stripe 签名",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "找不到 Stripe Webhook 密钥",
	STRIPE_WEBHOOK_ERROR: "Stripe Webhook 错误",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "构建 Stripe 事件失败",
	FAILED_TO_FETCH_PLANS: "获取方案失败",
	EMAIL_VERIFICATION_REQUIRED: "订阅方案前需要先验证电子邮件",
	SUBSCRIPTION_NOT_ACTIVE: "订阅未生效",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION: "订阅未安排取消",
	SUBSCRIPTION_NOT_PENDING_CHANGE: "订阅没有待处理的取消或已安排的方案变更",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED: "未启用组织订阅",
	AUTHORIZE_REFERENCE_REQUIRED: "组织订阅需要配置 authorizeReference 回调",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION: "无法删除有生效订阅的组织",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"需要引用 ID。请提供 referenceId 或在会话中设置 activeOrganizationId",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
