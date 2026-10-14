import type { PasskeyErrorCodesType } from "../../../types";

export const DA_DK = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Udfordring ikke fundet",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Du har ikke tilladelse til at registrere denne adgangsnøgle",
	FAILED_TO_VERIFY_REGISTRATION: "Kunne ikke verificere registrering",
	PASSKEY_NOT_FOUND: "Adgangsnøgle ikke fundet",
	AUTHENTICATION_FAILED: "Godkendelse mislykkedes",
	UNABLE_TO_CREATE_SESSION: "Kunne ikke oprette session",
	FAILED_TO_UPDATE_PASSKEY: "Kunne ikke opdatere adgangsnøgle",
	PREVIOUSLY_REGISTERED: "Tidligere registreret",
	REGISTRATION_CANCELLED: "Registrering annulleret",
	AUTH_CANCELLED: "Godkendelse annulleret",
	SESSION_REQUIRED: "Registrering af adgangsnøgle kræver en godkendt session",
	RESOLVE_USER_REQUIRED:
		"Registrering af adgangsnøgle kræver enten en godkendt session eller et resolveUser-callback, når requireSession er false",
	RESOLVED_USER_INVALID: "Den fundne bruger er ugyldig",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
