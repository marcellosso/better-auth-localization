import type { OrganizationErrorCodesType } from "../../../types";

export const SK_SK_INFORMAL = {
  // Organization related errors
  YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
    "Nemáš oprávnenie založiť organizáciu",
  YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
    "Dosiahnutý limit počtu organizácií",
  ORGANIZATION_ALREADY_EXISTS: "Organizácia už existuje",
  ORGANIZATION_NOT_FOUND: "Organizácia sa nenašla",
  USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
    "Používateľ nie je členom organizácie",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
    "Nemáš oprávnenie upravovať organizáciu",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
    "Nemáš oprávnenie zmazať organizáciu",
  NO_ACTIVE_ORGANIZATION: "Žiadna aktívna organizácia",
  USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
    "Používateľ už je členom tejto organizácie",
  MEMBER_NOT_FOUND: "Člen sa nenašiel",
  ROLE_NOT_FOUND: "Rola sa nenašla",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
    "Nemáš oprávnenie vytvoriť nový tím",
  TEAM_ALREADY_EXISTS: "Tím už existuje",
  TEAM_NOT_FOUND: "Tím sa nenašiel",
  YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
    "Nemôžeš opustiť organizáciu ako jediný vlastník",
  YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
    "Nemôžeš opustiť organizáciu bez vlastníka",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
    "Nemáš oprávnenie mazať členov",
  YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
    "Nemáš oprávnenie pozývať používateľov do tejto organizácie",
  USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
    "Používateľ je už pozvaný do tejto organizácie",
  INVITATION_NOT_FOUND: "Pozvánka sa nenašla",
  YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
    "Nie si príjemcom pozvánky",
  EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
    "Vyžadované overenie emailu pred prijatím alebo odmietnutím pozvánky",
  YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
    "Nemáš oprávnenie zrušiť pozvánku",
  INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
    "Používateľ, ktorý odoslal pozvánku už nie je členom organizácie",
  YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
    "Nemáš oprávnenie pozvať používateľa s touto rolou",
  FAILED_TO_RETRIEVE_INVITATION: "Nepodarilo sa načítať pozvánku",
  YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
    "Dosiahnutý limit počtu tímov",
  UNABLE_TO_REMOVE_LAST_TEAM: "Nie je možné zmazať posledný zostávajúci tím",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
    "Nemáš oprávnenie upraviť tohto člena",
  ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
    "Dosiahnutý limit počtu členov v organizácii",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
    "Nemáš oprávnenie vytvárať tímy v organizácii",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
    "Nemáš oprávnenie mazať tímy v organizácii",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
    "Nemáš oprávnenie upraviť tento tím",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
    "Nemáš oprávnenie zmazať tento tím",
  INVITATION_LIMIT_REACHED: "Dosiahnutý limit počtu odoslaných pozvánok",
  TEAM_MEMBER_LIMIT_REACHED: "Dosiahnutý limit počtu členov tímu",
  USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "Používateľ nie je členom tímu",
  YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
    "Nemáš oprávnenie zobraziť členov tohto tímu",
  YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Nie si členom žiadneho aktívneho tímu",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
    "Nemáš oprávnenie pridať nového člena tímu",
  YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
    "Nemáš oprávnenie odstrániť člena z tímu",
  YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
    "Nemáš oprávnenie na prístup do tejto organizácie",
  YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
    "Nie si členom tejto organizácie",
} satisfies OrganizationErrorCodesType;

export const SK_SK_FORMAL = {
  ...SK_SK_INFORMAL,
  // Organization related errors
  YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
    "Nemáte oprávnenie založiť organizáciu",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
    "Nemáte oprávnenie upravovať organizáciu",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
    "Nemáte oprávnenie zmazať organizáciu",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
    "Nemáte oprávnenie vytvoriť nový tím",
  YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
    "Nemôžete opustiť organizáciu ako jediný vlastník",
  YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
    "Nemôžete opustiť organizáciu bez vlastníka",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
    "Nemáte oprávnenie mazať členov",
  YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
    "Nemáte oprávnenie pozývať používateľov do tejto organizácie",
  YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
    "Nie ste príjemcom pozvánky",
  YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
    "Nemáte oprávnenie zrušiť pozvánku",
  YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
    "Nemáte oprávnenie pozývať používateľa s touto rolou",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
    "Nemáte oprávnenie upraviť tohto člena",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
    "Nemáte oprávnenie vytvárať tímy v organizácii",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
    "Nemáte oprávnenie mazať tímy v organizácii",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
    "Nemáte oprávnenie upraviť tento tím",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
    "Nemáte oprávnenie zmazať tento tím",
  YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
    "Nemáte oprávnenie zobraziť členov tohto tímu",
  YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Nie ste členom žiadneho aktívneho tímu",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
    "Nemáte oprávnenie pridať nového člena tímu",
  YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
    "Nemáte oprávnenie odstrániť člena z tímu",
  YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
    "Nemáte oprávnenie na prístup do tejto organizácie",
  YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
    "Nie ste členom tejto organizácie",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
  "sk": SK_SK_INFORMAL,
  "sk-SK-informal": SK_SK_INFORMAL,
  "sk-SK-formal": SK_SK_FORMAL,
} as const;
