import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const BN_BD = {
    // Have I Been Pwned related errors
    PASSWORD_COMPROMISED:
        "আপনার প্রদত্ত পাসওয়ার্ডটি আপসকৃত হয়েছে। অনুগ্রহ করে ভিন্ন একটি পাসওয়ার্ড নির্বাচন করুন।",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
    "bn-BD": BN_BD,
} as const;
