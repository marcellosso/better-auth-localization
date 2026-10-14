import type { OrganizationErrorCodesType } from "../../../types";

export const SV_SE = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Du har inte behörighet att skapa en ny organisation",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Du har nått det maximala antalet organisationer",
	ORGANIZATION_ALREADY_EXISTS: "Organisationen finns redan",
	ORGANIZATION_NOT_FOUND: "Organisationen hittades inte",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
		"Användaren är inte medlem i organisationen",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Du har inte behörighet att uppdatera denna organisation",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Du har inte behörighet att ta bort denna organisation",
	NO_ACTIVE_ORGANIZATION: "Ingen aktiv organisation",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"Användaren är redan medlem i denna organisation",
	MEMBER_NOT_FOUND: "Medlem hittades inte",
	ROLE_NOT_FOUND: "Roll hittades inte",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Du har inte behörighet att skapa ett nytt team",
	TEAM_ALREADY_EXISTS: "Teamet finns redan",
	TEAM_NOT_FOUND: "Teamet hittades inte",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Du kan inte lämna organisationen som den enda ägaren",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Du kan inte lämna organisationen utan en ägare",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"Du har inte behörighet att ta bort denna medlem",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Du har inte behörighet att bjuda in användare till denna organisation",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"Användaren har redan blivit inbjuden till denna organisation",
	INVITATION_NOT_FOUND: "Inbjudan hittades inte",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
		"Du är inte mottagaren av inbjudan",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"E-postverifiering krävs innan du accepterar eller avvisar inbjudan",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Du har inte behörighet att avbryta denna inbjudan",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"Inbjudaren är inte längre medlem i organisationen",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Du har inte behörighet att bjuda in en användare med denna roll",
	FAILED_TO_RETRIEVE_INVITATION: "Kunde inte hämta inbjudan",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Du har nått det maximala antalet team",
	UNABLE_TO_REMOVE_LAST_TEAM: "Kan inte ta bort det sista teamet",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"Du har inte behörighet att uppdatera denna medlem",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED: "Organisationsmedlemskapsgräns nådd",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Du har inte behörighet att skapa team i denna organisation",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Du har inte behörighet att ta bort team i denna organisation",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"Du har inte behörighet att uppdatera detta team",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"Du har inte behörighet att ta bort detta team",
	INVITATION_LIMIT_REACHED: "Inbjudningsgräns nådd",
	TEAM_MEMBER_LIMIT_REACHED: "Teammedlemsgräns nådd",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "Användaren är inte medlem i teamet",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Du har inte behörighet att komma åt medlemmarna i detta team",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Du har inget aktivt team",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Du har inte behörighet att skapa en ny teammedlem",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Du har inte behörighet att ta bort en teammedlem",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Du har inte behörighet att komma åt denna organisation som ägare",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"Du är inte medlem i denna organisation",
	ORGANIZATION_SLUG_ALREADY_TAKEN: "Organisationens slug är redan upptagen",
	EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION:
		"E-postverifiering krävs för att visa eller lista inbjudningar för sessionens e-postadress",
	MISSING_AC_INSTANCE:
		"Dynamisk åtkomstkontroll kräver en fördefinierad ac-instans i serverns auth-plugin. Läs serverloggarna för mer information",
	YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE:
		"Du måste vara i en organisation för att skapa en roll",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE:
		"Du har inte behörighet att skapa en roll",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE:
		"Du har inte behörighet att uppdatera en roll",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE:
		"Du har inte behörighet att ta bort en roll",
	YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE: "Du har inte behörighet att läsa en roll",
	YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE: "Du har inte behörighet att lista roller",
	YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE: "Du har inte behörighet att hämta en roll",
	TOO_MANY_ROLES: "Den här organisationen har för många roller",
	INVALID_RESOURCE: "Den angivna behörigheten innehåller en ogiltig resurs",
	ROLE_NAME_IS_ALREADY_TAKEN: "Det rollnamnet är redan upptaget",
	CANNOT_DELETE_A_PRE_DEFINED_ROLE:
		"Det går inte att ta bort en fördefinierad roll",
	ROLE_IS_ASSIGNED_TO_MEMBERS:
		"Det går inte att ta bort en roll som är tilldelad medlemmar. Tilldela medlemmarna en annan roll först",
	INVALID_TEAM_ID: "Team-ID innehåller ett reserverat tecken",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
