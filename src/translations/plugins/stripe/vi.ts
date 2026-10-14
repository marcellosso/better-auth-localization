import type { StripeErrorCodesType } from "../../../types";

export const VI_VN = {
	UNAUTHORIZED: "Truy cập trái phép",
	INVALID_REQUEST_BODY: "Body của yêu cầu không hợp lệ",
	SUBSCRIPTION_NOT_FOUND: "Không tìm thấy gói đăng ký",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Không tìm thấy gói dịch vụ",
	ALREADY_SUBSCRIBED_PLAN: "Bạn đã đăng ký gói này rồi",
	REFERENCE_ID_NOT_ALLOWED: "Không cho phép ID tham chiếu",
	CUSTOMER_NOT_FOUND: "Không tìm thấy khách hàng Stripe cho người dùng này",
	UNABLE_TO_CREATE_CUSTOMER: "Không thể tạo khách hàng",
	UNABLE_TO_CREATE_BILLING_PORTAL: "Không thể tạo session cổng thanh toán",
	STRIPE_SIGNATURE_NOT_FOUND: "Không tìm thấy chữ ký Stripe",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Không tìm thấy webhook secret của Stripe",
	STRIPE_WEBHOOK_ERROR: "Lỗi webhook Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Không thể dựng sự kiện Stripe",
	FAILED_TO_FETCH_PLANS: "Không thể lấy danh sách gói",
	EMAIL_VERIFICATION_REQUIRED:
		"Cần xác thực email trước khi bạn có thể đăng ký gói",
	SUBSCRIPTION_NOT_ACTIVE: "Gói đăng ký không còn hoạt động",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"Gói đăng ký chưa được lên lịch hủy",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"Gói đăng ký không có yêu cầu hủy đang chờ hoặc thay đổi gói đã lên lịch",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"Gói đăng ký của tổ chức chưa được bật",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Gói đăng ký của tổ chức yêu cầu cấu hình callback authorizeReference",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Không thể xóa tổ chức đang có gói đăng ký hoạt động",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"Cần có ID tham chiếu. Hãy cung cấp referenceId hoặc đặt activeOrganizationId trong session",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
