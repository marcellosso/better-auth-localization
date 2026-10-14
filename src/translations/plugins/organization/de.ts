import type { OrganizationErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Sie haben keine Berechtigung, eine neue Organisation zu erstellen",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Sie haben die maximale Anzahl von Organisationen erreicht",
	ORGANIZATION_ALREADY_EXISTS: "Die Organisation existiert bereits",
	ORGANIZATION_NOT_FOUND: "Organisation nicht gefunden",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
		"Der Benutzer ist kein Mitglied der Organisation",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Sie haben keine Berechtigung, diese Organisation zu aktualisieren",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Sie haben keine Berechtigung, diese Organisation zu löschen",
	NO_ACTIVE_ORGANIZATION: "Keine aktive Organisation",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"Der Benutzer ist bereits Mitglied dieser Organisation",
	MEMBER_NOT_FOUND: "Mitglied nicht gefunden",
	ROLE_NOT_FOUND: "Rolle nicht gefunden",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Sie haben keine Berechtigung, ein neues Team zu erstellen",
	TEAM_ALREADY_EXISTS: "Das Team existiert bereits",
	TEAM_NOT_FOUND: "Team nicht gefunden",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Sie können die Organisation nicht verlassen, da Sie der einzige Besitzer sind",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Sie können die Organisation nicht ohne einen Besitzer verlassen",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"Sie haben keine Berechtigung, dieses Mitglied zu löschen",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Sie haben keine Berechtigung, Benutzer zu dieser Organisation einzuladen",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"Der Benutzer wurde bereits zu dieser Organisation eingeladen",
	INVITATION_NOT_FOUND: "Einladung nicht gefunden",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
		"Sie sind nicht der Empfänger der Einladung",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"E-Mail-Verifizierung erforderlich vor Annahme oder Ablehnung der Einladung",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Sie haben keine Berechtigung, diese Einladung zu stornieren",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"Der Einladende ist kein Mitglied der Organisation mehr",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Sie haben keine Berechtigung, einen Benutzer mit dieser Rolle einzuladen",
	FAILED_TO_RETRIEVE_INVITATION: "Einladung konnte nicht abgerufen werden",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Sie haben die maximale Anzahl von Teams erreicht",
	UNABLE_TO_REMOVE_LAST_TEAM: "Das letzte Team kann nicht entfernt werden",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"Sie haben keine Berechtigung, dieses Mitglied zu aktualisieren",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
		"Organisationsmitgliedschaftslimit erreicht",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Sie haben keine Berechtigung, Teams in dieser Organisation zu erstellen",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Sie haben keine Berechtigung, Teams in dieser Organisation zu löschen",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"Sie haben keine Berechtigung, dieses Team zu aktualisieren",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"Sie haben keine Berechtigung, dieses Team zu löschen",
	INVITATION_LIMIT_REACHED: "Einladungslimit erreicht",
	TEAM_MEMBER_LIMIT_REACHED: "Teammitgliedschaftslimit erreicht",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "Der Benutzer ist kein Mitglied des Teams",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Sie haben keine Berechtigung, auf die Mitglieder dieses Teams zuzugreifen",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Sie haben kein aktives Team",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Sie haben keine Berechtigung, ein neues Teammitglied zu erstellen",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Sie haben keine Berechtigung, ein Teammitglied zu entfernen",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Sie haben keine Berechtigung, auf diese Organisation als Besitzer zuzugreifen",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"Sie sind kein Mitglied dieser Organisation",
	ORGANIZATION_SLUG_ALREADY_TAKEN:
		"Der Organisations-Slug ist bereits vergeben",
	EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION:
		"E-Mail-Verifizierung ist erforderlich, um Einladungen für die Sitzungs-E-Mail-Adresse anzuzeigen oder aufzulisten",
	MISSING_AC_INSTANCE:
		"Dynamische Zugriffskontrolle erfordert eine vordefinierte ac-Instanz im Server-Auth-Plugin. Weitere Informationen finden Sie in den Server-Logs",
	YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE:
		"Sie müssen in einer Organisation sein, um eine Rolle zu erstellen",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE:
		"Sie haben keine Berechtigung, eine Rolle zu erstellen",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE:
		"Sie haben keine Berechtigung, eine Rolle zu aktualisieren",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE:
		"Sie haben keine Berechtigung, eine Rolle zu löschen",
	YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE:
		"Sie haben keine Berechtigung, eine Rolle zu lesen",
	YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE:
		"Sie haben keine Berechtigung, Rollen aufzulisten",
	YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE:
		"Sie haben keine Berechtigung, eine Rolle abzurufen",
	TOO_MANY_ROLES: "Diese Organisation hat zu viele Rollen",
	INVALID_RESOURCE:
		"Die angegebene Berechtigung enthält eine ungültige Ressource",
	ROLE_NAME_IS_ALREADY_TAKEN: "Dieser Rollenname ist bereits vergeben",
	CANNOT_DELETE_A_PRE_DEFINED_ROLE:
		"Eine vordefinierte Rolle kann nicht gelöscht werden",
	ROLE_IS_ASSIGNED_TO_MEMBERS:
		"Eine Rolle, die Mitgliedern zugewiesen ist, kann nicht gelöscht werden. Weisen Sie die Mitglieder zuerst einer anderen Rolle zu",
	INVALID_TEAM_ID: "Die Team-ID enthält ein reserviertes Zeichen",
} satisfies OrganizationErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
