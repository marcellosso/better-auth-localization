import type { TwoFactorErrorCodesType } from "../../../types";

export const TH = {} satisfies TwoFactorErrorCodesType;
export const TH_TH = {} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"th": TH,
	"th-TH": TH_TH,
} as const;