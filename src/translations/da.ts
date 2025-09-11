import { ErrorCodesType } from "../types";

export const DA_DK = {
	// User related errors
	USER_NOT_FOUND: "Brugeren blev ikke fundet",
	FAILED_TO_CREATE_USER: "Fejl under oprettelse af bruger",
	FAILED_TO_UPDATE_USER: "Fejl under opdatering af bruger",
	USER_ALREADY_EXISTS: "Brugeren eksisterer allerede",
	USER_EMAIL_NOT_FOUND: "Brugerens e-mail blev ikke fundet",
	USER_ALREADY_HAS_PASSWORD: "Brugeren har allerede en adgangskode",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Fejl under oprettelse af session",
	FAILED_TO_GET_SESSION: "Kunne ikke hente session",
	SESSION_EXPIRED: "Sessionen er udløbet",

	// Authentication errors
	INVALID_PASSWORD: "Ugyldig adgangskode",
	INVALID_EMAIL: "Ugyldig e-mail",
	INVALID_EMAIL_OR_PASSWORD: "Ugyldig e-mail eller adgangskode",
	INVALID_TOKEN: "Ugyldigt token",
	EMAIL_NOT_VERIFIED: "E-mailen er ikke bekræftet",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Loginoplysningerne blev ikke fundet",

	// Password related errors
	PASSWORD_TOO_SHORT: "Adgangskoden er for kort",
	PASSWORD_TOO_LONG: "Adgangskoden er for lang",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Den sociale konto er allerede forbundet",
	PROVIDER_NOT_FOUND: "Udbyderen blev ikke fundet",
	ID_TOKEN_NOT_SUPPORTED: "ID-token understøttes ikke",
	FAILED_TO_GET_USER_INFO: "Kunne ikke hente brugeroplysninger",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "E-mailen kan ikke opdateres",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Fejl ved afkobling af sidste konto",
	ACCOUNT_NOT_FOUND: "Kontoen blev ikke fundet",
} satisfies ErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
