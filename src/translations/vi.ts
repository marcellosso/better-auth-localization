import { createTranslationObject } from "../utils/create-translation-object";

export const VI_VN = createTranslationObject("vi-VN", {
	// User related errors
	USER_NOT_FOUND: "Không tìm thấy người dùng",
	FAILED_TO_CREATE_USER: "Không thể tạo người dùng",
	FAILED_TO_UPDATE_USER: "Không thể cập nhật người dùng",
	USER_ALREADY_EXISTS: "Người dùng đã tồn tại",
	USER_EMAIL_NOT_FOUND: "Không tìm thấy email người dùng",
	USER_ALREADY_HAS_PASSWORD:
		"Người dùng đã có mật khẩu. Sử dụng mật khẩu này để xóa tài khoản.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Người dùng đã tồn tại. Vui lòng sử dụng email khác.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Không thể tạo session",
	FAILED_TO_GET_SESSION: "Không thể lấy session",
	SESSION_EXPIRED: "Session đã hết hạn. Vui lòng đăng nhập lại.",

	// Authentication errors
	INVALID_PASSWORD: "Mật khẩu không hợp lệ",
	INVALID_EMAIL: "Email không hợp lệ",
	INVALID_EMAIL_OR_PASSWORD: "Email hoặc mật khẩu không hợp lệ",
	INVALID_TOKEN: "Token không hợp lệ",
	EMAIL_NOT_VERIFIED: "Email chưa được xác thực",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Không tìm thấy tài khoản",

	// Password related errors
	PASSWORD_TOO_SHORT: "Mật khẩu quá ngắn",
	PASSWORD_TOO_LONG: "Mật khẩu quá dài",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Tài khoản mạng xã hội đã được liên kết",
	PROVIDER_NOT_FOUND: "Không tìm thấy provider",
	ID_TOKEN_NOT_SUPPORTED: "id_token không được hỗ trợ",
	FAILED_TO_GET_USER_INFO: "Không thể lấy thông tin người dùng",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "Email không thể được cập nhật",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Không thể tách tài khoản cuối cùng",
	ACCOUNT_NOT_FOUND: "Không tìm thấy tài khoản",
	INVALID_USER: "Người dùng không hợp lệ",
	TOKEN_EXPIRED: "Token đã hết hạn",
	CHANGE_EMAIL_DISABLED: "Chức năng đổi email đã bị tắt",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Đăng nhập qua điều hướng chéo trang đã bị chặn. Yêu cầu này có vẻ là một cuộc tấn công CSRF.",
	VERIFICATION_EMAIL_NOT_ENABLED: "Email xác thực chưa được bật",
	EMAIL_ALREADY_VERIFIED: "Email đã được xác thực",
	EMAIL_MISMATCH: "Email không khớp",
	SESSION_NOT_FRESH: "Session không còn mới",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Tài khoản liên kết đã tồn tại",
	INVALID_ORIGIN: "Origin không hợp lệ",
	INVALID_CALLBACK_URL: "callbackURL không hợp lệ",
	INVALID_REDIRECT_URL: "redirectURL không hợp lệ",
	INVALID_ERROR_CALLBACK_URL: "errorCallbackURL không hợp lệ",
	INVALID_NEW_USER_CALLBACK_URL: "newUserCallbackURL không hợp lệ",
	MISSING_OR_NULL_ORIGIN: "Origin bị thiếu hoặc null",
	CALLBACK_URL_REQUIRED: "Yêu cầu callbackURL",
	FAILED_TO_CREATE_VERIFICATION: "Không thể tạo xác thực",
	FIELD_NOT_ALLOWED: "Trường này không được phép thiết lập",
	ASYNC_VALIDATION_NOT_SUPPORTED: "Không hỗ trợ xác thực bất đồng bộ",
	VALIDATION_ERROR: "Lỗi xác thực dữ liệu",
	MISSING_FIELD: "Trường này là bắt buộc",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"Phương thức POST yêu cầu bật deferSessionRefresh trong cấu hình session",
	BODY_MUST_BE_AN_OBJECT: "Body phải là một đối tượng",
	PASSWORD_ALREADY_SET: "Người dùng đã đặt mật khẩu",
});

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
