import type { OrganizationErrorCodesType } from "../../../types";

export const AZ = {
	// Təşkilatla bağlı səhvlər
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Yeni təşkilat yaratmağa icazəniz yoxdur",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Maksimum təşkilat sayına çatmısınız",
	ORGANIZATION_ALREADY_EXISTS: "Təşkilat artıq mövcuddur",
	ORGANIZATION_NOT_FOUND: "Təşkilat tapılmadı",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION: "İstifadəçi təşkilatın üzvü deyil",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Bu təşkilatı yeniləməyə icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Bu təşkilatı silməyə icazəniz yoxdur",
	NO_ACTIVE_ORGANIZATION: "Aktiv təşkilat yoxdur",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"İstifadəçi artıq bu təşkilatın üzvüdür",
	MEMBER_NOT_FOUND: "Üzv tapılmadı",
	ROLE_NOT_FOUND: "Rol tapılmadı",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Yeni komanda yaratmağa icazəniz yoxdur",
	TEAM_ALREADY_EXISTS: "Komanda artıq mövcuddur",
	TEAM_NOT_FOUND: "Komanda tapılmadı",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Yeganə sahibi olaraq təşkilatdan ayrıla bilməzsiniz",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Təşkilatı sahibsiz qoyaraq ayrıla bilməzsiniz",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER: "Bu üzvü silməyə icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Bu təşkilata istifadəçi dəvət etməyə icazəniz yoxdur",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"İstifadəçi artıq bu təşkilata dəvət edilib",
	INVITATION_NOT_FOUND: "Dəvət tapılmadı",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION: "Bu dəvətin alıcısı deyilsiniz",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"Dəvəti qəbul və ya rədd etməzdən əvvəl e-poçtun təsdiqi tələb olunur",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Bu dəvəti ləğv etməyə icazəniz yoxdur",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"Dəvət edən artıq təşkilatın üzvü deyil",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Bu rolla istifadəçi dəvət etməyə icazəniz yoxdur",
	FAILED_TO_RETRIEVE_INVITATION: "Dəvəti əldə etmək alınmadı",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Maksimum komanda sayına çatmısınız",
	UNABLE_TO_REMOVE_LAST_TEAM: "Son komandanı silmək mümkün deyil",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"Bu üzvü yeniləməyə icazəniz yoxdur",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED: "Təşkilatın üzvlük limitinə çatılıb",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Bu təşkilatda komanda yaratmağa icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Bu təşkilatda komandaları silməyə icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"Bu komandını yeniləməyə icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"Bu komandını silməyə icazəniz yoxdur",
	INVITATION_LIMIT_REACHED: "Dəvət limiti həddinə çatılıb",
	TEAM_MEMBER_LIMIT_REACHED: "Komanda üzvü limiti həddinə çatılıb",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "İstifadəçi komandanın üzvü deyil",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Bu komandanın üzvlərinə giriş icazəniz yoxdur",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Aktiv komandanız yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Yeni komanda üzvü yaratmağa icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Komanda üzvünü silməyə icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Bu təşkilata sahib kimi giriş icazəniz yoxdur",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION: "Bu təşkilatın üzvü deyilsiniz",
	ORGANIZATION_SLUG_ALREADY_TAKEN: "Təşkilat slug-ı artıq istifadə olunur",
	EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION:
		"Sessiya e-poçtu üçün dəvətlərə baxmaq və ya onları siyahılamaq üçün e-poçt təsdiqi tələb olunur",
	MISSING_AC_INSTANCE:
		"Dinamik Giriş Nəzarəti server auth plaginində əvvəlcədən təyin edilmiş ac instansiyası tələb edir. Ətraflı məlumat üçün server loglarına baxın",
	YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE:
		"Rol yaratmaq üçün təşkilatda olmalısınız",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE: "Rol yaratmağa icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE: "Rolu yeniləməyə icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE: "Rolu silməyə icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE: "Rolu oxumağa icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE: "Rolları siyahılamağa icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE: "Rolu əldə etməyə icazəniz yoxdur",
	TOO_MANY_ROLES: "Bu təşkilatda çox sayda rol var",
	INVALID_RESOURCE: "Təqdim edilən icazə yanlış resurs ehtiva edir",
	ROLE_NAME_IS_ALREADY_TAKEN: "Bu rol adı artıq istifadə olunur",
	CANNOT_DELETE_A_PRE_DEFINED_ROLE:
		"Əvvəlcədən təyin edilmiş rol silinə bilməz",
	ROLE_IS_ASSIGNED_TO_MEMBERS:
		"Üzvlərə təyin edilmiş rol silinə bilməz. Əvvəlcə üzvləri başqa rola təyin edin",
	INVALID_TEAM_ID: "Komanda ID-si rezerv edilmiş simvol ehtiva edir",
} satisfies OrganizationErrorCodesType;
export const AZ_AZ = {
	...AZ,
	// Təşkilatla bağlı səhvlər
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Yeni təşkilat yaratmağa icazəniz yoxdur",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Maksimum təşkilat sayına çatmısınız",
	ORGANIZATION_ALREADY_EXISTS: "Təşkilat artıq mövcuddur",
	ORGANIZATION_NOT_FOUND: "Təşkilat tapılmadı",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION: "İstifadəçi təşkilatın üzvü deyil",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Bu təşkilatı yeniləməyə icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Bu təşkilatı silməyə icazəniz yoxdur",
	NO_ACTIVE_ORGANIZATION: "Aktiv təşkilat yoxdur",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"İstifadəçi artıq bu təşkilatın üzvüdür",
	MEMBER_NOT_FOUND: "Üzv tapılmadı",
	ROLE_NOT_FOUND: "Rol tapılmadı",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Yeni komanda yaratmağa icazəniz yoxdur",
	TEAM_ALREADY_EXISTS: "Komanda artıq mövcuddur",
	TEAM_NOT_FOUND: "Komanda tapılmadı",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Yeganə sahibi olaraq təşkilatdan ayrıla bilməzsiniz",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Təşkilatı sahibsiz qoyaraq ayrıla bilməzsiniz",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER: "Bu üzvü silməyə icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Bu təşkilata istifadəçi dəvət etməyə icazəniz yoxdur",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"İstifadəçi artıq bu təşkilata dəvət edilib",
	INVITATION_NOT_FOUND: "Dəvət tapılmadı",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION: "Bu dəvətin alıcısı deyilsiniz",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"Dəvəti qəbul və ya rədd etməzdən əvvəl e-poçtun təsdiqi tələb olunur",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Bu dəvəti ləğv etməyə icazəniz yoxdur",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"Dəvət edən artıq təşkilatın üzvü deyil",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Bu rolla istifadəçi dəvət etməyə icazəniz yoxdur",
	FAILED_TO_RETRIEVE_INVITATION: "Dəvəti əldə etmək alınmadı",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Maksimum komanda sayına çatmısınız",
	UNABLE_TO_REMOVE_LAST_TEAM: "Son komandanı silmək mümkün deyil",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"Bu üzvü yeniləməyə icazəniz yoxdur",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED: "Təşkilatın üzvlük limitinə çatılıb",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Bu təşkilatda komanda yaratmağa icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Bu təşkilatda komandaları silməyə icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"Bu komandını yeniləməyə icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"Bu komandını silməyə icazəniz yoxdur",
	INVITATION_LIMIT_REACHED: "Dəvət limiti həddinə çatılıb",
	TEAM_MEMBER_LIMIT_REACHED: "Komanda üzvü limiti həddinə çatılıb",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "İstifadəçi komandanın üzvü deyil",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Bu komandanın üzvlərinə giriş icazəniz yoxdur",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Aktiv komandanız yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Yeni komanda üzvü yaratmağa icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Komanda üzvünü silməyə icazəniz yoxdur",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Bu təşkilata sahib kimi giriş icazəniz yoxdur",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION: "Bu təşkilatın üzvü deyilsiniz",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	az: AZ,
	"az-AZ": AZ_AZ,
} as const;
