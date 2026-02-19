import type { AdminErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "Nemůžeš zablokovat sám sebe",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"Nemáš oprávnění měnit uživatelské role",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
		"Nemáš oprávnění vytvářet uživatele",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"Nemáš oprávnění zobrazit seznam uživatelů",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"Nemáš oprávnění zobrazit uživatelské relace",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
		"Nemáš oprávnění blokovat uživatele",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"Nemáš oprávnění k impersonizaci uživatelů",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"Nemáš oprávnění ukončovat uživatelské relace",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"Nemáš oprávnění mazat uživatele",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"Nemáš oprávnění nastavovat uživatelům heslo",
	BANNED_USER: "Byl ti zakázán přístup k této aplikaci",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER:
		"Nemáš oprávnění zobrazit detail uživatele",

	// Bad request when admin user sends empty payload to adminUpdateUser
	NO_DATA_TO_UPDATE: "Nezadal jsi žádná data k uložení",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"Nemáš oprávnění měnit data uživatelů",
	YOU_CANNOT_REMOVE_YOURSELF: "Nemůžeš smazat sám sebe",
} satisfies AdminErrorCodesType;

export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL,
	YOU_CANNOT_BAN_YOURSELF: "Nemůžete zablokovat sám sebe",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"Nemáte oprávnění měnit uživatelské role",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
		"Nemáte oprávnění vytvářet uživatele",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"Nemáte oprávnění zobrazit seznam uživatelů",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"Nemáte oprávnění zobrazit uživatelské relace",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
		"Nemáte oprávnění blokovat uživatele",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"Nemáte oprávnění k impersonizaci uživatelů",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"Nemáte oprávnění ukončovat uživatelské relace",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"Nemáte oprávnění mazat uživatele",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"Nemáte oprávnění nastavovat uživatelům heslo",
	BANNED_USER: "Byl vám zakázán přístup k této aplikaci",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER:
		"Nemáte oprávnění zobrazit detail uživatele",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"Nemáte oprávnění měnit data uživatelů",
	YOU_CANNOT_REMOVE_YOURSELF: "Nemůžete smazat sám sebe",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"cs": CS_CZ_INFORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
