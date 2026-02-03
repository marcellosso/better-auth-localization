import type {AnonymousErrorCodesType, ApiKeyErrorCodesType} from "../../../types";

export const CS_CZ_INFORMAL = {
	// Api key related errors
	INVALID_METADATA_TYPE: "Metadata musí být objekt nebo undefined",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"Limit po obnovení a interval obnovení musí být nastaven",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"Interval onbovení a limit po obnovení musí být nastaven",
	USER_BANNED: "Uživatel zablokován",
	UNAUTHORIZED_SESSION: "Neautorizovaná relace",
	KEY_NOT_FOUND: "Klíč nebyl nalezen",
	KEY_DISABLED: "Klíč je deaktivovaný",
	KEY_EXPIRED: "Platnost klíče vypršela",
	USAGE_EXCEEDED: "Limit klíče překročen",
	KEY_NOT_RECOVERABLE: "Klíč nelze obnovit",
	EXPIRES_IN_IS_TOO_SMALL:
		"Doba platnosti je kratší než předem definovaná minimální hodnota",
	EXPIRES_IN_IS_TOO_LARGE:
		"Doba platnosti je delší než předem definovaná maximální hodnota",
	INVALID_REMAINING: "Zbývající počet je příliš vysoká nebo příliš nízká",
	INVALID_PREFIX_LENGTH: "Délka prefixu je příliš velká nebo příliš malá",
	INVALID_NAME_LENGTH: "Délka názvu je příliš velká nebo příliš malá",
	METADATA_DISABLED: "Metadata jsou zakázána",
	RATE_LIMIT_EXCEEDED: "Limit překročen",
	NO_VALUES_TO_UPDATE: "Žádné hodnoty k uložení",
	KEY_DISABLED_EXPIRATION:
		"Nastavení platnosti vlastních klíčů je zakázané",
	INVALID_API_KEY: "Neplatný klíč",
	INVALID_USER_ID_FROM_API_KEY: "ID uživatele z klíče je neplatné",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"API Key Getter vrátil neplatný klíč. Očekávaný typ: string",
	SERVER_ONLY_PROPERTY:
		"Atribut, který se pokoušíš nastavit může být změněn pouze z instance autentikačního serveru",
	FAILED_TO_UPDATE_API_KEY: "Nepodařilo se aktualizovat klíč",
	NAME_REQUIRED: "Název klíče je povinný",
} satisfies ApiKeyErrorCodesType;

export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL,
	SERVER_ONLY_PROPERTY:
		"Atribut, který se pokoušíte nastavit může být změněn pouze z instance autentikačního serveru",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"cs": CS_CZ_INFORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
