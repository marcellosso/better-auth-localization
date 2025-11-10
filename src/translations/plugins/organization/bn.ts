import type { OrganizationErrorCodesType } from "../../../types";

export const BN_BD = {
    // Organization related errors
    YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
        "আপনার নতুন সংস্থা তৈরি করার অনুমতি নেই",
    YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
        "আপনি সর্বাধিক সংখ্যক সংস্থায় পৌঁছেছেন",
    ORGANIZATION_ALREADY_EXISTS: "সংস্থা ইতিমধ্যে বিদ্যমান",
    ORGANIZATION_NOT_FOUND: "সংস্থা পাওয়া যায়নি",
    USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION: "ব্যবহারকারী সংস্থার সদস্য নন",
    YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
        "আপনার এই সংস্থা আপডেট করার অনুমতি নেই",
    YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
        "আপনার এই সংস্থা মুছে ফেলার অনুমতি নেই",
    NO_ACTIVE_ORGANIZATION: "কোনো সক্রিয় সংস্থা নেই",
    USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
        "ব্যবহারকারী ইতিমধ্যে এই সংস্থার সদস্য",
    MEMBER_NOT_FOUND: "সদস্য পাওয়া যায়নি",
    ROLE_NOT_FOUND: "ভূমিকা পাওয়া যায়নি",
    YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM: "আপনার নতুন দল তৈরি করার অনুমতি নেই",
    TEAM_ALREADY_EXISTS: "দল ইতিমধ্যে বিদ্যমান",
    TEAM_NOT_FOUND: "দল পাওয়া যায়নি",
    YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
        "আপনি একমাত্র মালিক হিসাবে সংস্থা ত্যাগ করতে পারবেন না",
    YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
        "আপনি মালিক ছাড়া সংস্থা ত্যাগ করতে পারবেন না",
    YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER: "আপনার এই সদস্য মুছে ফেলার অনুমতি নেই",
    YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
        "আপনার এই সংস্থায় ব্যবহারকারীদের আমন্ত্রণ জানানোর অনুমতি নেই",
    USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
        "ব্যবহারকারী ইতিমধ্যে এই সংস্থায় আমন্ত্রিত",
    INVITATION_NOT_FOUND: "আমন্ত্রণ পাওয়া যায়নি",
    YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION: "আপনি আমন্ত্রণের প্রাপক নন",
    EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
        "আমন্ত্রণ গ্রহণ বা প্রত্যাখ্যান করার আগে ইমেল যাচাইকরণ প্রয়োজন",
    YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
        "আপনার এই আমন্ত্রণ বাতিল করার অনুমতি নেই",
    INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
        "আমন্ত্রণকারী আর সংস্থার সদস্য নন",
    YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
        "আপনার এই ভূমিকায় ব্যবহারকারীকে আমন্ত্রণ জানানোর অনুমতি নেই",
    FAILED_TO_RETRIEVE_INVITATION: "আমন্ত্রণ পুনরুদ্ধার করতে ব্যর্থ",
    YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS: "আপনি সর্বাধিক সংখ্যক দলে পৌঁছেছেন",
    UNABLE_TO_REMOVE_LAST_TEAM: "শেষ দল সরাতে অক্ষম",
    YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER: "আপনার এই সদস্য আপডেট করার অনুমতি নেই",
    ORGANIZATION_MEMBERSHIP_LIMIT_REACHED: "সংস্থার সদস্যপদ সীমা পৌঁছেছে",
    YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
        "আপনার এই সংস্থায় দল তৈরি করার অনুমতি নেই",
    YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
        "আপনার এই সংস্থায় দল মুছে ফেলার অনুমতি নেই",
    YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM: "আপনার এই দল আপডেট করার অনুমতি নেই",
    YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM: "আপনার এই দল মুছে ফেলার অনুমতি নেই",
    INVITATION_LIMIT_REACHED: "আমন্ত্রণ সীমা পৌঁছেছে",
    TEAM_MEMBER_LIMIT_REACHED: "দলের সদস্য সীমা পৌঁছেছে",
    USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "ব্যবহারকারী দলের সদস্য নন",
    YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
        "আপনি এই দলের সদস্যদের অ্যাক্সেস করতে পারবেন না",
    YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "আপনার কোনো সক্রিয় দল নেই",
    YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
        "আপনার নতুন দলের সদস্য তৈরি করার অনুমতি নেই",
    YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER: "আপনার দলের সদস্য সরানোর অনুমতি নেই",
    YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
        "আপনার মালিক হিসাবে এই সংস্থায় অ্যাক্সেস করার অনুমতি নেই",
    YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION: "আপনি এই সংস্থার সদস্য নন",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
    "bn-BD": BN_BD,
} as const;
