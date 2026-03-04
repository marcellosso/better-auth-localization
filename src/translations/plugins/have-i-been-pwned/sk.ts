import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const SK_SK_INFORMAL = {
  PASSWORD_COMPROMISED: "Heslo, ktoré zadáváš bolo v minulosti prelomené útočníkmi. Zvoľ si, prosím, silnějšie heslo",
} satisfies HaveIBeenPwnedErrorCodesType;
export const SK_SK_FORMAL = {
  ...SK_SK_INFORMAL,
  PASSWORD_COMPROMISED: "Heslo, ktoré zadávate bolo v minulosti prelomené útočníkmi. Zvoľte si, prosím, silnějšie heslo",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
  "sk": SK_SK_INFORMAL,
  "sk-SK-informal": SK_SK_INFORMAL,
  "sk-SK-formal": SK_SK_FORMAL,
} as const;
