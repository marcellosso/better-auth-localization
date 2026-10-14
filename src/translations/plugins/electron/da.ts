import type { ElectronErrorCodesType } from "../../../types";

export const DA_DK = {
	INVALID_CLIENT_ID: "Ugyldigt klient-ID",
	STATE_MISMATCH: "state stemmer ikke overens",
	MISSING_CODE_CHALLENGE: "code challenge mangler",
	INVALID_CODE_VERIFIER: "Ugyldig code verifier",
	MISSING_STATE: "state er påkrævet",
	MISSING_PKCE: "pkce er påkrævet",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
