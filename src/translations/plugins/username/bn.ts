import type { UsernameErrorCodesType } from "../../../types";

export const BN_BD = {
    // Username related errors
    INVALID_USERNAME_OR_PASSWORD: "ভুল ব্যবহারকারীর নাম বা পাসওয়ার্ড",
    USERNAME_IS_ALREADY_TAKEN:
        "ব্যবহারকারীর নাম ইতিমধ্যে ব্যবহৃত হচ্ছে। অনুগ্রহ করে অন্যটি চেষ্টা করুন।",
    USERNAME_TOO_SHORT: "ব্যবহারকারীর নাম অত্যন্ত ছোট",
    USERNAME_TOO_LONG: "ব্যবহারকারীর নাম অত্যন্ত বড়",
    INVALID_USERNAME: "ভুল ব্যবহারকারীর নাম",
    INVALID_DISPLAY_USERNAME: "ভুল প্রদর্শন নাম",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
    "bn-BD": BN_BD,
} as const;
