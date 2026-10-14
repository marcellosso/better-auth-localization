import type { ApiKeyErrorCodesType } from "../../../types";

export const DA_DK = {
	// Api key related errors
	INVALID_METADATA_TYPE: "metadata skal være et objekt eller undefined",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"Genopfyldningsmængde er påkrævet når genopfyldningsinterval er angivet",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"Genopfyldningsinterval er påkrævet når genopfyldningsmængde er angivet",
	USER_BANNED: "Bruger bandlyst",
	UNAUTHORIZED_SESSION: "Uautoriseret eller ugyldig session",
	KEY_NOT_FOUND: "API-nøgle ikke fundet",
	KEY_DISABLED: "API-nøgle deaktiveret",
	KEY_EXPIRED: "API-nøgle udløbet",
	USAGE_EXCEEDED: "API-nøgle har overskredet brugsgrænsen",
	KEY_NOT_RECOVERABLE: "API-nøgle er ikke gendannelig",
	EXPIRES_IN_IS_TOO_SMALL:
		"Udløbstid er mindre end den foruddefinerede minimumsværdi.",
	EXPIRES_IN_IS_TOO_LARGE:
		"Udløbstid er større end den foruddefinerede maksimumsværdi.",
	INVALID_REMAINING: "Resterende værdi er for stor eller for lille.",
	INVALID_PREFIX_LENGTH: "Præfiksstørrelse er for stor eller for lille.",
	INVALID_NAME_LENGTH: "Navnestørrelse er for stor eller for lille.",
	METADATA_DISABLED: "Metadata er deaktiveret.",
	RATE_LIMIT_EXCEEDED: "Anmodningsgrænse overskredet.",
	NO_VALUES_TO_UPDATE: "Ingen værdier at opdatere.",
	KEY_DISABLED_EXPIRATION:
		"Brugerdefinerede nøgleudløbsværdier er deaktiveret.",
	INVALID_API_KEY: "Ugyldig API-nøgle.",
	INVALID_USER_ID_FROM_API_KEY: "Bruger-ID fra API-nøgle er ugyldig.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"API-nøglehentning returnerede ugyldig type. Forventet: streng.",
	SERVER_ONLY_PROPERTY:
		"Egenskaben du forsøger at sætte kan kun sættes fra serverautentificeringsinstansen.",
	FAILED_TO_UPDATE_API_KEY: "Kunne ikke opdatere API-nøgle",
	NAME_REQUIRED: "API-nøglenavn er påkrævet.",
	INVALID_REFERENCE_ID_FROM_API_KEY:
		"Reference-ID'et fra API-nøglen er ugyldigt.",
	ORGANIZATION_ID_REQUIRED:
		"Organisations-ID er påkrævet for API-nøgler, der ejes af en organisation.",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"Du er ikke medlem af organisationen, der ejer denne API-nøgle.",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"Du har ikke tilladelse til at udføre denne handling på organisationens API-nøgler.",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"Ingen standardkonfiguration for API-nøgler blev fundet.",
	ORGANIZATION_PLUGIN_REQUIRED:
		"Organisationsplugin'et er påkrævet for API-nøgler, der ejes af en organisation. Installer og konfigurer organisationsplugin'et.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
