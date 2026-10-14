import type { OrganizationErrorCodesType } from "../../../types";

export const JA_JP = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"新しい組織を作成する権限がありません",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"組織の最大数に達しました",
	ORGANIZATION_ALREADY_EXISTS: "組織は既に存在します",
	ORGANIZATION_NOT_FOUND: "組織が見つかりません",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
		"ユーザーは組織のメンバーではありません",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"この組織を更新する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"この組織を削除する権限がありません",
	NO_ACTIVE_ORGANIZATION: "アクティブな組織がありません",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"ユーザーは既にこの組織のメンバーです",
	MEMBER_NOT_FOUND: "メンバーが見つかりません",
	ROLE_NOT_FOUND: "ロールが見つかりません",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"新しいチームを作成する権限がありません",
	TEAM_ALREADY_EXISTS: "チームは既に存在します",
	TEAM_NOT_FOUND: "チームが見つかりません",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"唯一のオーナーとして組織を離れることはできません",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"オーナーなしで組織を離れることはできません",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"このメンバーを削除する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"この組織にユーザーを招待する権限がありません",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"ユーザーは既にこの組織に招待されています",
	INVITATION_NOT_FOUND: "招待が見つかりません",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
		"あなたは招待の受信者ではありません",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"招待を受け入れるか拒否する前にメール認証が必要です",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"この招待をキャンセルする権限がありません",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"招待者はもう組織のメンバーではありません",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"このロールでユーザーを招待する権限がありません",
	FAILED_TO_RETRIEVE_INVITATION: "招待の取得に失敗しました",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS: "チームの最大数に達しました",
	UNABLE_TO_REMOVE_LAST_TEAM: "最後のチームを削除できません",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"このメンバーを更新する権限がありません",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED: "組織メンバーシップの制限に達しました",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"この組織でチームを作成する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"この組織でチームを削除する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"このチームを更新する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"このチームを削除する権限がありません",
	INVITATION_LIMIT_REACHED: "招待の制限に達しました",
	TEAM_MEMBER_LIMIT_REACHED: "チームメンバーの制限に達しました",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "ユーザーはチームのメンバーではありません",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"このチームのメンバーにアクセスする権限がありません",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "アクティブなチームがありません",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"新しいチームメンバーを作成する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"チームメンバーを削除する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"オーナーとしてこの組織にアクセスする権限がありません",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"あなたはこの組織のメンバーではありません",
	ORGANIZATION_SLUG_ALREADY_TAKEN: "この組織のスラッグはすでに使用されています",
	EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION:
		"セッションのメールアドレスに対する招待を表示または一覧表示するには、メールアドレスの確認が必要です",
	MISSING_AC_INSTANCE:
		"動的アクセス制御には、サーバーの認証プラグインに事前定義された ac インスタンスが必要です。詳細はサーバーログを確認してください",
	YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE:
		"ロールを作成するには組織に所属している必要があります",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE: "ロールを作成する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE: "ロールを更新する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE: "ロールを削除する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE: "ロールを閲覧する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE: "ロールを一覧表示する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE: "ロールを取得する権限がありません",
	TOO_MANY_ROLES: "この組織のロール数が多すぎます",
	INVALID_RESOURCE: "指定された権限に無効なリソースが含まれています",
	ROLE_NAME_IS_ALREADY_TAKEN: "そのロール名はすでに使用されています",
	CANNOT_DELETE_A_PRE_DEFINED_ROLE: "事前定義されたロールは削除できません",
	ROLE_IS_ASSIGNED_TO_MEMBERS:
		"メンバーに割り当てられているロールは削除できません。先にメンバーを別のロールに割り当て直してください",
	INVALID_TEAM_ID: "チームIDに予約文字が含まれています",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
