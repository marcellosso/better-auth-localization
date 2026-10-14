import type { ApiKeyErrorCodesType } from "../../../types";

export const SV_SE = {
	// Api key related errors
	INVALID_METADATA_TYPE: "metadata måste vara ett objekt eller undefined",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"påfyllningsmängd krävs när påfyllningsintervall tillhandahålls",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"påfyllningsintervall krävs när påfyllningsmängd tillhandahålls",
	USER_BANNED: "användare bannad",
	UNAUTHORIZED_SESSION: "obehörig eller ogiltig session",
	KEY_NOT_FOUND: "API-nyckel inte hittad",
	KEY_DISABLED: "API-nyckel inaktiverad",
	KEY_EXPIRED: "API-nyckel har gått ut",
	USAGE_EXCEEDED: "API-nyckel har överskridit användningsgränsen",
	KEY_NOT_RECOVERABLE: "API-nyckel är inte återställningsbar",
	EXPIRES_IN_IS_TOO_SMALL:
		"utgångstid är mindre än det fördefinierade minimivärdet.",
	EXPIRES_IN_IS_TOO_LARGE:
		"utgångstid är större än det fördefinierade maximivärdet.",
	INVALID_REMAINING: "återstående värde är för stort eller för litet.",
	INVALID_PREFIX_LENGTH: "prefixstorlek är för stor eller för liten.",
	INVALID_NAME_LENGTH: "namnstorlek är för stor eller för liten.",
	METADATA_DISABLED: "metadata är inaktiverad.",
	RATE_LIMIT_EXCEEDED: "begäran gräns överskriden.",
	NO_VALUES_TO_UPDATE: "inga värden att uppdatera.",
	KEY_DISABLED_EXPIRATION: "anpassade nyckelutgångsvärden är inaktiverade.",
	INVALID_API_KEY: "ogiltig API-nyckel.",
	INVALID_USER_ID_FROM_API_KEY: "användar-ID från API-nyckel är ogiltigt.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"API-nyckelhämtare returnerade ogiltig typ. Förväntat: sträng.",
	SERVER_ONLY_PROPERTY:
		"egenskapen du försöker ställa in kan endast ställas in från serverautentiseringsinstansen.",
	FAILED_TO_UPDATE_API_KEY: "misslyckades att uppdatera API-nyckel",
	NAME_REQUIRED: "API-nyckelnamn krävs.",
	INVALID_REFERENCE_ID_FROM_API_KEY:
		"Referens-ID:t från API-nyckeln är ogiltigt.",
	ORGANIZATION_ID_REQUIRED:
		"Organisations-ID krävs för API-nycklar som ägs av en organisation.",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"Du är inte medlem i organisationen som äger denna API-nyckel.",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"Du har inte behörighet att utföra denna åtgärd på organisationens API-nycklar.",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"Ingen standardkonfiguration för API-nycklar hittades.",
	ORGANIZATION_PLUGIN_REQUIRED:
		"Organisationspluginet krävs för API-nycklar som ägs av en organisation. Installera och konfigurera organisationspluginet.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
