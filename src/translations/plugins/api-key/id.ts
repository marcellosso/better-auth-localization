import type { ApiKeyErrorCodesType } from "../../../types";

export const ID_ID = {
	// Api key related errors
	INVALID_METADATA_TYPE: "metadata harus berupa objek atau undefined",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"jumlah pengisian ulang diperlukan saat interval pengisian ulang disediakan",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"interval pengisian ulang diperlukan saat jumlah pengisian ulang disediakan",
	USER_BANNED: "pengguna dilarang",
	UNAUTHORIZED_SESSION: "sesi tidak sah atau tidak valid",
	KEY_NOT_FOUND: "kunci API tidak ditemukan",
	KEY_DISABLED: "kunci API dinonaktifkan",
	KEY_EXPIRED: "kunci API kedaluwarsa",
	USAGE_EXCEEDED: "kunci API telah melebihi batas penggunaan",
	KEY_NOT_RECOVERABLE: "kunci API tidak dapat dipulihkan",
	EXPIRES_IN_IS_TOO_SMALL:
		"waktu kedaluwarsa kurang dari nilai minimum yang telah ditentukan sebelumnya.",
	EXPIRES_IN_IS_TOO_LARGE:
		"waktu kedaluwarsa lebih besar dari nilai maksimum yang telah ditentukan sebelumnya.",
	INVALID_REMAINING: "nilai tersisa terlalu besar atau terlalu kecil.",
	INVALID_PREFIX_LENGTH: "ukuran awalan terlalu besar atau terlalu kecil.",
	INVALID_NAME_LENGTH: "ukuran nama terlalu besar atau terlalu kecil.",
	METADATA_DISABLED: "metadata dinonaktifkan.",
	RATE_LIMIT_EXCEEDED: "batas permintaan terlampaui.",
	NO_VALUES_TO_UPDATE: "tidak ada nilai untuk diperbarui.",
	KEY_DISABLED_EXPIRATION: "nilai kedaluwarsa kunci khusus dinonaktifkan.",
	INVALID_API_KEY: "kunci API tidak valid.",
	INVALID_USER_ID_FROM_API_KEY: "ID pengguna dari kunci API tidak valid.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"pengambil kunci API mengembalikan tipe yang tidak valid. Diharapkan: string.",
	SERVER_ONLY_PROPERTY:
		"properti yang Anda coba atur hanya dapat diatur dari instance autentikasi server.",
	FAILED_TO_UPDATE_API_KEY: "gagal memperbarui kunci API",
	NAME_REQUIRED: "nama kunci API diperlukan.",
	INVALID_REFERENCE_ID_FROM_API_KEY: "ID referensi dari kunci API tidak valid.",
	ORGANIZATION_ID_REQUIRED:
		"ID organisasi wajib diisi untuk kunci API milik organisasi.",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"Anda bukan anggota organisasi yang memiliki kunci API ini.",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"Anda tidak memiliki izin untuk melakukan tindakan ini pada kunci API organisasi.",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"Konfigurasi kunci API default tidak ditemukan.",
	ORGANIZATION_PLUGIN_REQUIRED:
		"Plugin organisasi diperlukan untuk kunci API milik organisasi. Silakan instal dan konfigurasikan plugin organisasi.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
