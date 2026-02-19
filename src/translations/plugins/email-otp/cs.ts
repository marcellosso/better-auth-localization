import type { EmailOTPErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	TOO_MANY_ATTEMPTS: "Příliš mnoho opakovaných pokusů"
} satisfies EmailOTPErrorCodesType;
export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"cs": CS_CZ_FORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
