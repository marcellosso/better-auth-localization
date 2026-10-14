import type { AdminErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "Je kunt jezelf niet verbannen",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"Je hebt geen toestemming om gebruikersrollen te wijzigen",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
		"Je hebt geen toestemming om gebruikers aan te maken",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"Je hebt geen toestemming om gebruikers te vermelden",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"Je hebt geen toestemming om gebruikerssessies te vermelden",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
		"Je hebt geen toestemming om gebruikers te verbannen",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"Je hebt geen toestemming om andere gebruikers na te doen",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"Je hebt geen toestemming om gebruikerssessies in te trekken",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"Je hebt geen toestemming om gebruikers te verwijderen",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"Je hebt geen toestemming om gebruikerswachtwoorden in te stellen",
	BANNED_USER: "Je bent verbannen van deze applicatie",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER:
		"Je hebt geen toestemming om gebruiker op te halen",
	NO_DATA_TO_UPDATE: "Geen gegevens om bij te werken",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"Je hebt geen toestemming om gebruikers bij te werken",
	YOU_CANNOT_REMOVE_YOURSELF: "Je kunt jezelf niet verwijderen",
	YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE:
		"Je mag geen niet-bestaande rolwaarde instellen",
	YOU_CANNOT_IMPERSONATE_ADMINS: "Je kunt je niet voordoen als beheerder",
	INVALID_ROLE_TYPE: "Ongeldig roltype",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL:
		"Je mag het e-mailadres van gebruikers niet wijzigen",
	PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER:
		"Het wachtwoord kan niet worden bijgewerkt via update-user. Gebruik in plaats daarvan het set-user-password-eindpunt",
} satisfies AdminErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
	YOU_CANNOT_BAN_YOURSELF: "U kunt uzelf niet verbannen",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"U heeft geen toestemming om gebruikersrollen te wijzigen",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
		"U heeft geen toestemming om gebruikers aan te maken",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"U heeft geen toestemming om gebruikers te vermelden",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"U heeft geen toestemming om gebruikerssessies te vermelden",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
		"U heeft geen toestemming om gebruikers te verbannen",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"U heeft geen toestemming om andere gebruikers na te doen",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"U heeft geen toestemming om gebruikerssessies in te trekken",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"U heeft geen toestemming om gebruikers te verwijderen",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"U heeft geen toestemming om gebruikerswachtwoorden in te stellen",
	BANNED_USER: "U bent verbannen van deze applicatie",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER:
		"U heeft geen toestemming om gebruiker op te halen",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"U heeft geen toestemming om gebruikers bij te werken",
	YOU_CANNOT_REMOVE_YOURSELF: "U kunt uzelf niet verwijderen",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
