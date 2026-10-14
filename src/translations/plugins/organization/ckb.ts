import type { OrganizationErrorCodesType } from "../../../types";

export const CKB_IQ = {
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"ڕێگەت پێنەدراوە ڕێکخراوێکی نوێ دروست بکەیت",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"گەیشتویتە زۆرترین ژمارەی ڕێکخراو",
	ORGANIZATION_ALREADY_EXISTS: "ڕێکخراو پێشتر هەیە",
	ORGANIZATION_NOT_FOUND: "ڕێکخراو نەدۆزرایەوە",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
		"بەکارهێنەر ئەندامی ڕێکخراوەکە نییە",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"ڕێگەت پێنەدراوە ئەم ڕێکخراوە نوێ بکەیتەوە",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"ڕێگەت پێنەدراوە ئەم ڕێکخراوە بسڕیتەوە",
	NO_ACTIVE_ORGANIZATION: "هیچ ڕێکخراوێکی چالاک نییە",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"بەکارهێنەر پێشتر ئەندامی ئەم ڕێکخراوەیە",
	MEMBER_NOT_FOUND: "ئەندام نەدۆزرایەوە",
	ROLE_NOT_FOUND: "ڕۆڵ نەدۆزرایەوە",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"ڕێگەت پێنەدراوە تیمێکی نوێ دروست بکەیت",
	TEAM_ALREADY_EXISTS: "تیم پێشتر هەیە",
	TEAM_NOT_FOUND: "تیم نەدۆزرایەوە",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"ناتوانیت وەک تاکە خاوەن ڕێکخراوەکە بەجێبهێڵیت",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"ناتوانیت ڕێکخراوەکە بەبێ خاوەن بەجێبهێڵیت",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"ڕێگەت پێنەدراوە ئەم ئەندامە بسڕیتەوە",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"ڕێگەت پێنەدراوە بەکارهێنەران بانگهێشتی ئەم ڕێکخراوە بکەیت",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"بەکارهێنەر پێشتر بانگهێشت کراوە بۆ ئەم ڕێکخراوە",
	INVITATION_NOT_FOUND: "بانگهێشتنامە نەدۆزرایەوە",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION: "تۆ وەرگری بانگهێشتنامەکە نیت",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"پێش قبوڵکردن یان ڕەتکردنەوەی بانگهێشتنامە، پشتڕاستکردنەوەی ئیمەیڵ پێویستە",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"ڕێگەت پێنەدراوە ئەم بانگهێشتنامەیە هەڵبوەشێنیتەوە",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"بانگهێشتکار چیتر ئەندامی ڕێکخراوەکە نییە",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"ڕێگەت پێنەدراوە بەکارهێنەرێک بەم ڕۆڵە بانگهێشت بکەیت",
	FAILED_TO_RETRIEVE_INVITATION: "نەتوانرا بانگهێشتنامە بەدەست بهێنرێت",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS: "گەیشتویتە زۆرترین ژمارەی تیم",
	UNABLE_TO_REMOVE_LAST_TEAM: "ناتوانرێت دوایین تیم لاببرێت",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"ڕێگەت پێنەدراوە ئەم ئەندامە نوێ بکەیتەوە",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
		"گەیشتووەتە سنووری ئەندامبوون لە ڕێکخراو",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"ڕێگەت پێنەدراوە لەم ڕێکخراوەدا تیم دروست بکەیت",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"ڕێگەت پێنەدراوە لەم ڕێکخراوەدا تیم بسڕیتەوە",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"ڕێگەت پێنەدراوە ئەم تیمە نوێ بکەیتەوە",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM: "ڕێگەت پێنەدراوە ئەم تیمە بسڕیتەوە",
	INVITATION_LIMIT_REACHED: "گەیشتووەتە سنووری بانگهێشتنامە",
	TEAM_MEMBER_LIMIT_REACHED: "گەیشتووەتە سنووری ئەندامانی تیم",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "بەکارهێنەر ئەندامی تیمەکە نییە",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"ڕێگەت پێنەدراوە لیستی ئەندامانی ئەم تیمە ببینیت",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "تیمێکی چالاکت نییە",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"ڕێگەت پێنەدراوە ئەندامێکی نوێ دروست بکەیت",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"ڕێگەت پێنەدراوە ئەندامێکی تیم لابەریت",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"ڕێگەت پێنەدراوە وەک خاوەن دەستت بگات بەم ڕێکخراوە",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION: "تۆ ئەندامی ئەم ڕێکخراوە نیت",
	ORGANIZATION_SLUG_ALREADY_TAKEN: "slugـی ڕێکخراو پێشتر بەکارهاتووە",
	EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION:
		"بۆ بینین یان لیستکردنی بانگهێشتنامەکانی ئیمەیڵی سێشن، پشتڕاستکردنەوەی ئیمەیڵ پێویستە",
	MISSING_AC_INSTANCE:
		"کۆنتڕۆڵی دەستگەیشتنی داینامیک پێویستی بە نمونەیەکی ac ی پێشوەختە پێناسەکراو هەیە لە پلاگینی auth ی سێرڤەر. بۆ زانیاری زیاتر لۆگی سێرڤەر ببینە",
	YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE:
		"بۆ دروستکردنی ڕۆڵ دەبێت لە ڕێکخراوێکدا بیت",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE: "ڕێگەت پێنەدراوە ڕۆڵ دروست بکەیت",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE: "ڕێگەت پێنەدراوە ڕۆڵ نوێ بکەیتەوە",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE: "ڕێگەت پێنەدراوە ڕۆڵ بسڕیتەوە",
	YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE: "ڕێگەت پێنەدراوە ڕۆڵ بخوێنیتەوە",
	YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE: "ڕێگەت پێنەدراوە لیستی ڕۆڵەکان ببینیت",
	YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE: "ڕێگەت پێنەدراوە ڕۆڵ وەربگریت",
	TOO_MANY_ROLES: "ئەم ڕێکخراوە ڕۆڵی زۆری هەیە",
	INVALID_RESOURCE: "مۆڵەتی دابینکراو سەرچاوەیەکی نادروستی تێدایە",
	ROLE_NAME_IS_ALREADY_TAKEN: "ئەم ناوی ڕۆڵە پێشتر بەکارهاتووە",
	CANNOT_DELETE_A_PRE_DEFINED_ROLE:
		"ناتوانرێت ڕۆڵی پێشوەختە پێناسەکراو بسڕدرێتەوە",
	ROLE_IS_ASSIGNED_TO_MEMBERS:
		"ناتوانرێت ڕۆڵێک بسڕدرێتەوە کە بە ئەندامان دراوە. تکایە سەرەتا ئەندامەکان بدە بە ڕۆڵێکی تر",
	INVALID_TEAM_ID: "ناسنامەی تیم پیتێکی پارێزراوی تێدایە",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
