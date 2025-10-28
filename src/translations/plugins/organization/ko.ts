import type { OrganizationErrorCodesType } from "../../../types";

export const KO_KR = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"새 조직을 생성할 권한이 없습니다",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"최대 조직 수에 도달했습니다",
	ORGANIZATION_ALREADY_EXISTS: "조직이 이미 존재합니다",
	ORGANIZATION_NOT_FOUND: "조직을 찾을 수 없습니다",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION: "사용자가 조직의 구성원이 아닙니다",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"이 조직을 업데이트할 권한이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"이 조직을 삭제할 권한이 없습니다",
	NO_ACTIVE_ORGANIZATION: "활성 조직이 없습니다",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"사용자가 이미 이 조직의 구성원입니다",
	MEMBER_NOT_FOUND: "구성원을 찾을 수 없습니다",
	ROLE_NOT_FOUND: "역할을 찾을 수 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM: "새 팀을 생성할 권한이 없습니다",
	TEAM_ALREADY_EXISTS: "팀이 이미 존재합니다",
	TEAM_NOT_FOUND: "팀을 찾을 수 없습니다",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"유일한 소유자로서 조직을 떠날 수 없습니다",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"소유자 없이 조직을 떠날 수 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"이 구성원을 삭제할 권한이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"이 조직에 사용자를 초대할 권한이 없습니다",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"사용자가 이미 이 조직에 초대되었습니다",
	INVITATION_NOT_FOUND: "초대를 찾을 수 없습니다",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
		"당신은 초대의 수신자가 아닙니다",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"초대를 수락하거나 거부하기 전에 이메일 인증이 필요합니다",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"이 초대를 취소할 권한이 없습니다",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"초대자가 더 이상 조직의 구성원이 아닙니다",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"이 역할로 사용자를 초대할 권한이 없습니다",
	FAILED_TO_RETRIEVE_INVITATION: "초대를 가져오는데 실패했습니다",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS: "최대 팀 수에 도달했습니다",
	UNABLE_TO_REMOVE_LAST_TEAM: "마지막 팀을 제거할 수 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"이 구성원을 업데이트할 권한이 없습니다",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED: "조직 구성원 제한에 도달했습니다",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"이 조직에서 팀을 생성할 권한이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"이 조직에서 팀을 삭제할 권한이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM: "이 팀을 업데이트할 권한이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM: "이 팀을 삭제할 권한이 없습니다",
	INVITATION_LIMIT_REACHED: "초대 제한에 도달했습니다",
	TEAM_MEMBER_LIMIT_REACHED: "팀 구성원 제한에 도달했습니다",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "사용자가 팀의 구성원이 아닙니다",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"이 팀의 구성원에 접근할 권한이 없습니다",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "활성 팀이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"새 팀 구성원을 생성할 권한이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"팀 구성원을 제거할 권한이 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"소유자로서 이 조직에 접근할 권한이 없습니다",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"당신은 이 조직의 구성원이 아닙니다",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KR,
} as const;
