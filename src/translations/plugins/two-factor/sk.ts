import type { TwoFactorErrorCodesType } from "../../../types";

export const SK_SK_INFORMAL = {
  OTP_NOT_ENABLED: "Prihlásenie pomocou jednorázových hesel nie je aktivované",
  OTP_HAS_EXPIRED: "Platnosť jednorázového hesla vypršala",
  TOTP_NOT_ENABLED: "Prihlásenie pomocou jednorázových hesiel s časovým obmedzením nie je aktivované",
  TWO_FACTOR_NOT_ENABLED: "Dvojstupňové overenie nie je aktivované",
  BACKUP_CODES_NOT_ENABLED: "Záložné kódy nie sú aktivované",
  INVALID_BACKUP_CODE: "Neplatný záložný kód",
  INVALID_CODE: "Neplatný kód",
  TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
    "Príliš veľa pokusov o vydanie nového kódu",
  INVALID_TWO_FACTOR_COOKIE: "Neplatný súbor cookie pre dvojstupňové overenie",
} satisfies TwoFactorErrorCodesType;
export const SK_SK_FORMAL = {
  ...SK_SK_INFORMAL,
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
  "sk": SK_SK_INFORMAL,
  "sk-SK-informal": SK_SK_INFORMAL,
  "sk-SK-formal": SK_SK_FORMAL,
} as const;
