import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const BN_BD = {
    // Device authorization related errors
    INVALID_DEVICE_CODE: "ভুল ডিভাইস কোড",
    EXPIRED_DEVICE_CODE: "ডিভাইস কোডের মেয়াদ শেষ হয়ে গেছে",
    EXPIRED_USER_CODE: "ব্যবহারকারী কোডের মেয়াদ শেষ হয়ে গেছে",
    AUTHORIZATION_PENDING: "অনুমোদন অপেক্ষমাণ",
    ACCESS_DENIED: "প্রবেশাধিকার প্রত্যাখ্যাত",
    INVALID_USER_CODE: "ভুল ব্যবহারকারী কোড",
    DEVICE_CODE_ALREADY_PROCESSED: "ডিভাইস কোড ইতিমধ্যে প্রক্রিয়া করা হয়েছে",
    POLLING_TOO_FREQUENTLY: "অত্যধিক ঘন ঘন পোলিং",
    INVALID_DEVICE_CODE_STATUS: "ভুল ডিভাইস কোড স্ট্যাটাস",
    AUTHENTICATION_REQUIRED: "প্রমাণীকরণ প্রয়োজন",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
    "bn-BD": BN_BD,
} as const;
