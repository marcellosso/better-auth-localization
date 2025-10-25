import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const PT_BR = {
  // Device authorization related errors
  INVALID_DEVICE_CODE: "Código de dispositivo inválido",
  EXPIRED_DEVICE_CODE: "Código de dispositivo expirado",
  EXPIRED_USER_CODE: "Código de usuário expirado",
  AUTHORIZATION_PENDING: "Autorização pendente",
  ACCESS_DENIED: "Acesso negado",
  INVALID_USER_CODE: "Código de usuário inválido",
  DEVICE_CODE_ALREADY_PROCESSED: "Código de dispositivo já processado",
  POLLING_TOO_FREQUENTLY: "Consultas muito frequentes",
  INVALID_DEVICE_CODE_STATUS: "Status do código de dispositivo inválido",
  AUTHENTICATION_REQUIRED: "Autenticação obrigatória",
} satisfies DeviceAuthorizationErrorCodesType;

export const PT_PT = {
  // Device authorization related errors
  INVALID_DEVICE_CODE: "Código de dispositivo inválido",
  EXPIRED_DEVICE_CODE: "Código de dispositivo expirado",
  EXPIRED_USER_CODE: "Código de utilizador expirado",
  AUTHORIZATION_PENDING: "Autorização pendente",
  ACCESS_DENIED: "Acesso negado",
  INVALID_USER_CODE: "Código de utilizador inválido",
  DEVICE_CODE_ALREADY_PROCESSED: "Código de dispositivo já processado",
  POLLING_TOO_FREQUENTLY: "Consultas muito frequentes",
  INVALID_DEVICE_CODE_STATUS: "Estado do código de dispositivo inválido",
  AUTHENTICATION_REQUIRED: "Autenticação obrigatória",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
  "pt-BR": PT_BR,
  "pt-PT": PT_PT,
} as const;
