import type { EmailOTPErrorCodesType } from "../../../types";

export const PT_BR = {
  // Email OTP related errors
  TOO_MANY_ATTEMPTS: "Muitas tentativas",
} satisfies EmailOTPErrorCodesType;

export const PT_PT = {
  // Email OTP related errors
  TOO_MANY_ATTEMPTS: "Muitas tentativas",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
  "pt-BR": PT_BR,
  "pt-PT": PT_PT,
} as const;
