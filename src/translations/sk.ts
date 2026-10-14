import { createTranslationObject } from "../utils/create-translation-object";

export const SK_SK_INFORMAL = createTranslationObject("sk-SK-informal", {
  // User related errors
  USER_NOT_FOUND: "Používateľ nenájdený",
  FAILED_TO_CREATE_USER: "Nepodarilo sa vytvoriť používateľa",
  FAILED_TO_UPDATE_USER: "Nepodarilo sa aktualizovať používateľa",
  USER_ALREADY_EXISTS: "Používateľ už existuje",

  // To save anyone trouble in the future, this error is used during signInSocial and linkSocialAccount and is returned when the social provider does not return the user email in userInfo.
  USER_EMAIL_NOT_FOUND: "Email používateľa sa nenašiel",

  USER_ALREADY_HAS_PASSWORD: "Používateľ už má nastavené heslo",
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
    "Používateľ s týmto emailom už existuje. Použi, prosím, iný email",

  // Session related errors
  FAILED_TO_CREATE_SESSION: "Nebolo možné vytvoriť používateľskú reláciu",
  FAILED_TO_GET_SESSION: "Používateľská relácia nie je dostupná",
  SESSION_EXPIRED:
    "Používateľská relácia vypršala. Prihlás sa, prosím, znova",

  // Authentication errors
  INVALID_PASSWORD: "Nesprávne heslo",
  INVALID_EMAIL: "Email v zlom formáte",
  INVALID_EMAIL_OR_PASSWORD: "Nesprávny email alebo heslo",
  INVALID_TOKEN: "Neplatný token",
  EMAIL_NOT_VERIFIED: "Email nie je overený",

  // This error is used on changePassword action when the user has no credential account (either uses passwordless auth like magic links or social providers).
  CREDENTIAL_ACCOUNT_NOT_FOUND: "Nemáš nastavené žiadne heslo",

  // Password related errors
  PASSWORD_TOO_SHORT: "Príliš krátke heslo",
  PASSWORD_TOO_LONG: "Príliš dlhé heslo",

  // Social auth errors
  SOCIAL_ACCOUNT_ALREADY_LINKED: "Tento účet už je spárovaný",
  PROVIDER_NOT_FOUND: "Nepodporovaný poskytovateľ identity",
  ID_TOKEN_NOT_SUPPORTED: "Nepodporovaný id_token",

  // This error is used during signInSocial and linkSocialAccount and is returned when the provider does not return userInfo.
  FAILED_TO_GET_USER_INFO:
    "Došlo k chybe pri čítaní informácií o používateľovi",

  // Account management errors
  EMAIL_CAN_NOT_BE_UPDATED: "Email nie je možné zmeniť",
  FAILED_TO_UNLINK_LAST_ACCOUNT: "Účet sa nepodarilo odpojiť",
  ACCOUNT_NOT_FOUND: "Účet nenájdený",
});

export const SK_SK_FORMAL = createTranslationObject("sk-SK-formal", {
  ...SK_SK_INFORMAL,
  // This error is used on changePassword action when the user has no credential account (either uses passwordless auth like magic links or social providers).
  CREDENTIAL_ACCOUNT_NOT_FOUND: "Nemáte nastavené žiadne heslo",

  SESSION_EXPIRED:
    "Používateľská relácia vypršala. Prihláste sa, prosím, znova",
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
    "Používateľ s týmto emailom už existuje. Použite, prosím, iný email",
});

export const LOCALES = {
  "sk-SK": SK_SK_INFORMAL,
  "sk-SK-formal": SK_SK_FORMAL,
  "sk-SK-informal": SK_SK_INFORMAL,
} as const;
