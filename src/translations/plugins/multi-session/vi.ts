import type { MultiSessionErrorCodesType } from "../../../types";

export const VI_VN = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Session token không hợp lệ",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
