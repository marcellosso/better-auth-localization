import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	PASSWORD_COMPROMISED: "Heslo, které zadáváš bylo v minulosti prolomeno útočníky. Zvol si prosím silnější heslo",
} satisfies HaveIBeenPwnedErrorCodesType;
export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL,
	PASSWORD_COMPROMISED: "Heslo, které zadáváte bylo v minulosti prolomeno útočníky. Zvolte si prosím silnější heslo",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"cs": CS_CZ_INFORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
} as const;
