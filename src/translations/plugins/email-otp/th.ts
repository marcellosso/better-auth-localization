import type { EmailOTPErrorCodesType } from "../../../types";

export const TH = {} satisfies EmailOTPErrorCodesType;
export const TH_TH = {} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"th": TH,
	"th-TH": TH_TH,
} as const;