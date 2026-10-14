import type { OrganizationErrorCodesType } from "../../../types";

export const MR_MR = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"तुम्हाला नवीन संस्था तयार करण्याची परवानगी नाही",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"तुम्ही संस्थांच्या कमाल संख्येपर्यंत पोहोचला आहात",
	ORGANIZATION_ALREADY_EXISTS: "संस्था आधीपासून अस्तित्वात आहे",
	ORGANIZATION_NOT_FOUND: "संस्था सापडली नाही",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION: "वापरकर्ता संस्थेचा सदस्य नाही",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"तुम्हाला ही संस्था अपडेट करण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"तुम्हाला ही संस्था हटवण्याची परवानगी नाही",
	NO_ACTIVE_ORGANIZATION: "कोणतीही सक्रिय संस्था नाही",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"वापरकर्ता आधीपासून या संस्थेचा सदस्य आहे",
	MEMBER_NOT_FOUND: "सदस्य सापडला नाही",
	ROLE_NOT_FOUND: "भूमिका सापडली नाही",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"तुम्हाला नवीन टीम तयार करण्याची परवानगी नाही",
	TEAM_ALREADY_EXISTS: "टीम आधीपासून अस्तित्वात आहे",
	TEAM_NOT_FOUND: "टीम सापडली नाही",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"तुम्ही एकमेव मालक म्हणून संस्था सोडू शकत नाही",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"तुम्ही मालकाशिवाय संस्था सोडू शकत नाही",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"तुम्हाला हा सदस्य हटवण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"तुम्हाला या संस्थेत वापरकर्त्यांना आमंत्रित करण्याची परवानगी नाही",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"वापरकर्ता आधीपासून या संस्थेत आमंत्रित केला आहे",
	INVITATION_NOT_FOUND: "आमंत्रण सापडले नाही",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION: "तुम्ही आमंत्रणाचे प्राप्तकर्ता नाही",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"आमंत्रण स्वीकारणे किंवा नाकारण्यापूर्वी ईमेल सत्यापन आवश्यक आहे",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"तुम्हाला हे आमंत्रण रद्द करण्याची परवानगी नाही",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"आमंत्रणकर्ता यापुढे संस्थेचा सदस्य नाही",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"तुम्हाला या भूमिकेसह वापरकर्त्याला आमंत्रित करण्याची परवानगी नाही",
	FAILED_TO_RETRIEVE_INVITATION: "आमंत्रण पुनर्प्राप्त करण्यात अयशस्वी",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"तुम्ही टीम्सच्या कमाल संख्येपर्यंत पोहोचला आहात",
	UNABLE_TO_REMOVE_LAST_TEAM: "शेवटची टीम काढणे शक्य नाही",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"तुम्हाला हा सदस्य अपडेट करण्याची परवानगी नाही",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED: "संस्था सदस्यत्व मर्यादा पोहोचली",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"तुम्हाला या संस्थेत टीम्स तयार करण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"तुम्हाला या संस्थेत टीम्स हटवण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"तुम्हाला ही टीम अपडेट करण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"तुम्हाला ही टीम हटवण्याची परवानगी नाही",
	INVITATION_LIMIT_REACHED: "आमंत्रण मर्यादा पोहोचली",
	TEAM_MEMBER_LIMIT_REACHED: "टीम सदस्य मर्यादा पोहोचली",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "वापरकर्ता टीमचा सदस्य नाही",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"तुम्हाला या टीमच्या सदस्यांमध्ये प्रवेश करण्याची परवानगी नाही",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "तुमच्याकडे सक्रिय टीम नाही",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"तुम्हाला नवीन टीम सदस्य तयार करण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"तुम्हाला टीम सदस्य काढण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"तुम्हाला मालक म्हणून या संस्थेत प्रवेश करण्याची परवानगी नाही",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION: "तुम्ही या संस्थेचे सदस्य नाही",
	ORGANIZATION_SLUG_ALREADY_TAKEN: "संस्थेचा स्लग आधीच वापरला गेला आहे",
	EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION:
		"सत्राच्या ईमेलची आमंत्रणे पाहण्यासाठी किंवा यादी करण्यासाठी ईमेल सत्यापन आवश्यक आहे",
	MISSING_AC_INSTANCE:
		"डायनॅमिक ॲक्सेस कंट्रोलसाठी सर्व्हर ऑथ प्लगइनवर पूर्वनिर्धारित ac इन्स्टन्स आवश्यक आहे. अधिक माहितीसाठी सर्व्हर लॉग पहा",
	YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE:
		"भूमिका तयार करण्यासाठी तुम्ही संस्थेत असणे आवश्यक आहे",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE:
		"तुम्हाला भूमिका तयार करण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE:
		"तुम्हाला भूमिका अपडेट करण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE: "तुम्हाला भूमिका हटवण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE: "तुम्हाला भूमिका वाचण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE:
		"तुम्हाला भूमिकांची यादी पाहण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE: "तुम्हाला भूमिका मिळवण्याची परवानगी नाही",
	TOO_MANY_ROLES: "या संस्थेत खूप जास्त भूमिका आहेत",
	INVALID_RESOURCE: "दिलेल्या परवानगीमध्ये अवैध संसाधन आहे",
	ROLE_NAME_IS_ALREADY_TAKEN: "हे भूमिकेचे नाव आधीच वापरले गेले आहे",
	CANNOT_DELETE_A_PRE_DEFINED_ROLE: "पूर्वनिर्धारित भूमिका हटवता येत नाही",
	ROLE_IS_ASSIGNED_TO_MEMBERS:
		"सदस्यांना नियुक्त केलेली भूमिका हटवता येत नाही. कृपया आधी सदस्यांना दुसऱ्या भूमिकेवर पुन्हा नियुक्त करा",
	INVALID_TEAM_ID: "टीम ID मध्ये राखीव वर्ण आहे",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
