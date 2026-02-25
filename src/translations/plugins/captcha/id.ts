import type { CaptchaErrorCodesType } from "../../../types";

export const ID_ID = {
	VERIFICATION_FAILED: "Verifikasi CAPTCHA gagal",
	MISSING_RESPONSE: "Respons CAPTCHA tidak ada",
	UNKNOWN_ERROR: "Kesalahan tidak diketahui",
} satisfies CaptchaErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
