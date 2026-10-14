import type { OrganizationErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Je hebt geen toestemming om een nieuwe organisatie aan te maken",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Je hebt het maximale aantal organisaties bereikt",
	ORGANIZATION_ALREADY_EXISTS: "De organisatie bestaat al",
	ORGANIZATION_NOT_FOUND: "Organisatie niet gevonden",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
		"De gebruiker is geen lid van de organisatie",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Je hebt geen toestemming om deze organisatie bij te werken",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Je hebt geen toestemming om deze organisatie te verwijderen",
	NO_ACTIVE_ORGANIZATION: "Geen actieve organisatie",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"De gebruiker is al lid van deze organisatie",
	MEMBER_NOT_FOUND: "Lid niet gevonden",
	ROLE_NOT_FOUND: "Rol niet gevonden",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Je hebt geen toestemming om een nieuw team aan te maken",
	TEAM_ALREADY_EXISTS: "Het team bestaat al",
	TEAM_NOT_FOUND: "Team niet gevonden",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Je kunt de organisatie niet verlaten als enige eigenaar",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Je kunt de organisatie niet verlaten zonder eigenaar",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"Je hebt geen toestemming om dit lid te verwijderen",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Je hebt geen toestemming om gebruikers uit te nodigen voor deze organisatie",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"De gebruiker is al uitgenodigd voor deze organisatie",
	INVITATION_NOT_FOUND: "Uitnodiging niet gevonden",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
		"Je bent niet de ontvanger van de uitnodiging",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"E-mailverificatie vereist voordat je de uitnodiging accepteert of afwijst",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Je hebt geen toestemming om deze uitnodiging te annuleren",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"De uitnodiger is geen lid meer van de organisatie",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Je hebt geen toestemming om een gebruiker met deze rol uit te nodigen",
	FAILED_TO_RETRIEVE_INVITATION: "Kon uitnodiging niet ophalen",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Je hebt het maximale aantal teams bereikt",
	UNABLE_TO_REMOVE_LAST_TEAM: "Kan laatste team niet verwijderen",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"Je hebt geen toestemming om dit lid bij te werken",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
		"Organisatielidmaatschap limiet bereikt",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Je hebt geen toestemming om teams aan te maken in deze organisatie",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Je hebt geen toestemming om teams te verwijderen in deze organisatie",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"Je hebt geen toestemming om dit team bij te werken",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"Je hebt geen toestemming om dit team te verwijderen",
	INVITATION_LIMIT_REACHED: "Uitnodigingslimiet bereikt",
	TEAM_MEMBER_LIMIT_REACHED: "Teamlidlimiet bereikt",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "De gebruiker is geen lid van het team",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Je hebt geen toestemming om toegang te krijgen tot de leden van dit team",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Je hebt geen actief team",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Je hebt geen toestemming om een nieuw teamlid aan te maken",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Je hebt geen toestemming om een teamlid te verwijderen",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Je hebt geen toestemming om toegang te krijgen tot deze organisatie als eigenaar",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"Je bent geen lid van deze organisatie",
	ORGANIZATION_SLUG_ALREADY_TAKEN: "Organisatie-slug is al in gebruik",
	EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION:
		"E-mailverificatie is vereist om uitnodigingen voor het sessie-e-mailadres te bekijken of weer te geven",
	MISSING_AC_INSTANCE:
		"Dynamische toegangscontrole vereist een vooraf gedefinieerde ac-instantie in de server-authplugin. Raadpleeg de serverlogs voor meer informatie",
	YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE:
		"Je moet in een organisatie zitten om een rol aan te maken",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE:
		"Je hebt geen toestemming om een rol aan te maken",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE:
		"Je hebt geen toestemming om een rol bij te werken",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE:
		"Je hebt geen toestemming om een rol te verwijderen",
	YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE:
		"Je hebt geen toestemming om een rol te lezen",
	YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE:
		"Je hebt geen toestemming om rollen weer te geven",
	YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE:
		"Je hebt geen toestemming om een rol op te halen",
	TOO_MANY_ROLES: "Deze organisatie heeft te veel rollen",
	INVALID_RESOURCE: "De opgegeven machtiging bevat een ongeldige resource",
	ROLE_NAME_IS_ALREADY_TAKEN: "Die rolnaam is al in gebruik",
	CANNOT_DELETE_A_PRE_DEFINED_ROLE:
		"Een vooraf gedefinieerde rol kan niet worden verwijderd",
	ROLE_IS_ASSIGNED_TO_MEMBERS:
		"Een rol die aan leden is toegewezen kan niet worden verwijderd. Wijs de leden eerst aan een andere rol toe",
	INVALID_TEAM_ID: "Team-ID bevat een gereserveerd teken",
} satisfies OrganizationErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
