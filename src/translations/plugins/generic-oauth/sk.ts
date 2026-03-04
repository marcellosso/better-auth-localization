import type { GenericOAuthErrorCodesType } from "../../../types";

export const SK_SK_INFORMAL = {
  INVALID_OAUTH_CONFIGURATION: "Neplatná konfigurácia OAuth",
} satisfies GenericOAuthErrorCodesType;
export const SK_SK_FORMAL = {
  ...SK_SK_INFORMAL
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
  "sk": SK_SK_INFORMAL,
  "sk-SK-informal": SK_SK_INFORMAL,
  "sk-SK-formal": SK_SK_FORMAL,
} as const;
