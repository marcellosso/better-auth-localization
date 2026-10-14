import type { MultiSessionErrorCodesType } from "../../../types";

export const SK_SK_INFORMAL = {
  INVALID_SESSION_TOKEN: "Neplatný token relácie",
} satisfies MultiSessionErrorCodesType;
export const SK_SK_FORMAL = {
  ...SK_SK_INFORMAL
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
  "sk": SK_SK_INFORMAL,
  "sk-SK-informal": SK_SK_INFORMAL,
  "sk-SK-formal": SK_SK_FORMAL,
} as const;
