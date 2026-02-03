import type { MultiSessionErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	INVALID_SESSION_TOKEN: "Neplatný token relace"
} satisfies MultiSessionErrorCodesType;
export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"cs": CS_CZ_INFORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
