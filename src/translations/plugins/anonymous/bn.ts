import type { AnonymousErrorCodesType } from "../../../types";

export const BN_BD = {
    // Anonymous related errors
    COULD_NOT_CREATE_SESSION: "সেশন তৈরি করা যায়নি",
    ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
        "বেনামী ব্যবহারকারীরা আবার বেনামী হিসাবে সাইন ইন করতে পারবেন না",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
    "bn-BD": BN_BD,
} as const;
