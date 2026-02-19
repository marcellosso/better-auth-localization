import type { PasskeyErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	CHALLENGE_NOT_FOUND: "Výzva nenalezena",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Nemáš oprávnění registrovat tuto Passkey",
	FAILED_TO_VERIFY_REGISTRATION: "Ověření registrace selhalo",
	PASSKEY_NOT_FOUND: "Passkey nenalezena",
	AUTHENTICATION_FAILED: "Přihlášení selhalo",
	UNABLE_TO_CREATE_SESSION: "Nepodařilo se vytvořil uživatelskou relaci",
	FAILED_TO_UPDATE_PASSKEY: "Aktualizaci Passkey selhalo",
} satisfies PasskeyErrorCodesType;
export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL,
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Nemáte oprávnění registrovat tuto Passkey",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"cs": CS_CZ_INFORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
