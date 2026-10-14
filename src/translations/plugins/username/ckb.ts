import type { UsernameErrorCodesType } from "../../../types";

export const CKB_IQ = {
	INVALID_USERNAME_OR_PASSWORD: "ناوی بەکارهێنەر یان وشەی نهێنی نادروستە",
	USERNAME_IS_ALREADY_TAKEN:
		"ناوی بەکارهێنەر پێشتر بەکارهاتووە. تکایە ناوێکی تر تاقی بکەرەوە.",
	USERNAME_TOO_SHORT: "ناوی بەکارهێنەر زۆر کورتە",
	USERNAME_TOO_LONG: "ناوی بەکارهێنەر زۆر درێژە",
	INVALID_USERNAME: "ناوی بەکارهێنەر نادروستە",
	INVALID_DISPLAY_USERNAME: "ناوی پیشاندانی بەکارهێنەر نادروستە",
	USERNAME_IS_IMMUTABLE: "ناوی بەکارهێنەر ناتوانرێت نوێ بکرێتەوە",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
