import type { ErrorCodesType } from "../../../types";

export const TH = {} satisfies ErrorCodesType;
export const TH_TH = {} satisfies ErrorCodesType;

export const LOCALES = {
	"th": TH,
	"th-TH": TH_TH,
} as const;