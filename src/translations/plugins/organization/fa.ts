import type { OrganizationErrorCodesType } from "../../../types";

export const FA_IR = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"شما مجاز به ایجاد سازمان جدید نیستید",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"شما به حداکثر تعداد سازمان‌ها رسیده‌اید",
	ORGANIZATION_ALREADY_EXISTS: "سازمان از قبل وجود دارد",
	ORGANIZATION_NOT_FOUND: "سازمان یافت نشد",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION: "کاربر عضو سازمان نیست",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"شما مجاز به به‌روزرسانی این سازمان نیستید",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"شما مجاز به حذف این سازمان نیستید",
	NO_ACTIVE_ORGANIZATION: "هیچ سازمان فعالی وجود ندارد",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"کاربر از قبل عضو این سازمان است",
	MEMBER_NOT_FOUND: "عضو یافت نشد",
	ROLE_NOT_FOUND: "نقش یافت نشد",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM: "شما مجاز به ایجاد تیم جدید نیستید",
	TEAM_ALREADY_EXISTS: "تیم از قبل وجود دارد",
	TEAM_NOT_FOUND: "تیم یافت نشد",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"شما نمی‌توانید به عنوان تنها مالک از سازمان خارج شوید",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"شما نمی‌توانید بدون مالک از سازمان خارج شوید",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER: "شما مجاز به حذف این عضو نیستید",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"شما مجاز به دعوت کاربران به این سازمان نیستید",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"کاربر از قبل به این سازمان دعوت شده است",
	INVITATION_NOT_FOUND: "دعوت‌نامه یافت نشد",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION: "شما گیرنده دعوت‌نامه نیستید",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"تأیید ایمیل قبل از پذیرش یا رد دعوت‌نامه الزامی است",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"شما مجاز به لغو این دعوت‌نامه نیستید",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"دعوت‌کننده دیگر عضو سازمان نیست",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"شما مجاز به دعوت کاربر با این نقش نیستید",
	FAILED_TO_RETRIEVE_INVITATION: "دریافت دعوت‌نامه با خطا مواجه شد",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"شما به حداکثر تعداد تیم‌ها رسیده‌اید",
	UNABLE_TO_REMOVE_LAST_TEAM: "امکان حذف آخرین تیم وجود ندارد",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"شما مجاز به به‌روزرسانی این عضو نیستید",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED: "حد عضویت سازمان رسیده است",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"شما مجاز به ایجاد تیم در این سازمان نیستید",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"شما مجاز به حذف تیم در این سازمان نیستید",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"شما مجاز به به‌روزرسانی این تیم نیستید",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM: "شما مجاز به حذف این تیم نیستید",
	INVITATION_LIMIT_REACHED: "حد دعوت‌نامه‌ها رسیده است",
	TEAM_MEMBER_LIMIT_REACHED: "حد اعضای تیم رسیده است",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "کاربر عضو تیم نیست",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"شما مجاز به دسترسی به اعضای این تیم نیستید",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "شما تیم فعالی ندارید",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"شما مجاز به ایجاد عضو جدید تیم نیستید",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER: "شما مجاز به حذف عضو تیم نیستید",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"شما مجاز به دسترسی به این سازمان به عنوان مالک نیستید",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION: "شما عضو این سازمان نیستید",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
