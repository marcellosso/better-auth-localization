import type { UsernameErrorCodesType } from "../../../types";

export const SK_SK_INFORMAL = {
  // Username related errors
  INVALID_USERNAME_OR_PASSWORD: "Nesprávné používateľské meno alebo heslo",
  USERNAME_IS_ALREADY_TAKEN:
    "Používateľské meno je už obsadené. Použi, prosím, iné",
  USERNAME_TOO_SHORT: "Používateľské meno je príliš krátke",
  USERNAME_TOO_LONG: "Používateľské meno je príliš dlhé",
  INVALID_USERNAME: "Používateľské meno je v zlom formáte",
  INVALID_DISPLAY_USERNAME: "Zobrazované meno používateľa je v zlom formáte",
} satisfies UsernameErrorCodesType;
export const SK_SK_FORMAL = {
  ...SK_SK_INFORMAL,
  USERNAME_IS_ALREADY_TAKEN:
    "Používateľské meno je už obsadené. Použite, prosím, iné",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
  "sk": SK_SK_INFORMAL,
  "sk-SK-informal": SK_SK_INFORMAL,
  "sk-SK-formal": SK_SK_FORMAL,
} as const;
