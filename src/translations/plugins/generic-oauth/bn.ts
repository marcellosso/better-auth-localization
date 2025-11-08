import type { GenericOAuthErrorCodesType } from "../../../types";

export const BN_BD = {
    // Generic OAuth related errors
    INVALID_OAUTH_CONFIGURATION: "ভুল OAuth কনফিগারেশন",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
    "bn-BD": BN_BD,
} as const;
