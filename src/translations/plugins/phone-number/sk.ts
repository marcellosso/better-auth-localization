import type { PhoneNumberErrorCodesType } from "../../../types";

export const SK_SK_INFORMAL = {
  // Phone number related errors
  INVALID_PHONE_NUMBER: "Neplatné telefónne číslo",
  PHONE_NUMBER_EXIST: "Telefónne číslo už existuje",
  INVALID_PHONE_NUMBER_OR_PASSWORD: "Nesprávne telefónne číslo alebo heslo",
  UNEXPECTED_ERROR: "Neočakávaná chyba",
  OTP_NOT_FOUND: "Jednorázový kód nenájdený",
  OTP_EXPIRED: "Platnosť jednorázového kódu vypršala",
  INVALID_OTP: "Nesprávny jednorázový kód",
  PHONE_NUMBER_NOT_VERIFIED: "Telefónne číslo nie je overené",
} satisfies PhoneNumberErrorCodesType;
export const SK_SK_FORMAL = {
  ...SK_SK_INFORMAL,
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
  "sk": SK_SK_INFORMAL,
  "sk-SK-informal": SK_SK_INFORMAL,
  "sk-SK-formal": SK_SK_FORMAL,
} as const;
