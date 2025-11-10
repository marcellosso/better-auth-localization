import { createTranslationObject } from "../utils/create-translation-object";

export const BN_BD = createTranslationObject("bn-BD", {
    // User related errors
    USER_NOT_FOUND: "ব্যবহারকারী পাওয়া যায়নি",
    FAILED_TO_CREATE_USER: "ব্যবহারকারী তৈরি করতে ব্যর্থ",
    FAILED_TO_UPDATE_USER: "ব্যবহারকারী আপডেট করতে ব্যর্থ",
    USER_ALREADY_EXISTS: "ব্যবহারকারী ইতিমধ্যে বিদ্যমান",
    USER_EMAIL_NOT_FOUND: "ব্যবহারকারীর ইমেল পাওয়া যায়নি",
    USER_ALREADY_HAS_PASSWORD:
        "ব্যবহারকারীর ইতিমধ্যে একটি পাসওয়ার্ড আছে। অ্যাকাউন্ট মুছে ফেলার জন্য এটি প্রদান করুন।",
    USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
        "ব্যবহারকারী ইতিমধ্যে বিদ্যমান। অন্য একটি ইমেল ব্যবহার করুন।",

    // Session related errors
    FAILED_TO_CREATE_SESSION: "সেশন তৈরি করতে ব্যর্থ",
    FAILED_TO_GET_SESSION: "সেশন পেতে ব্যর্থ",
    SESSION_EXPIRED:
        "সেশনের মেয়াদ শেষ হয়ে গেছে। এই কার্যটি সম্পাদন করতে আবার লগইন করুন।",

    // Authentication errors
    INVALID_PASSWORD: "ভুল পাসওয়ার্ড",
    INVALID_EMAIL: "ভুল ইমেল",
    INVALID_EMAIL_OR_PASSWORD: "ভুল ইমেল বা পাসওয়ার্ড",
    INVALID_TOKEN: "ভুল টোকেন",
    EMAIL_NOT_VERIFIED: "ইমেল যাচাই করা হয়নি",
    CREDENTIAL_ACCOUNT_NOT_FOUND: "শংসাপত্র অ্যাকাউন্ট পাওয়া যায়নি",

    // Password related errors
    PASSWORD_TOO_SHORT: "পাসওয়ার্ড অত্যন্ত ছোট",
    PASSWORD_TOO_LONG: "পাসওয়ার্ড অত্যন্ত বড়",

    // Social auth errors
    SOCIAL_ACCOUNT_ALREADY_LINKED: "সোশ্যাল অ্যাকাউন্ট ইতিমধ্যে সংযুক্ত",
    PROVIDER_NOT_FOUND: "প্রদানকারী পাওয়া যায়নি",
    ID_TOKEN_NOT_SUPPORTED: "id_token সমর্থিত নয়",
    FAILED_TO_GET_USER_INFO: "ব্যবহারকারীর তথ্য পেতে ব্যর্থ",

    // Account management errors
    EMAIL_CAN_NOT_BE_UPDATED: "ইমেল আপডেট করা যাবে না",
    FAILED_TO_UNLINK_LAST_ACCOUNT:
        "আপনি আপনার শেষ অ্যাকাউন্ট সংযোগ বিচ্ছিন্ন করতে পারবেন না",
    ACCOUNT_NOT_FOUND: "অ্যাকাউন্ট পাওয়া যায়নি",
});

export const LOCALES = {
    "bn-BD": BN_BD,
} as const;
