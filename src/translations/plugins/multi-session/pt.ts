import type { MultiSessionErrorCodesType } from "../../../types";

export const PT_BR = {
  // Multi session related errors
  INVALID_SESSION_TOKEN: "Token de sessão inválido",
} satisfies MultiSessionErrorCodesType;

export const PT_PT = {
  // Multi session related errors
  INVALID_SESSION_TOKEN: "Token de sessão inválido",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
  "pt-BR": PT_BR,
  "pt-PT": PT_PT,
} as const;
