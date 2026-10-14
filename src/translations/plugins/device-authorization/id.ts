import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const ID_ID = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "Kode perangkat tidak valid",
	EXPIRED_DEVICE_CODE: "Kode perangkat telah kedaluwarsa",
	EXPIRED_USER_CODE: "Kode pengguna telah kedaluwarsa",
	AUTHORIZATION_PENDING: "Otorisasi tertunda",
	ACCESS_DENIED: "Akses ditolak",
	INVALID_USER_CODE: "Kode pengguna tidak valid",
	DEVICE_CODE_ALREADY_PROCESSED: "Kode perangkat sudah diproses",
	POLLING_TOO_FREQUENTLY: "Permintaan terlalu sering",
	INVALID_DEVICE_CODE_STATUS: "Status kode perangkat tidak valid",
	AUTHENTICATION_REQUIRED: "Autentikasi diperlukan",
	DEVICE_CODE_NOT_CLAIMED:
		"Kode perangkat belum diklaim oleh sesi yang memverifikasi; panggil `GET /device` dengan `user_code` saat masuk sebelum menyetujui atau menolak",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
