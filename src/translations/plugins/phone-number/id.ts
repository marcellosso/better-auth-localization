import type { PhoneNumberErrorCodesType } from "../../../types";

export const ID_ID = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Nomor telepon tidak valid",
	PHONE_NUMBER_EXIST: "Nomor telepon sudah ada",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Nomor telepon atau kata sandi tidak valid",
	UNEXPECTED_ERROR: "Kesalahan tidak terduga",
	OTP_NOT_FOUND: "Kode verifikasi tidak ditemukan",
	OTP_EXPIRED: "Kode verifikasi telah kedaluwarsa",
	INVALID_OTP: "Kode verifikasi tidak valid",
	PHONE_NUMBER_NOT_VERIFIED: "Nomor telepon belum diverifikasi",
	PHONE_NUMBER_NOT_EXIST: "Nomor telepon tidak terdaftar",
	PHONE_NUMBER_CANNOT_BE_UPDATED: "Nomor telepon tidak dapat diperbarui",
	SEND_OTP_NOT_IMPLEMENTED: "sendOTP belum diimplementasikan",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
