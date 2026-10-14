import type { StripeErrorCodesType } from "../../../types";

export const KO_KO = {
	UNAUTHORIZED: "권한이 없는 접근입니다",
	INVALID_REQUEST_BODY: "잘못된 요청 본문입니다",
	SUBSCRIPTION_NOT_FOUND: "구독을 찾을 수 없습니다",
	SUBSCRIPTION_PLAN_NOT_FOUND: "구독 플랜을 찾을 수 없습니다",
	ALREADY_SUBSCRIBED_PLAN: "이미 이 플랜을 구독 중입니다",
	REFERENCE_ID_NOT_ALLOWED: "참조 ID는 허용되지 않습니다",
	CUSTOMER_NOT_FOUND: "이 사용자의 Stripe 고객을 찾을 수 없습니다",
	UNABLE_TO_CREATE_CUSTOMER: "고객을 생성할 수 없습니다",
	UNABLE_TO_CREATE_BILLING_PORTAL: "결제 포털 세션을 생성할 수 없습니다",
	STRIPE_SIGNATURE_NOT_FOUND: "Stripe 서명을 찾을 수 없습니다",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Stripe 웹훅 시크릿을 찾을 수 없습니다",
	STRIPE_WEBHOOK_ERROR: "Stripe 웹훅 오류",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Stripe 이벤트를 구성하지 못했습니다",
	FAILED_TO_FETCH_PLANS: "플랜을 가져오지 못했습니다",
	EMAIL_VERIFICATION_REQUIRED: "플랜을 구독하려면 이메일 인증이 필요합니다",
	SUBSCRIPTION_NOT_ACTIVE: "구독이 활성 상태가 아닙니다",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION: "구독이 취소 예정이 아닙니다",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"구독에 대기 중인 취소나 예약된 플랜 변경이 없습니다",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED: "조직 구독이 활성화되어 있지 않습니다",
	AUTHORIZE_REFERENCE_REQUIRED:
		"조직 구독에는 authorizeReference 콜백 구성이 필요합니다",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"활성 구독이 있는 조직은 삭제할 수 없습니다",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"참조 ID가 필요합니다. referenceId를 제공하거나 세션에 activeOrganizationId를 설정하세요",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KO,
} as const;
