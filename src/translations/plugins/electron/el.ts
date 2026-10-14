import type { ElectronErrorCodesType } from "../../../types";

export const EL_GR = {
	INVALID_CLIENT_ID: "Μη έγκυρο αναγνωριστικό πελάτη",
	STATE_MISMATCH: "Το state δεν ταιριάζει",
	MISSING_CODE_CHALLENGE: "Λείπει το code challenge",
	INVALID_CODE_VERIFIER: "Μη έγκυρο code verifier",
	MISSING_STATE: "Το state είναι υποχρεωτικό",
	MISSING_PKCE: "Το pkce είναι υποχρεωτικό",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
