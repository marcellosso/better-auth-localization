import type { OrganizationErrorCodesType } from "../../../types";

export const AR_SA = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"ليس لديك إذن لإنشاء منظمة جديدة",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"لقد وصلت إلى العدد الأقصى من المنظمات",
	ORGANIZATION_ALREADY_EXISTS: "المنظمة موجودة بالفعل",
	ORGANIZATION_NOT_FOUND: "المنظمة غير موجودة",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION: "المستخدم ليس عضواً في المنظمة",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"ليس لديك إذن لتحديث هذه المنظمة",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"ليس لديك إذن لحذف هذه المنظمة",
	NO_ACTIVE_ORGANIZATION: "لا توجد منظمة نشطة",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"المستخدم عضو في هذه المنظمة بالفعل",
	MEMBER_NOT_FOUND: "العضو غير موجود",
	ROLE_NOT_FOUND: "الدور غير موجود",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM: "ليس لديك إذن لإنشاء فريق جديد",
	TEAM_ALREADY_EXISTS: "الفريق موجود بالفعل",
	TEAM_NOT_FOUND: "الفريق غير موجود",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"لا يمكنك مغادرة المنظمة كونك المالك الوحيد",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"لا يمكنك مغادرة المنظمة بدون مالك",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER: "ليس لديك إذن لحذف هذا العضو",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"ليس لديك إذن لدعوة المستخدمين إلى هذه المنظمة",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"المستخدم مدعو إلى هذه المنظمة بالفعل",
	INVITATION_NOT_FOUND: "الدعوة غير موجودة",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION: "أنت لست مستقبل الدعوة",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"التحقق من البريد الإلكتروني مطلوب قبل قبول أو رفض الدعوة",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"ليس لديك إذن لإلغاء هذه الدعوة",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"المدعو لم يعد عضواً في المنظمة",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"ليس لديك إذن لدعوة مستخدم لهذا الدور",
	FAILED_TO_RETRIEVE_INVITATION: "فشل في استرداد الدعوة",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"لقد وصلت إلى العدد الأقصى من الفرق",
	UNABLE_TO_REMOVE_LAST_TEAM: "لا يمكن إزالة الفريق الأخير",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER: "ليس لديك إذن لتحديث هذا العضو",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED: "تم الوصول إلى حد عضوية المنظمة",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"ليس لديك إذن لإنشاء فرق في هذه المنظمة",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"ليس لديك إذن لحذف فرق في هذه المنظمة",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM: "ليس لديك إذن لتحديث هذا الفريق",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM: "ليس لديك إذن لحذف هذا الفريق",
	INVITATION_LIMIT_REACHED: "تم الوصول إلى حد الدعوات",
	TEAM_MEMBER_LIMIT_REACHED: "تم الوصول إلى حد أعضاء الفريق",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "المستخدم ليس عضواً في الفريق",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"ليس لديك إذن لعرض أعضاء هذا الفريق",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "ليس لديك فريق نشط",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"ليس لديك إذن لإنشاء عضو فريق جديد",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"ليس لديك إذن لإزالة عضو من الفريق",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"ليس لديك إذن للوصول إلى هذه المنظمة كمالك",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION: "أنت لست عضواً في هذه المنظمة",

	ORGANIZATION_SLUG_ALREADY_TAKEN: "معرّف المنظمة (slug) مستخدم بالفعل",
	EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION:
		"يلزم التحقق من البريد الإلكتروني لعرض الدعوات الخاصة ببريد الجلسة أو سردها",
	MISSING_AC_INSTANCE:
		"يتطلب التحكم الديناميكي في الوصول نسخة ac معرّفة مسبقاً في إضافة المصادقة على الخادم. راجع سجلات الخادم لمزيد من المعلومات",
	YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE:
		"يجب أن تكون ضمن منظمة لإنشاء دور",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE: "ليس لديك إذن لإنشاء دور",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE: "ليس لديك إذن لتحديث دور",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE: "ليس لديك إذن لحذف دور",
	YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE: "ليس لديك إذن لقراءة دور",
	YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE: "ليس لديك إذن لعرض قائمة الأدوار",
	YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE: "ليس لديك إذن لجلب دور",
	TOO_MANY_ROLES: "لدى هذه المنظمة عدد كبير جداً من الأدوار",
	INVALID_RESOURCE: "الإذن المقدم يتضمن مورداً غير صالح",
	ROLE_NAME_IS_ALREADY_TAKEN: "اسم الدور مستخدم بالفعل",
	CANNOT_DELETE_A_PRE_DEFINED_ROLE: "لا يمكن حذف دور معرّف مسبقاً",
	ROLE_IS_ASSIGNED_TO_MEMBERS:
		"لا يمكن حذف دور مُسنَد إلى أعضاء. يرجى إعادة تعيين الأعضاء إلى دور آخر أولاً",
	INVALID_TEAM_ID: "معرّف الفريق يحتوي على حرف محجوز",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
