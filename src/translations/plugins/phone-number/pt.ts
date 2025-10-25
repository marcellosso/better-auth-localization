import type { PhoneNumberErrorCodesType } from "../../../types";

export const PT_BR = {
  // Phone number related errors
  INVALID_PHONE_NUMBER: "Número de telefone inválido",
  PHONE_NUMBER_EXIST: "Número de telefone já existe",
  INVALID_PHONE_NUMBER_OR_PASSWORD: "Número de telefone ou senha inválidos",
  UNEXPECTED_ERROR: "Erro inesperado",
  OTP_NOT_FOUND: "Senha descartável não encontrada",
  OTP_EXPIRED: "Senha descartável expirada",
  INVALID_OTP: "Senha descartável inválida",
  PHONE_NUMBER_NOT_VERIFIED: "Número de telefone não verificado",
} satisfies PhoneNumberErrorCodesType;

export const PT_PT = {
  // Phone number related errors
  INVALID_PHONE_NUMBER: "Número de telefone inválido",
  PHONE_NUMBER_EXIST: "Número de telefone já existe",
  INVALID_PHONE_NUMBER_OR_PASSWORD:
    "Número de telefone ou palavra-passe inválidos",
  UNEXPECTED_ERROR: "Erro inesperado",
  OTP_NOT_FOUND: "Palavra-passe descartável não encontrada",
  OTP_EXPIRED: "Palavra-passe descartável expirada",
  INVALID_OTP: "Palavra-passe descartável inválida",
  PHONE_NUMBER_NOT_VERIFIED: "Número de telefone não verificado",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
  "pt-BR": PT_BR,
  "pt-PT": PT_PT,
} as const;
