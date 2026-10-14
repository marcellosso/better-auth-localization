import type { ApiKeyErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	// Api key related errors
	INVALID_METADATA_TYPE: "metadata muss ein Objekt oder undefined sein",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"Nachfüllmenge ist erforderlich, wenn Nachfüllintervall angegeben wird",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"Nachfüllintervall ist erforderlich, wenn Nachfüllmenge angegeben wird",
	USER_BANNED: "Benutzer gesperrt",
	UNAUTHORIZED_SESSION: "Nicht autorisierte oder ungültige Sitzung",
	KEY_NOT_FOUND: "API-Schlüssel nicht gefunden",
	KEY_DISABLED: "API-Schlüssel deaktiviert",
	KEY_EXPIRED: "API-Schlüssel abgelaufen",
	USAGE_EXCEEDED: "API-Schlüssel hat Nutzungslimit überschritten",
	KEY_NOT_RECOVERABLE: "API-Schlüssel ist nicht wiederherstellbar",
	EXPIRES_IN_IS_TOO_SMALL:
		"Ablaufzeit ist kleiner als der vordefinierte Mindestwert.",
	EXPIRES_IN_IS_TOO_LARGE:
		"Ablaufzeit ist größer als der vordefinierte Maximalwert.",
	INVALID_REMAINING: "Verbleibender Wert ist zu groß oder zu klein.",
	INVALID_PREFIX_LENGTH: "Präfixgröße ist zu groß oder zu klein.",
	INVALID_NAME_LENGTH: "Namensgröße ist zu groß oder zu klein.",
	METADATA_DISABLED: "Metadaten sind deaktiviert.",
	RATE_LIMIT_EXCEEDED: "Anfragenlimit überschritten.",
	NO_VALUES_TO_UPDATE: "Keine Werte zum Aktualisieren.",
	KEY_DISABLED_EXPIRATION:
		"Benutzerdefinierte Schlüsselablaufwerte sind deaktiviert.",
	INVALID_API_KEY: "Ungültiger API-Schlüssel.",
	INVALID_USER_ID_FROM_API_KEY: "Benutzer-ID vom API-Schlüssel ist ungültig.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"API-Schlüssel-Abruf gab ungültigen Typ zurück. Erwartet: Zeichenkette.",
	SERVER_ONLY_PROPERTY:
		"Die Eigenschaft, die Sie zu setzen versuchen, kann nur von der Server-Authentifizierungsinstanz gesetzt werden.",
	FAILED_TO_UPDATE_API_KEY: "API-Schlüssel konnte nicht aktualisiert werden",
	NAME_REQUIRED: "API-Schlüsselname ist erforderlich.",
	INVALID_REFERENCE_ID_FROM_API_KEY:
		"Die Referenz-ID des API-Schlüssels ist ungültig.",
	ORGANIZATION_ID_REQUIRED:
		"Für API-Schlüssel einer Organisation ist eine Organisations-ID erforderlich.",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"Sie sind kein Mitglied der Organisation, der dieser API-Schlüssel gehört.",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"Sie haben keine Berechtigung, diese Aktion für API-Schlüssel der Organisation auszuführen.",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"Keine Standardkonfiguration für API-Schlüssel gefunden.",
	ORGANIZATION_PLUGIN_REQUIRED:
		"Für API-Schlüssel einer Organisation ist das Organisations-Plugin erforderlich. Bitte installieren und konfigurieren Sie das Organisations-Plugin.",
} satisfies ApiKeyErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
