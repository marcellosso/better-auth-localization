import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const SK_SK_INFORMAL = {
  INVALID_DEVICE_CODE: "Neplatný kód zariadenia",
  EXPIRED_DEVICE_CODE: "Kód zariadenia vypršal",
  EXPIRED_USER_CODE: "Kód používateľa vypršal",
  AUTHORIZATION_PENDING: "Prebieha autorizácia",
  ACCESS_DENIED: "Prístup zamietnutý",
  INVALID_USER_CODE: "Neplatný kód používateľa",
  DEVICE_CODE_ALREADY_PROCESSED: "Kód zariadenia už bol spracovaný",
  POLLING_TOO_FREQUENTLY: "Príliš veľa požiadaviek",
  INVALID_DEVICE_CODE_STATUS: "Neplatný kód stavu zariadenia",
  AUTHENTICATION_REQUIRED: "Požadované prihlásenie",
} satisfies DeviceAuthorizationErrorCodesType;

export const SK_SK_FORMAL = {
  ...SK_SK_INFORMAL
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
  "sk": SK_SK_INFORMAL,
  "sk-SK-informal": SK_SK_INFORMAL,
  "sk-SK-formal": SK_SK_FORMAL,
} as const;
