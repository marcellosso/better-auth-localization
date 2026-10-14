import type { ElectronErrorCodesType } from "../../../types";

export const FA_IR = {
	INVALID_CLIENT_ID: "شناسه کلاینت نامعتبر",
	STATE_MISMATCH: "عدم تطابق state",
	MISSING_CODE_CHALLENGE: "code challenge وجود ندارد",
	INVALID_CODE_VERIFIER: "code verifier نامعتبر",
	MISSING_STATE: "state الزامی است",
	MISSING_PKCE: "PKCE الزامی است",
} satisfies ElectronErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
