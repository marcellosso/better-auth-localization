import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const VI_VN = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"Mật khẩu bạn đã nhập đã bị rò rỉ. Vui lòng chọn mật khẩu khác.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"vi-VN": VI_VN,
} as const;
