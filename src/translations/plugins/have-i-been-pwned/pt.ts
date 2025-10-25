import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const PT_BR = {
  // Have I Been Pwned related errors
  PASSWORD_COMPROMISED:
    "A senha que você digitou foi comprometida. Por favor, escolha uma senha diferente.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const PT_PT = {
  // Have I Been Pwned related errors
  PASSWORD_COMPROMISED:
    "A palavra-passe que digitou foi comprometida. Por favor, escolha uma palavra-passe diferente.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
  "pt-BR": PT_BR,
  "pt-PT": PT_PT,
} as const;
