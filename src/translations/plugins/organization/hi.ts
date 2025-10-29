import type { OrganizationErrorCodesType } from "../../../types";

export const HI_IN = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"आपको नई संगठन बनाने की अनुमति नहीं है",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"आपने संगठनों की अधिकतम संख्या तक पहुंच गए हैं",
	ORGANIZATION_ALREADY_EXISTS: "संगठन पहले से मौजूद है",
	ORGANIZATION_NOT_FOUND: "संगठन नहीं मिला",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION: "उपयोगकर्ता संगठन का सदस्य नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"आपको इस संगठन को अपडेट करने की अनुमति नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"आपको इस संगठन को हटाने की अनुमति नहीं है",
	NO_ACTIVE_ORGANIZATION: "कोई सक्रिय संगठन नहीं",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"उपयोगकर्ता पहले से ही इस संगठन का सदस्य है",
	MEMBER_NOT_FOUND: "सदस्य नहीं मिला",
	ROLE_NOT_FOUND: "भूमिका नहीं मिली",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM: "आपको नई टीम बनाने की अनुमति नहीं है",
	TEAM_ALREADY_EXISTS: "टीम पहले से मौजूद है",
	TEAM_NOT_FOUND: "टीम नहीं मिली",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"आप एकमात्र मालिक के रूप में संगठन नहीं छोड़ सकते",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"आप मालिक के बिना संगठन नहीं छोड़ सकते",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"आपको इस सदस्य को हटाने की अनुमति नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"आपको इस संगठन में उपयोगकर्ताओं को आमंत्रित करने की अनुमति नहीं है",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"उपयोगकर्ता को पहले से ही इस संगठन में आमंत्रित किया गया है",
	INVITATION_NOT_FOUND: "आमंत्रण नहीं मिला",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION: "आप आमंत्रण के प्राप्तकर्ता नहीं हैं",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"आमंत्रण को स्वीकार या अस्वीकार करने से पहले ईमेल सत्यापन आवश्यक है",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"आपको इस आमंत्रण को रद्द करने की अनुमति नहीं है",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"आमंत्रणकर्ता अब संगठन का सदस्य नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"आपको इस भूमिका के साथ उपयोगकर्ता को आमंत्रित करने की अनुमति नहीं है",
	FAILED_TO_RETRIEVE_INVITATION: "आमंत्रण पुनर्प्राप्त करने में विफल",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"आपने टीमों की अधिकतम संख्या तक पहुंच गए हैं",
	UNABLE_TO_REMOVE_LAST_TEAM: "अंतिम टीम को हटाने में असमर्थ",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"आपको इस सदस्य को अपडेट करने की अनुमति नहीं है",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED: "संगठन सदस्यता सीमा पहुंच गई",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"आपको इस संगठन में टीम बनाने की अनुमति नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"आपको इस संगठन में टीम हटाने की अनुमति नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"आपको इस टीम को अपडेट करने की अनुमति नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM: "आपको इस टीम को हटाने की अनुमति नहीं है",
	INVITATION_LIMIT_REACHED: "आमंत्रण सीमा पहुंच गई",
	TEAM_MEMBER_LIMIT_REACHED: "टीम सदस्य सीमा पहुंच गई",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "उपयोगकर्ता टीम का सदस्य नहीं है",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"आपको इस टीम के सदस्यों तक पहुंचने की अनुमति नहीं है",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "आपके पास कोई सक्रिय टीम नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"आपको नया टीम सदस्य बनाने की अनुमति नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"आपको टीम सदस्य हटाने की अनुमति नहीं है",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"आपको मालिक के रूप में इस संगठन तक पहुंचने की अनुमति नहीं है",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION: "आप इस संगठन के सदस्य नहीं हैं",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"hi-IN": HI_IN,
} as const;
