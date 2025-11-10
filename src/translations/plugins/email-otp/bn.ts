import type { EmailOTPErrorCodesType } from "../../../types";

export const BN_BD = {
    // Email OTP related errors
    TOO_MANY_ATTEMPTS: "অত্যধিক প্রচেষ্টা",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
    "bn-BD": BN_BD,
} as const;
