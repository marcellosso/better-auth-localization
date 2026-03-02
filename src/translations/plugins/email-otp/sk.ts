import type { EmailOTPErrorCodesType } from "../../../types";

export const SK_SK_INFORMAL = {
  TOO_MANY_ATTEMPTS: "Príliš veľa opakovaných pokusov"
} satisfies EmailOTPErrorCodesType;
export const SK_SK_FORMAL = {
  ...SK_SK_INFORMAL
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
  "sk": SK_SK_FORMAL,
  "sk-SK-informal": SK_SK_INFORMAL,
  "sk-SK-formal": SK_SK_FORMAL,
} as const;
