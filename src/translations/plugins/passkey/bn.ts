import type { PasskeyErrorCodesType } from "../../../types";

export const BN_BD = {
    // Passkey related errors
    CHALLENGE_NOT_FOUND: "চ্যালেঞ্জ পাওয়া যায়নি",
    YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
        "আপনার এই পাসকি নিবন্ধন করার অনুমতি নেই",
    FAILED_TO_VERIFY_REGISTRATION: "নিবন্ধন যাচাই করতে ব্যর্থ",
    PASSKEY_NOT_FOUND: "পাসকি পাওয়া যায়নি",
    AUTHENTICATION_FAILED: "প্রমাণীকরণ ব্যর্থ",
    UNABLE_TO_CREATE_SESSION: "সেশন তৈরি করতে অক্ষম",
    FAILED_TO_UPDATE_PASSKEY: "পাসকি আপডেট করতে ব্যর্থ",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
    "bn-BD": BN_BD,
} as const;
