import type { ElectronErrorCodesType } from "../../../types";

export const UK_UA = {
	INVALID_CLIENT_ID: "Недійсний ID клієнта",
	STATE_MISMATCH: "Параметр state не збігається",
	MISSING_CODE_CHALLENGE: "Відсутній code challenge",
	INVALID_CODE_VERIFIER: "Недійсний code verifier",
	MISSING_STATE: "Потрібен параметр state",
	MISSING_PKCE: "Потрібен параметр pkce",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
