import type { PasskeyErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Herausforderung nicht gefunden",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Sie sind nicht berechtigt, diesen Passkey zu registrieren",
	FAILED_TO_VERIFY_REGISTRATION:
		"Registrierung konnte nicht verifiziert werden",
	PASSKEY_NOT_FOUND: "Passkey nicht gefunden",
	AUTHENTICATION_FAILED: "Authentifizierung fehlgeschlagen",
	UNABLE_TO_CREATE_SESSION: "Session konnte nicht erstellt werden",
	FAILED_TO_UPDATE_PASSKEY: "Passkey konnte nicht aktualisiert werden",
	PREVIOUSLY_REGISTERED: "Bereits registriert",
	REGISTRATION_CANCELLED: "Registrierung abgebrochen",
	AUTH_CANCELLED: "Authentifizierung abgebrochen",
	SESSION_REQUIRED:
		"Die Passkey-Registrierung erfordert eine authentifizierte Sitzung",
	RESOLVE_USER_REQUIRED:
		"Die Passkey-Registrierung erfordert entweder eine authentifizierte Sitzung oder einen resolveUser-Callback, wenn requireSession false ist",
	RESOLVED_USER_INVALID: "Der aufgelöste Benutzer ist ungültig",
} satisfies PasskeyErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
