import type { OrganizationErrorCodesType } from "../../../types";

export const VI_VN = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Bạn không có quyền tạo tổ chức mới",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Bạn đã đạt đến số lượng tổ chức tối đa",
	ORGANIZATION_ALREADY_EXISTS: "Tổ chức đã tồn tại",
	ORGANIZATION_NOT_FOUND: "Không tìm thấy tổ chức",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
		"Người dùng không phải là thành viên của tổ chức",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Bạn không có quyền cập nhật tổ chức này",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Bạn không có quyền xóa tổ chức này",
	NO_ACTIVE_ORGANIZATION: "Không có tổ chức đang hoạt động",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"Người dùng đã là thành viên của tổ chức này",
	MEMBER_NOT_FOUND: "Không tìm thấy thành viên",
	ROLE_NOT_FOUND: "Không tìm thấy vai trò",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Bạn không có quyền tạo đội nhóm mới",
	TEAM_ALREADY_EXISTS: "Đội nhóm đã tồn tại",
	TEAM_NOT_FOUND: "Không tìm thấy đội nhóm",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Bạn không thể rời khỏi tổ chức khi là chủ sở hữu duy nhất",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Bạn không thể rời khỏi tổ chức khi không còn chủ sở hữu",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"Bạn không có quyền xóa thành viên này",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Bạn không có quyền mời người dùng vào tổ chức này",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"Người dùng đã được mời vào tổ chức này",
	INVITATION_NOT_FOUND: "Không tìm thấy lời mời",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
		"Bạn không phải người nhận lời mời này",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"Cần xác thực email trước khi chấp nhận hoặc từ chối lời mời",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Bạn không có quyền hủy lời mời này",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"Người gửi lời mời không còn là thành viên của tổ chức",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Bạn không có quyền mời người dùng với vai trò này",
	FAILED_TO_RETRIEVE_INVITATION: "Không thể lấy thông tin lời mời",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Bạn đã đạt đến số lượng đội nhóm tối đa",
	UNABLE_TO_REMOVE_LAST_TEAM: "Không thể xóa đội nhóm cuối cùng",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"Bạn không có quyền cập nhật thành viên này",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
		"Tổ chức đã đạt giới hạn số lượng thành viên",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Bạn không có quyền tạo đội nhóm trong tổ chức này",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Bạn không có quyền xóa đội nhóm trong tổ chức này",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"Bạn không có quyền cập nhật đội nhóm này",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"Bạn không có quyền xóa đội nhóm này",
	INVITATION_LIMIT_REACHED: "Đã đạt giới hạn số lượng lời mời",
	TEAM_MEMBER_LIMIT_REACHED: "Đội nhóm đã đạt giới hạn số lượng thành viên",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM:
		"Người dùng không phải là thành viên của đội nhóm",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Bạn không có quyền truy cập danh sách thành viên của đội nhóm này",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Không có đội nhóm đang hoạt động",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Bạn không có quyền thêm thành viên mới vào đội nhóm",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Bạn không có quyền xóa thành viên khỏi đội nhóm",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Bạn không có quyền truy cập tổ chức này",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"Bạn không phải là thành viên của tổ chức này",
	ORGANIZATION_SLUG_ALREADY_TAKEN: "Slug của tổ chức đã được sử dụng",
	EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION:
		"Cần xác thực email để xem hoặc liệt kê lời mời của email trong session",
	MISSING_AC_INSTANCE:
		"Dynamic Access Control yêu cầu một ac instance được định nghĩa sẵn trên plugin auth phía server. Xem log của server để biết thêm thông tin",
	YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE:
		"Bạn phải thuộc một tổ chức để tạo vai trò",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE: "Bạn không có quyền tạo vai trò",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE: "Bạn không có quyền cập nhật vai trò",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE: "Bạn không có quyền xóa vai trò",
	YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE: "Bạn không có quyền xem vai trò",
	YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE: "Bạn không có quyền liệt kê vai trò",
	YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE: "Bạn không có quyền lấy thông tin vai trò",
	TOO_MANY_ROLES: "Tổ chức này có quá nhiều vai trò",
	INVALID_RESOURCE: "Quyền được cung cấp chứa resource không hợp lệ",
	ROLE_NAME_IS_ALREADY_TAKEN: "Tên vai trò này đã được sử dụng",
	CANNOT_DELETE_A_PRE_DEFINED_ROLE: "Không thể xóa vai trò được định nghĩa sẵn",
	ROLE_IS_ASSIGNED_TO_MEMBERS:
		"Không thể xóa vai trò đang được gán cho thành viên. Vui lòng gán các thành viên sang vai trò khác trước",
	INVALID_TEAM_ID: "ID đội nhóm chứa ký tự được dành riêng",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
