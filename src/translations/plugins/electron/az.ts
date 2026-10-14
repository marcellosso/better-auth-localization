import type { ElectronErrorCodesType } from "../../../types";

export const AZ_AZ = {
	INVALID_CLIENT_ID: "Yanlış klient ID-si",
	STATE_MISMATCH: "state uyğun gəlmir",
	MISSING_CODE_CHALLENGE: "code challenge yoxdur",
	INVALID_CODE_VERIFIER: "Yanlış code verifier",
	MISSING_STATE: "state tələb olunur",
	MISSING_PKCE: "pkce tələb olunur",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	az: AZ_AZ,
	"az-AZ": AZ_AZ,
} as const;
