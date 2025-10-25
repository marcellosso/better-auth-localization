import type { AnonymousErrorCodesType } from "../../../types";

export const PT_BR = {
  // Anonymous related errors
  COULD_NOT_CREATE_SESSION: "Não foi possível criar a sessão",
  ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
    "Usuários anônimos não podem entrar novamente como anônimos",
} satisfies AnonymousErrorCodesType;

export const PT_PT = {
  // Anonymous related errors
  COULD_NOT_CREATE_SESSION: "Não foi possível criar a sessão",
  ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
    "Utilizadores anónimos não podem entrar novamente como anónimos",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
  "pt-BR": PT_BR,
  "pt-PT": PT_PT,
} as const;
