import type { ElectronErrorCodesType } from "../../../types";

export const RU_RU = {
	INVALID_CLIENT_ID: "Недействительный ID клиента",
	STATE_MISMATCH: "Параметр state не совпадает",
	MISSING_CODE_CHALLENGE: "Отсутствует code challenge",
	INVALID_CODE_VERIFIER: "Недействительный code verifier",
	MISSING_STATE: "Требуется параметр state",
	MISSING_PKCE: "Требуется параметр pkce",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
