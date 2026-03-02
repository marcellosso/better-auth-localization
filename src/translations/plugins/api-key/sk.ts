import type {ApiKeyErrorCodesType} from "../../../types";

export const SK_SK_INFORMAL = {
	// Api key related errors
	INVALID_METADATA_TYPE: "Metadáta musia byť objekt alebo nedefinované",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"Limit po obnovení a interval obnovenia musia byť nastavené",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"Interval obnovenia a limit po obnovení musia byť nastavené",
	USER_BANNED: "Používateľ zablokovaný",
	UNAUTHORIZED_SESSION: "Neautorizovaná relácia",
	KEY_NOT_FOUND: "Kľúč sa nenašiel",
	KEY_DISABLED: "Kľúč je deaktivovaný",
	KEY_EXPIRED: "Platnosť kľúča vypršala",
	USAGE_EXCEEDED: "Limit kľúča prekročený",
	KEY_NOT_RECOVERABLE: "Kľúč sa nedá obnoviť",
	EXPIRES_IN_IS_TOO_SMALL:
		"Doba platnosti je kratšia než vopred definovaná minimálna hodnota",
	EXPIRES_IN_IS_TOO_LARGE:
		"Doba platnosti je dlhšia než vopred definovaná maximálna hodnota",
	INVALID_REMAINING: "Zostávajúci počet je príliš vysoký alebo príliš nízky",
	INVALID_PREFIX_LENGTH: "Dĺžka prefixu je príliš veľká alebo príliš malá",
	INVALID_NAME_LENGTH: "Dĺžka názvu je príliš veľká alebo príliš malá",
	METADATA_DISABLED: "Metadáta sú zakázané",
	RATE_LIMIT_EXCEEDED: "Limit prekročený",
	NO_VALUES_TO_UPDATE: "Žiadne hodnoty na uloženie",
	KEY_DISABLED_EXPIRATION:
		"Nastavenie platnosti vlastných kľúčov je zakázané",
	INVALID_API_KEY: "Neplatný kľúč",
	INVALID_USER_ID_FROM_API_KEY: "ID používateľa z kľúča je neplatné",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"API Key Getter vrátil neplatný kľúč. Očakávaný typ: reťazec",
	SERVER_ONLY_PROPERTY:
		"Atribút, ktorý sa pokúšaš nastaviť môže byť zmenený iba z inštancie autentifikačného servera",
	FAILED_TO_UPDATE_API_KEY: "Nepodarilo sa aktualizovať kľúč",
	NAME_REQUIRED: "Názov kľúča je povinný",
} satisfies ApiKeyErrorCodesType;

export const SK_SK_FORMAL = {
	...SK_SK_INFORMAL,
	SERVER_ONLY_PROPERTY:
		"Atribút, ktorý sa pokúšate nastaviť môže byť zmenený iba z inštancie autentifikačného servera",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"sk": SK_SK_INFORMAL,
	"sk-SK-informal": SK_SK_INFORMAL,
	"sk-SK-formal": SK_SK_FORMAL,
} as const;
