import type { TwoFactorErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	OTP_NOT_ENABLED: "Přihlašování pomocí jednorázových hesel není aktivované",
	OTP_HAS_EXPIRED: "Platnost jednorázového hesla vypršela",
	TOTP_NOT_ENABLED:
		"Přihlašování pomocí jednorázových hesel s časovým omezením není aktivované",
	TWO_FACTOR_NOT_ENABLED: "Dvoustupňové ověření není aktivované",
	BACKUP_CODES_NOT_ENABLED: "Záložní kódy nejsou aktivované",
	INVALID_BACKUP_CODE: "Neplatný záložní kód",
	INVALID_CODE: "Neplatný kód",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Příliš mnoho pokusů o vydání nového kódu",
	INVALID_TWO_FACTOR_COOKIE: "Neplatný soubor cookie pro dvoustupňové ověření",
	OTP_NOT_CONFIGURED: "OTP není k dispozici",
	TOTP_ALREADY_ENABLED: "TOTP je již povoleno",
	TOTP_NOT_CONFIGURED: "TOTP není k dispozici",
	ACCOUNT_TEMPORARILY_LOCKED:
		"Příliš mnoho neúspěšných pokusů o ověření. Tvůj účet je dočasně uzamčen. Zkus to prosím později.",
} satisfies TwoFactorErrorCodesType;
export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL,
	ACCOUNT_TEMPORARILY_LOCKED:
		"Příliš mnoho neúspěšných pokusů o ověření. Váš účet je dočasně uzamčen. Zkuste to prosím později.",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	cs: CS_CZ_INFORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
