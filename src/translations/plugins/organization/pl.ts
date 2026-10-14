import type { OrganizationErrorCodesType } from "../../../types";

export const PL_PL = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Nie masz uprawnień do utworzenia nowej organizacji",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Osiągnąłeś maksymalną liczbę organizacji",
	ORGANIZATION_ALREADY_EXISTS: "Organizacja już istnieje",
	ORGANIZATION_NOT_FOUND: "Nie znaleziono organizacji",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
		"Użytkownik nie jest członkiem organizacji",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Nie masz uprawnień do aktualizacji tej organizacji",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Nie masz uprawnień do usunięcia tej organizacji",
	NO_ACTIVE_ORGANIZATION: "Brak aktywnej organizacji",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"Użytkownik jest już członkiem tej organizacji",
	MEMBER_NOT_FOUND: "Nie znaleziono członka",
	ROLE_NOT_FOUND: "Nie znaleziono roli",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Nie masz uprawnień do utworzenia nowego zespołu",
	TEAM_ALREADY_EXISTS: "Zespół już istnieje",
	TEAM_NOT_FOUND: "Nie znaleziono zespołu",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Nie możesz opuścić organizacji jako jedyny właściciel",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Nie możesz opuścić organizacji bez właściciela",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"Nie masz uprawnień do usunięcia tego członka",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Nie masz uprawnień do zapraszania użytkowników do tej organizacji",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"Użytkownik został już zaproszony do tej organizacji",
	INVITATION_NOT_FOUND: "Nie znaleziono zaproszenia",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
		"Nie jesteś odbiorcą zaproszenia",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"Wymagana weryfikacja e-mail przed zaakceptowaniem lub odrzuceniem zaproszenia",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Nie masz uprawnień do anulowania tego zaproszenia",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"Zapraszający nie jest już członkiem organizacji",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Nie masz uprawnień do zaproszenia użytkownika z tą rolą",
	FAILED_TO_RETRIEVE_INVITATION: "Nie udało się pobrać zaproszenia",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Osiągnąłeś maksymalną liczbę zespołów",
	UNABLE_TO_REMOVE_LAST_TEAM: "Nie można usunąć ostatniego zespołu",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"Nie masz uprawnień do aktualizacji tego członka",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
		"Osiągnięto limit członkostwa w organizacji",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Nie masz uprawnień do tworzenia zespołów w tej organizacji",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Nie masz uprawnień do usuwania zespołów w tej organizacji",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"Nie masz uprawnień do aktualizacji tego zespołu",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"Nie masz uprawnień do usunięcia tego zespołu",
	INVITATION_LIMIT_REACHED: "Osiągnięto limit zaproszeń",
	TEAM_MEMBER_LIMIT_REACHED: "Osiągnięto limit członków zespołu",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "Użytkownik nie jest członkiem zespołu",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Nie masz uprawnień do dostępu do członków tego zespołu",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Nie masz aktywnego zespołu",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Nie masz uprawnień do utworzenia nowego członka zespołu",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Nie masz uprawnień do usunięcia członka zespołu",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Nie masz uprawnień do dostępu do tej organizacji jako właściciel",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"Nie jesteś członkiem tej organizacji",
	ORGANIZATION_SLUG_ALREADY_TAKEN: "Ten slug organizacji jest już zajęty",
	EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION:
		"Wyświetlanie lub listowanie zaproszeń dla adresu email sesji wymaga weryfikacji adresu email",
	MISSING_AC_INSTANCE:
		"Dynamiczna kontrola dostępu wymaga wstępnie zdefiniowanej instancji ac we wtyczce uwierzytelniania na serwerze. Więcej informacji znajdziesz w logach serwera",
	YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE:
		"Aby utworzyć rolę, musisz należeć do organizacji",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE: "Nie masz uprawnień do tworzenia roli",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE:
		"Nie masz uprawnień do aktualizacji roli",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE: "Nie masz uprawnień do usunięcia roli",
	YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE: "Nie masz uprawnień do wyświetlenia roli",
	YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE:
		"Nie masz uprawnień do wyświetlenia listy ról",
	YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE: "Nie masz uprawnień do pobrania roli",
	TOO_MANY_ROLES: "Ta organizacja ma zbyt wiele ról",
	INVALID_RESOURCE: "Podane uprawnienie zawiera nieprawidłowy zasób",
	ROLE_NAME_IS_ALREADY_TAKEN: "Ta nazwa roli jest już zajęta",
	CANNOT_DELETE_A_PRE_DEFINED_ROLE: "Nie można usunąć roli predefiniowanej",
	ROLE_IS_ASSIGNED_TO_MEMBERS:
		"Nie można usunąć roli przypisanej do członków. Najpierw przypisz członkom inną rolę",
	INVALID_TEAM_ID: "Identyfikator zespołu zawiera zarezerwowany znak",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
