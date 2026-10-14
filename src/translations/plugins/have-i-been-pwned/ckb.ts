import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const CKB_IQ = {
	PASSWORD_COMPROMISED:
		"ئەو وشەی نهێنییەی نووسیوتە دزراوە یان لەدەستچووە. تکایە وشەیەکی نهێنی جیاواز هەڵبژێرە.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
