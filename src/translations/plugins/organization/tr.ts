import type { OrganizationErrorCodesType } from "../../../types";

export const TR_TR = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Yeni bir organizasyon oluşturma yetkiniz yok",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Maksimum organizasyon sayısına ulaştınız",
	ORGANIZATION_ALREADY_EXISTS: "Organizasyon zaten mevcut",
	ORGANIZATION_NOT_FOUND: "Organizasyon bulunamadı",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
		"Kullanıcı organizasyonun üyesi değil",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Bu organizasyonu güncelleme yetkiniz yok",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Bu organizasyonu silme yetkiniz yok",
	NO_ACTIVE_ORGANIZATION: "Aktif organizasyon yok",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"Kullanıcı zaten bu organizasyonun üyesi",
	MEMBER_NOT_FOUND: "Üye bulunamadı",
	ROLE_NOT_FOUND: "Rol bulunamadı",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Yeni bir takım oluşturma yetkiniz yok",
	TEAM_ALREADY_EXISTS: "Takım zaten mevcut",
	TEAM_NOT_FOUND: "Takım bulunamadı",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Tek sahip olarak organizasyondan ayrılamazsınız",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Sahip olmadan organizasyondan ayrılamazsınız",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER: "Bu üyeyi silme yetkiniz yok",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Bu organizasyona kullanıcı davet etme yetkiniz yok",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"Kullanıcı zaten bu organizasyona davet edilmiş",
	INVITATION_NOT_FOUND: "Davet bulunamadı",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION: "Davetin alıcısı değilsiniz",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"Daveti kabul etmeden veya reddetmeden önce e-posta doğrulaması gerekli",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Bu daveti iptal etme yetkiniz yok",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"Davet eden artık organizasyonun üyesi değil",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Bu rol ile kullanıcı davet etme yetkiniz yok",
	FAILED_TO_RETRIEVE_INVITATION: "Davet alınamadı",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Maksimum takım sayısına ulaştınız",
	UNABLE_TO_REMOVE_LAST_TEAM: "Son takım kaldırılamıyor",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER: "Bu üyeyi güncelleme yetkiniz yok",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED: "Organizasyon üyelik limiti aşıldı",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Bu organizasyonda takım oluşturma yetkiniz yok",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Bu organizasyonda takım silme yetkiniz yok",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM: "Bu takımı güncelleme yetkiniz yok",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM: "Bu takımı silme yetkiniz yok",
	INVITATION_LIMIT_REACHED: "Davet limiti aşıldı",
	TEAM_MEMBER_LIMIT_REACHED: "Takım üye limiti aşıldı",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "Kullanıcı takımın üyesi değil",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Bu takımın üyelerine erişim yetkiniz yok",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Aktif takımınız yok",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Yeni takım üyesi oluşturma yetkiniz yok",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Takım üyesi kaldırma yetkiniz yok",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Bu organizasyona sahip olarak erişim yetkiniz yok",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"Bu organizasyonun üyesi değilsiniz",
	ORGANIZATION_SLUG_ALREADY_TAKEN: "Organizasyon slug'ı zaten alınmış",
	EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION:
		"Oturum e-posta adresine ait davetleri görüntülemek veya listelemek için e-posta doğrulaması gerekli",
	MISSING_AC_INSTANCE:
		"Dinamik Erişim Kontrolü, sunucu auth eklentisinde önceden tanımlanmış bir ac örneği gerektirir. Daha fazla bilgi için sunucu günlüklerine bakın",
	YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE:
		"Rol oluşturmak için bir organizasyonda olmalısınız",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE: "Rol oluşturma izniniz yok",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE: "Rol güncelleme izniniz yok",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE: "Rol silme izniniz yok",
	YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE: "Rol okuma izniniz yok",
	YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE: "Rolleri listeleme izniniz yok",
	YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE: "Rol alma izniniz yok",
	TOO_MANY_ROLES: "Bu organizasyonda çok fazla rol var",
	INVALID_RESOURCE: "Sağlanan izin geçersiz bir kaynak içeriyor",
	ROLE_NAME_IS_ALREADY_TAKEN: "Bu rol adı zaten alınmış",
	CANNOT_DELETE_A_PRE_DEFINED_ROLE: "Önceden tanımlanmış bir rol silinemez",
	ROLE_IS_ASSIGNED_TO_MEMBERS:
		"Üyelere atanmış bir rol silinemez. Lütfen önce üyeleri başka bir role atayın",
	INVALID_TEAM_ID: "Takım ID'si ayrılmış bir karakter içeriyor",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
