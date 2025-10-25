import type { UsernameErrorCodesType } from "../../../types";

export const PT_BR = {
  // Username related errors
  INVALID_USERNAME_OR_PASSWORD: "Nome de usuário ou senha inválidos",
  USERNAME_IS_ALREADY_TAKEN:
    "Nome de usuário já está em uso. Por favor, tente outro.",
  USERNAME_TOO_SHORT: "Nome de usuário muito curto",
  USERNAME_TOO_LONG: "Nome de usuário muito longo",
  INVALID_USERNAME: "Nome de usuário inválido",
  INVALID_DISPLAY_USERNAME: "Nome de exibição inválido",
} satisfies UsernameErrorCodesType;

export const PT_PT = {
  // Username related errors
  INVALID_USERNAME_OR_PASSWORD: "Nome de utilizador ou palavra-passe inválidos",
  USERNAME_IS_ALREADY_TAKEN:
    "Nome de utilizador já está em uso. Por favor, tente outro.",
  USERNAME_TOO_SHORT: "Nome de utilizador muito curto",
  USERNAME_TOO_LONG: "Nome de utilizador muito longo",
  INVALID_USERNAME: "Nome de utilizador inválido",
  INVALID_DISPLAY_USERNAME: "Nome de exibição inválido",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
  "pt-BR": PT_BR,
  "pt-PT": PT_PT,
} as const;
