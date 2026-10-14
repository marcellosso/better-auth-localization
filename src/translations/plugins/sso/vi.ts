import type { SSOErrorCodesType } from "../../../types";

export const VI_VN = {
	SINGLE_LOGOUT_NOT_ENABLED: "Single Logout chưa được bật",
	INVALID_LOGOUT_RESPONSE: "LogoutResponse không hợp lệ",
	INVALID_LOGOUT_REQUEST: "LogoutRequest không hợp lệ",
	LOGOUT_FAILED_AT_IDP: "Đăng xuất thất bại tại IdP",
	IDP_SLO_NOT_SUPPORTED: "IdP không hỗ trợ Single Logout Service",
	SAML_PROVIDER_NOT_FOUND: "Không tìm thấy provider SAML",
	SAML_INVALID_XML: "Không thể phân tích XML của phản hồi SAML",
	SAML_INVALID_ENCODING: "Phản hồi SAML mã hóa base64 không hợp lệ",
	SAML_NO_ASSERTION: "Phản hồi SAML không chứa assertion nào",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "Yêu cầu chữ ký assertion SAML",
	SAML_RESPONSE_INVALID_XML: "Không thể phân tích XML của phản hồi SAML",
	SAML_ASSERTION_MISSING: "Phản hồi SAML thiếu assertion",
	SAML_AUDIENCE_MISSING: "Assertion SAML thiếu AudienceRestriction",
	SAML_AUDIENCE_MISMATCH:
		"Audience của assertion SAML không khớp với Service Provider này",
	SAML_BEARER_CONFIRMATION_MISSING:
		"Assertion SAML thiếu bearer SubjectConfirmationData",
	SAML_RECIPIENT_MISSING:
		"bearer SubjectConfirmationData của SAML thiếu Recipient",
	SAML_RECIPIENT_MISMATCH:
		"Recipient của bearer SubjectConfirmationData SAML không khớp với Service Provider này",
	SAML_DESTINATION_MISMATCH:
		"Destination của phản hồi SAML không khớp với Service Provider này",
	SSO_USER_RESOLUTION_FAILED: "Không thể xác định người dùng SSO",
	SSO_PROVIDER_MUTATION_REJECTED: "Không được phép thay đổi provider SSO",
	SSO_PROVIDER_CHANGED:
		"Provider SSO đã thay đổi trong khi thao tác đang diễn ra. Hãy tải lại provider và thử lại",
	DOMAIN_VERIFIED: "Tên miền đã được xác minh",
	NO_PENDING_VERIFICATION: "Không có yêu cầu xác minh tên miền nào đang chờ",
	INVALID_DOMAIN: "Tên miền không hợp lệ",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
