import type { MultiSessionErrorCodesType } from "../../../types";

export const BN_BD = {
    // Multi session related errors
    INVALID_SESSION_TOKEN: "ভুল সেশন টোকেন",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
    "bn-BD": BN_BD,
} as const;
