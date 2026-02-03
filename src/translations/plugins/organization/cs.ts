import type { OrganizationErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Nemáš oprávnění založit organizaci",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Dosažen limit počtu organizací",
	ORGANIZATION_ALREADY_EXISTS: "Organizace už existuje",
	ORGANIZATION_NOT_FOUND: "Organizace nenalezena",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
		"Uživatel není členem organizace",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Nemáš oprávnění upravovat organizaci",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Nemáš oprávnění smazat organizaci",
	NO_ACTIVE_ORGANIZATION: "Žádná aktivní organizace",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"Uživatel už je členem této organizace",
	MEMBER_NOT_FOUND: "Člen nenalezen",
	ROLE_NOT_FOUND: "Role nenalezena",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Nemáš oprávnění vytvořit nový tým",
	TEAM_ALREADY_EXISTS: "Tým už existuje",
	TEAM_NOT_FOUND: "Tým nenalezen",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Nemůžeš opustit organizaci jako jediný vlastník",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Nemůžeš opustit organizaci bez vlastníka",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"Nemáš oprávnění mazat členy",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Nemáš oprávnění zvát uživatele do této organizace",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"Uživatel je už pozvaný do této organizace",
	INVITATION_NOT_FOUND: "Pozvánka nenalezena",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
		"Nejsi příjemcem pozvánky",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"Vyžadováno ověření emailu před přijetím nebo odmítnutím pozvánky",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Nemáš oprávnění zrušit pozvánku",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"Uživatel, který odeslal pozvánku už není členem organizace",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Nemáš oprávnění zvát uživatele s touto rolí",
	FAILED_TO_RETRIEVE_INVITATION: "Nepodařilo se načíst pozvánku",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Dosažen limit počtu týmů",
	UNABLE_TO_REMOVE_LAST_TEAM: "Není možné smazat poslední zbývající tým",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"Nemáš oprávnění upravit tohoto člena",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
		"Dosažen limit počtu členů v organizaci",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Nemáš oprávnění vytvářet týmy v organizaci",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Nemáš oprávnění mazat týmy v organizaci",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"Nemáš oprávnění upravit tento tým",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"Nemáš oprávnění smazat tento tým",
	INVITATION_LIMIT_REACHED: "Dosažen limit počtu odeslaných pozvánek",
	TEAM_MEMBER_LIMIT_REACHED: "Dosažen limit počtu členů týmu",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "Uživatel není členem týmu",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Nemáš oprávnění zobrazit členy tohoto týmu",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Nejsi členem žádného aktivního týmu",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Nemáš oprávnění přidat nového člena týmu",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Nemáš oprávnění odstranit člena z týmu",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Nemáš oprávnění k přístupu do této organizace",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"Nejsi členem této organizace",
} satisfies OrganizationErrorCodesType;

export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL,
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Nemáte oprávnění založit organizaci",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Nemáte oprávnění upravovat organizaci",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Nemáte oprávnění smazat organizaci",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Nemáte oprávnění vytvořit nový tým",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Nemůžete opustit organizaci jako jediný vlastník",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Nemůžete opustit organizaci bez vlastníka",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"Nemáte oprávnění mazat členy",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Nemáte oprávnění zvát uživatele do této organizace",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
		"Nejste příjemcem pozvánky",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Nemáte oprávnění zrušit pozvánku",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Nemáte oprávnění zvát uživatele s touto rolí",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"Nemáte oprávnění upravit tohoto člena",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Nemáte oprávnění vytvářet týmy v organizaci",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Nemáte oprávnění mazat týmy v organizaci",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"Nemáte oprávnění upravit tento tým",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"Nemáte oprávnění smazat tento tým",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Nemáte oprávnění zobrazit členy tohoto týmu",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Nejste členem žádného aktivního týmu",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Nemáte oprávnění přidat nového člena týmu",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Nemáte oprávnění odstranit člena z týmu",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Nemáte oprávnění k přístupu do této organizace",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"Nemáte členem této organizace",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"cs": CS_CZ_INFORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
