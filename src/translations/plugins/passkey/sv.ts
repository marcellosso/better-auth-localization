import type { PasskeyErrorCodesType } from "../../../types";

export const SV_SE = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Utmaning hittades inte",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Du har inte behörighet att registrera denna åtkomstnyckel",
	FAILED_TO_VERIFY_REGISTRATION: "Registreringsverifiering misslyckades",
	PASSKEY_NOT_FOUND: "Åtkomstnyckel hittades inte",
	AUTHENTICATION_FAILED: "Autentisering misslyckades",
	UNABLE_TO_CREATE_SESSION: "Kunde inte skapa session",
	FAILED_TO_UPDATE_PASSKEY: "Uppdatering av åtkomstnyckel misslyckades",
	PREVIOUSLY_REGISTERED: "Tidigare registrerad",
	REGISTRATION_CANCELLED: "Registreringen avbröts",
	AUTH_CANCELLED: "Autentiseringen avbröts",
	SESSION_REQUIRED:
		"Registrering av åtkomstnyckel kräver en autentiserad session",
	RESOLVE_USER_REQUIRED:
		"Registrering av åtkomstnyckel kräver antingen en autentiserad session eller en resolveUser-callback när requireSession är false",
	RESOLVED_USER_INVALID: "Den matchade användaren är ogiltig",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
