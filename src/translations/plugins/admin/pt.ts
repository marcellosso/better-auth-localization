import type { AdminErrorCodesType } from "../../../types";

export const PT_BR = {
  // Admin related errors
  YOU_CANNOT_BAN_YOURSELF: "Você não pode se banir",
  YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
    "Você não tem permissão para alterar o cargo de usuários",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
    "Você não tem permissão para criar usuários",
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
    "Você não tem permissão para listar usuários",
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
    "Você não tem permissão para listar sessões de usuários",
  YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
    "Você não tem permissão para banir usuários",
  YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
    "Você não tem permissão para se passar por outros usuários",
  YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
    "Você não tem permissão para revogar sessões de usuários",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
    "Você não tem permissão para excluir usuários",
  YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
    "Você não tem permissão para definir a senha de usuários",
  BANNED_USER: "Você foi banido deste aplicativo",
  YOU_ARE_NOT_ALLOWED_TO_GET_USER: "Você não tem permissão para obter usuário",
  NO_DATA_TO_UPDATE: "Nenhum dado para atualizar",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
    "Você não tem permissão para atualizar usuários",
  YOU_CANNOT_REMOVE_YOURSELF: "Você não pode se remover",
} satisfies AdminErrorCodesType;

export const PT_PT = {
  // Admin related errors
  YOU_CANNOT_BAN_YOURSELF: "Não pode banir-se",
  YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
    "Não tem permissão para alterar o cargo de utilizadores",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
    "Não tem permissão para criar utilizadores",
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
    "Não tem permissão para listar utilizadores",
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
    "Não tem permissão para listar sessões de utilizadores",
  YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "Não tem permissão para banir utilizadores",
  YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
    "Não tem permissão para se passar por outros utilizadores",
  YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
    "Não tem permissão para revogar sessões de utilizadores",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
    "Não tem permissão para eliminar utilizadores",
  YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
    "Não tem permissão para definir a palavra-passe de utilizadores",
  BANNED_USER: "Foi banido desta aplicação",
  YOU_ARE_NOT_ALLOWED_TO_GET_USER: "Não tem permissão para obter utilizador",
  NO_DATA_TO_UPDATE: "Nenhum dado para actualizar",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
    "Não tem permissão para actualizar utilizadores",
  YOU_CANNOT_REMOVE_YOURSELF: "Não pode remover-se",
} satisfies AdminErrorCodesType;

export const LOCALES = {
  "pt-BR": PT_BR,
  "pt-PT": PT_PT,
} as const;
