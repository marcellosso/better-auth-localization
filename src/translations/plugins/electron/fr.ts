import type { ElectronErrorCodesType } from "../../../types";

export const FR_FR = {
	INVALID_CLIENT_ID: "ID client invalide",
	STATE_MISMATCH: "Le state ne correspond pas",
	MISSING_CODE_CHALLENGE: "Code challenge manquant",
	INVALID_CODE_VERIFIER: "Code verifier invalide",
	MISSING_STATE: "Le state est requis",
	MISSING_PKCE: "Le pkce est requis",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
