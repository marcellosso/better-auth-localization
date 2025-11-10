import type { ApiKeyErrorCodesType } from "../../../types";

export const BN_BD = {
    // Api key related errors
    INVALID_METADATA_TYPE: "metadata একটি অবজেক্ট বা undefined হতে হবে",
    REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
        "রিফিল ইন্টারভাল প্রদান করা হলে রিফিল পরিমাণ প্রয়োজন",
    REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
        "রিফিল পরিমাণ প্রদান করা হলে রিফিল ইন্টারভাল প্রয়োজন",
    USER_BANNED: "ব্যবহারকারী নিষিদ্ধ",
    UNAUTHORIZED_SESSION: "অননুমোদিত বা অবৈধ সেশন",
    KEY_NOT_FOUND: "API কী পাওয়া যায়নি",
    KEY_DISABLED: "API কী নিষ্ক্রিয়",
    KEY_EXPIRED: "API কীর মেয়াদ শেষ হয়ে গেছে",
    USAGE_EXCEEDED: "API কী ব্যবহারের সীমা অতিক্রম করেছে",
    KEY_NOT_RECOVERABLE: "API কী পুনরুদ্ধারযোগ্য নয়",
    EXPIRES_IN_IS_TOO_SMALL: "মেয়াদ শেষের সময় পূর্বনির্ধারিত ন্যূনতম মানের চেয়ে কম।",
    EXPIRES_IN_IS_TOO_LARGE: "মেয়াদ শেষের সময় পূর্বনির্ধারিত সর্বোচ্চ মানের চেয়ে বড়।",
    INVALID_REMAINING: "অবশিষ্ট মান অত্যন্ত বড় বা অত্যন্ত ছোট।",
    INVALID_PREFIX_LENGTH: "উপসর্গের দৈর্ঘ্য অত্যন্ত বড় বা অত্যন্ত ছোট।",
    INVALID_NAME_LENGTH: "নামের দৈর্ঘ্য অত্যন্ত বড় বা অত্যন্ত ছোট।",
    METADATA_DISABLED: "Metadata নিষ্ক্রিয়।",
    RATE_LIMIT_EXCEEDED: "রেট সীমা অতিক্রম করেছে।",
    NO_VALUES_TO_UPDATE: "আপডেট করার জন্য কোনো মান নেই।",
    KEY_DISABLED_EXPIRATION: "কাস্টম কী মেয়াদ শেষ মান নিষ্ক্রিয়।",
    INVALID_API_KEY: "ভুল API কী।",
    INVALID_USER_ID_FROM_API_KEY: "API কী থেকে ব্যবহারকারী ID অবৈধ।",
    INVALID_API_KEY_GETTER_RETURN_TYPE:
        "API কী getter একটি অবৈধ টাইপ রিটার্ন করেছে। প্রত্যাশিত: string।",
    SERVER_ONLY_PROPERTY:
        "আপনি যে প্রপার্টি সেট করার চেষ্টা করছেন তা শুধুমাত্র সার্ভার অথ ইনস্ট্যান্স থেকে সেট করা যেতে পারে।",
    FAILED_TO_UPDATE_API_KEY: "API কী আপডেট করতে ব্যর্থ",
    NAME_REQUIRED: "API কী নাম প্রয়োজন।",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
    "bn-BD": BN_BD,
} as const;
