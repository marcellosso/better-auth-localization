import type { TwoFactorErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	OTP_NOT_ENABLED: "Přihlašování pomocí jednorázových hesel není aktivované",
	OTP_HAS_EXPIRED: "Platnost jednorázového hesla vypršela",
	TOTP_NOT_ENABLED: "Přihlašování pomocí jednorázových hesel s časovým omezením není aktivované",
	TWO_FACTOR_NOT_ENABLED: "Dvoustupňové ověření není aktivované",
	BACKUP_CODES_NOT_ENABLED: "Záložní kódy nejsou aktivované",
	INVALID_BACKUP_CODE: "Neplatný záložní kód",
	INVALID_CODE: "Neplatný kód",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Příliš mnoho pokusů o vydání nového kódu",
	INVALID_TWO_FACTOR_COOKIE: "Neplatný soubor cookie pro dvoustupňové ověření",
} satisfies TwoFactorErrorCodesType;
export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL,
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"cs": CS_CZ_INFORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
