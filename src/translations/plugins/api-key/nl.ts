import type { ApiKeyErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	// Api key related errors
	INVALID_METADATA_TYPE: "metadata moet een object of undefined zijn",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"bijvulhoeveelheid is vereist wanneer bijvulinterval wordt opgegeven",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"bijvulinterval is vereist wanneer bijvulhoeveelheid wordt opgegeven",
	USER_BANNED: "gebruiker verbannen",
	UNAUTHORIZED_SESSION: "niet-geautoriseerde of ongeldige sessie",
	KEY_NOT_FOUND: "API-sleutel niet gevonden",
	KEY_DISABLED: "API-sleutel uitgeschakeld",
	KEY_EXPIRED: "API-sleutel verlopen",
	USAGE_EXCEEDED: "API-sleutel heeft gebruikslimiet overschreden",
	KEY_NOT_RECOVERABLE: "API-sleutel is niet herstelbaar",
	EXPIRES_IN_IS_TOO_SMALL:
		"verlooptijd is kleiner dan de vooraf gedefinieerde minimumwaarde.",
	EXPIRES_IN_IS_TOO_LARGE:
		"verlooptijd is groter dan de vooraf gedefinieerde maximumwaarde.",
	INVALID_REMAINING: "resterende waarde is te groot of te klein.",
	INVALID_PREFIX_LENGTH: "voorvoegselgrootte is te groot of te klein.",
	INVALID_NAME_LENGTH: "naamgrootte is te groot of te klein.",
	METADATA_DISABLED: "metadata is uitgeschakeld.",
	RATE_LIMIT_EXCEEDED: "verzoeklimiet overschreden.",
	NO_VALUES_TO_UPDATE: "geen waarden om bij te werken.",
	KEY_DISABLED_EXPIRATION:
		"aangepaste sleutelvervalwaarden zijn uitgeschakeld.",
	INVALID_API_KEY: "ongeldige API-sleutel.",
	INVALID_USER_ID_FROM_API_KEY: "gebruiker-ID van API-sleutel is ongeldig.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"API-sleutelophaler retourneerde ongeldig type. Verwachte: string.",
	SERVER_ONLY_PROPERTY:
		"de eigenschap die je probeert in te stellen kan alleen worden ingesteld vanuit de serverauthenticatie-instantie.",
	FAILED_TO_UPDATE_API_KEY: "API-sleutel bijwerken mislukt",
	NAME_REQUIRED: "API-sleutelnaam is vereist.",
	INVALID_REFERENCE_ID_FROM_API_KEY:
		"De referentie-ID van de API-sleutel is ongeldig.",
	ORGANIZATION_ID_REQUIRED:
		"Een organisatie-ID is vereist voor API-sleutels die eigendom zijn van een organisatie.",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"Je bent geen lid van de organisatie die eigenaar is van deze API-sleutel.",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"Je hebt geen toestemming om deze actie uit te voeren op API-sleutels van de organisatie.",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"Geen standaardconfiguratie voor API-sleutels gevonden.",
	ORGANIZATION_PLUGIN_REQUIRED:
		"De organisatieplugin is vereist voor API-sleutels die eigendom zijn van een organisatie. Installeer en configureer de organisatieplugin.",
} satisfies ApiKeyErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
