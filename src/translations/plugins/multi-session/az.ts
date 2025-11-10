import type { MultiSessionErrorCodesType } from "../../../types";

export const AZ = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Yanlış sessiya tokeni",
} satisfies MultiSessionErrorCodesType;
export const AZ_AZ = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Yanlış sessiya tokeni",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	az: AZ,
	"az-AZ": AZ_AZ,
} as const;
