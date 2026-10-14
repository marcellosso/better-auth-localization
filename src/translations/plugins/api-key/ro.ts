import type { ApiKeyErrorCodesType } from "../../../types";

export const RO_RO = {
	// Api key related errors
	INVALID_METADATA_TYPE: "metadata trebuie să fie un obiect sau undefined",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"cantitatea de reumplere este necesară când intervalul de reumplere este furnizat",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"intervalul de reumplere este necesar când cantitatea de reumplere este furnizată",
	USER_BANNED: "utilizator interzis",
	UNAUTHORIZED_SESSION: "sesiune neautorizată sau invalidă",
	KEY_NOT_FOUND: "cheia API nu a fost găsită",
	KEY_DISABLED: "cheia API este dezactivată",
	KEY_EXPIRED: "cheia API a expirat",
	USAGE_EXCEEDED: "cheia API a depășit limita de utilizare",
	KEY_NOT_RECOVERABLE: "cheia API nu este recuperabilă",
	EXPIRES_IN_IS_TOO_SMALL:
		"timpul de expirare este mai mic decât valoarea minimă predefinită.",
	EXPIRES_IN_IS_TOO_LARGE:
		"timpul de expirare este mai mare decât valoarea maximă predefinită.",
	INVALID_REMAINING: "valoarea rămasă este prea mare sau prea mică.",
	INVALID_PREFIX_LENGTH: "dimensiunea prefixului este prea mare sau prea mică.",
	INVALID_NAME_LENGTH: "dimensiunea numelui este prea mare sau prea mică.",
	METADATA_DISABLED: "metadatele sunt dezactivate.",
	RATE_LIMIT_EXCEEDED: "limita de cereri depășită.",
	NO_VALUES_TO_UPDATE: "nicio valoare de actualizat.",
	KEY_DISABLED_EXPIRATION:
		"valorile personalizate de expirare a cheii sunt dezactivate.",
	INVALID_API_KEY: "cheie API invalidă.",
	INVALID_USER_ID_FROM_API_KEY:
		"ID-ul utilizatorului din cheia API este invalid.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"getter-ul cheii API a returnat un tip invalid. Așteptat: string.",
	SERVER_ONLY_PROPERTY:
		"proprietatea pe care încerci să o setezi poate fi setată doar din instanța de autentificare a serverului.",
	FAILED_TO_UPDATE_API_KEY: "eșec la actualizarea cheii API",
	NAME_REQUIRED: "numele cheii API este necesar.",
	INVALID_REFERENCE_ID_FROM_API_KEY:
		"ID-ul de referință din cheia API este invalid.",
	ORGANIZATION_ID_REQUIRED:
		"ID-ul organizației este necesar pentru cheile API deținute de o organizație.",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"Nu sunteți membru al organizației care deține această cheie API.",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"Nu aveți permisiunea să efectuați această acțiune asupra cheilor API ale organizației.",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"Nu a fost găsită nicio configurație implicită pentru cheia API.",
	ORGANIZATION_PLUGIN_REQUIRED:
		"Cheile API deținute de o organizație necesită pluginul pentru organizații. Instalați și configurați pluginul pentru organizații.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
