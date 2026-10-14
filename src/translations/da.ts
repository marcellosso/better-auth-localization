import { createTranslationObject } from "../utils/create-translation-object";

export const DA_DK = createTranslationObject("da-DK", {
	// User related errors
	USER_NOT_FOUND: "Brugeren blev ikke fundet",
	FAILED_TO_CREATE_USER: "Fejl under oprettelse af bruger",
	FAILED_TO_UPDATE_USER: "Fejl under opdatering af bruger",
	USER_ALREADY_EXISTS: "Brugeren eksisterer allerede",
	USER_EMAIL_NOT_FOUND: "Brugerens e-mail blev ikke fundet",
	USER_ALREADY_HAS_PASSWORD: "Brugeren har allerede en adgangskode",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		"Brugeren eksisterer allerede. Brug en anden e-mail.",

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

	// Additional errors
	INVALID_USER: "Ugyldig bruger",
	TOKEN_EXPIRED: "Token udløbet",
	CHANGE_EMAIL_DISABLED: "Ændring af e-mail er deaktiveret",
	CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
		"Login via navigation mellem websteder er blokeret. Denne anmodning ligner et CSRF-angreb.",
	VERIFICATION_EMAIL_NOT_ENABLED: "Verifikations-e-mail er ikke aktiveret",
	EMAIL_ALREADY_VERIFIED: "E-mailen er allerede verificeret",
	EMAIL_MISMATCH: "E-mailadresserne stemmer ikke overens",
	SESSION_NOT_FRESH: "Sessionen er ikke frisk",
	LINKED_ACCOUNT_ALREADY_EXISTS: "Forbundet konto eksisterer allerede",
	INVALID_ORIGIN: "Ugyldig oprindelse",
	INVALID_CALLBACK_URL: "Ugyldig callbackURL",
	INVALID_REDIRECT_URL: "Ugyldig redirectURL",
	INVALID_ERROR_CALLBACK_URL: "Ugyldig errorCallbackURL",
	INVALID_NEW_USER_CALLBACK_URL: "Ugyldig newUserCallbackURL",
	MISSING_OR_NULL_ORIGIN: "Origin mangler eller er null",
	CALLBACK_URL_REQUIRED: "callbackURL er påkrævet",
	FAILED_TO_CREATE_VERIFICATION: "Kunne ikke oprette verifikation",
	FIELD_NOT_ALLOWED: "Feltet må ikke angives",
	ASYNC_VALIDATION_NOT_SUPPORTED: "Asynkron validering understøttes ikke",
	VALIDATION_ERROR: "Valideringsfejl",
	MISSING_FIELD: "Feltet er påkrævet",
	METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
		"POST-metoden kræver, at deferSessionRefresh er aktiveret i sessionskonfigurationen",
	BODY_MUST_BE_AN_OBJECT: "Body skal være et objekt",
	PASSWORD_ALREADY_SET: "Brugeren har allerede angivet en adgangskode",
});

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
