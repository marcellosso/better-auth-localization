import type { TwoFactorErrorCodesType } from "../../../types";

export const BN_BD = {
    // Two Factor related errors
    OTP_NOT_ENABLED: "OTP সক্রিয় নয়",
    OTP_HAS_EXPIRED: "OTP এর মেয়াদ শেষ হয়ে গেছে",
    TOTP_NOT_ENABLED: "TOTP সক্রিয় নয়",
    TWO_FACTOR_NOT_ENABLED: "দুই-ফ্যাক্টর সক্রিয় নয়",
    BACKUP_CODES_NOT_ENABLED: "ব্যাকআপ কোড সক্রিয় নয়",
    INVALID_BACKUP_CODE: "ভুল ব্যাকআপ কোড",
    INVALID_CODE: "ভুল কোড",
    TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
        "অত্যধিক প্রচেষ্টা। অনুগ্রহ করে একটি নতুন কোড অনুরোধ করুন।",
    INVALID_TWO_FACTOR_COOKIE: "ভুল দুই-ফ্যাক্টর কুকি",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
    "bn-BD": BN_BD,
} as const;
