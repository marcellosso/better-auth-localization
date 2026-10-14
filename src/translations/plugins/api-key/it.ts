import type { ApiKeyErrorCodesType } from "../../../types";

export const IT_IT = {
	// Api key related errors
	INVALID_METADATA_TYPE: "metadata deve essere un oggetto o undefined",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"la quantità di ricarica è richiesta quando viene fornito l'intervallo di ricarica",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"l'intervallo di ricarica è richiesto quando viene fornita la quantità di ricarica",
	USER_BANNED: "utente bannato",
	UNAUTHORIZED_SESSION: "sessione non autorizzata o non valida",
	KEY_NOT_FOUND: "chiave API non trovata",
	KEY_DISABLED: "chiave API disabilitata",
	KEY_EXPIRED: "chiave API scaduta",
	USAGE_EXCEEDED: "chiave API ha superato il limite di utilizzo",
	KEY_NOT_RECOVERABLE: "chiave API non è recuperabile",
	EXPIRES_IN_IS_TOO_SMALL:
		"il tempo di scadenza è inferiore al valore minimo predefinito.",
	EXPIRES_IN_IS_TOO_LARGE:
		"il tempo di scadenza è superiore al valore massimo predefinito.",
	INVALID_REMAINING: "il valore rimanente è troppo grande o troppo piccolo.",
	INVALID_PREFIX_LENGTH:
		"la dimensione del prefisso è troppo grande o troppo piccola.",
	INVALID_NAME_LENGTH:
		"la dimensione del nome è troppo grande o troppo piccola.",
	METADATA_DISABLED: "i metadati sono disabilitati.",
	RATE_LIMIT_EXCEEDED: "limite di richieste superato.",
	NO_VALUES_TO_UPDATE: "nessun valore da aggiornare.",
	KEY_DISABLED_EXPIRATION:
		"i valori di scadenza chiave personalizzati sono disabilitati.",
	INVALID_API_KEY: "chiave API non valida.",
	INVALID_USER_ID_FROM_API_KEY: "l'ID utente dalla chiave API non è valido.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"il getter della chiave API ha restituito un tipo non valido. Atteso: stringa.",
	SERVER_ONLY_PROPERTY:
		"la proprietà che stai cercando di impostare può essere impostata solo dall'istanza di autenticazione del server.",
	FAILED_TO_UPDATE_API_KEY: "impossibile aggiornare la chiave API",
	NAME_REQUIRED: "il nome della chiave API è richiesto.",
	INVALID_REFERENCE_ID_FROM_API_KEY:
		"L'ID di riferimento della chiave API non è valido.",
	ORGANIZATION_ID_REQUIRED:
		"L'ID dell'organizzazione è obbligatorio per le chiavi API appartenenti a un'organizzazione.",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"Non sei membro dell'organizzazione proprietaria di questa chiave API.",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"Non hai il permesso di eseguire questa azione sulle chiavi API dell'organizzazione.",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"Nessuna configurazione predefinita della chiave API trovata.",
	ORGANIZATION_PLUGIN_REQUIRED:
		"Il plugin Organization è obbligatorio per le chiavi API appartenenti a un'organizzazione. Installa e configura il plugin Organization.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
