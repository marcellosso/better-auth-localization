import type { AdminErrorCodesType } from "../../../types";

export const SK_SK_INFORMAL = {
  // Admin related errors
  YOU_CANNOT_BAN_YOURSELF: "Nemôžeš zablokovať vlastný účet",
  YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
    "Nemáš oprávnenie meniť používateľské role",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
    "Nemáš oprávnenie vytvárať používateľov",
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
    "Nemáš oprávnenie zobraziť zoznam používateľov",
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
    "Nemáš oprávnenie zobraziť používateľské relácie",
  YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
    "Nemáš oprávnenie blokovať používateľov",
  YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
    "Nemáš oprávnenie na zosobnenie používateľov",
  YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
    "Nemáš oprávnenie ukončovať používateľské relácie",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
    "Nemáš oprávnenie mazať používateľov",
  YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
    "Nemáš oprávnenie nastavovať používateľom heslo",
  BANNED_USER: "Bol ti zakázaný prístup k tejto aplikácii",
  YOU_ARE_NOT_ALLOWED_TO_GET_USER:
    "Nemáš oprávnenie zobraziť detail používateľa",

  // Bad request when admin user sends empty payload to adminUpdateUser
  NO_DATA_TO_UPDATE: "Nezadal si žiadne údaje na uloženie",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
    "Nemáš oprávnenie meniť údaje používateľov",
  YOU_CANNOT_REMOVE_YOURSELF: "Nemôžeš zmazať vlastný účet",
} satisfies AdminErrorCodesType;


export const SK_SK_FORMAL = {
  ...SK_SK_INFORMAL,
  YOU_CANNOT_BAN_YOURSELF: "Nemôžete zablokovať vlastný účet",
  YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
    "Nemáte oprávnenie meniť používateľské role",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
    "Nemáte oprávnenie vytvárať používateľov",
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
    "Nemáte oprávnenie zobraziť zoznam používateľov",
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
    "Nemáte oprávnenie zobraziť používateľské relácie",
  YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
    "Nemáte oprávnenie blokovať používateľov",
  YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
    "Nemáte oprávnenie na zosobnenie používateľov",
  YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
    "Nemáte oprávnenie ukončovať používateľské relácie",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
    "Nemáte oprávnenie mazať používateľov",
  YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
    "Nemáte oprávnenie nastavovať používateľom heslo",
  BANNED_USER: "Bol vám zakázaný prístup k tejto aplikácii",
  YOU_ARE_NOT_ALLOWED_TO_GET_USER:
    "Nemáte oprávnenie zobraziť detail používateľa",
  NO_DATA_TO_UPDATE: "Nezadali ste žiadne údaje na uloženie",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
    "Nemáte oprávnenie meniť údaje používateľov",
  YOU_CANNOT_REMOVE_YOURSELF: "Nemôžete zmazať vlastný účet",
} satisfies AdminErrorCodesType;

export const LOCALES = {
  "sk": SK_SK_INFORMAL,
  "sk-SK-informal": SK_SK_INFORMAL,
  "sk-SK-formal": SK_SK_FORMAL,
} as const;
