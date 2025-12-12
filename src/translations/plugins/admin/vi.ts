import type { AdminErrorCodesType } from "../../../types";

export const VI_VN = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "Bạn không thể chặn chính mình",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"Bạn không có quyền thay đổi vai trò của người dùng",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "Bạn không có quyền tạo người dùng",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"Bạn không có quyền xem danh sách người dùng",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"Bạn không có quyền xem danh sách session của người dùng",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "Bạn không có quyền chặn người dùng",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"Bạn không có quyền giả mạo người dùng khác",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"Bạn không có quyền thu hồi session của người dùng",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "Bạn không có quyền xóa người dùng",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"Bạn không có quyền đặt mật khẩu cho người dùng",
	BANNED_USER: "Bạn đã bị chặn khỏi ứng dụng này",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER:
		"Bạn không có quyền xem thông tin người dùng",
	NO_DATA_TO_UPDATE: "Không có dữ liệu để cập nhật",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS: "Bạn không có quyền cập nhật người dùng",
	YOU_CANNOT_REMOVE_YOURSELF: "Bạn không thể tự xóa chính mình",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
