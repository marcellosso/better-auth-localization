import type { MultiSessionErrorCodesType } from "../../../types";

export const CKB_IQ = {
	INVALID_SESSION_TOKEN: "تۆکنی سێشن نادروستە",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
